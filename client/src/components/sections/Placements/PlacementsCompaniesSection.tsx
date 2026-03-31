import React from 'react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { Building2 } from 'lucide-react';

export function PlacementsCompaniesSection() {
  const rawLogos = [
    { name: 'Amazon', logo: '/uploads/Customer-logo_Amazon.png' },
    { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png' },
    { name: 'Deloitte', logo: '/uploads/deloitte.png' },
    { name: 'PwC', logo: '/uploads/pwclogo.png' },
    { name: 'EY', logo: '/uploads/EY_logo_2019.svg.png' },
    { name: 'KPMG', logo: '/uploads/kpmglogo.png' },
    { name: 'Accenture', logo: '/uploads/Accenture.svg.webp' },
    { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp' },
    { name: 'Zomato', logo: '/uploads/Zomato-Logo.png' },
    { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg' },
    { name: 'Ola', logo: '/uploads/Ola_Cabs_logo.svg' },
    { name: 'Delhivery', logo: '/uploads/delhivery.png' },
    { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg' },
    { name: 'BainCapital', logo: '/uploads/bcpe_logo.png' },
    { name: 'JPMorgan Chase & Co.', logo: '/uploads/Partnership-Creatives--48-.png' },
    { name: 'TCS', logo: '/uploads/tcsLogo.webp' },
    { name: 'Infosys', logo: '/uploads/InfosysLogo.png' },
    { name: 'Wipro', logo: '/uploads/Wipro_Primary_Logo_Color_RGB.svg.png' },
    { name: 'Tech Mahindra', logo: '/uploads/companies/tech_mahindra.png' },
    { name: 'HDFC Bank', logo: '/uploads/hdfc-bank-logo-czdJZ5Tf_t.jpg' },
    { name: 'ICICI Bank', logo: '/uploads/ICICI_Bank_Logo.svg.png' },
    { name: 'Axis Bank', logo: '/uploads/axisBankLogo.png' },
    { name: 'Kotak Mahindra Bank', logo: '/uploads/kotaklogo.png' },
    { name: 'Apollo Hospitals', logo: '/uploads/apollo-hospitals-logo-png-transparent.png' },
    { name: 'Fortis Healthcare', logo: '/uploads/fortis_logo.png' },
    { name: 'Manipal Hospitals', logo: '/uploads/manipalhospitallogo.png' },
    { name: 'Blue Dart', logo: '/uploads/460-4608309_blue-dart-logo-transparent-blue-dart-express-logo.png' }
  ];

  const logoItems = Array.from(new Map(rawLogos.map((l) => [l.logo, l])).values());

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 py-2 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE}/20`}>
            <Building2 className="h-4 w-4" />
            OUR STUDENTS ARE WORKING WITH TOP COMPANIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recruiters Across Diverse Sectors</h2>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            Companies across diverse sectors recruit PGDM graduates from IMAS Business School.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="p-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">
              <span className={`h-2 w-2 rounded-full ${IMAS_TAILWIND_CLASSES.BG_TEAL}`}></span>
              Hiring Partners
            </div>

            <div className="space-y-4">
              <div className="flex w-max animate-scroll-left">
                {[...logoItems, ...logoItems].map((l, i) => (
                  <div key={`${l.name}-row1-${i}`} className="flex-shrink-0 mx-4">
                    <div className="h-14 w-28 sm:w-32 rounded-2xl bg-white ring-1 ring-gray-200 flex items-center justify-center p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      <img
                        src={l.logo}
                        alt={`${l.name} logo`}
                        className="max-w-full max-h-full object-contain  opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-max animate-scroll-right">
                {[...logoItems, ...logoItems].map((l, i) => (
                  <div key={`${l.name}-row2-${i}`} className="flex-shrink-0 mx-4">
                    <div className="h-14 w-28 sm:w-32 rounded-2xl bg-white ring-1 ring-gray-200 flex items-center justify-center p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      <img
                        src={l.logo}
                        alt={`${l.name} logo`}
                        className="max-w-full max-h-full object-contain  opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
