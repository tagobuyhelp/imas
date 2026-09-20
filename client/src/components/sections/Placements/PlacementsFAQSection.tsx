import React from 'react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

export function PlacementsFAQSection() {
  const faqs = [
    {
      q: 'Does IMAS Business School provide placement assistance for PGDM students?',
      a: 'Yes. IMAS Business School provides comprehensive placement assistance for PGDM students through its Corporate Relations & Placement Cell. The institute organizes campus recruitment drives, internships, industry networking events, and career development programmes to support students in securing employment opportunities.'
    },
    {
      q: 'What is the average salary for PGDM graduates at IMAS Business School?',
      a: 'The average salary for PGDM graduates typically ranges between ₹ 4.5 LPA and ₹ 6 LPA, depending on specialisation, skill set, and recruiting company.'
    },
    {
      q: 'Which PGDM specialisation offers the best placement opportunities?',
      a: 'Specialisations such as Business Analytics, Artificial Intelligence & Data Science, Fintech, and Logistics & Supply Chain Management currently offer strong placement opportunities due to increasing demand for data-driven and technology-focused roles.'
    },
    {
      q: 'Which companies recruit PGDM students from IMAS Business School?',
      a: 'Recruiters include companies from sectors such as IT services, consulting, banking, healthcare, logistics, aviation, and e-commerce. These companies look for graduates with strong analytical, managerial, and technical skills.'
    },
    {
      q: 'How does IMAS Business School prepare PGDM students for placements?',
      a: 'The institute prepares students through structured training programmes that include resume and LinkedIn profile development, mock interviews and group discussions, communication and presentation skills training, aptitude and analytical skill development, and industry workshops and guest lectures.'
    },
    {
      q: 'Are internships included in the PGDM programme?',
      a: 'Yes. PGDM students participate in industry internships and live projects, which provide practical exposure to real business environments and improve employability.'
    },
    {
      q: 'What job roles are offered to PGDM graduates during campus placements?',
      a: 'Common roles offered during campus placements include Management Trainee, Business Analyst, Marketing Executive, Financial Analyst, HR Executive, Supply Chain Analyst, Data Analyst, and Healthcare Operations Executive.'
    },
    {
      q: 'Can PGDM students from IMAS Business School work in multinational companies?',
      a: 'Yes. PGDM graduates with strong skills and industry exposure may receive opportunities with multinational corporations operating in India and global markets.'
    },
    {
      q: 'What industries recruit PGDM graduates?',
      a: 'PGDM graduates are recruited across multiple sectors, including Information Technology, Banking and Financial Services, Consulting, Healthcare Management, Logistics and Supply Chain, and E-commerce and Retail.'
    },
    {
      q: 'Is there a dedicated placement cell at IMAS Business School?',
      a: 'Yes. IMAS Business School has a Corporate Relations & Placement Cell that actively connects students with recruiters, organizes placement drives, and facilitates internships.'
    },
    {
      q: 'How early does placement preparation start for PGDM students?',
      a: 'Placement preparation begins from the first year of the PGDM programme, with training sessions, industry exposure, and skill development workshops conducted throughout the course.'
    },
    {
      q: 'What skills improve placement chances for PGDM students?',
      a: 'Recruiters look for graduates with skills such as analytical thinking, communication and presentation abilities, data interpretation and digital tools knowledge, leadership and teamwork, and problem-solving and decision-making.'
    },
    {
      q: 'Are startups and technology companies invited for campus recruitment?',
      a: 'Yes. In addition to established corporations, startups, fintech companies, analytics firms, and technology-driven businesses also recruit PGDM graduates.'
    },
    {
      q: 'Can PGDM students apply for jobs outside campus placements?',
      a: 'Yes. Students are encouraged to explore both campus recruitment opportunities and off-campus job applications, which increases their chances of securing the best career opportunities.'
    },
    {
      q: 'Why should students choose IMAS Business School for PGDM placements?',
      a: 'Students choose IMAS Business School because of industry-aligned PGDM specialisations, strong corporate partnerships, internship-driven learning, professional skill development training, and dedicated placement support. These factors help students build successful careers in management, analytics, technology, finance, and healthcare sectors.'
    }
  ];

  return (
    <section id="placements-faq" className="py-12 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center mb-8">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 py-2 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">FAQ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
              <summary className="cursor-pointer text-sm font-semibold text-gray-900">{f.q}</summary>
              <div className="mt-2 text-sm text-gray-700 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
