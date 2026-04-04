import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export function InternshipAdvantagesSection() {
  const advantages = [
    'Industry-driven curriculum',
    'Corporate internship opportunities',
    'Real business projects',
    'Professional mentoring',
    'Pathway to full-time employment'
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1260px] px-4">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <ShieldCheck className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
              <CardTitle className="text-lg text-gray-900">Why Internships at IMAS Business School Stand Out</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Internships at IMAS are designed to ensure students gain practical exposure, industry experience, and
              career clarity.
            </p>
            <div className="mt-4 text-sm font-semibold text-gray-800">Key Advantages</div>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-gray-700 sm:grid-cols-2">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mt-0.5 h-4 w-4`} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
