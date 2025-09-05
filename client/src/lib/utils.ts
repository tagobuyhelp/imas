import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Downloads the IMAS PGDM 2025 Brochure
 */
export function downloadBrochure() {
  const brochureUrl = '/uploads/IMAS_PGDM_2025_Brochure.pdf';
  const link = document.createElement('a');
  link.href = brochureUrl;
  link.download = 'IMAS_PGDM_2025_Brochure.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Handles "Apply Now" action by scrolling to the application form
 * or navigating to the admissions page
 */
export function applyNow() {
  // Redirect to the official IMAS admission portal
  window.open('https://admission.imas.ac.in/', '_blank');
}
