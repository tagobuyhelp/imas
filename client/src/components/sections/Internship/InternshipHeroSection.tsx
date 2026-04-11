import { Button } from '../../ui/button';
import { applyNow, downloadBrochure } from '../../../lib/utils';
import { Users } from 'lucide-react';

export function InternshipHeroSection() {
  const logos: { name: string; src: string }[] = [
    { name: 'Deloitte', src: '/uploads/deloitte.png' },
    { name: 'EY', src: '/uploads/EY_logo_2019.svg.png' },
    { name: 'PwC', src: '/uploads/companies/PwC_Company_Logo.svg.png' },
    { name: 'KPMG', src: '/uploads/companies/KPMG.svg.png' },
    { name: 'Accenture', src: '/uploads/companies/Accenture.png' },
    { name: 'Tata Consultancy Services', src: '/uploads/companies/Tata_Consultancy_Services_old_logo.svg.png' },
    { name: 'Infosys', src: '/uploads/companies/Infosys_logo.svg.png' },
    { name: 'Amazon', src: '/uploads/Customer-logo_Amazon.png' },
    { name: 'Flipkart', src: '/uploads/flipkart-logo.webp' },
    { name: 'EXL Service', src: '/uploads/companies/EXL_Service_logo.png' },
    { name: 'Genpact', src: '/uploads/companies/Genpact_logo.svg.png' },
    { name: 'Wipro', src: '/uploads/companies/Wipro_new_logo.svg.png' },
    { name: 'Cognizant', src: '/uploads/companies/cognizant logo.jpg' },
    { name: 'Swiggy', src: '/uploads/swiggy-logo.svg' },
    { name: 'Zomato', src: '/uploads/companies/Zomato-logo.png' },
    { name: 'Meesho', src: '/uploads/companies/Meesho-Logo-Vector.svg-.png' },
    { name: 'Apollo Hospitals', src: '/uploads/apollo-hospitals-logo-png-transparent.png' },
    { name: 'Fortis', src: '/uploads/companies/Fortis-Logo.png' },
    { name: 'Axis Bank', src: '/uploads/companies/Axis_Bank_logo.svg.png' },
    { name: 'HDFC Bank', src: '/uploads/companies/HDFC-Bank-logo.png' },
    { name: 'Blue Dart', src: '/uploads/companies/Blue_Dart_logo_transparent.png' },
    { name: 'Tech Mahindra', src: '/uploads/companies/tech_mahindra.png' },
    { name: 'Morgan Stanley', src: '/uploads/companies/morgan_stanley.png' },
    { name: 'Nike', src: '/uploads/companies/nike.png' },
    { name: 'Adani', src: '/uploads/companies/adani.png' },
    { name: 'Jio', src: '/uploads/companies/jio.png' }
  ];

  const scrollerItems = logos;

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

  const marqueeStudents = [
    { name: 'Ritwick Mukherjee', company: 'EXL Service', image: '/uploads/internship/ritwick-mukherjee-exl-service.jpg' },
    { name: 'Kaushik Sen', company: 'Genpact', image: '/uploads/internship/kaushik-sen-genpact.jpg' },
    { name: 'Subhajit Roy', company: 'Deloitte', image: '/uploads/internship/subhajit-roy-deloitte.jpg' },
    { name: 'Debanjan Bhattacharya', company: 'EY', image: '/uploads/internship/debanjan-bhattacharya-ey.jpg' },
    { name: 'Sagnik Paul', company: 'PwC', image: '/uploads/internship/sagnik-paul-pwc.jpg' },
    { name: 'Ananya Chatterjee', company: 'KPMG', image: '/uploads/internship/ananya-chatterjee-kpmg.jpg' },
    { name: 'Riya Banerjee', company: 'Accenture', image: '/uploads/internship/riya-banerjee-accenture.jpg' },
    {
      name: 'Sohini Ghosh',
      company: 'Tata Consultancy Services',
      image: '/uploads/internship/sohini-ghosh-tata-consultancy-services.jpg'
    },
    { name: 'Priyanka Das', company: 'Infosys', image: '/uploads/internship/priyanka-das-infosys.jpg' },
    { name: 'Moumita Mukherjee', company: 'Wipro', image: '/uploads/internship/moumita-mukherjee-wipro.jpg' }
  ] as const;

  const col1 = marqueeStudents.filter((_, idx) => idx % 2 === 0);
  const col2 = marqueeStudents.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="internships-hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="hero-gradient absolute inset-0 bg-[linear-gradient(135deg,#143674,#7e4287,#ca5481)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_20%,rgba(38,193,211,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_75%_60%,rgba(249,248,113,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/35" />

        <div className="hero-particles absolute inset-0 opacity-70">
          {[
            { left: '8%', top: '18%', size: 2.5, delay: 0 },
            { left: '18%', top: '60%', size: 2, delay: 0.5 },
            { left: '28%', top: '34%', size: 1.5, delay: 1.1 },
            { left: '38%', top: '72%', size: 2, delay: 0.9 },
            { left: '52%', top: '20%', size: 1.75, delay: 0.2 },
            { left: '62%', top: '40%', size: 2.25, delay: 0.7 },
            { left: '74%', top: '26%', size: 1.5, delay: 1.3 },
            { left: '84%', top: '58%', size: 2.25, delay: 0.4 },
            { left: '90%', top: '30%', size: 1.75, delay: 1.0 },
            { left: '12%', top: '82%', size: 1.75, delay: 0.6 },
            { left: '44%', top: '52%', size: 1.25, delay: 1.4 },
            { left: '68%', top: '74%', size: 1.75, delay: 0.3 }
          ].map((p, idx) => (
            <span
              key={idx}
              className="hero-particle absolute rounded-full bg-white/70"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size * 4}px`,
                height: `${p.size * 4}px`,
                animationDelay: `${p.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1260px] px-4 py-6 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1.2fr_0.8fr] md:gap-8 lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
              INTERNSHIPS
            </div>

            <div className="mt-3 rounded-3xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl sm:mt-4 sm:p-7">
              <h1 className="text-[24px] font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
                Real Industry Experience for Future Business Leaders
              </h1>
              <p className="mt-2 text-xs leading-relaxed text-[#eaeeff] sm:mt-3 sm:text-base">
                Gain hands-on experience, work on real business projects, and build a career-ready skillset through IMAS
                internships.
              </p>

              <div className="mt-4 flex flex-row gap-3 sm:mt-5 sm:justify-center lg:justify-start">
                <Button
                  onClick={applyNow}
                  className="h-10 flex-1 rounded-xl bg-[#f9f871] px-4 text-sm font-semibold text-[#143674] hover:text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,248,113,0.35)] active:scale-[0.99] sm:h-11 sm:flex-none sm:px-6 sm:text-base"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  onClick={downloadBrochure}
                  className="h-10 flex-1 rounded-xl border-white/35 bg-white/5 px-4 text-sm font-semibold text-white/95 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(38,193,211,0.18)] sm:h-11 sm:flex-none sm:px-6 sm:text-base"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          <div className="order-3 md:hidden">
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
              <div className="flex w-max gap-4 px-4 py-3 animate-scroll-left">
                {[...marqueeStudents, ...marqueeStudents].map((a, i) => (
                  <div
                    key={`${a.name}-m-${i}`}
                    className="w-[180px] overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(0,0,0,0.20)]"
                  >
                    <div className="relative">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="h-52 w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement;
                          t.style.display = 'none';
                          const fallback = t.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="hidden h-52 w-full items-center justify-center bg-slate-100">
                        <Users className="h-10 w-10 text-slate-400" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-white font-bold text-sm leading-tight">{a.name}</div>
                        {companyLogoByName[a.company] ? (
                          <div className="mt-2 inline-flex items-center rounded-lg bg-white/90 px-2 py-1">
                            <img
                              src={companyLogoByName[a.company]}
                              alt={a.company}
                              className="h-4 w-auto max-w-[140px] object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="text-white/90 text-xs">{a.company}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block max-w-[420px] ml-auto">
            <div className="grid grid-cols-2 gap-3 h-[520px]">
              {[col1, col2].map((col, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl">
                  <div className={`${idx % 2 === 0 ? 'animate-vertical-up' : 'animate-vertical-down'} space-y-4`}>
                    {[...col, ...col].map((a, i) => (
                      <div
                        key={`${a.name}-${i}`}
                        className="rounded-2xl bg-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={a.image}
                            alt={a.name}
                            className="w-full h-56 object-cover"
                            loading="lazy"
                            onError={(e) => {
                              const t = e.currentTarget as HTMLImageElement;
                              t.style.display = 'none';
                              const fallback = t.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-56 bg-slate-100 hidden items-center justify-center">
                            <Users className="h-10 w-10 text-slate-400" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="text-white font-bold text-sm leading-tight">{a.name}</div>
                            {companyLogoByName[a.company] ? (
                              <div className="mt-2 inline-flex items-center rounded-lg bg-white/90 px-2 py-1">
                                <img
                                  src={companyLogoByName[a.company]}
                                  alt={a.company}
                                  className="h-4 w-auto max-w-[150px] object-contain"
                                  loading="lazy"
                                />
                              </div>
                            ) : (
                              <div className="text-white/90 text-xs">{a.company}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 md:order-3 md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white backdrop-blur-md">
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="hidden text-xs font-semibold uppercase tracking-wide text-gray-600 sm:block">
                  Hiring Partners
                </div>
                <div className="relative flex-1 overflow-hidden">
                  <div className="hero-logo-track flex w-max items-center gap-8">
                    {[...scrollerItems, ...scrollerItems].map((l, idx) => (
                      <div key={`${l.name}-${idx}`} className="flex items-center">
                        <img
                          src={l.src}
                          alt={l.name}
                          loading="lazy"
                          className="h-4 w-auto max-w-[120px] object-contain opacity-100 sm:h-6"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-gradient {
          background-size: 200% 200%;
          animation: heroGradientShift 14s ease-in-out infinite;
        }

        @keyframes heroGradientShift {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }

        .hero-particle {
          filter: drop-shadow(0 0 10px rgba(38, 193, 211, 0.25));
          animation: heroParticleFloat 6s ease-in-out infinite;
        }

        @keyframes heroParticleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.55; }
          50% { transform: translateY(-14px); opacity: 0.9; }
        }

        .hero-streak {
          animation: heroStreakUp 6.8s ease-in-out infinite;
          opacity: 0.9;
        }

        @keyframes heroStreakUp {
          0% { transform: translateY(60px) rotate(12deg); opacity: 0.0; }
          20% { opacity: 0.85; }
          50% { transform: translateY(-40px) rotate(12deg); opacity: 0.65; }
          80% { opacity: 0.75; }
          100% { transform: translateY(-140px) rotate(12deg); opacity: 0.0; }
        }

        .hero-network {
          animation: heroNetworkFloat 8.5s ease-in-out infinite;
        }

        @keyframes heroNetworkFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .hero-node {
          transform-origin: center;
          animation: heroNodePulse 3.2s ease-in-out infinite;
        }

        .hero-node:nth-child(2n) { animation-delay: 0.4s; }
        .hero-node:nth-child(3n) { animation-delay: 0.8s; }

        @keyframes heroNodePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .hero-avatars {
          animation: heroAvatarsFloat 7.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-avatars {
            animation: none;
          }
        }

        @keyframes heroAvatarsFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .hero-logo-track {
          animation: heroLogosScroll 18s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-logo-track {
            animation: none;
          }
        }

        @keyframes heroLogosScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
