import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { AppState, AppAction, Frasco, FavoriteEntry, Prescription, SavedPrescription, TimeSlot } from './types';
import { HOURS } from './types';
import { saveFrascos, saveDoctor, savePrescription, loadFrascos, loadDoctor, loadPrescription, saveProtocols, loadProtocols, saveFavorites, loadFavorites, saveFrascoPrices, loadFrascoPrices, savePrescriptionHistory, loadPrescriptionHistory } from './utils/storage';
import { syncPrescriptionsToFirestore, loadPrescriptionsFromFirestore, syncCustomFrascosToFirestore, loadCustomFrascosFromFirestore } from './utils/firebase';
import { SEED_FRASCOS, SEED_PROTOCOLS } from './data/seedData';

// Bump this number whenever seed data changes to force refresh
const SEED_VERSION = 10;
const SEED_VERSION_KEY = 'prescri_seed_version';

const DEFAULT_DOCTOR = {
  version: 3,
  name: 'Dr. Wagner Pereira Novaes Jr.',
  crm: 'CRM-RJ 0127554-2',
  cpf: '[removido]',
  specialty: 'Psiquiatria | Nutrologia | Saúde Mental Integrativa e Funcional',
  address: 'Rua Coronel Carvalho n°13',
  city: 'Angra dos Reis – RJ',
  phone: '(24) 9 9989-3059',
  email: '',
  instagram: 'Dr.wagnernovaesjr',
  logo: '/prescri-med/pwa-512x512.png',
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
    favorites: loadFavorites() ?? [],
    frascoPrices: loadFrascoPrices() ?? [],
    savedPrescriptions: loadPrescriptionHistory() ?? [],
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

    // ── Favorites ─────────────────────────────────────────────────────────
    case 'TOGGLE_FAVORITE': {
      const frascoId = action.payload;
      const exists = state.favorites.find(f => f.frascoId === frascoId);
      if (exists) {
        return { ...state, favorites: state.favorites.filter(f => f.frascoId !== frascoId) };
      }
      const maxOrder = state.favorites.reduce((max, f) => Math.max(max, f.sortOrder), 0);
      const entry: FavoriteEntry = { frascoId, addedAt: new Date().toISOString(), sortOrder: maxOrder + 1 };
      return { ...state, favorites: [...state.favorites, entry] };
    }
    case 'REORDER_FAVORITES':
      return { ...state, favorites: action.payload };

    // ── Prices ───────────────────────────────────────────────────────────
    case 'SET_FRASCO_PRICE': {
      const { frascoId, price } = action.payload;
      const existing = state.frascoPrices.find(p => p.frascoId === frascoId);
      if (existing) {
        return { ...state, frascoPrices: state.frascoPrices.map(p => p.frascoId === frascoId ? { ...p, price, isCustom: true } : p) };
      }
      return { ...state, frascoPrices: [...state.frascoPrices, { frascoId, price, isCustom: true }] };
    }
    case 'RESET_FRASCO_PRICE':
      return { ...state, frascoPrices: state.frascoPrices.filter(p => p.frascoId !== action.payload) };

    // ── Prescription History ─────────────────────────────────────────────
    case 'SAVE_PRESCRIPTION': {
      const { prescription } = state;
      const now = new Date().toISOString();
      const frascoCount = prescription.timeline.reduce((n, s) => n + s.entries.length, 0);
      const slotCount = prescription.timeline.filter(s => s.entries.length > 0).length;

      // Check if this prescription was already saved (same patient name + date)
      const existingIdx = state.savedPrescriptions.findIndex(
        sp => sp.patient.name === prescription.patient.name && sp.date === prescription.date && prescription.patient.name
      );

      if (existingIdx >= 0) {
        // Update existing
        const updated: SavedPrescription = {
          ...state.savedPrescriptions[existingIdx],
          patient: { ...prescription.patient },
          timeline: JSON.parse(JSON.stringify(prescription.timeline)),
          updatedAt: now,
          frascoCount,
          slotCount,
        };
        const list = [...state.savedPrescriptions];
        list[existingIdx] = updated;
        return { ...state, savedPrescriptions: list };
      }

      // New save
      const saved: SavedPrescription = {
        id: `rx-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        patient: { ...prescription.patient },
        date: prescription.date,
        timeline: JSON.parse(JSON.stringify(prescription.timeline)),
        savedAt: now,
        updatedAt: now,
        frascoCount,
        slotCount,
      };
      return { ...state, savedPrescriptions: [saved, ...state.savedPrescriptions] };
    }

    case 'LOAD_PRESCRIPTION': {
      const found = state.savedPrescriptions.find(sp => sp.id === action.payload);
      if (!found) return state;
      return {
        ...state,
        prescription: {
          patient: { ...found.patient },
          date: found.date,
          timeline: JSON.parse(JSON.stringify(found.timeline)),
        },
      };
    }

    case 'DELETE_SAVED_PRESCRIPTION':
      return { ...state, savedPrescriptions: state.savedPrescriptions.filter(sp => sp.id !== action.payload) };

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
  const [firebaseLoaded, setFirebaseLoaded] = React.useState(false);

  // ── Load from Firebase on first mount ──────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // Load saved prescriptions from Firestore
        const cloudPrescriptions = await loadPrescriptionsFromFirestore();
        if (cancelled) return;
        if (cloudPrescriptions && cloudPrescriptions.length > 0) {
          // Merge: cloud wins for existing IDs, keep local-only ones
          const localPrescriptions = loadPrescriptionHistory() ?? [];
          const cloudIds = new Set(cloudPrescriptions.map(p => p.id));
          const localOnly = localPrescriptions.filter(p => !cloudIds.has(p.id));
          const merged = [...cloudPrescriptions, ...localOnly];
          merged.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());

          dispatch({ type: 'SET_STATE', payload: { ...buildInitialState(), savedPrescriptions: merged } });
          savePrescriptionHistory(merged);
        }

        // Load custom frascos from Firestore
        const cloudFrascos = await loadCustomFrascosFromFirestore();
        if (cancelled) return;
        if (cloudFrascos && cloudFrascos.length > 0) {
          const currentFrascos = loadFrascos() ?? SEED_FRASCOS;
          const cloudIds = new Set(cloudFrascos.map(f => f.id));
          // Remove old custom frascos, add cloud ones
          const nonCustom = currentFrascos.filter(f => f.source !== 'custom' || !cloudIds.has(f.id));
          const merged = [...nonCustom, ...cloudFrascos];
          saveFrascos(merged);
        }
      } catch (err) {
        console.warn('[Firebase] Initial load failed, using localStorage:', err);
      } finally {
        if (!cancelled) setFirebaseLoaded(true);
      }
    })();
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Persist to localStorage ────────────────────────────────────────────
  useEffect(() => { saveFrascos(state.frascos); }, [state.frascos]);
  useEffect(() => { saveDoctor(state.doctor); }, [state.doctor]);
  useEffect(() => { savePrescription(state.prescription); }, [state.prescription]);
  useEffect(() => { saveProtocols(state.protocols); }, [state.protocols]);
  useEffect(() => { saveFavorites(state.favorites); }, [state.favorites]);
  useEffect(() => { saveFrascoPrices(state.frascoPrices); }, [state.frascoPrices]);
  useEffect(() => { savePrescriptionHistory(state.savedPrescriptions); }, [state.savedPrescriptions]);

  // ── Sync to Firebase (debounced, after initial load) ───────────────────
  useEffect(() => {
    if (!firebaseLoaded) return;
    const timer = setTimeout(() => {
      syncPrescriptionsToFirestore(state.savedPrescriptions);
    }, 2000);
    return () => clearTimeout(timer);
  }, [state.savedPrescriptions, firebaseLoaded]);

  useEffect(() => {
    if (!firebaseLoaded) return;
    const timer = setTimeout(() => {
      syncCustomFrascosToFirestore(state.frascos);
    }, 2000);
    return () => clearTimeout(timer);
  }, [state.frascos, firebaseLoaded]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
