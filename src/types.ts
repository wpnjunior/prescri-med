export type Category =
  | 'sono'
  | 'ansiedade'
  | 'tireoide'
  | 'intestino'
  | 'gordura'
  | 'cerebro'
  | 'hormonal'
  | 'imunidade'
  | 'outro';

export interface Ingredient {
  name: string;
  dose: string;
}

export interface Frasco {
  id: string;
  name: string;
  category: Category;
  ingredients: Ingredient[];
  posology: string;
  quantity: string;
  duration: string;
  instructions: string;
}

export interface TimeSlotEntry {
  instanceId: string;
  frascoId: string;
}

export interface TimeSlot {
  hour: number;
  entries: TimeSlotEntry[];
}

export interface Patient {
  name: string;
  age: string;
  birthDate: string;
}

export interface Doctor {
  version?: number;
  name: string;
  crm: string;
  cpf: string;
  specialty: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  instagram: string;
  logo: string;
}

export interface Prescription {
  patient: Patient;
  date: string;
  timeline: TimeSlot[];
}

// ── Protocols ──────────────────────────────────────────────────────────────
export interface ProtocolEntry {
  frascoId: string;
  hour: number;
}

export interface Protocol {
  id: string;
  name: string;
  description: string;
  color: string;
  entries: ProtocolEntry[];
  createdAt: string;
}

// ── App State ───────────────────────────────────────────────────────────────
export interface AppState {
  frascos: Frasco[];
  doctor: Doctor;
  prescription: Prescription;
  protocols: Protocol[];
}

export type AppAction =
  | { type: 'ADD_FRASCO'; payload: Frasco }
  | { type: 'UPDATE_FRASCO'; payload: Frasco }
  | { type: 'DELETE_FRASCO'; payload: string }
  | { type: 'UPDATE_DOCTOR'; payload: Doctor }
  | { type: 'UPDATE_PATIENT'; payload: Patient }
  | { type: 'ADD_TO_TIMELINE'; payload: { hour: number; frascoId: string; instanceId: string } }
  | { type: 'REMOVE_FROM_TIMELINE'; payload: { hour: number; instanceId: string } }
  | { type: 'NEW_PRESCRIPTION' }
  | { type: 'SET_STATE'; payload: AppState }
  | { type: 'ADD_PROTOCOL'; payload: Protocol }
  | { type: 'DELETE_PROTOCOL'; payload: string }
  | { type: 'UPDATE_PROTOCOL'; payload: Protocol }
  | { type: 'APPLY_PROTOCOL'; payload: string };

export const CATEGORY_COLORS: Record<Category, string> = {
  sono: '#6366F1',
  ansiedade: '#8B5CF6',
  tireoide: '#0EA5E9',
  intestino: '#22C55E',
  gordura: '#F97316',
  cerebro: '#EC4899',
  hormonal: '#F59E0B',
  imunidade: '#14B8A6',
  outro: '#6B7280',
};

export const CATEGORY_LABELS: Record<Category, string> = {
  sono: 'Sono',
  ansiedade: 'Ansiedade',
  tireoide: 'Tireoide',
  intestino: 'Intestino',
  gordura: 'Gordura',
  cerebro: 'Cérebro',
  hormonal: 'Hormonal',
  imunidade: 'Imunidade',
  outro: 'Outro',
};

export const HOURS: number[] = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0];

export const formatHour = (h: number): string =>
  h === 0 ? '00:00' : `${String(h).padStart(2, '0')}:00`;
