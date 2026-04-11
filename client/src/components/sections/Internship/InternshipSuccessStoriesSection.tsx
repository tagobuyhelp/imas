import React from 'react';

type InternshipStory = {
  name: string;
  company: string;
  imageSrc?: string;
};

type HighlightCompany = {
  name: string;
  logoSrc?: string;
};

function initials(name: string) {
  const parts = name
    .split(' ')
    .map((p) => p.trim())
    .filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : '';
  return `${first}${last}`.toUpperCase();
}

export function InternshipSuccessStoriesSection() {
  const companyLogoByName: Record<string, string> = {
    Deloitte: '/uploads/deloitte.png',
    EY: '/uploads/EY_logo_2019.svg.png',
    PwC: '/uploads/companies/PwC_Company_Logo.svg.png',
    KPMG: '/uploads/companies/KPMG.svg.png',
    Accenture: '/uploads/companies/Accenture.png',
    'EXL Service': '/uploads/companies/EXL_Service_logo.png',
    Genpact: '/uploads/companies/Genpact_logo.svg.png',
    'Tata Consultancy Services': '/uploads/companies/Tata_Consultancy_Services_old_logo.svg.png',
    Infosys: '/uploads/companies/Infosys_logo.svg.png',
    Wipro: '/uploads/companies/Wipro_new_logo.svg.png',
    Cognizant: '/uploads/companies/cognizant logo.jpg',
    Amazon: '/uploads/Customer-logo_Amazon.png',
    Flipkart: '/uploads/flipkart-logo.webp',
    Swiggy: '/uploads/swiggy-logo.svg',
    Zomato: '/uploads/companies/Zomato-logo.png',
    Meesho: '/uploads/companies/Meesho-Logo-Vector.svg-.png',
    'Apollo Hospitals': '/uploads/apollo-hospitals-logo-png-transparent.png',
    'Fortis Hospitals': '/uploads/companies/Fortis-Logo.png'
  };

  const stories: InternshipStory[] = [
    { name: 'Ritwick Mukherjee', company: 'EXL Service', imageSrc: '/uploads/internship/ritwick-mukherjee-exl-service.jpg' },
    { name: 'Kaushik Sen', company: 'Genpact', imageSrc: '/uploads/internship/kaushik-sen-genpact.jpg' },
    { name: 'Subhajit Roy', company: 'Deloitte', imageSrc: '/uploads/internship/subhajit-roy-deloitte.jpg' },
    { name: 'Debanjan Bhattacharya', company: 'EY', imageSrc: '/uploads/internship/debanjan-bhattacharya-ey.jpg' },
    { name: 'Sagnik Paul', company: 'PwC', imageSrc: '/uploads/internship/sagnik-paul-pwc.jpg' },
    { name: 'Ananya Chatterjee', company: 'KPMG', imageSrc: '/uploads/internship/ananya-chatterjee-kpmg.jpg' },
    { name: 'Riya Banerjee', company: 'Accenture', imageSrc: '/uploads/internship/riya-banerjee-accenture.jpg' },
    {
      name: 'Sohini Ghosh',
      company: 'Tata Consultancy Services',
      imageSrc: '/uploads/internship/sohini-ghosh-tata-consultancy-services.jpg'
    },
    { name: 'Priyanka Das', company: 'Infosys', imageSrc: '/uploads/internship/priyanka-das-infosys.jpg' },
    { name: 'Moumita Mukherjee', company: 'Wipro', imageSrc: '/uploads/internship/moumita-mukherjee-wipro.jpg' },
    { name: 'Debopriya Sen', company: 'Cognizant', imageSrc: '/uploads/internship/debopriya-sen-cognizant.jpg' },
    { name: 'Aritra Roy', company: 'Amazon', imageSrc: '/uploads/internship/aritra-roy-amazon.jpg' },
    { name: 'Tuhin Bhattacharya', company: 'Flipkart', imageSrc: '/uploads/internship/tuhin-bhattacharya-flipkart.jpg' },
    { name: 'Sayantan Paul', company: 'Swiggy', imageSrc: '/uploads/internship/sayantan-paul-swiggy.jpg' },
    { name: 'Ravi Kumar', company: 'Zomato', imageSrc: '/uploads/internship/ravi-kumar-zomato.jpg' },
    { name: 'Amit Kumar Singh', company: 'Meesho', imageSrc: '/uploads/internship/amit-kumar-singh-meesho.jpg' },
    { name: 'Shalini Singh', company: 'EXL Service', imageSrc: '/uploads/internship/shalini-singh-exl-service.jpg' },
    { name: 'Ankit Kumar', company: 'Genpact', imageSrc: '/uploads/internship/ankit-kumar-genpact.jpg' },
    { name: 'Rohit Agarwal', company: 'Deloitte', imageSrc: '/uploads/internship/rohit-agarwal-deloitte.jpg' },
    { name: 'Mohit Khandelwal', company: 'EY', imageSrc: '/uploads/internship/mohit-khandelwal-ey.jpg' },
    { name: 'Pooja Agarwal', company: 'PwC', imageSrc: '/uploads/internship/pooja-agarwal-pwc.jpg' },
    { name: 'Neha Poddar', company: 'KPMG', imageSrc: '/uploads/internship/neha-poddar-kpmg.jpg' },
    { name: 'Argho Ghosh', company: 'Apollo Hospitals', imageSrc: '/uploads/internship/argho-ghosh.jpg' },
    { name: 'Anushuya Mondol', company: 'Fortis Hospitals', imageSrc: '/uploads/internship/anushuya-mondol.jpg' }
  ];

  const highlightCompanies: HighlightCompany[] = [
    { name: 'Deloitte', logoSrc: companyLogoByName.Deloitte },
    { name: 'EY', logoSrc: companyLogoByName.EY },
    { name: 'PwC', logoSrc: companyLogoByName.PwC },
    { name: 'KPMG', logoSrc: companyLogoByName.KPMG },
    { name: 'Accenture', logoSrc: companyLogoByName.Accenture },
    { name: 'Tata Consultancy Services', logoSrc: companyLogoByName['Tata Consultancy Services'] },
    { name: 'Infosys', logoSrc: companyLogoByName.Infosys },
    { name: 'Amazon', logoSrc: companyLogoByName.Amazon },
    { name: 'Flipkart', logoSrc: companyLogoByName.Flipkart }
  ];

  return (
    <section id="success-stories" className="bg-[#143674] px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#eaeeff]/90">
            Our Students Work At Top Companies
          </div>
          <h2 className="mt-2 text-lg font-semibold text-white mb-5 sm:text-xl sm:mb-6">Internship Success Stories</h2>
        </div>

      

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(20,54,116,1))]" />
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:snap-none sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {stories.map((s) => (
              <div
                key={`${s.name}-${s.company}`}
                className="group relative min-w-[270px] w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition-all duration-300 active:scale-[0.99] sm:min-w-0 sm:w-auto sm:shrink sm:snap-align-none sm:hover:-translate-y-1 sm:hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)] aspect-[3/4]"
                style={{ aspectRatio: '3 / 4' }}
              >
                {s.imageSrc ? (
                  <img
                    src={s.imageSrc}
                    alt={s.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#eaeeff] text-3xl font-bold text-[#143674]">
                    {initials(s.name)}
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.65))]" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-base font-semibold leading-snug text-white">{s.name}</div>
                  {companyLogoByName[s.company] ? (
                    <div className="mt-2 inline-flex items-center rounded-lg bg-white/90 px-2 py-1">
                      <img
                        src={companyLogoByName[s.company]}
                        alt={s.company}
                        loading="lazy"
                        className="h-5 w-auto max-w-[160px] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="mt-1 text-sm text-[#eaeeff]">{s.company}</div>
                  )}
                  <div className="mt-3 h-px w-12 bg-white/25" />
                  <div className="mt-2 text-sm text-white/80">Internship outcome</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
