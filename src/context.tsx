import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { AppState, AppAction, Frasco, Prescription, TimeSlot } from './types';
import { HOURS } from './types';
import { saveFrascos, saveDoctor, savePrescription, loadFrascos, loadDoctor, loadPrescription, saveProtocols, loadProtocols } from './utils/storage';
import { SEED_FRASCOS, SEED_PROTOCOLS } from './data/seedData';

// Bump this number whenever seed data changes to force refresh
const SEED_VERSION = 4;
const SEED_VERSION_KEY = 'prescri_seed_version';

const DEFAULT_DOCTOR = {
  version: 2,
  name: 'Dr. Wagner Pereira Novaes Jr.',
  crm: 'CRM-RJ 0127554-2',
  cpf: '028.026.885-88',
  specialty: 'Psiquiatria | Nutrologia | Saúde Mental Integrativa e Funcional',
  address: 'Rua Coronel Carvalho n°13',
  city: 'Angra dos Reis – RJ',
  phone: '(24) 9 9989-3059',
  email: '',
  instagram: 'Dr.wagnernovaesjr',
  logo: '',
};

function buildEmptyTimeline(): TimeSlot[] {
  return HOURS.map(h => ({ hour: h, entries: [] }));
}

function buildInitialState(): AppState {
  const today = new Date().toISOString().slice(0, 10);

  // Check seed version — if outdated or missing, use new seed data
  const storedVersion = parseInt(localStorage.getItem(SEED_VERSION_KEY) ?? '0', 10);
  const needsRefresh = storedVersion < SEED_VERSION;

  if (needsRefresh) {
    localStorage.setItem(SEED_VERSION_KEY, String(SEED_VERSION));
  }

  return {
    frascos: needsRefresh ? SEED_FRASCOS : (loadFrascos() ?? SEED_FRASCOS),
    doctor: (() => { const d = loadDoctor(); return d?.version === DEFAULT_DOCTOR.version ? d : DEFAULT_DOCTOR; })(),
    prescription: loadPrescription() ?? { patient: { name: '', age: '', birthDate: '' }, date: today, timeline: buildEmptyTimeline() },
    protocols: needsRefresh ? SEED_PROTOCOLS : (loadProtocols() ?? SEED_PROTOCOLS),
  };
}

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_FRASCO':
      return { ...state, frascos: [...state.frascos, action.payload] };
    case 'UPDATE_FRASCO':
      return { ...state, frascos: state.frascos.map(f => f.id === action.payload.id ? action.payload : f) };
    case 'DELETE_FRASCO':
      return { ...state, frascos: state.frascos.filter(f => f.id !== action.payload) };
    case 'UPDATE_DOCTOR':
      return { ...state, doctor: action.payload };
    case 'UPDATE_PATIENT':
      return { ...state, prescription: { ...state.prescription, patient: action.payload } };

    case 'ADD_TO_TIMELINE': {
      const { hour, frascoId, instanceId } = action.payload;
      const timeline = state.prescription.timeline.map(slot =>
        slot.hour === hour ? { ...slot, entries: [...slot.entries, { instanceId, frascoId }] } : slot
      );
      return { ...state, prescription: { ...state.prescription, timeline } };
    }

    case 'REMOVE_FROM_TIMELINE': {
      const { hour, instanceId } = action.payload;
      const timeline = state.prescription.timeline.map(slot =>
        slot.hour === hour ? { ...slot, entries: slot.entries.filter(e => e.instanceId !== instanceId) } : slot
      );
      return { ...state, prescription: { ...state.prescription, timeline } };
    }

    case 'NEW_PRESCRIPTION': {
      const today = new Date().toISOString().slice(0, 10);
      return { ...state, prescription: { patient: { name: '', age: '', birthDate: '' }, date: today, timeline: buildEmptyTimeline() } };
    }

    case 'SET_STATE':
      return action.payload;

    // ── Protocols ─────────────────────────────────────────────────────────
    case 'ADD_PROTOCOL':
      return { ...state, protocols: [...state.protocols, action.payload] };
    case 'UPDATE_PROTOCOL':
      return { ...state, protocols: state.protocols.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'DELETE_PROTOCOL':
      return { ...state, protocols: state.protocols.filter(p => p.id !== action.payload) };

    case 'APPLY_PROTOCOL': {
      const protocol = state.protocols.find(p => p.id === action.payload);
      if (!protocol) return state;
      const freshTimeline = buildEmptyTimeline();
      const filledTimeline = freshTimeline.map(slot => {
        const entries = protocol.entries
          .filter(e => e.hour === slot.hour)
          .map(e => ({ instanceId: `inst-${e.frascoId}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`, frascoId: e.frascoId }));
        return entries.length ? { ...slot, entries } : slot;
      });
      return { ...state, prescription: { ...state.prescription, timeline: filledTimeline } };
    }

    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, buildInitialState);

  useEffect(() => { saveFrascos(state.frascos); }, [state.frascos]);
  useEffect(() => { saveDoctor(state.doctor); }, [state.doctor]);
  useEffect(() => { savePrescription(state.prescription); }, [state.prescription]);
  useEffect(() => { saveProtocols(state.protocols); }, [state.protocols]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
