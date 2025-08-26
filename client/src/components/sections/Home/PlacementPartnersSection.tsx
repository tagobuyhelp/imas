import React from 'react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

export function PlacementPartnersSection() {
  const companyLogos = [
    { name: 'BainCapital', logo: '/uploads/bcpe_logo.png' },
    { name: 'Amazon', logo: '/uploads/Customer-logo_Amazon.png' },
    { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg' },
    { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png' },
    { name: 'JPMorgan Chase & Co.', logo: '/uploads/Partnership-Creatives--48-.png' },
    { name: 'Accenture', logo: '/uploads/Accenture.svg.webp' },
    { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg' },
    { name: 'Zomato', logo: '/uploads/Zomato-Logo.png' },
    { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp' },
    { name: 'Deloitte', logo: '/uploads/deloitte.png' },
    { name: 'Delhivery', logo: '/uploads/delhivery.png' },
    { name: 'Ola', logo: '/uploads/Ola_Cabs_logo.svg' },
  ];

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-[1260px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-12">
          {/* Badge */}
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/20 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/30`}>
            PROVEN PLACEMENT RECORD
          </div>

          {/* Main Heading */}
          <h2 className="text-1xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Get placed at{' '}
            <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              Top MNCs and Startups
            </span>
          </h2>
        </div>

                 {/* Company Logos Marquee */}
         <div className="relative overflow-hidden mb-6 sm:mb-8">
                       {/* Mobile: Two lines */}
            <div className="block sm:hidden">
              {/* First row - Left to Right */}
              <div className="flex animate-scroll-right mb-4">
                {companyLogos.slice(0, 6).map((company, index) => (
                  <div
                    key={`mobile-first-${company.name}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 rounded-lg hover:shadow-md transition-shadow duration-300 group mx-2"
                  >
                    <div className="relative w-16 h-6 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'block';
                          }
                        }}
                      />
                      <div className="text-center hidden">
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                          {company.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Partner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {companyLogos.slice(0, 6).map((company, index) => (
                  <div
                    key={`mobile-first-duplicate-${company.name}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 rounded-lg hover:shadow-md transition-shadow duration-300 group mx-2"
                  >
                    <div className="relative w-16 h-6 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'block';
                          }
                        }}
                      />
                      <div className="text-center hidden">
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                          {company.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Partner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Second row - Right to Left */}
              <div className="flex animate-scroll-left">
                {companyLogos.slice(6).map((company, index) => (
                  <div
                    key={`mobile-second-${company.name}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 rounded-lg hover:shadow-md transition-shadow duration-300 group mx-2"
                  >
                    <div className="relative w-16 h-6 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'block';
                          }
                        }}
                      />
                      <div className="text-center hidden">
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                          {company.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Partner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {companyLogos.slice(6).map((company, index) => (
                  <div
                    key={`mobile-second-duplicate-${company.name}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 rounded-lg hover:shadow-md transition-shadow duration-300 group mx-2"
                  >
                    <div className="relative w-16 h-6 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'block';
                          }
                        }}
                      />
                      <div className="text-center hidden">
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                          {company.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Partner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           {/* Desktop: Single line */}
           <div className="hidden sm:flex animate-scroll-left">
             {/* First set of logos */}
             {companyLogos.map((company, index) => (
               <div
                 key={`desktop-first-${company.name}`}
                 className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 group mx-4"
               >
                 <div className="relative w-24 h-10 flex items-center justify-center">
                   <img
                     src={company.logo}
                     alt={`${company.name} logo`}
                     className="max-w-full max-h-full object-contain opacity-100 transition-opacity"
                     onError={(e) => {
                       const target = e.currentTarget as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.nextElementSibling as HTMLElement;
                       if (fallback) {
                         fallback.style.display = 'block';
                       }
                     }}
                   />
                   <div className="text-center hidden">
                     <div className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                       {company.name}
                     </div>
                     <div className="text-xs text-gray-500 mt-1">
                       Partner
                     </div>
                   </div>
                 </div>
               </div>
             ))}
             {/* Duplicate set for seamless loop */}
             {companyLogos.map((company, index) => (
               <div
                 key={`desktop-second-${company.name}`}
                 className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 group mx-4"
               >
                 <div className="relative w-24 h-10 flex items-center justify-center">
                   <img
                     src={company.logo}
                     alt={`${company.name} logo`}
                     className="max-w-full max-h-full object-contain opacity-100 transition-opacity"
                     onError={(e) => {
                       const target = e.currentTarget as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.nextElementSibling as HTMLElement;
                       if (fallback) {
                         fallback.style.display = 'block';
                       }
                     }}
                   />
                   <div className="text-center hidden">
                     <div className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                       {company.name}
                     </div>
                     <div className="text-xs text-gray-500 mt-1">
                       Partner
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className={`inline-block bg-gray-100 border border-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium`}>
            <span className={`font-bold bg-transparent`}>+1200</span> other placement partners
          </div>
        </div>
      </div>
    </section>
  );
}
