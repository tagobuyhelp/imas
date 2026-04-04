import React from 'react';
import { CheckCircle } from 'lucide-react';

export function InternshipBenefitsSection() {
  const benefits = [
    'Real-world corporate exposure',
    'Hands-on industry experience',
    'Development of professional skills',
    'Networking with industry professionals',
    'Improved employability',
    'Opportunity for pre-placement offers'
  ];

  return (
    <section className="bg-gradient-to-br from-[#143674] via-[#00bbcc] to-[#6dfacd] px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-xl font-semibold">What You Gain</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            <img
              src="/uploads/working/hero_image4.jpg"
              alt="Professional success and growth"
              className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[620px]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.55))]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_35%_15%,rgba(109,250,205,0.25),transparent_60%)]" />
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
            <ul className="space-y-3 text-sm text-[#e6f7ff]">
              {benefits.map((b, idx) => {
                const isHighlighted = b === 'Opportunity for pre-placement offers';
                return (
                  <li
                    key={b}
                    className={`benefit-item flex items-start gap-2 ${
                      isHighlighted ? 'rounded-xl border border-white/20 bg-white/10 px-3 py-2' : ''
                    }`}
                    style={{ animationDelay: `${idx * 90}ms` }}
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 text-white drop-shadow-[0_0_10px_rgba(109,250,205,0.45)]" />
                    <span className={isHighlighted ? 'font-semibold text-white' : ''}>{b}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .benefit-item {
          opacity: 0;
          transform: translateY(6px);
          animation: benefitIn 420ms ease-out forwards;
        }

        @keyframes benefitIn {
          to { opacity: 1; transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
