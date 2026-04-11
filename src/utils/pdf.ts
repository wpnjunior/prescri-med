import type { AppState, Frasco } from '../types';
import { CATEGORY_LABELS, formatHour } from '../types';
import type { jsPDF as JsPDFType } from 'jspdf';

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

    // Add clickable purchase links page
    addPurchaseLinksPage(pdf, state);

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

  // Add clickable purchase links page
  addPurchaseLinksPage(pdf, state);

  const patientName = state.prescription.patient.name || 'paciente';
  const date = state.prescription.date || new Date().toISOString().slice(0, 10);
  const filename = `prescricao_${patientName.replace(/\s+/g, '_')}_${date}.pdf`;

  // jsPDF output as base64 string (without data URL prefix)
  const base64 = pdf.output('datauristring').split(',')[1];
  return { base64, filename };
}

// ═══════════════════════════════════════════════════════════════════════════
// Adds a page with clickable purchase links for pharmacy products
// ═══════════════════════════════════════════════════════════════════════════
function addPurchaseLinksPage(pdf: JsPDFType, state: AppState): void {
  // Collect all pharmacy products used in the timeline
  const frascoMap: Record<string, Frasco> = {};
  state.frascos.forEach(f => { frascoMap[f.id] = f; });

  const usedSlots = state.prescription.timeline.filter(s => s.entries.length > 0);
  const pharmacyItems: { hour: number; frasco: Frasco }[] = [];
  const seenIds = new Set<string>();

  for (const slot of usedSlots) {
    for (const entry of slot.entries) {
      const frasco = frascoMap[entry.frascoId];
      if (frasco?.purchaseUrl && !seenIds.has(frasco.id)) {
        seenIds.add(frasco.id);
        pharmacyItems.push({ hour: slot.hour, frasco });
      }
    }
  }

  // Only add page if there are pharmacy products
  if (pharmacyItems.length === 0) return;

  pdf.addPage();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  let y = margin;

  // Header
  pdf.setFillColor(5, 150, 105); // emerald-600
  pdf.rect(0, 0, pageWidth, 18, 'F');
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.setTextColor(255, 255, 255);
  pdf.text('🛒  LINKS DE COMPRA — FARMÁCIA SEMPRE VIVA', margin, 12);
  y = 26;

  // Subtitle
  pdf.setFontSize(9);
  pdf.setTextColor(100, 116, 139); // gray-500
  pdf.setFont('helvetica', 'normal');
  pdf.text('Clique nos links abaixo para comprar os produtos prescritos diretamente na farmácia:', margin, y);
  y += 8;

  // Patient name
  const patientName = state.prescription.patient.name;
  if (patientName) {
    pdf.setFontSize(10);
    pdf.setTextColor(15, 23, 42); // gray-900
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Paciente: ${patientName}`, margin, y);
    y += 8;
  }

  // Divider
  pdf.setDrawColor(203, 213, 225);
  pdf.line(margin, y, pageWidth - margin, y);
  y += 6;

  // List each pharmacy product
  for (const { hour, frasco } of pharmacyItems) {
    // Check if we need a new page
    if (y > pageHeight - 30) {
      pdf.addPage();
      y = margin;
    }

    // Product name + hour
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(15, 23, 42);
    const hourStr = formatHour(hour);
    pdf.text(`${hourStr}  —  ${frasco.name}`, margin, y);
    y += 5;

    // Posology
    if (frasco.posology) {
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(71, 85, 105); // gray-600
      pdf.text(`Posologia: ${frasco.posology}`, margin + 2, y);
      y += 4;
    }

    // Indications
    if (frasco.indicacoes) {
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(100, 116, 139);
      const maxW = pageWidth - margin * 2 - 4;
      const lines = pdf.splitTextToSize(`Indicações: ${frasco.indicacoes}`, maxW);
      pdf.text(lines, margin + 2, y);
      y += lines.length * 3.5;
    }

    // Clickable purchase link
    if (frasco.purchaseUrl) {
      y += 1;
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(5, 150, 105); // emerald-600

      const linkText = '🛒 CLIQUE AQUI PARA COMPRAR';
      const linkWidth = pdf.getTextWidth(linkText);

      pdf.textWithLink(linkText, margin + 2, y, { url: frasco.purchaseUrl });

      // Underline
      pdf.setDrawColor(5, 150, 105);
      pdf.setLineWidth(0.3);
      pdf.line(margin + 2, y + 0.5, margin + 2 + linkWidth, y + 0.5);

      // Show URL in smaller text
      pdf.setFontSize(6);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(148, 163, 184);
      const shortUrl = frasco.purchaseUrl.replace('https://www.', '');
      const urlMaxW = pageWidth - margin * 2 - 4;
      const urlLines = pdf.splitTextToSize(shortUrl, urlMaxW);
      y += 4;
      pdf.textWithLink(urlLines[0], margin + 2, y, { url: frasco.purchaseUrl });
      y += 3;
    }

    // Spacing between products
    y += 4;

    // Light divider
    pdf.setDrawColor(226, 232, 240);
    pdf.setLineWidth(0.2);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 4;
  }

  // Footer
  if (y > pageHeight - 20) {
    pdf.addPage();
    y = margin;
  }
  y += 4;
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(148, 163, 184);
  pdf.text('Farmácia Sempre Viva — www.farmaciasempreviva.com.br', pageWidth / 2, y, { align: 'center' });
  y += 4;
  pdf.text('WhatsApp: (35) 98856-4673  |  Televendas: (35) 3622-5658', pageWidth / 2, y, { align: 'center' });
  y += 5;
  pdf.setFontSize(7);
  pdf.text('Gerado pelo PrescriMed — Sistema de Prescrição Médica', pageWidth / 2, y, { align: 'center' });
}

// Unused but kept for reference
export { CATEGORY_LABELS, formatHour };
