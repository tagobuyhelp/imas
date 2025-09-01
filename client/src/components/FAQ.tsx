import React, { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    id: 'important-faqs',
    title: 'Important FAQs',
    items: [
      {
        question: 'Why choose IMAS Kolkata for MBA Global?',
        answer: 'IMAS Kolkata offers a unique 2-year MBA Global program that blends India + UK education. You spend your first year at IMAS Kolkata (AICTE-approved PGDM + UK\'s EDLSMP diploma) and your second year at a leading UK partner university. This structure saves up to ₹12 lakhs compared to traditional UK MBAs while providing global exposure, international internships, and post-study work opportunities.'
      },
      {
        question: 'Is this a fully residential program?',
        answer: 'The program is non-residential in India (students may choose hostel facilities provided by IMAS). The second year in the UK is fully residential, as per the partner university\'s norms.'
      },
      {
        question: 'What career opportunities does this program open?',
        answer: 'Graduates secure global careers in consulting, finance, technology, healthcare, supply chain, and entrepreneurship with packages ranging between ₹23L to ₹55L depending on the role and industry.'
      }
    ]
  },
  {
    id: 'degree',
    title: 'Degree',
    items: [
      {
        question: 'Does this program offer a degree or diploma?',
        answer: 'Yes. Students receive:\n• Year 1 (India): PGDM (AICTE-approved) + Extended Diploma in Leadership & Strategic Management (EDLSMP) from Edexcel BTEC, UK.\n• Year 2 (UK): MBA degree from the chosen UK partner university (globally recognized).'
      },
      {
        question: 'Are UK MBA degrees globally valid?',
        answer: 'Yes. The UK MBA degree is recognized and respected worldwide, enhancing career prospects across India, Europe, the Middle East and North America.'
      }
    ]
  },
  {
    id: 'eligibility-criteria',
    title: 'Eligibility Criteria',
    items: [
      {
        question: 'What is the eligibility criteria for MBA Global?',
        answer: '• Graduation with 70% or above (2022, 2023, 2024, 2025 pass-outs eligible).\n• Strong academic background and willingness to pursue global careers.'
      },
      {
        question: 'Do I need to take management entrance exams like CAT/XAT/GMAT?',
        answer: 'For admission into IMAS (Year 1), valid scores in CAT/XAT/CMAT/MAT/ATMA/CUET are accepted. For UK universities, English proficiency tests (IELTS) may be required. IMAS provides IELTS preparation support.'
      },
      {
        question: 'Is there an age limit for entry?',
        answer: 'No, there is no strict age limit. However, the program is designed primarily for recent graduates and early-career professionals.'
      }
    ]
  },
  {
    id: 'application',
    title: 'Application',
    items: [
      {
        question: 'When can I apply for MBA Global?',
        answer: 'Applications open in early January and continue until seats are filled. Early applications are encouraged due to limited intake and scholarship opportunities.'
      },
      {
        question: 'What is the application process?',
        answer: '1. Submit the online application on www.imas.ac.in.\n2. Upload academic transcripts and entrance test scores.\n3. Shortlisted candidates will be invited for Personal Interview.\n4. Admission offer letters are rolled out in cycles.'
      },
      {
        question: 'What is the fee for the program?',
        answer: '• Year 1 (IMAS Kolkata): ₹3,66,600\n• Year 2 (UK): £10,000–£18,000 (varies by university) + approx. £12,000 living expenses.'
      },
      {
        question: 'Can I strengthen my application?',
        answer: 'Yes. Highlight:\n• Academic performance (70%+ marks preferred).\n• Extra-curriculars, internships, or leadership activities.\n• A strong Statement of Purpose (SOP) showcasing your global career vision.'
      }
    ]
  },
  {
    id: 'personal-interview',
    title: 'Personal Interview',
    items: [
      {
        question: 'How will the interview be conducted?',
        answer: 'Interviews are conducted online (Zoom/Google Meet) or on-campus at IMAS.'
      },
      {
        question: 'What kind of questions should I expect?',
        answer: 'Expect questions about:\n• Your academic & career goals\n• Awareness of global business trends\n• Leadership & problem-solving situations\n• Why you want to pursue an international MBA'
      },
      {
        question: 'How can I prepare?',
        answer: 'IMAS shares PI prep guides and mock interview resources with shortlisted candidates.'
      }
    ]
  },
  {
    id: 'admissions',
    title: 'Admissions',
    items: [
      {
        question: 'When do classes start?',
        answer: 'The MBA Global program begins in July/August every year (as per IMAS academic calendar).'
      },
      {
        question: 'How can I confirm my admission?',
        answer: 'Once selected, you must pay the admission fee within the given deadline and submit required documents.'
      },
      {
        question: 'Can I defer my admission?',
        answer: 'Yes, deferral is allowed on a case-to-case basis for one academic year with valid reasons.'
      }
    ]
  },
  {
    id: 'program-and-outcome',
    title: 'Program And Outcome',
    items: [
      {
        question: 'What curriculum will be covered?',
        answer: '• Year 1 (India): PGDM + EDLSMP covering leadership, strategy, finance, HR, operations, analytics, and global business management.\n• Year 2 (UK): MBA Top-Up (research dissertation + advanced management courses).'
      },
      {
        question: 'What kind of jobs can I expect after graduation?',
        answer: 'Roles include:\n• Business Analyst, Management Consultant, Marketing Manager, Financial Analyst, HR Manager, Operations Manager, Supply Chain Manager, Entrepreneur, International Trade Specialist.'
      },
      {
        question: 'Is there an exchange program?',
        answer: 'Yes. IMAS offers international immersion in Singapore, Dubai, Thailand, and Malaysia in addition to UK study.'
      }
    ]
  },
  {
    id: 'financing-and-scholarships',
    title: 'Financing And Scholarships',
    items: [
      {
        question: 'What financing options are available?',
        answer: 'IMAS partners with leading banks for education loans covering tuition + living expenses. Flexible EMIs are available.'
      },
      {
        question: 'What scholarships are offered?',
        answer: '• IMAS Merit Scholarship 2025 – for top-performing applicants.\n• Partner University Scholarships (UK) – 200+ scholarships across 49 universities.'
      },
      {
        question: 'Are scholarships applicable to both years?',
        answer: 'Yes. Scholarships may cover part of IMAS tuition fees in Year 1 and are separately available for UK tuition fees in Year 2.'
      },
      {
        question: 'Do you offer zero-cost EMI options?',
        answer: 'Yes. Select financial partners offer 0% EMI schemes for domestic (Year 1) fees.'
      },
      {
        question: 'What is the total fee structure?',
        answer: '• IMAS Kolkata (Year 1): ₹3,66,600\n• UK University (Year 2): £10,000–£18,000 tuition + £12,000 living expenses (approx.)'
      }
    ]
  }
];

