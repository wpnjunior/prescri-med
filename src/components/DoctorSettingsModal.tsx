import React, { useState, useRef } from 'react';
import { X, Upload, Trash2, Sparkles, Eye, EyeOff } from 'lucide-react';
import type { Doctor } from '../types';
import { useAppContext } from '../context';

const API_KEY_STORAGE = 'prescri_anthropic_key';

interface DoctorSettingsModalProps {
  onClose: () => void;
}

export default function DoctorSettingsModal({ onClose }: DoctorSettingsModalProps) {
  const { state, dispatch } = useAppContext();
  const [form, setForm] = useState<Doctor>({ ...state.doctor });
  const [apiKey, setApiKey] = useState(localStorage.getItem(API_KEY_STORAGE) ?? '');
  const [showKey, setShowKey] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm(f => ({ ...f, logo: (ev.target?.result as string) ?? '' }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    dispatch({ type: 'UPDATE_DOCTOR', payload: form });
    if (apiKey.trim()) localStorage.setItem(API_KEY_STORAGE, apiKey.trim());
    else localStorage.removeItem(API_KEY_STORAGE);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Configurações do Médico</h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 text-gray-500">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {/* Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Logo / Assinatura</label>
            <div className="flex items-center gap-3">
              {form.logo ? (
                <div className="relative">
                  <img
                    src={form.logo}
                    alt="Logo"
                    className="h-16 w-auto rounded border border-gray-200 object-contain"
                  />
                  <button
                    onClick={() => setForm(f => ({ ...f, logo: '' }))}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600"
                  >
                    <Trash2 size={10} />
                  </button>
                </div>
              ) : (
                <div className="h-16 w-24 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400 text-center">Sem logo</span>
                </div>
              )}
              <button
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-1.5 text-sm px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600"
              >
                <Upload size={14} /> Fazer upload
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoUpload}
              />
            </div>
          </div>

          {/* Fields */}
          {[
            { label: 'Nome completo', key: 'name', placeholder: 'Dr. Wagner Pereira Novaes Jr.' },
            { label: 'CRM', key: 'crm', placeholder: 'CRM-RJ 0127554-2' },
            { label: 'CPF', key: 'cpf', placeholder: '000.000.000-00' },
            { label: 'Especialidade(s)', key: 'specialty', placeholder: 'Psiquiatria | Nutrologia' },
            { label: 'Endereço', key: 'address', placeholder: 'Rua Coronel Carvalho n°13' },
            { label: 'Cidade / UF', key: 'city', placeholder: 'Angra dos Reis – RJ' },
            { label: 'Telefone', key: 'phone', placeholder: '(24) 9 9989-3059' },
            { label: 'E-mail', key: 'email', placeholder: 'dr@clinica.com.br' },
            { label: 'Instagram', key: 'instagram', placeholder: '@Dr.wagnernovaesjr' },
          ].map(({ label, key, placeholder }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type="text"
                value={form[key as keyof Doctor] as string}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* API Key IA */}
          <div className="pt-2 border-t border-gray-100">
            <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1">
              <Sparkles size={14} className="text-purple-600" />
              Chave API — Análise IA (Claude)
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                placeholder="sk-ant-api03-..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
              />
              <button
                type="button"
                onClick={() => setShowKey(s => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
              >
                {showKey ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Obtenha em{' '}
              <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer"
                className="text-purple-600 underline hover:text-purple-700">
                console.anthropic.com
              </a>
              {' '}— necessária para o botão ✨ nos frascos.
            </p>
            {apiKey && <p className="text-xs text-green-600 mt-1 font-medium">✅ Chave configurada</p>}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
