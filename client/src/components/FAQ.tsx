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

const faqData: FAQSection[] = [
  {
    id: 'important-faqs',
    title: 'Important FAQs',
    icon: Star,
    description: 'Most frequently asked questions about IMAS',
    items: [
      {
        question: 'Why choose IMAS Kolkata for your management education?',
        answer: 'IMAS Kolkata is a premier business school offering AICTE-approved PGDM programs with 100% placement rate, ₹18.5 LPA highest package, and ₹8-12 LPA average package. We provide industry-focused curriculum, international exposure, state-of-the-art facilities, and strong industry partnerships with top companies for guaranteed career success.',
        popular: true
      },
      {
        question: 'What programs does IMAS Kolkata offer?',
        answer: 'IMAS offers comprehensive PGDM programs in Marketing Management, Financial Management, Human Resource Management, Business Analytics, AI & Data Science, Fintech, Healthcare Management, Innovation & Entrepreneurship, and Working Executive programs. All programs are AICTE-approved with excellent placement records.',
        popular: true
      },
      {
        question: 'What are the placement statistics at IMAS Kolkata?',
        answer: 'IMAS Kolkata boasts 100% placement rate with ₹18.5 LPA highest package and ₹8-12 LPA average package. Over 2,20,234+ students have been empowered through our programs. Our graduates work with top companies like TCS, Wipro, Infosys, HDFC Bank, ICICI Bank, and leading startups.',
        popular: true
      },
      {
        question: 'What makes IMAS different from other business schools?',
        answer: 'IMAS stands out with its industry-focused curriculum, 100% placement guarantee, international immersion programs, state-of-the-art campus facilities, experienced faculty from IIMs and top institutions, strong industry partnerships, and comprehensive skill development programs including soft skills, leadership, and entrepreneurship training.'
      }
    ]
  },
  {
    id: 'degree',
    title: 'Degree & Certification',
    icon: CheckCircle,
    description: 'Information about degrees and certifications',
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
    icon: Users,
    description: 'Requirements and qualifications for admission',
    items: [
      {
        question: 'What is the eligibility criteria for PGDM programs?',
        answer: '• Graduation with 50% or above from any recognized university\n• 2023, 2024, 2025, 2026 pass-outs are eligible\n• Valid scores in CAT/XAT/CMAT/MAT/ATMA/CUET accepted\n• Strong academic background and career aspirations in management'
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
        answer: 'Yes, final year students (2026 pass-outs) can apply. However, admission will be confirmed only after successful completion of graduation with required percentage.'
      }
    ]
  },
  {
    id: 'application',
    title: 'Application Process',
    icon: Clock,
    description: 'Application timeline and procedures',
    items: [
      {
        question: 'When can I apply for PGDM programs 2026?',
        answer: 'Applications for 2026 batch are now open and will continue until March 30, 2026. We recommend applying early to secure your preferred program and avail scholarship opportunities.'
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
  }
];

interface FAQProps {
  className?: string;
}

export function FAQ({ className = '' }: FAQProps) {
  const [activeSection, setActiveSection] = useState('important-faqs');
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
            Got Questions?
            <span className={`block ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`}>We Have Answers</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most commonly asked questions about IMAS programs, admissions, and campus life
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
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            />
          </div>
        </div>

        {/* Popular Questions - Quick Access */}
        {!searchQuery && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Popular Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularQuestions.slice(0, 3).map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSection(item.sectionId);
                    const itemKey = `${item.sectionId}-${faqData.find(s => s.id === item.sectionId)?.items.findIndex(i => i.question === item.question)}`;
                    setExpandedItems(new Set([itemKey]));
                  }}
                  className="text-left p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 group"
                >
                  <div className="flex items-start gap-3">
                    <Star className={`h-5 w-5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-gray-800 leading-relaxed group-hover:text-teal-600 transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

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
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <HelpCircle className={`h-6 w-6 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`} />
                FAQ Categories
              </h3>
              <nav className="space-y-3">
                {filteredData.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 flex items-start gap-4 group ${
                        activeSection === section.id
                          ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white shadow-lg scale-105`
                          : `text-gray-700 hover:bg-gray-50 hover:shadow-md hover:scale-102`
                      }`}
                    >
                      <IconComponent className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        activeSection === section.id ? 'text-white' : IMAS_TAILWIND_CLASSES.TEXT_TEAL
                      } group-hover:scale-110 transition-transform duration-300`} />
                      <div>
                        <div className="font-semibold text-base">{section.title}</div>
                        <div className={`text-sm mt-1 ${
                          activeSection === section.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {section.description}
                        </div>
                        <div className={`text-xs mt-1 ${
                          activeSection === section.id ? 'text-white/60' : 'text-gray-400'
                        }`}>
                          {section.items.length} questions
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
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 lg:p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  {React.createElement(currentSection.icon, { 
                    className: `h-8 w-8 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}` 
                  })}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                      {currentSection.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{currentSection.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {currentSection.items.map((item, index) => {
                    const itemKey = `${activeSection}-${index}`;
                    const isExpanded = expandedItems.has(itemKey);
                    
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      >
                        <button
                          onClick={() => toggleItem(activeSection, index)}
                          className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-gray-50/80 transition-colors duration-300"
                        >
                          <div className="flex items-start gap-4 flex-1">
                            {item.popular && (
                              <Star className={`h-5 w-5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} flex-shrink-0 mt-0.5`} />
                            )}
                            <span className="font-semibold text-gray-800 text-base lg:text-lg leading-relaxed pr-4">
                              {item.question}
                            </span>
                          </div>
                          <ChevronDown className={`h-5 w-5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} transition-transform duration-300 flex-shrink-0 mt-1 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 py-5 bg-white/80 border-t border-gray-200 animate-fade-in">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
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
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-600 mb-2">No questions found</h4>
                    <p className="text-gray-500">Try adjusting your search terms or browse other categories.</p>
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