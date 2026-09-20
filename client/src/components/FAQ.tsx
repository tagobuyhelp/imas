import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, Menu, X, Search, MessageCircle, Phone, Mail, ArrowRight, Star, CheckCircle, Clock, Users } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { Button } from './ui/button';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  popular?: boolean;
}

interface FAQSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  items: FAQItem[];
}

export const faqData: FAQSection[] = [
  {
    id: 'degree-certification',
    title: 'Degree & Certification',
    icon: CheckCircle,
    description: 'Information about degrees and certifications for all IMAS programmes',
    items: [
      // MBA Global
      {
        question: 'What degree will I receive upon completing the MBA Global program?',
        answer:
          "Graduates receive a Post Graduate Diploma in Management (PGDM) from IMAS, which is AICTE-approved in India. Additionally, there's a pathway to complete an MBA from a UK university, such as Leeds Beckett University or Cardiff Metropolitan University, offering international recognition.",
        popular: true,
      },
      {
        question: 'Is the MBA Global degree recognised internationally?',
        answer:
          'Yes, the MBA Global programme offers a UK pathway, ensuring international recognition of your MBA degree.',
      },
      {
        question: 'What is the duration of the MBA Global program?',
        answer:
          'The MBA Global programme spans two years, with the initial year completed at IMAS Kolkata and the subsequent year at a partner UK university.',
      },
      {
        question: 'Are there any prerequisites to enroll in MBA Global?',
        answer:
          'Applicants must have completed their graduation with 70% or above. Specific eligibility criteria can be found in the programme brochure.',
      },
      {
        question: 'Can I obtain a digital copy of my certificate for MBA Global?',
        answer: 'Yes, digital certificates are typically provided upon completion of the program.',
      },

      // PGDM Executive
      {
        question: 'What degree will I receive upon completing the PGDM Executive program?',
        answer:
          'Graduates receive a Post Graduate Diploma in Management (PGDM) from IMAS, which is AICTE-approved in India.',
      },
      {
        question: 'Is the PGDM Executive degree recognised internationally?',
        answer:
          'While the PGDM is AICTE-approved in India, the programme does not explicitly mention international recognition.',
      },
      {
        question: 'What is the duration of the PGDM Executive program?',
        answer:
          'The PGDM Executive programme spans two years, designed to accommodate the schedules of working professionals.',
      },
      {
        question: 'Are there any prerequisites to enroll in PGDM Executive?',
        answer:
          'Applicants must have completed their graduation. Specific eligibility criteria can be found in the programme brochure.',
      },
      {
        question: 'Can I obtain a digital copy of my certificate for PGDM Executive?',
        answer: 'Yes, digital certificates are typically provided upon completion of the program.',
      },

      // PGDM Regular
      {
        question: 'What degree will I receive upon completing the PGDM Regular program?',
        answer:
          'Graduates receive a Post Graduate Diploma in Management (PGDM) from IMAS, which is AICTE-approved in India.',
      },
      {
        question: 'Is the PGDM Regular degree recognised internationally?',
        answer:
          'The PGDM is AICTE-approved in India. While the programme does not explicitly mention international recognition.',
      },
      {
        question: 'What is the duration of the PGDM Regular program?',
        answer:
          'The PGDM Regular programme spans two years, designed to provide a comprehensive management education.',
      },
      {
        question: 'Are there any prerequisites to enroll in PGDM Regular?',
        answer:
          'Applicants must have completed their graduation with at least 50% aggregate marks. Specific eligibility criteria can be found in the programme brochure.',
      },
      {
        question: 'Can I obtain a digital copy of my certificate for PGDM Regular?',
        answer: 'Yes, digital certificates are typically provided upon completion of the program.',
      },
    ],
  },
  {
    id: 'eligibility-criteria',
    title: 'Eligibility & Criteria',
    icon: Users,
    description: 'Requirements and qualifications for admission',
    items: [
      // MBA Global
      {
        question: 'Who is eligible to apply for the MBA Global program?',
        answer:
          'Graduates from any discipline are eligible. For detailed eligibility criteria, please refer to the programme brochure.',
        popular: true,
      },
      {
        question: 'Is prior work experience required for MBA Global?',
        answer:
          'The programme does not explicitly mention a requirement for work experience. However, applicants with relevant experience may find the programme beneficial.',
      },
      {
        question: 'What is the minimum educational qualification for MBA Global?',
        answer:
          'A graduate degree with 70% aggregate marks from a recognised institution is required.',
      },
      {
        question: 'Are there any age restrictions for MBA Global?',
        answer: 'The programme does not specify any age restrictions.',
      },
      {
        question: 'Can international students apply for MBA Global?',
        answer:
          'Yes, the programme is open to international students, especially with the UK pathway option.',
      },

      // PGDM Executive
      {
        question: 'Who is eligible to apply for the PGDM Executive program?',
        answer:
          'Graduates from any discipline with work experience are eligible. For detailed eligibility criteria, please refer to the programme brochure.',
        popular: true,
      },
      {
        question: 'Is prior work experience required for PGDM Executive?',
        answer: 'Yes, the programme requires 2–3 years of professional work experience.',
      },
      {
        question: 'What is the minimum educational qualification for PGDM Executive?',
        answer:
          'A graduate degree with at least 50% aggregate marks from a recognised institution is required.',
      },
      {
        question: 'Are there any age restrictions for PGDM Executive?',
        answer: 'The programme does not specify any age restrictions.',
      },
      {
        question: 'Can international students apply for PGDM Executive?',
        answer:
          'Yes, the programme is open to international students, provided they possess a student visa for studying in India.',
      },

      // PGDM Regular
      {
        question: 'Who is eligible to apply for the PGDM Regular program?',
        answer:
          'Graduates from any discipline are eligible. For detailed eligibility criteria, please refer to the programme brochure.',
      },
      {
        question: 'Is prior work experience required for PGDM Regular?',
        answer:
          'The programme does not explicitly mention a requirement for work experience. However, applicants with relevant experience may find the programme beneficial.',
      },
      {
        question: 'What is the minimum educational qualification for PGDM Regular?',
        answer:
          'A graduate degree with at least 50% aggregate marks from a recognised institution is required.',
      },
      {
        question: 'Are there any age restrictions for PGDM Regular?',
        answer: 'The programme does not specify any age restrictions.',
      },
      {
        question: 'Can international students apply for PGDM Regular?',
        answer:
          'Yes, the programme is open to international students, provided they possess a student visa for studying in India.',
      },
    ],
  },
  {
    id: 'application-process',
    title: 'Application Process',
    icon: Clock,
    description: 'Application timeline and procedures',
    items: [
      // Common process for all programmes
      {
        question: 'How can I apply for IMAS programmes?',
        answer:
          'Applications can be submitted online through the official IMAS website for all programmes (MBA Global, PGDM Executive, and PGDM Regular).',
        popular: true,
      },
      {
        question: 'Is there an online application form?',
        answer:
          'Yes, the application form is available on the IMAS website for all programmes.',
      },
      {
        question: 'What documents are required for application?',
        answer:
          'Typically, the required documents include:\n• Graduation mark sheets and certificates\n• Passport-sized photographs\n• Identity proof\n• Address proof\n• Entrance exam scores\n• Work experience certificates (for PGDM Executive)',
      },
      {
        question: 'Is there an application fee?',
        answer:
          'Yes, there is an application fee of ₹500 to apply for all IMAS programmes.',
      },
      {
        question: 'How long does it take to process my application?',
        answer:
          'Application processing times can vary. For the most accurate information, please refer to the admissions section on the IMAS website or contact our Admission Cell.',
      },
    ],
  },
  {
    id: 'general-info',
    title: 'General Information',
    icon: Star,
    description: 'Additional information about IMAS',
    items: [
      {
        question: 'Why choose IMAS Kolkata for your management education?',
        answer:
          'IMAS Kolkata is a premier business school offering AICTE-approved PGDM programmes with 100% placement rate, ₹18.5 LPA highest package, and ₹8–12 LPA average package. We provide industry-focused curriculum, international exposure, state-of-the-art facilities, and strong industry partnerships with top companies for guaranteed career success.',
        popular: true,
      },
      {
        question: 'What are the placement statistics at IMAS Kolkata?',
        answer:
          'IMAS Kolkata boasts 100% placement rate with ₹18.5 LPA highest package and ₹8–12 LPA average package. Over 2575+ students have been empowered through our programmes. Our graduates work with top companies like TCS, Wipro, Infosys, HDFC Bank, ICICI Bank, and leading startups.',
        popular: true,
      },
      {
        question: 'What makes IMAS different from other business schools?',
        answer:
          'IMAS stands out with its industry-focused curriculum, 100% placement guarantee, international immersion programmes, state-of-the-art campus facilities, experienced faculty from IIMs and top institutions, strong industry partnerships, and comprehensive skill development programmes including soft skills, leadership, and entrepreneurship training.',
      },
    ],
  },
];

