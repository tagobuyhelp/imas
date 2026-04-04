import React, { useEffect, useRef, useState } from 'react';
import { BadgeDollarSign, BarChart4, Brain, Briefcase, Cpu, Package, Plane, ShoppingCart, Stethoscope } from 'lucide-react';

export function InternshipIndustriesSection() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const clearTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (clearTimerRef.current) window.clearTimeout(clearTimerRef.current);
    };
  }, []);

  const activate = (label: string) => {
    setActiveLabel(label);
    if (clearTimerRef.current) window.clearTimeout(clearTimerRef.current);
    clearTimerRef.current = window.setTimeout(() => setActiveLabel(null), 1400);
  };

  const industries = [
    { label: 'Information Technology', icon: Cpu },
    { label: 'Banking & Financial Services', icon: BadgeDollarSign },
    { label: 'Consulting', icon: BarChart4 },
    { label: 'Healthcare & Hospitals', icon: Stethoscope },
    { label: 'E-commerce & Retail', icon: ShoppingCart },
    { label: 'Logistics & Supply Chain', icon: Package },
    { label: 'Aviation & Hospitality', icon: Plane },
    { label: 'Data Analytics & AI', icon: Brain }
  ] as const;

  return (
    <section className="bg-[#f1f1e6] px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-semibold text-[#143674] mb-6">Explore Internship Industries</h2>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(241,241,230,1))]" />
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {industries.map((i) => {
              const Icon = i.icon;
              const isActive = activeLabel === i.label;
              return (
                <button
                  key={i.label}
                  type="button"
                  onClick={() => activate(i.label)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      activate(i.label);
                    }
                  }}
                  className="group relative min-w-[140px] h-[140px] w-[160px] shrink-0 snap-start bg-white rounded-xl shadow-sm flex flex-col items-center justify-center text-center p-3 border border-[#eaeeff] transition-all duration-300 active:scale-[0.99] sm:min-w-0 sm:w-auto sm:hover:scale-[1.05] sm:hover:bg-[#eaeeff] sm:hover:border-[#26c1d3]/40 sm:hover:shadow-[0_14px_35px_rgba(38,193,211,0.12)]"
                >
                  <div className="mb-3 rounded-xl bg-[#f7f8ff] p-3 transition-colors duration-300 sm:group-hover:bg-[#26c1d3]/10">
                    <Icon className="h-7 w-7 text-[#2e7bb3] transition-colors duration-300 sm:group-hover:text-[#26c1d3]" />
                  </div>
                  <p className="text-sm font-medium text-[#143674] leading-tight">{i.label}</p>
                  <div
                    className={`pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#26c1d3]/25 bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-[#143674] shadow-[0_10px_25px_rgba(20,54,116,0.12)] transition-all duration-200 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}
                  >
                    Top hiring domain
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
