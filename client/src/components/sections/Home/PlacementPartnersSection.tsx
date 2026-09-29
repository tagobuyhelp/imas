import React from 'react';

export function PlacementPartnersSection() {
  const companyLogos = [
    { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg', h: 'h-6' },
    { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png', h: 'h-6' },
    { name: 'JPMorgan Chase', logo: '/uploads/Partnership-Creatives--48-.png', h: 'h-5' },
    { name: 'Accenture', logo: '/uploads/companies/Accenture.png', fallback: '/uploads/Accenture.svg.webp', h: 'h-6' },
    { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg', h: 'h-6' },
    { name: 'Zomato', logo: '/uploads/companies/Zomato-logo.png', fallback: '/uploads/Zomato-Logo.png', h: 'h-5' },
    { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp', h: 'h-6' },
    { name: 'Deloitte', logo: '/uploads/deloitte.png', h: 'h-5' },
    { name: 'TCS', logo: '/uploads/companies/tcs.png', h: 'h-6' },
    { name: 'Infosys', logo: '/uploads/companies/infosys.png', fallback: '/uploads/InfosysLogo.png', h: 'h-5' },
  ];

  return (
    <section id="placement-partners" className="py-5 bg-white border-y border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          
          {/* Left Title with Vertical Divider */}
          <div className="flex items-center gap-6 shrink-0 self-start lg:self-center z-10 bg-white pr-4">
            <div className="leading-tight">
              <span className="block text-sm font-bold text-[#0c2340]">Our Students</span>
              <span className="block text-sm font-bold text-[#0c2340]">Get Placed At</span>
            </div>
            <div className="hidden lg:block h-9 w-[1px] bg-slate-200"></div>
          </div>

          {/* Marquee Scrolling Track */}
          <div className="flex-1 w-full overflow-hidden relative">
            {/* Subtle side fade gradients for smooth seamless edge entrance & exit */}
            <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex items-center gap-8 sm:gap-12 w-max animate-marquee py-1">
              {[...companyLogos, ...companyLogos, ...companyLogos].map((c, idx) => (
                <div 
                  key={`${c.name}-${idx}`} 
                  className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer"
                >
                  <img 
                    src={c.logo} 
                    alt={c.name} 
                    className={`${c.h} w-auto max-w-[110px] object-contain`}
                    onError={(e) => {
                      if (c.fallback) {
                        e.currentTarget.src = c.fallback;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* +1200 other placement partners Badge */}
          <div className="shrink-0 bg-[#edf4ff] border border-[#dbeafe] text-[#1e40af] text-xs font-semibold px-3.5 py-2 rounded-xl whitespace-nowrap z-10 shadow-xs">
            +1200 other placement partners
          </div>

        </div>
      </div>
    </section>
  );
}
