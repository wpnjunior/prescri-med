import type { AppState } from '../types';
import { CATEGORY_LABELS, formatHour } from '../types';

export async function exportToPDF(state: AppState): Promise<void> {
  const { jsPDF } = await import('jspdf');
  const html2canvas = (await import('html2canvas')).default;

  const el = document.getElementById('prescription-print');
  if (!el) {
    alert('Elemento de impressão não encontrado.');
    return;
  }

  try {
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let yOffset = 10;
    let remaining = imgHeight;

    while (remaining > 0) {
      const sliceHeight = Math.min(remaining, pageHeight - 20);
      const srcY = (imgHeight - remaining) * (canvas.height / imgHeight);
      const srcH = sliceHeight * (canvas.height / imgHeight);

      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = srcH;
      const ctx = sliceCanvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);
      }
      const sliceData = sliceCanvas.toDataURL('image/png');
      pdf.addImage(sliceData, 'PNG', 10, yOffset, imgWidth, sliceHeight);

      remaining -= sliceHeight;
      if (remaining > 0) {
        pdf.addPage();
        yOffset = 10;
      }
    }

    const patientName = state.prescription.patient.name || 'paciente';
    const date = state.prescription.date || new Date().toISOString().slice(0, 10);
    pdf.save(`prescricao_${patientName.replace(/\s+/g, '_')}_${date}.pdf`);
  } catch (err) {
    console.error('PDF export error', err);
    alert('Erro ao gerar PDF. Tente novamente.');
  }
}

// Returns PDF as base64 string (used for VIDaaS signing)
export async function getPDFBase64(state: AppState): Promise<{ base64: string; filename: string }> {
  const { jsPDF } = await import('jspdf');
  const html2canvas = (await import('html2canvas')).default;

  const el = document.getElementById('prescription-print');
  if (!el) throw new Error('Elemento de impressão não encontrado.');

  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth - 20;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let yOffset = 10;
  let remaining = imgHeight;

  while (remaining > 0) {
    const sliceHeight = Math.min(remaining, pageHeight - 20);
    const srcY = (imgHeight - remaining) * (canvas.height / imgHeight);
    const srcH = sliceHeight * (canvas.height / imgHeight);
    const sliceCanvas = document.createElement('canvas');
    sliceCanvas.width = canvas.width;
    sliceCanvas.height = srcH;
    const ctx = sliceCanvas.getContext('2d');
    if (ctx) ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);
    pdf.addImage(sliceCanvas.toDataURL('image/png'), 'PNG', 10, yOffset, imgWidth, sliceHeight);
    remaining -= sliceHeight;
    if (remaining > 0) { pdf.addPage(); yOffset = 10; }
  }

  const patientName = state.prescription.patient.name || 'paciente';
  const date = state.prescription.date || new Date().toISOString().slice(0, 10);
  const filename = `prescricao_${patientName.replace(/\s+/g, '_')}_${date}.pdf`;

  // jsPDF output as base64 string (without data URL prefix)
  const base64 = pdf.output('datauristring').split(',')[1];
  return { base64, filename };
}

// Unused but kept for reference
export { CATEGORY_LABELS, formatHour };
