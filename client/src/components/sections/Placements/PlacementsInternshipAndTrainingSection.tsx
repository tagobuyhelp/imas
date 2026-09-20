import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { Briefcase, CheckCircle, ClipboardList, GraduationCap, Users } from 'lucide-react';

export function PlacementsInternshipAndTrainingSection() {
  const internshipBenefits = [
    'Exposure to real corporate projects',
    'Practical learning and industry insights',
    'Professional networking opportunities',
    'Increased chances of pre-placement offers (PPO)'
  ];

  const careerInitiatives = [
    'Resume and LinkedIn profile building',
    'Aptitude and analytical skill development',
    'Mock interviews and group discussions',
    'Corporate communication training',
    'Industry expert sessions and guest lectures',
    'Professional certification programmes'
  ];

  const placementProcess = [
    'Student Registration – Students submit their placement profiles to the Placement Cell.',
    'Corporate Invitations – Companies are invited for campus recruitment drives.',
    'Pre-Placement Talks – Recruiters present company details and job roles.',
    'Selection Process – Includes aptitude tests, group discussions, and interviews.',
    'Final Offers – Selected students receive job offers from recruiting companies.'
  ];

  const whyRecruit = [
    'Industry-oriented management training',
    'Analytical and problem-solving capabilities',
    'Practical exposure through internships and projects',
    'Professional communication and leadership skills',
    'Adaptability to modern business environments'
  ];

  return (
    <section id="placements-training" className="py-12 bg-white">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Briefcase className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                <CardTitle className="text-lg text-gray-900">Internship Programme</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                All PGDM students at IMAS Business School participate in industry internships, which play a vital role in building professional experience.
              </p>
              <div className="text-sm font-semibold text-gray-800 mb-2">Benefits of internships include:</div>
              <ul className="space-y-2 text-gray-700">
                {internshipBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <GraduationCap className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                <CardTitle className="text-lg text-gray-900">Career Development &amp; Employability Training</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                IMAS Business School provides continuous career preparation support through structured training programmes.
              </p>
              <div className="text-sm font-semibold text-gray-800 mb-2">Career Development Initiatives</div>
              <ul className="space-y-2 text-gray-700">
                {careerInitiatives.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <ClipboardList className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                <CardTitle className="text-lg text-gray-900">Placement Process</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">The placement process for PGDM students follows a structured approach.</p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                {placementProcess.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Users className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                <CardTitle className="text-lg text-gray-900">Why Recruit PGDM Graduates from IMAS Business School</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Organisations recruit PGDM graduates from IMAS because they possess:</p>
              <ul className="space-y-2 text-gray-700">
                {whyRecruit.map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