interface FAQProps {
  className?: string;
}

export function FAQ({ className = '' }: FAQProps) {
  const [activeSection, setActiveSection] = useState('important-faqs');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (sectionId: string, itemIndex: number) => {
    const itemKey = `${sectionId}-${itemIndex}`;
    const newExpanded = new Set(expandedItems);
    
    if (newExpanded.has(itemKey)) {
      newExpanded.delete(itemKey);
    } else {
      newExpanded.add(itemKey);
    }
    
    setExpandedItems(newExpanded);
  };

  const currentSection = faqData.find(section => section.id === activeSection);

  return (
    <section id="faq" className={`bg-gray-50 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mb-4`}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Answers to the most commonly asked questions from us
          </p>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className={`text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-6 flex items-center gap-2`}>
                <HelpCircle className="h-5 w-5" />
                FAQ Categories
              </h3>
              <nav className="space-y-2">
                {faqData.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                      activeSection === section.id
                        ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white shadow-md`
                        : `text-gray-700 hover:bg-gray-100 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL}`
                    }`}
                  >
                    <ChevronRight className={`h-4 w-4 transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`} />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            {currentSection && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-8`}>
                  {currentSection.title}
                </h3>
                
                <div className="space-y-4">
                  {currentSection.items.map((item, index) => {
                    const itemKey = `${activeSection}-${index}`;
                    const isExpanded = expandedItems.has(itemKey);
                    
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
                      >
                        <button
                          onClick={() => toggleItem(activeSection, index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <span className={`font-semibold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} pr-4`}>
                            {item.question}
                          </span>
                          <ChevronDown className={`h-5 w-5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} transition-transform duration-200 flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;