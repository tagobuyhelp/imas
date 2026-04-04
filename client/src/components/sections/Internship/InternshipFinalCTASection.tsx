import React from 'react';
import { Button } from '../../ui/button';
import { IMAS_CONTACT } from '../../../lib/constants';
import { applyNow } from '../../../lib/utils';

export function InternshipFinalCTASection() {
  const talkToCounselor = () => {
    const phone = IMAS_CONTACT.PHONE.replace(/\s/g, '');
    window.location.href = `tel:${phone}`;
  };

  return (
    <section id="final-cta" className="relative overflow-hidden px-4 py-12 text-center text-white sm:py-16">
      <div className="absolute inset-0">
        <div className="final-cta-gradient absolute inset-0 bg-[linear-gradient(135deg,#143674,#6e1628)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_30%,rgba(249,248,113,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_80%,rgba(38,193,211,0.14),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-xl font-bold sm:text-2xl">Start Your Career Journey Today</h2>
        <p className="mt-2 text-xs text-[#eaeeff] sm:mt-3 sm:text-sm">
          Join IMAS and gain real-world experience before you graduate.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:mt-6">
          <Button
            onClick={applyNow}
            className="h-11 rounded-xl bg-[#f9f871] text-[#143674] hover:text-white text-sm font-semibold shadow-[0_16px_55px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(249,248,113,0.30)] active:scale-[0.99] sm:h-12 sm:text-base"
          >
            Apply Now
          </Button>
          <Button
            variant="outline"
            onClick={talkToCounselor}
            className="h-11 rounded-xl border border-white/60 bg-white/5 text-white text-sm font-semibold transition-all duration-300 hover:bg-white/10 active:scale-[0.99] sm:h-12 sm:text-base"
          >
            Talk to Counselor
          </Button>
        </div>
      </div>

      <style>{`
        .final-cta-gradient {
          background-size: 200% 200%;
          animation: finalCtaShift 14s ease-in-out infinite;
        }

        @keyframes finalCtaShift {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
      `}</style>
    </section>
  );
}
