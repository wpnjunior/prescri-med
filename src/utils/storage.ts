import type { AppState, Doctor, Frasco, Prescription, Protocol } from '../types';

const FRASCOS_KEY = 'prescribed_frascos';
const DOCTOR_KEY = 'prescribed_doctor';
const PRESCRIPTION_KEY = 'prescribed_prescription';
const PROTOCOLS_KEY = 'prescribed_protocols';

export function saveFrascos(frascos: Frasco[]): void {
  try { localStorage.setItem(FRASCOS_KEY, JSON.stringify(frascos)); } catch (e) { console.error(e); }
}
export function loadFrascos(): Frasco[] | null {
  try { const r = localStorage.getItem(FRASCOS_KEY); return r ? JSON.parse(r) : null; } catch { return null; }
}

export function saveDoctor(doctor: Doctor): void {
  try { localStorage.setItem(DOCTOR_KEY, JSON.stringify(doctor)); } catch (e) { console.error(e); }
}
export function loadDoctor(): Doctor | null {
  try { const r = localStorage.getItem(DOCTOR_KEY); return r ? JSON.parse(r) : null; } catch { return null; }
}

export function savePrescription(prescription: Prescription): void {
  try { localStorage.setItem(PRESCRIPTION_KEY, JSON.stringify(prescription)); } catch (e) { console.error(e); }
}
export function loadPrescription(): Prescription | null {
  try { const r = localStorage.getItem(PRESCRIPTION_KEY); return r ? JSON.parse(r) : null; } catch { return null; }
}

export function saveProtocols(protocols: Protocol[]): void {
  try { localStorage.setItem(PROTOCOLS_KEY, JSON.stringify(protocols)); } catch (e) { console.error(e); }
}
export function loadProtocols(): Protocol[] | null {
  try { const r = localStorage.getItem(PROTOCOLS_KEY); return r ? JSON.parse(r) : null; } catch { return null; }
}

export function saveState(state: AppState): void {
  saveFrascos(state.frascos);
  saveDoctor(state.doctor);
  savePrescription(state.prescription);
  saveProtocols(state.protocols);
}
