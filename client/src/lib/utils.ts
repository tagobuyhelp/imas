import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Opens brochure selection modal instead of direct download
 */
export function downloadBrochure() {
  console.log('[CTA] downloadBrochure clicked');
  try {
    (window as any).__imasPendingBrochureHref = null;
    console.log('[CTA] __imasPendingBrochureHref set to null');
    if (typeof (window as any).openNpfPopup === 'function') {
      console.log('[CTA] openNpfPopup available, opening widget 550974b33503dfc785c6fbf5148e6d84');
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
    } else {
      // Fallback to existing modal if NPF blocked
      console.warn('[CTA] openNpfPopup not available, dispatching imas:openBrochureModal');
      window.dispatchEvent(new Event('imas:openBrochureModal'));
    }
  } catch (e) {
    // As a safety fallback
    console.error('[CTA] downloadBrochure error, dispatching fallback modal', e);
    window.dispatchEvent(new Event('imas:openBrochureModal'));
  }
}

/**
 * Handles "Apply Now" action by scrolling to the application form
 * or navigating to the admissions page
 */
export function applyNow() {
  console.log('[CTA] applyNow clicked');
  try {
    if (typeof (window as any).openNpfPopup === 'function') {
      console.log('[CTA] openNpfPopup available, opening widget 550974b33503dfc785c6fbf5148e6d84');
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
    } else {
      console.warn('[CTA] openNpfPopup not available, navigating to admissions portal');
      window.open('https://admission.imas.ac.in/', '_blank');
    }
  } catch (e) {
    console.error('[CTA] applyNow error, navigating to admissions portal', e);
    window.open('https://admission.imas.ac.in/', '_blank');
  }
}

/**
 * Open NPF popup and set preferred brochure to auto-download on success
 */
export function downloadBrochureFor(href?: string) {
  console.log('[CTA] downloadBrochureFor clicked with href:', href);
  try {
    (window as any).__imasPendingBrochureHref = href || null;
    console.log('[CTA] __imasPendingBrochureHref set to:', (window as any).__imasPendingBrochureHref);
    if (typeof (window as any).openNpfPopup === 'function') {
      console.log('[CTA] openNpfPopup available, opening widget 550974b33503dfc785c6fbf5148e6d84');
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
    } else {
      console.warn('[CTA] openNpfPopup not available, dispatching imas:openBrochureModal');
      window.dispatchEvent(new Event('imas:openBrochureModal'));
    }
  } catch (e) {
    console.error('[CTA] downloadBrochureFor error, dispatching fallback modal', e);
    window.dispatchEvent(new Event('imas:openBrochureModal'));
  }
}
