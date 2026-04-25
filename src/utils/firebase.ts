import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc, query, orderBy } from 'firebase/firestore';
import type { SavedPrescription, Frasco } from '../types';

const firebaseConfig = {
  apiKey: "AIzaSyCm0rD-tfOYgWX6zJWix6sue-rD-TgrJnA",
  authDomain: "prescrimed-32112.firebaseapp.com",
  projectId: "prescrimed-32112",
  storageBucket: "prescrimed-32112.firebasestorage.app",
  messagingSenderId: "481605177238",
  appId: "1:481605177238:web:7d41b7b81addea91e917b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ── Collections ──────────────────────────────────────────────────────────────
const PRESCRIPTIONS_COL = 'prescriptions';
const CUSTOM_FRASCOS_COL = 'customFrascos';

// ── Prescriptions (SavedPrescription) ────────────────────────────────────────
export async function syncPrescriptionsToFirestore(prescriptions: SavedPrescription[]): Promise<void> {
  try {
    const col = collection(db, PRESCRIPTIONS_COL);
    // Get all existing docs to find ones to delete
    const snapshot = await getDocs(col);
    const existingIds = new Set(snapshot.docs.map(d => d.id));
    const currentIds = new Set(prescriptions.map(p => p.id));

    // Delete removed prescriptions
    for (const id of existingIds) {
      if (!currentIds.has(id)) {
        await deleteDoc(doc(db, PRESCRIPTIONS_COL, id));
      }
    }

    // Upsert current prescriptions
    for (const rx of prescriptions) {
      await setDoc(doc(db, PRESCRIPTIONS_COL, rx.id), {
        ...rx,
        _syncedAt: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.warn('[Firebase] Failed to sync prescriptions:', err);
  }
}

export async function loadPrescriptionsFromFirestore(): Promise<SavedPrescription[] | null> {
  try {
    const col = collection(db, PRESCRIPTIONS_COL);
    const snapshot = await getDocs(col);
    if (snapshot.empty) return null;

    const prescriptions: SavedPrescription[] = snapshot.docs.map(d => {
      const data = d.data();
      // Strip _syncedAt before returning
      const { _syncedAt, ...rest } = data;
      return rest as SavedPrescription;
    });

    // Sort by savedAt descending (newest first)
    prescriptions.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());
    return prescriptions;
  } catch (err) {
    console.warn('[Firebase] Failed to load prescriptions:', err);
    return null;
  }
}

// ── Custom Frascos ───────────────────────────────────────────────────────────
export async function syncCustomFrascosToFirestore(frascos: Frasco[]): Promise<void> {
  try {
    // Only sync custom/user-added frascos (not seed data)
    const customFrascos = frascos.filter(f => f.source === 'custom');
    const col = collection(db, CUSTOM_FRASCOS_COL);

    const snapshot = await getDocs(col);
    const existingIds = new Set(snapshot.docs.map(d => d.id));
    const currentIds = new Set(customFrascos.map(f => f.id));

    // Delete removed
    for (const id of existingIds) {
      if (!currentIds.has(id)) {
        await deleteDoc(doc(db, CUSTOM_FRASCOS_COL, id));
      }
    }

    // Upsert
    for (const frasco of customFrascos) {
      await setDoc(doc(db, CUSTOM_FRASCOS_COL, frasco.id), {
        ...frasco,
        _syncedAt: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.warn('[Firebase] Failed to sync custom frascos:', err);
  }
}

export async function loadCustomFrascosFromFirestore(): Promise<Frasco[] | null> {
  try {
    const col = collection(db, CUSTOM_FRASCOS_COL);
    const snapshot = await getDocs(col);
    if (snapshot.empty) return null;

    return snapshot.docs.map(d => {
      const data = d.data();
      const { _syncedAt, ...rest } = data;
      return rest as Frasco;
    });
  } catch (err) {
    console.warn('[Firebase] Failed to load custom frascos:', err);
    return null;
  }
}
