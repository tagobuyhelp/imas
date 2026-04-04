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
    { name: 'Deloitte', logoSrc: '/uploads/deloitte.png' },
    { name: 'PwC', logoSrc: '/uploads/companies/PwC_Company_Logo.svg.png' },
    { name: 'KPMG', logoSrc: '/uploads/companies/KPMG.svg.png' },
    { name: 'Accenture', logoSrc: '/uploads/companies/Accenture.png' },
    { name: 'Tata Consultancy Services', logoSrc: '/uploads/companies/tcs.png' },
    { name: 'Infosys', logoSrc: '/uploads/companies/infosys.png' },
    { name: 'Amazon', logoSrc: '/uploads/Customer-logo_Amazon.png' },
    { name: 'Flipkart', logoSrc: '/uploads/flipkart-logo.webp' }
  ];

  return (
    <section className="bg-[#143674] px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#eaeeff]/90">
            Our Students Work At Top Companies
          </div>
          <h2 className="mt-2 text-lg font-semibold text-white mb-5 sm:text-xl sm:mb-6">Internship Success Stories</h2>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] sm:mb-8">
          {highlightCompanies.map((c) => (
            <div
              key={c.name}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#eaeeff] sm:px-3 sm:text-xs"
            >
              {c.logoSrc ? (
                <img src={c.logoSrc} alt={c.name} className="h-3.5 w-auto max-w-[84px] opacity-95 sm:h-4" loading="lazy" />
              ) : null}
              <span className={c.logoSrc ? 'hidden sm:inline' : ''}>{c.name}</span>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(20,54,116,1))]" />
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:snap-none sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {stories.map((s) => (
              <div
                key={`${s.name}-${s.company}`}
                className="group min-w-[240px] w-[82%] shrink-0 snap-start rounded-2xl bg-white p-3.5 shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition-all duration-300 active:scale-[0.99] sm:min-w-0 sm:w-auto sm:shrink sm:p-4 sm:snap-align-none sm:hover:-translate-y-1 sm:hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]"
              >
                {s.imageSrc ? (
                  <img
                    src={s.imageSrc}
                    alt={s.name}
                    className="h-14 w-14 rounded-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.20)] sm:h-16 sm:w-16"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaeeff] text-base font-bold text-[#143674] sm:h-16 sm:w-16 sm:text-lg">
                    {initials(s.name)}
                  </div>
                )}

                <div className="mt-3">
                  <div className="text-sm font-semibold text-[#143674] sm:text-base">{s.name}</div>
                  <div className="mt-0.5 text-xs text-gray-500 sm:text-sm">{s.company}</div>
                </div>

                <div className="mt-3 h-px w-12 bg-[#eaeeff]" />
                <div className="mt-2 text-xs text-[#143674]/70">Internship outcome</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
