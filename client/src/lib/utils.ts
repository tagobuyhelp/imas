import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Opens brochure selection modal instead of direct download
 */
export function downloadBrochure() {
  window.dispatchEvent(new Event('imas:openBrochureModal'));
}

/**
 * Handles "Apply Now" action by scrolling to the application form
 * or navigating to the admissions page
 */
export function applyNow() {
  // Redirect to the official IMAS admission portal
  window.open('https://admission.imas.ac.in/', '_blank');
}
