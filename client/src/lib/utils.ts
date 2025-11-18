import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Opens brochure selection modal instead of direct download
 */
export function downloadBrochure() {
  // Prefer NPF popup for lead capture
  try {
    (window as any).__imasPendingBrochureHref = null;
    if (typeof (window as any).openNpfPopup === 'function') {
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
    } else {
      // Fallback to existing modal if NPF blocked
      window.dispatchEvent(new Event('imas:openBrochureModal'));
    }
  } catch (e) {
    // As a safety fallback
    window.dispatchEvent(new Event('imas:openBrochureModal'));
  }
}

/**
 * Handles "Apply Now" action by scrolling to the application form
 * or navigating to the admissions page
 */
export function applyNow() {
  // Open NPF Enquiry popup instead of direct admission portal
  try {
    if (typeof (window as any).openNpfPopup === 'function') {
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
    } else {
      window.open('https://admission.imas.ac.in/', '_blank');
    }
  } catch (e) {
    window.open('https://admission.imas.ac.in/', '_blank');
  }
}

/**
 * Open NPF popup and set preferred brochure to auto-download on success
 */
export function downloadBrochureFor(href?: string) {
  try {
    (window as any).__imasPendingBrochureHref = href || null;
    if (typeof (window as any).openNpfPopup === 'function') {
      (window as any).openNpfPopup('550974b33503dfc785c6fbf5148e6d84');
    } else {
      window.dispatchEvent(new Event('imas:openBrochureModal'));
    }
  } catch (e) {
    window.dispatchEvent(new Event('imas:openBrochureModal'));
  }
}
