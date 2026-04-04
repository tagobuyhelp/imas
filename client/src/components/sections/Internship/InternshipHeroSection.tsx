import React from 'react';
import { Button } from '../../ui/button';
import { applyNow, downloadBrochure } from '../../../lib/utils';

export function InternshipHeroSection() {
  const logos = [
    { name: 'Deloitte', src: '/uploads/deloitte-logo-416x274.avif' },
    { name: 'EY' },
    { name: 'PwC', src: '/uploads/companies/PwC_Company_Logo.svg.png' },
    { name: 'KPMG', src: '/uploads/companies/KPMG.svg.png' },
    { name: 'Accenture' },
    { name: 'Tata Consultancy Services', src: '/uploads/companies/Tata_Consultancy_Services_old_logo.svg.png' },
    { name: 'Infosys', src: '/uploads/companies/infosys.png' },
    { name: 'Amazon', src: '/uploads/Customer-logo_Amazon.png' }
  ] as const;

  const scrollerItems = logos;

  const internshipStudents = [
    { src: '/uploads/internship/ritwick-mukherjee-exl-service.jpg' },
    { src: '/uploads/internship/subhajit-roy-deloitte.jpg' },
    { src: '/uploads/internship/riya-banerjee-accenture.jpg' },
    { src: '/uploads/internship/tuhin-bhattacharya-flipkart.jpg' }
  ] as const;

  return (
    <section className="relative overflow-hidden">
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

      <div className="relative mx-auto max-w-[1260px] px-4 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
              INTERNSHIPS
            </div>

            <div className="mt-4 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:p-7">
              <h1 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
                Real Industry Experience for Future Business Leaders
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#eaeeff] sm:text-base">
                Gain hands-on experience, work on real business projects, and build a career-ready skillset through IMAS
                internships.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  onClick={applyNow}
                  className="h-11 rounded-xl bg-[#f9f871] px-6 text-base font-semibold text-[#143674] hover:text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,248,113,0.35)] active:scale-[0.99]"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  onClick={downloadBrochure}
                  className="h-11 rounded-xl border-white/35 bg-white/5 px-6 text-base font-semibold text-white/95 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(38,193,211,0.18)]"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          <div className="order-3 mx-auto w-[80%] md:w-[60%] max-w-xl lg:order-2 lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <img
                src="/uploads/internship/hero-main-visual.webp"
                alt="Young professional working on laptop"
                className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[420px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(20,54,116,0.35),transparent_40%,rgba(202,84,129,0.18))]" />

              <div className="hero-streak pointer-events-none absolute -bottom-1/2 left-10 h-[160%] w-24 rotate-12 bg-[linear-gradient(180deg,transparent,rgba(38,193,211,0.35),transparent)] blur-md" />

              <svg
                className="hero-network pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 600 400"
                preserveAspectRatio="none"
              >
                <g opacity="0.9">
                  <path d="M90 120 L210 90 L320 150 L470 110" stroke="rgba(38,193,211,0.55)" strokeWidth="1.4" fill="none" />
                  <path d="M140 260 L260 220 L360 260 L520 220" stroke="rgba(234,238,255,0.35)" strokeWidth="1.2" fill="none" />
                  <path d="M210 90 L260 220" stroke="rgba(249,248,113,0.22)" strokeWidth="1.2" fill="none" />
                  <path d="M320 150 L360 260" stroke="rgba(38,193,211,0.25)" strokeWidth="1.2" fill="none" />
                </g>
                {[
                  { cx: 90, cy: 120, r: 4 },
                  { cx: 210, cy: 90, r: 5 },
                  { cx: 320, cy: 150, r: 4 },
                  { cx: 470, cy: 110, r: 5 },
                  { cx: 140, cy: 260, r: 4 },
                  { cx: 260, cy: 220, r: 5 },
                  { cx: 360, cy: 260, r: 4 },
                  { cx: 520, cy: 220, r: 5 }
                ].map((n, idx) => (
                  <g key={idx} className="hero-node">
                    <circle cx={n.cx} cy={n.cy} r={n.r} fill="rgba(38,193,211,0.9)" />
                    <circle cx={n.cx} cy={n.cy} r={n.r * 2.5} fill="rgba(38,193,211,0.16)" />
                  </g>
                ))}
              </svg>

              <div className="hero-avatars pointer-events-none absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                  <div className="-space-x-3">
                    {internshipStudents.map((s, idx) => (
                      <img
                        key={idx}
                        src={s.src}
                        alt="IMAS internship student"
                        loading="lazy"
                        className="inline-block h-9 w-9 rounded-full object-cover ring-2 ring-white/20 sm:h-10 sm:w-10"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-3 lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(20,54,116,0.85),transparent)]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(90deg,transparent,rgba(20,54,116,0.85))]" />

              <div className="flex items-center gap-3 px-4 py-2.5">
                <div className="hidden text-xs font-semibold uppercase tracking-wide text-white/70 sm:block">
                  Hiring Partners
                </div>
                <div className="relative flex-1 overflow-hidden">
                  <div className="hero-logo-track flex w-max items-center gap-8">
                    {[...scrollerItems, ...scrollerItems].map((l, idx) => (
                      <div key={`${l.name}-${idx}`} className="flex items-center">
                        {'src' in l ? (
                          <img
                            src={l.src}
                            alt={l.name}
                            loading="lazy"
                            className="h-4  w-auto max-w-[110px] opacity-70 grayscale brightness-0 invert sm:h-6"
                          />
                        ) : (
                          <span className="text-xs font-semibold text-white/70">{l.name}</span>
                        )}
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
