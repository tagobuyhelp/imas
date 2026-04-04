import React, { useEffect, useMemo, useRef, useState } from 'react';

type CountUpOptions = {
  start: boolean;
  target: number;
  durationMs?: number;
};

function useCountUp({ start, target, durationMs = 900 }: CountUpOptions) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    if (target <= 0) {
      setValue(0);
      return;
    }

    const t0 = performance.now();
    const from = 0;
    const to = target;

    const tick = (t: number) => {
      const elapsed = Math.min(durationMs, t - t0);
      const progress = elapsed / durationMs;
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + (to - from) * eased);
      setValue(next);
      if (elapsed < durationMs) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    setValue(0);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [durationMs, start, target]);

  return value;
}

type StatCard = {
  id: string;
  microLabel: string;
  display: (animatedValue?: number) => string;
  label: string;
  animateTarget?: number;
};

export function InternshipHighlightsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats: StatCard[] = useMemo(
    () => [
      {
        id: 'opportunities',
        microLabel: 'Opportunities',
        display: (v) => `${Math.min(v ?? 0, 500)}+`,
        label: 'Internship Opportunities Annually',
        animateTarget: 500
      },
      {
        id: 'partners',
        microLabel: 'Partners',
        display: (v) => `${Math.min(v ?? 0, 100)}+`,
        label: 'Corporate Partners',
        animateTarget: 100
      },
      {
        id: 'duration',
        microLabel: 'Duration',
        display: () => '6–8 Weeks',
        label: 'Internship Duration'
      },
      {
        id: 'mandatory',
        microLabel: 'Requirement',
        display: () => 'Mandatory',
        label: 'For PGDM Students'
      }
    ],
    []
  );

  const opportunitiesValue = useCountUp({ start: isVisible, target: 500, durationMs: 1100 });
  const partnersValue = useCountUp({ start: isVisible, target: 100, durationMs: 900 });

  return (
    <section ref={sectionRef} className="bg-[#143674] py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Internship Highlights</h2>
          <p className="mt-2 text-xs text-[#eaeeff] sm:text-base">A quick snapshot of scale and credibility</p>
        </div>

        <div className="relative mt-7 sm:mt-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-[linear-gradient(90deg,transparent,rgba(20,54,116,1))] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(20,54,116,1))] sm:hidden" />
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {stats.map((s) => {
              const animatedValue =
                s.id === 'opportunities' ? opportunitiesValue : s.id === 'partners' ? partnersValue : undefined;

              return (
                <div
                  key={s.id}
                  className="group h-[110px] w-[82%] min-w-[200px] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:h-auto sm:w-auto sm:min-w-0 sm:shrink sm:snap-align-none sm:p-5"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-[#eaeeff]/80">
                      {s.microLabel}
                    </div>

                    <div className="relative -mt-1">
                      <div className="pointer-events-none absolute -left-2 -top-3 h-16 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,248,113,0.18),transparent_65%)] blur-md" />
                      <div className="text-2xl font-extrabold tracking-tight text-[#f9f871] sm:text-3xl">
                        {s.display(animatedValue)}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#eaeeff] sm:text-sm">{s.label}</div>
                      <div className="mt-1.5 h-px w-12 bg-white/10 sm:mt-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 hidden justify-center sm:flex">
          <div className="h-px w-40 bg-[linear-gradient(90deg,transparent,rgba(38,193,211,0.55),transparent)]" />
        </div>
      </div>
    </section>
  );
}
