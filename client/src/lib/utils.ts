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
  // Check if we're already on the admissions page
  const isAdmissionsPage = window.location.pathname === '/admissions';
  
  if (isAdmissionsPage) {
    // If on admissions page, scroll to the application form
    const applicationForm = document.getElementById('apply');
    
    if (applicationForm) {
      applicationForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Focus on the first form field after a short delay
      setTimeout(() => {
        const firstInput = applicationForm.querySelector('input, select, textarea');
        if (firstInput instanceof HTMLElement) {
          firstInput.focus();
        }
      }, 800);
    }
  } else {
    // If not on admissions page, navigate to admissions page with hash
    window.location.href = '/admissions#apply';
  }
}
