import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { AppState, AppAction, Frasco, Prescription, TimeSlot } from './types';
import { HOURS } from './types';
import { saveFrascos, saveDoctor, savePrescription, loadFrascos, loadDoctor, loadPrescription, saveProtocols, loadProtocols } from './utils/storage';

const SAMPLE_FRASCOS: Frasco[] = [
  { id: 'frasco-1', name: 'Frasco Sono Reparador', category: 'sono', ingredients: [{ name: 'Melatonina', dose: '5mg' }, { name: 'GABA', dose: '500mg' }, { name: 'L-Teanina', dose: '200mg' }], posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias', instructions: 'Tomar 30 minutos antes de dormir' },
  { id: 'frasco-2', name: 'Frasco Tireoide', category: 'tireoide', ingredients: [{ name: 'Levotiroxina', dose: '50mcg' }, { name: 'Selênio', dose: '200mcg' }, { name: 'Zinco', dose: '30mg' }], posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias', instructions: 'Tomar em jejum' },
  { id: 'frasco-3', name: 'Frasco Ansiedade', category: 'ansiedade', ingredients: [{ name: 'Passiflora', dose: '300mg' }, { name: 'Valeriana', dose: '150mg' }, { name: 'Magnésio', dose: '200mg' }], posology: '1 cápsula', quantity: '60 cápsulas', duration: '60 dias', instructions: 'Tomar conforme necessário' },
  { id: 'frasco-4', name: 'Frasco Queima Gordura', category: 'gordura', ingredients: [{ name: 'L-Carnitina', dose: '500mg' }, { name: 'Picolinato de Cromo', dose: '200mcg' }, { name: 'CLA', dose: '1000mg' }], posology: '2 cápsulas', quantity: '60 cápsulas', duration: '60 dias', instructions: 'Tomar 30 min antes do treino' },
  { id: 'frasco-5', name: 'Frasco Intestino', category: 'intestino', ingredients: [{ name: 'Lactobacillus acidophilus', dose: '5bi' }, { name: 'Bifidobacterium', dose: '3bi' }, { name: 'Glutamina', dose: '500mg' }], posology: '1 sachê', quantity: '30 sachês', duration: '30 dias', instructions: 'Diluir em água fria, tomar em jejum' },
  { id: 'frasco-6', name: 'Frasco Neuro Performance', category: 'cerebro', ingredients: [{ name: 'Fosfatidilserina', dose: '100mg' }, { name: 'Bacopa', dose: '300mg' }, { name: 'Ômega 3', dose: '1000mg' }], posology: '1 cápsula', quantity: '60 cápsulas', duration: '60 dias', instructions: 'Tomar com refeição' },
];

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
  return {
    frascos: loadFrascos() ?? SAMPLE_FRASCOS,
    doctor: (() => { const d = loadDoctor(); return d?.version === DEFAULT_DOCTOR.version ? d : DEFAULT_DOCTOR; })(),
    prescription: loadPrescription() ?? { patient: { name: '', age: '', birthDate: '' }, date: today, timeline: buildEmptyTimeline() },
    protocols: loadProtocols() ?? [],
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
