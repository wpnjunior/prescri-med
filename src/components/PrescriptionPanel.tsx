import React, { useState } from 'react';
import { Settings, FileDown, RotateCcw, User, Calendar, Clock, ShieldCheck } from 'lucide-react';
import type { Frasco, Patient } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS, formatHour, HOURS } from '../types';
import { useAppContext } from '../context';
import Timeline from './Timeline';
import { exportToPDF } from '../utils/pdf';
import VidaasModal from './VidaasModal';

interface PrescriptionPanelProps {
  onOpenSettings: () => void;
}

export default function PrescriptionPanel({ onOpenSettings }: PrescriptionPanelProps) {
  const { state, dispatch } = useAppContext();
  const [editingPatient, setEditingPatient] = useState(false);
  const [patientForm, setPatientForm] = useState<Patient>(state.prescription.patient);
  const [exporting, setExporting] = useState(false);
  const [vidaasOpen, setVidaasOpen] = useState(false);

  const frascoMap: Record<string, Frasco> = {};
  state.frascos.forEach(f => { frascoMap[f.id] = f; });

  const handlePatientSave = () => {
    dispatch({ type: 'UPDATE_PATIENT', payload: patientForm });
    setEditingPatient(false);
  };

  const handleNewPrescription = () => {
    if (window.confirm('Iniciar nova prescrição? Os dados atuais serão perdidos.')) {
      dispatch({ type: 'NEW_PRESCRIPTION' });
      setPatientForm({ name: '', age: '', birthDate: '' });
    }
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      await exportToPDF(state);
    } finally {
      setExporting(false);
    }
  };

  const { doctor, prescription } = state;
  const displayDate = prescription.date
    ? new Date(prescription.date + 'T12:00:00').toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric',
      })
    : '';

  // Count non-empty slots
  const usedSlots = prescription.timeline.filter(s => s.entries.length > 0).length;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Top action bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <Clock size={13} />
          <span>{usedSlots} horário{usedSlots !== 1 ? 's' : ''} preenchido{usedSlots !== 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleNewPrescription}
            className="flex items-center gap-1.5 text-xs text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RotateCcw size={13} /> Nova Prescrição
          </button>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center gap-1.5 text-xs font-medium bg-blue-700 text-white px-3 py-1.5 rounded-lg hover:bg-blue-800 disabled:opacity-60 transition-colors"
          >
            <FileDown size={13} /> {exporting ? 'Gerando PDF...' : 'Exportar PDF'}
          </button>
          <button
            onClick={() => setVidaasOpen(true)}
            className="flex items-center gap-1.5 text-xs font-medium bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors"
            title="Assinar digitalmente com certificado ICP-Brasil (VIDaaS)"
          >
            <ShieldCheck size={13} /> Assinar VIDaaS
          </button>
          <button
            onClick={onOpenSettings}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            title="Configurações do médico"
          >
            <Settings size={15} />
          </button>
        </div>
      </div>

      {/* Prescription content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Doctor header card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-3 p-4">
          <div className="flex items-start gap-4">
            {/* Logo — click to open settings */}
            <div
              className="flex-shrink-0 cursor-pointer group"
              onClick={onOpenSettings}
              title="Configurações do médico"
            >
              {doctor.logo ? (
                <img
                  src={doctor.logo}
                  alt="Logo"
                  className="h-14 w-auto object-contain rounded ring-2 ring-transparent group-hover:ring-blue-400 transition-all"
                />
              ) : (
                <div
                  className="h-14 w-14 rounded-xl flex items-center justify-center text-white text-xl font-bold ring-2 ring-transparent group-hover:ring-blue-400 transition-all"
                  style={{ backgroundColor: '#1E40AF' }}
                >
                  {doctor.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Doctor info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-bold text-blue-900">{doctor.name}</h1>
              <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5">
                <span className="text-xs text-gray-500">
                  <span className="font-medium text-gray-700">CRM:</span> {doctor.crm}
                </span>
                {doctor.cpf && (
                  <span className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">CPF:</span> {doctor.cpf}
                  </span>
                )}
              </div>
              {doctor.specialty && (
                <div className="mt-0.5">
                  <span className="text-xs text-gray-500">⚕ Pós Graduado: {doctor.specialty}</span>
                </div>
              )}
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
                {doctor.address && (
                  <span className="text-xs text-gray-500">📍 {doctor.address}{doctor.city ? `, ${doctor.city}` : ''}</span>
                )}
                {doctor.phone && <span className="text-xs text-gray-500">📞 {doctor.phone}</span>}
                {doctor.instagram && (
                  <span className="text-xs text-gray-500">📱 @{doctor.instagram.replace(/^@/, '')}</span>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="text-right flex-shrink-0">
              <p className="text-xs text-gray-400">Data</p>
              <p className="text-xs font-medium text-gray-700">{displayDate}</p>
            </div>
          </div>
        </div>

        {/* Patient info bar */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-3 p-3">
          {editingPatient ? (
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex-1 min-w-[160px]">
                <label className="block text-xs text-gray-500 mb-1">Nome do Paciente</label>
                <input
                  type="text"
                  value={patientForm.name}
                  onChange={e => setPatientForm(p => ({ ...p, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nome completo"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Idade</label>
                <input
                  type="text"
                  value={patientForm.age}
                  onChange={e => setPatientForm(p => ({ ...p, age: e.target.value }))}
                  className="w-20 border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 35"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Data de Nascimento</label>
                <input
                  type="date"
                  value={patientForm.birthDate}
                  onChange={e => setPatientForm(p => ({ ...p, birthDate: e.target.value }))}
                  className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePatientSave}
                  className="px-3 py-1.5 text-xs font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Salvar
                </button>
                <button
                  onClick={() => { setEditingPatient(false); setPatientForm(prescription.patient); }}
                  className="px-3 py-1.5 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => { setPatientForm(prescription.patient); setEditingPatient(true); }}
              title="Clique para editar dados do paciente"
            >
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-600 transition-colors">
                <User size={16} />
                <span className="text-xs">Paciente</span>
              </div>
              {prescription.patient.name ? (
                <>
                  <span className="text-sm font-semibold text-gray-800">{prescription.patient.name}</span>
                  {prescription.patient.age && (
                    <span className="text-xs text-gray-500">{prescription.patient.age} anos</span>
                  )}
                  {prescription.patient.birthDate && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(prescription.patient.birthDate + 'T12:00:00').toLocaleDateString('pt-BR')}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-sm text-gray-400 italic group-hover:text-blue-500 transition-colors">
                  Clique para adicionar dados do paciente...
                </span>
              )}
              <span className="ml-auto text-xs text-gray-300 group-hover:text-blue-400 transition-colors">editar</span>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="mb-2">
          <p className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1.5">
            <Clock size={12} /> Horários de uso — arraste frascos da biblioteca para os horários
          </p>
          <Timeline frascoMap={frascoMap} />
        </div>
      </div>

      {/* Hidden printable prescription */}
      <PrintablePrescription state={state} frascoMap={frascoMap} />

      {/* VIDaaS Modal */}
      {vidaasOpen && (
        <VidaasModal
          onClose={() => setVidaasOpen(false)}
          onStartAuth={() => setVidaasOpen(false)}
        />
      )}
    </div>
  );
}

// Printable version for PDF export
function PrintablePrescription({
  state,
  frascoMap,
}: {
  state: ReturnType<typeof useAppContext>['state'];
  frascoMap: Record<string, Frasco>;
}) {
  const { doctor, prescription } = state;
  const usedSlots = prescription.timeline.filter(s => s.entries.length > 0);
  const displayDate = prescription.date
    ? new Date(prescription.date + 'T12:00:00').toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric',
      })
    : '';

  return (
    <div
      id="prescription-print"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 0,
        width: '794px',
        backgroundColor: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '40px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '24px', paddingBottom: '20px', borderBottom: '2px solid #1E40AF' }}>
        <div style={{ flex: 1 }}>
          {doctor.logo && (
            <img src={doctor.logo} alt="Logo" style={{ height: '56px', marginBottom: '8px', objectFit: 'contain' }} />
          )}
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '4px' }}>{doctor.name}</div>
          <div style={{ fontSize: '12px', color: '#475569', marginBottom: '2px' }}>
            {doctor.crm}{doctor.cpf ? ` | CPF: ${doctor.cpf}` : ''}
          </div>
          {doctor.specialty && (
            <div style={{ fontSize: '11px', color: '#475569', marginBottom: '2px' }}>⚕ Pós Graduado: {doctor.specialty}</div>
          )}
          <div style={{ fontSize: '11px', color: '#64748B' }}>
            {doctor.address ? `📍 ${doctor.address}` : ''}{doctor.city ? `, ${doctor.city}` : ''}
          </div>
          <div style={{ fontSize: '11px', color: '#64748B', display: 'flex', gap: '16px', marginTop: '2px' }}>
            {doctor.phone && <span>📞 {doctor.phone}</span>}
            {doctor.instagram && <span>📱 @{doctor.instagram.replace(/^@/, '')}</span>}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px' }}>Data da Prescrição</div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>{displayDate}</div>
        </div>
      </div>

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1E3A8A', letterSpacing: '2px' }}>RECEITUÁRIO MÉDICO</div>
      </div>

      {/* Patient info */}
      <div style={{ backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
        <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '4px' }}>PACIENTE</div>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#0F172A' }}>
          {prescription.patient.name || '___________________________'}
        </div>
        <div style={{ display: 'flex', gap: '24px', marginTop: '4px' }}>
          {prescription.patient.age && (
            <span style={{ fontSize: '12px', color: '#475569' }}>Idade: {prescription.patient.age} anos</span>
          )}
          {prescription.patient.birthDate && (
            <span style={{ fontSize: '12px', color: '#475569' }}>
              Nascimento: {new Date(prescription.patient.birthDate + 'T12:00:00').toLocaleDateString('pt-BR')}
            </span>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '12px', paddingBottom: '6px', borderBottom: '1px solid #CBD5E1' }}>
          PLANO DE TRATAMENTO — HORÁRIOS DE USO
        </div>

        {usedSlots.length === 0 ? (
          <div style={{ fontSize: '12px', color: '#94A3B8', fontStyle: 'italic' }}>Nenhum horário preenchido.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {usedSlots.map(slot => (
              <div key={slot.hour} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '52px', flexShrink: 0, fontSize: '13px', fontWeight: 'bold', color: '#475569', paddingTop: '2px' }}>
                  {formatHour(slot.hour)}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {slot.entries.map(entry => {
                    const frasco = frascoMap[entry.frascoId];
                    if (!frasco) return null;
                    return (
                      <div key={entry.instanceId} style={{
                        backgroundColor: `${CATEGORY_COLORS[frasco.category]}15`,
                        borderLeft: `3px solid ${CATEGORY_COLORS[frasco.category]}`,
                        borderRadius: '4px',
                        padding: '6px 10px',
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ fontSize: '13px', fontWeight: '600', color: '#0F172A' }}>{frasco.name}</div>
                          <div style={{ fontSize: '11px', color: CATEGORY_COLORS[frasco.category], fontWeight: '600' }}>
                            {CATEGORY_LABELS[frasco.category].toUpperCase()}
                          </div>
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
                          {frasco.ingredients.map(i => `${i.name} ${i.dose}`).join(' | ')}
                        </div>
                        {frasco.posology && (
                          <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>
                            <strong>Posologia:</strong> {frasco.posology} — {frasco.quantity}
                          </div>
                        )}
                        {frasco.instructions && (
                          <div style={{ fontSize: '11px', color: '#475569', marginTop: '1px', fontStyle: 'italic' }}>
                            {frasco.instructions}
                          </div>
                        )}
                        {frasco.purchaseUrl && (
                          <div style={{ fontSize: '10px', color: '#059669', marginTop: '3px', fontWeight: '600' }}>
                            🛒 Comprar: {frasco.purchaseUrl}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Signature */}
      <div style={{ marginTop: '40px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '200px', borderBottom: '1px solid #334155', marginBottom: '6px' }}></div>
          <div style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>{doctor.name}</div>
          <div style={{ fontSize: '11px', color: '#64748B' }}>CRM: {doctor.crm}</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '10px', color: '#94A3B8' }}>
        Gerado pelo PrescriMed — Sistema de Prescrição Médica
      </div>
    </div>
  );
}
