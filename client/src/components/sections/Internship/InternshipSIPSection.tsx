import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

export function InternshipSIPSection() {
  const objectives = [
    'Exposure to real corporate work environments',
    'Development of problem-solving and analytical skills',
    'Understanding business operations and decision-making',
    'Building professional networks',
    'Enhancing employability and career readiness'
  ];

  const imageWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    const el = imageWrapRef.current;
    if (!el) return;

    let raf: number | null = null;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = (center - viewport / 2) / viewport;
      const translate = Math.max(-16, Math.min(16, -progress * 16));
      el.style.setProperty('--sip-parallax', `${translate}px`);
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="sip" className="bg-gradient-to-br from-[#143674] via-[#4c488f] to-[#7c5aa7] px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold text-white mb-5 sm:text-xl sm:mb-6">Summer Internship Programme (SIP)</h2>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-10">
          <div
            ref={imageWrapRef}
            className="relative overflow-hidden rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          >
            <img
              src="/uploads/TDK_Industries_exposure_for_PGDM_students.jpeg"
              alt="Students in a corporate meeting environment"
              className="h-[210px] w-full object-cover sm:h-[320px] lg:h-[420px]"
              style={{ transform: 'translateY(var(--sip-parallax, 0px))' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.55))]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_70%_20%,rgba(38,193,211,0.22),transparent_60%)]" />
          </div>

          <div className="relative rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md sm:p-5">
            <div className="absolute right-3 top-[-12px] md:top-[-16px] inline-flex items-center rounded-full bg-[#f9f871] px-3 py-1 text-[11px] font-semibold text-[#143674] shadow-[0_0_24px_rgba(249,248,113,0.25)] sm:right-4 sm:top-4 sm:text-xs">
              Pre-Placement Offers (PPO) Available
            </div>

            <p className="text-xs text-[#eaeeff] pr-0 sm:pr-36 sm:text-sm">
              An integral part of the PGDM curriculum where students work on real-world business challenges and apply
              theoretical knowledge in practical scenarios.
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-[#eaeeff] sm:mt-5 sm:space-y-2 sm:text-sm">
              {objectives.map((o, idx) => (
                <li
                  key={o}
                  className="sip-bullet flex items-start gap-2"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 text-[#26c1d3]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .sip-bullet {
          opacity: 0;
          transform: translateY(6px);
          animation: sipBulletIn 420ms ease-out forwards;
        }

        @keyframes sipBulletIn {
          to { opacity: 1; transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
