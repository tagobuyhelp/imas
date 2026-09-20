import React, { useEffect, useRef, useState } from 'react';
import { BarChart4, Briefcase, FileText, GraduationCap, UserRoundCheck } from 'lucide-react';

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function InternshipProcessSection() {
  const steps: ProcessStep[] = [
    {
      id: 'orientation',
      title: 'Internship Orientation',
      description: 'Students receive guidance on internship preparation',
      icon: GraduationCap
    },
    {
      id: 'submission',
      title: 'Profile Submission',
      description: 'Submit resumes and specialisation preferences',
      icon: FileText
    },
    {
      id: 'selection',
      title: 'Corporate Selection Process',
      description: 'Companies conduct interviews or selection tests',
      icon: UserRoundCheck
    },
    {
      id: 'assignment',
      title: 'Internship Assignment',
      description: 'Students join organisations for project-based internships',
      icon: Briefcase
    },
    {
      id: 'evaluation',
      title: 'Project Evaluation',
      description: 'Present internship project and learning outcomes',
      icon: BarChart4
    }
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))[0];

        const idxStr = (visible?.target as HTMLElement | undefined)?.dataset?.stepIndex;
        if (idxStr == null) return;
        const idx = Number(idxStr);
        if (!Number.isFinite(idx)) return;
        setActiveIndex(idx);
      },
      { threshold: prefersReducedMotion ? 0.2 : 0.55 }
    );

    const nodes = Array.from(el.querySelectorAll<HTMLElement>('[data-step-index]'));
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  const activeStep = steps[activeIndex] ?? steps[0];
  const ActiveIcon = activeStep?.icon ?? GraduationCap;

  return (
    <section id="internship-process" ref={sectionRef} className="bg-white px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#444655]">Simple 5-Step Process</div>
          <h2 className="mt-2 text-lg font-semibold text-[#143674] mb-6 sm:text-xl sm:mb-8">Internship Process</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-5 sm:gap-6">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isActive = idx === activeIndex;
                const isLast = idx === steps.length - 1;

                return (
                  <div
                    key={s.id}
                    className={`relative flex items-start gap-4 rounded-xl p-2 transition-colors ${
                      isActive ? 'bg-[#f7f8ff]' : ''
                    }`}
                    data-step-index={idx}
                  >
                    <div className="relative">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white transition-all duration-300 sm:h-10 sm:w-10 ${
                          isActive
                            ? 'bg-[#26c1d3] shadow-[0_0_0_4px_rgba(38,193,211,0.18),0_10px_25px_rgba(38,193,211,0.18)]'
                            : 'bg-[#143674]'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      {!isLast && (
                        <div className="absolute left-1/2 top-9 h-[calc(100%+22px)] w-px -translate-x-1/2 bg-[#dfe6ff] sm:top-10 sm:h-[calc(100%+24px)]" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-2">
                        <Icon className={`${isActive ? 'text-[#26c1d3]' : 'text-[#143674]'} mt-0.5 h-4 w-4`} />
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-[#143674] sm:text-base">{s.title}</h3>
                          <p className="mt-1 text-xs text-[#444655] sm:text-sm">{s.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-24 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-[0_14px_40px_rgba(20,54,116,0.10)]">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#444655]">Currently Viewing</div>
              <div className="mt-3 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26c1d3]/15 text-[#143674] font-semibold">
                  {activeIndex + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <ActiveIcon className="h-4 w-4 text-[#26c1d3]" />
                    <div className="font-semibold text-[#143674]">{activeStep.title}</div>
                  </div>
                  <div className="mt-2 text-sm text-[#444655]">{activeStep.description}</div>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-[#dfe6ff]" />
              <div className="mt-4 text-sm text-[#444655]">
                Scroll to highlight each step in order. The process is designed to be simple and guided.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
