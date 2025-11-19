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
    // Open Enquiry modal first; BrochureModal will open after successful submit
    if (typeof (window as any).openEnquiryForm === 'function') {
      (window as any).openEnquiryForm();
    } else {
      window.dispatchEvent(new Event('imas:openEnquiryForm'));
    }
  } catch (e) {
    console.error('[CTA] downloadBrochure error, opening enquiry modal via event', e);
    window.dispatchEvent(new Event('imas:openEnquiryForm'));
  }
}

/**
 * Handles "Apply Now" action by scrolling to the application form
 * or navigating to the admissions page
 */
export function applyNow() {
  console.log('[CTA] Enquire Now clicked');
  try {
    if (typeof (window as any).openEnquiryForm === 'function') {
      (window as any).openEnquiryForm();
    } else {
      window.dispatchEvent(new Event('imas:openEnquiryForm'));
    }
  } catch (e) {
    console.error('[CTA] Enquire Now error', e);
    window.dispatchEvent(new Event('imas:openEnquiryForm'));
  }
}

/**
 * Open NPF popup and set preferred brochure to auto-download on success
 */
export function downloadBrochureFor(href?: string) {
  console.log('[CTA] downloadBrochureFor clicked with href:', href);
  try {
    (window as any).__imasPendingBrochureHref = href || null;
    // Open Enquiry modal first; after submit, BrochureModal opens and can use pending href
    if (typeof (window as any).openEnquiryForm === 'function') {
      (window as any).openEnquiryForm();
    } else {
      window.dispatchEvent(new Event('imas:openEnquiryForm'));
    }
  } catch (e) {
    console.error('[CTA] downloadBrochureFor error, opening enquiry modal via event', e);
    window.dispatchEvent(new Event('imas:openEnquiryForm'));
  }
}
