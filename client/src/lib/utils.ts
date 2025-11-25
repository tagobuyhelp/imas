import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadBrochure() {
  console.log('[CTA] downloadBrochure clicked');
  try {
    if (typeof (window as any).openNpfPopup === 'function') {
      (window as any).openNpfPopup('6f02920af7038d6b629201af29a8c43d');
      return;
    }
  } catch {}
  try {
    const href = '/uploads/IMAS_PGDM_Plus_2025_Brochure.pdf';
    const win = window.open(href, '_blank');
    if (!win) window.location.href = href;
  } catch (e) {
    console.error('[CTA] downloadBrochure fallback error', e);
  }
}

export function applyNow() {
  console.log('[CTA] Enquire Now clicked');
  try {
    if (typeof (window as any).openNpfPopup === 'function') {
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
      return;
    }
  } catch {}
  try {
    const url = 'https://widgets.in8.nopaperforms.com/widget/550974b33503dfc785c6fbf5148e6d84';
    const w = 920, h = 700;
    const left = Math.max(0, (window.innerWidth - w) / 2);
    const top = Math.max(0, (window.innerHeight - h) / 2);
    const features = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${w},height=${h},top=${top},left=${left}`;
    const win = window.open(url, 'Enquiry Form', features);
    if (!win) window.open(url, '_blank', 'noopener,noreferrer');
    return;
  } catch {}
  try {
    const cta = document.getElementById('cta');
    if (cta) {
      cta.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.href = '/contact';
  } catch (e) {
    console.error('[CTA] Enquire Now navigation error', e);
  }
}

/**
 * Open NPF popup and set preferred brochure to auto-download on success
 */
export function downloadBrochureFor(href?: string) {
  console.log('[CTA] downloadBrochureFor clicked with href:', href);
  try {
    var id = '6f02920af7038d6b629201af29a8c43d';
    var s = String(href || '').toLowerCase();
    if (s.includes('mba_global') || s.includes('mba')) {
      id = '64b63ee0b99580af377d995a9434088f';
    } else if (s.includes('executive')) {
      id = 'b90761d553ba1ef721aa08c760f669b3';
    }
    if (typeof (window as any).openNpfPopup === 'function') {
      (window as any).openNpfPopup(id);
      return;
    }
  } catch {}
  try {
    const target = href || '/uploads/IMAS_PGDM_Plus_2025_Brochure.pdf';
    const win = window.open(target, '_blank');
    if (!win) window.location.href = target;
  } catch (e) {
    console.error('[CTA] downloadBrochureFor fallback error', e);
  }
}