interface FAQProps {
  className?: string;
}

export function FAQ({ className = '' }: FAQProps) {
  const [activeSection, setActiveSection] = useState('degree-certification');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(faqData);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredData(faqData);
      return;
    }

    const filtered = faqData.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => section.items.length > 0);

    setFilteredData(filtered);
  }, [searchQuery]);

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
    setIsMobileSidebarOpen(false);
  };

  const currentSection = filteredData.find(section => section.id === activeSection);
  const popularQuestions = faqData.flatMap(section => 
    section.items.filter(item => item.popular).map(item => ({ ...item, sectionId: section.id }))
  );

  return (
    <section id="faq" className={`relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
            Got Questions?
            <span className={`block ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`}>We Have Answers</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most commonly asked questions about IMAS programmes, admissions, and campus life
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-base border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            />
          </div>
        </div>

        

        {/* Mobile Category Selector */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className={`h-5 w-5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`} />
              <span className="font-semibold text-gray-800">
                {filteredData.find(s => s.id === activeSection)?.title || 'Select Category'}
              </span>
            </div>
            {isMobileSidebarOpen ? <X className="h-5 w-5 text-gray-600" /> : <Menu className="h-5 w-5 text-gray-600" />}
          </button>
          
          {/* Mobile Dropdown Menu */}
          {isMobileSidebarOpen && (
            <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              {filteredData.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 flex items-center gap-3 border-b border-gray-100 last:border-b-0 ${
                      activeSection === section.id
                        ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white`
                        : `text-gray-700 hover:bg-gray-50`
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">{section.title}</div>
                      <div className={`text-sm ${activeSection === section.id ? 'text-white/80' : 'text-gray-500'}`}>
                        {section.items.length} questions
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sticky top-8 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <HelpCircle className={`h-6 w-6 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`} />
                FAQ Categories
              </h3>
              <nav className="space-y-3">
  {filteredData.map((section) => {
    const IconComponent = section.icon;
    const isActive = activeSection === section.id;

    return (
      <button
        key={section.id}
        onClick={() => setActiveSection(section.id)}
        aria-pressed={isActive}
         className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-start gap-3 group border ${
           isActive
             ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white shadow-lg scale-[1.02] border-transparent`
             : `text-gray-700 hover:bg-gray-50 hover:shadow-md hover:scale-[1.01] border-gray-100`
         }`}
      >
        <IconComponent
          className={`h-4 w-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
            isActive
              ? 'text-white scale-110'
              : `${IMAS_TAILWIND_CLASSES.TEXT_TEAL} group-hover:scale-110`
          }`}
        />

         <div className="flex flex-col">
           <div className="font-semibold text-xs tracking-wide">
             {section.title}
           </div>
           <div
             className={`text-[11px] mt-0.5 leading-relaxed ${
               isActive ? 'text-white/80' : 'text-gray-500'
             }`}
           >
             {section.description}
           </div>
           <div
             className={`text-[10px] mt-0.5 font-medium ${
               isActive ? 'text-white/60' : 'text-gray-400'
             }`}
           >
             {section.items.length} {section.items.length === 1 ? 'question' : 'questions'}
           </div>
         </div>
      </button>
    );
  })}
</nav>



            </div>
          </div>

          {/* FAQ Content */}
          <div className="w-full lg:w-2/3">
            {currentSection && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 lg:p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  {React.createElement(currentSection.icon, { 
                    className: `h-6 w-6 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}` 
                  })}
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                      {currentSection.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">{currentSection.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {currentSection.items.map((item, index) => {
                    const itemKey = `${activeSection}-${index}`;
                    const isExpanded = expandedItems.has(itemKey);
                    
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      >
                        <button
                          onClick={() => toggleItem(activeSection, index)}
                          className="w-full px-4 py-3 text-left flex items-start justify-between hover:bg-gray-50/80 transition-colors duration-300"
                        >
                          <div className="flex items-start gap-3 flex-1">
                            {item.popular && (
                              <Star className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} flex-shrink-0 mt-0.5`} />
                            )}
                            <span className="font-semibold text-gray-800 text-xs lg:text-sm leading-relaxed pr-3">
                              {item.question}
                            </span>
                          </div>
                          <ChevronDown className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-4 py-3 bg-white/80 border-t border-gray-200 animate-fade-in">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-xs">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* No Results */}
                {currentSection.items.length === 0 && (
                  <div className="text-center py-8">
                    <Search className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">No questions found</h4>
                    <p className="text-xs text-gray-500">Try adjusting your search terms or browse other categories.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>


      </div>
    </section>
  );
}

export default FAQ;