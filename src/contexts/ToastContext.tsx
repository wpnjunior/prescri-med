import React, { createContext, useContext, useState, useCallback } from 'react';
import SaveToast, { type ToastSaveData } from '../components/SaveToast';

interface ToastContextValue { showSaveToast: (data: ToastSaveData) => void; }
const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastData, setToastData] = useState<ToastSaveData | null>(null);
  const showSaveToast = useCallback((data: ToastSaveData) => {
    setToastData(null);
    requestAnimationFrame(() => setToastData(data));
  }, []);
  const closeToast = useCallback(() => setToastData(null), []);
  return (
    <ToastContext.Provider value={{ showSaveToast }}>
      {children}
      <SaveToast data={toastData} onClose={closeToast} />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
