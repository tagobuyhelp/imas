import React, { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, Menu, X } from 'lucide-react';
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
        question: 'Why choose IMAS Kolkata for your management education?',
        answer: 'IMAS Kolkata is a premier business school offering AICTE-approved PGDM programs with 100% placement rate, ₹18.5 LPA highest package, and ₹8-12 LPA average package. We provide industry-focused curriculum, international exposure, state-of-the-art facilities, and strong industry partnerships with top companies for guaranteed career success.'
      },
      {
        question: 'What programs does IMAS Kolkata offer?',
        answer: 'IMAS offers comprehensive PGDM programs in Marketing Management, Financial Management, Human Resource Management, Business Analytics, AI & Data Science, Fintech, Healthcare Management, Innovation & Entrepreneurship, and Working Executive programs. All programs are AICTE-approved with excellent placement records.'
      },
      {
        question: 'What are the placement statistics at IMAS Kolkata?',
        answer: 'IMAS Kolkata boasts 100% placement rate with ₹18.5 LPA highest package and ₹8-12 LPA average package. Over 2,20,234+ students have been empowered through our programs. Our graduates work with top companies like TCS, Wipro, Infosys, HDFC Bank, ICICI Bank, and leading startups.'
      },
      {
        question: 'What makes IMAS different from other business schools?',
        answer: 'IMAS stands out with its industry-focused curriculum, 100% placement guarantee, international immersion programs, state-of-the-art campus facilities, experienced faculty from IIMs and top institutions, strong industry partnerships, and comprehensive skill development programs including soft skills, leadership, and entrepreneurship training.'
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
        question: 'What is the eligibility criteria for PGDM programs?',
        answer: '• Graduation with 50% or above from any recognized university\n• 2022, 2023, 2024, 2025 pass-outs are eligible\n• Valid scores in CAT/XAT/CMAT/MAT/ATMA/CUET accepted\n• Strong academic background and career aspirations in management'
      },
      {
        question: 'Do I need management entrance exam scores?',
        answer: 'Yes, valid scores in any of the following entrance exams are required: CAT/XAT/CMAT/MAT/ATMA/CUET. IMAS also conducts its own entrance test for candidates who haven\'t appeared for these exams.'
      },
      {
        question: 'Is there an age limit for PGDM programs?',
        answer: 'There is no strict age limit for PGDM programs. However, the programs are designed primarily for recent graduates and early-career professionals. Working Executive programs are specifically designed for experienced professionals.'
      },
      {
        question: 'Can final year students apply?',
        answer: 'Yes, final year students (2025 pass-outs) can apply. However, admission will be confirmed only after successful completion of graduation with required percentage.'
      }
    ]
  },
  {
    id: 'application',
    title: 'Application',
    items: [
      {
        question: 'When can I apply for PGDM programs 2025?',
        answer: 'Applications for 2025 batch are now open and will continue until July 15, 2025. We recommend applying early to secure your preferred program and avail scholarship opportunities.'
      },
      {
        question: 'What is the application process?',
        answer: '1. Submit the online application on www.imas.ac.in\n2. Upload academic transcripts and entrance test scores\n3. Shortlisted candidates will be invited for Personal Interview\n4. Admission offer letters are rolled out in cycles\n5. Confirm admission by paying fees within deadline'
      },
      {
        question: 'What is the fee structure for PGDM programs?',
        answer: 'Fee structure varies by program:\n• PGDM Plus Programs: ₹3,66,600 per year\n• Working Executive Programs: ₹2,50,000 per year\n• Flexible payment options and education loans available\n• Scholarships available for meritorious students'
      },
      {
        question: 'How can I strengthen my application?',
        answer: 'To strengthen your application:\n• Maintain good academic performance (60%+ preferred)\n• Highlight extra-curricular activities, internships, and leadership roles\n• Write a compelling Statement of Purpose\n• Prepare well for entrance exams (CAT/XAT/CMAT/MAT)\n• Showcase relevant work experience if any'
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
        question: 'When do classes start for 2025 batch?',
        answer: 'Classes for the 2025 batch begin in September 2025. The exact date will be communicated to admitted students during the orientation process.'
      },
      {
        question: 'What are the admission deadlines for 2025?',
        answer: 'Application deadlines for 2025 batch:\n• Early Bird: March 15, 2025\n• Regular: May 30, 2025\n• Final: July 15, 2025\n\nEarly applications are encouraged for scholarship opportunities and seat confirmation.'
      },
      {
        question: 'How can I confirm my admission?',
        answer: 'Once selected, you must pay the admission fee within the given deadline and submit required documents. Our admissions team will guide you through the complete process.'
      },
      {
        question: 'Can I defer my admission?',
        answer: 'Yes, deferral is allowed on a case-to-case basis for one academic year with valid reasons. Please contact our admissions office for deferral procedures.'
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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileSidebarOpen(false); // Close mobile sidebar when section is selected
  };

  const currentSection = faqData.find(section => section.id === activeSection);

  return (
    <section id="faq" className={`bg-gray-50 py-8 sm:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mb-3 sm:mb-4 px-2`}>
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Answers to the most commonly asked questions about Scaler School of Business
          </p>
        </div>

        {/* Mobile Category Selector */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              <span>{faqData.find(s => s.id === activeSection)?.title || 'Select Category'}</span>
            </div>
            {isMobileSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          {/* Mobile Dropdown Menu */}
          {isMobileSidebarOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {faqData.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-2 border-b border-gray-100 last:border-b-0 ${
                    activeSection === section.id
                      ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white`
                      : `text-gray-700 hover:bg-gray-50 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL}`
                  }`}
                >
                  <ChevronRight className={`h-4 w-4 transition-transform ${
                    activeSection === section.id ? 'rotate-90' : ''
                  }`} />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:block lg:w-1/4">
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
          <div className="w-full lg:w-3/4">
            {currentSection && (
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h3 className={`text-xl sm:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-6 sm:mb-8 px-2 sm:px-0`}>
                  {currentSection.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
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
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-start sm:items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
                        >
                          <span className={`font-semibold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} pr-3 sm:pr-4 text-sm sm:text-base leading-tight sm:leading-normal`}>
                            {item.question}
                          </span>
                          <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} transition-transform duration-200 flex-shrink-0 mt-0.5 sm:mt-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
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