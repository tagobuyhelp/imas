import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Search, X, Users, ArrowRight, FileText, GraduationCap, Plus, Minus, Award, Target, BookOpen, ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_CONTACT } from '../lib/constants';
import { StickyCTAFooter } from '../components/layout/StickyCTAFooter';
import { downloadBrochure, applyNow } from '../lib/utils';

// Custom CSS for line clamping and animations
const lineClampStyles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Custom animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(8px) rotate(-1deg); }
    66% { transform: translateY(-12px) rotate(1deg); }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  
  .animation-delay-400 {
    animation-delay: 0.4s;
  }
  
  .animation-delay-600 {
    animation-delay: 0.6s;
  }
  
  .animation-delay-800 {
    animation-delay: 0.8s;
  }
  
  .animation-delay-1000 {
    animation-delay: 1s;
  }
`;

export function FacultyPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedCards, setExpandedCards] = useState(new Set<string>());
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Faculty data
  const academicLeaders = [
    {
      id: 'al1',
      name: 'Dr. Kunal Sil',
      title: 'Dean Academics',
      qualifications: 'Ph.D. Management, MBA',
      image: '/uploads/Kunal.jpg',
      description: 'An acclaimed academician and thought leader in management studies, leading the academic vision of IMAS.',
      fullBio: 'Dr. Kunal Sil is an acclaimed academician and thought leader in management studies. He leads the academic vision of IMAS with a focus on innovation, research, and strategic leadership. His expertise spans across various domains of management education and strategic planning.',
      expertise: 'Management Studies, Strategic Leadership',
      tags: ['Management', 'Strategy', 'Leadership', 'Research']
    },
    {
      id: 'al2',
      name: 'Dr. Shatrajit Goswami',
      title: 'Professor',
      qualifications: 'Ph.D. Engineering Economics, MSc Economics',
      image: '/uploads/Pic_VC_Dr.-Saikat-Maitra.png',
      description: 'A seasoned educator specializing in Economics and Business Strategy, integrating analytical thinking with economic intelligence.',
      fullBio: 'Dr. Shatrajit Goswami is a seasoned educator specializing in Economics and Business Strategy. He integrates analytical thinking with economic intelligence for future managers, bringing deep expertise in engineering economics and strategic decision-making.',
      expertise: 'Economics, Business Strategy',
      tags: ['Economics', 'Strategy', 'Analytics', 'Business']
    },
    {
      id: 'al3',
      name: 'Ms. Poulomi Manna',
      title: 'Assistant Professor',
      qualifications: 'MHA',
      image: '/uploads/Ramya-Bhat.jpeg',
      description: 'Expert in Healthcare Administration and Management, blending healthcare sector expertise with management principles.',
      fullBio: 'Ms. Poulomi Manna is an expert in Healthcare Administration and Management. She blends healthcare sector expertise with management principles, providing students with comprehensive understanding of healthcare management practices.',
      expertise: 'Healthcare Administration, Management',
      tags: ['Healthcare', 'Administration', 'Management']
    },
    {
      id: 'al4',
      name: 'Mr. Rajib Bhattacharyya',
      title: 'Assistant Professor',
      qualifications: 'M.Com',
      image: '/uploads/Tridib-Chakraborty.jpg',
      description: 'With vast experience in Commerce and Accounting, ensuring students gain a strong foundation in financial management.',
      fullBio: 'Mr. Rajib Bhattacharyya brings vast experience in Commerce and Accounting. He ensures students gain a strong foundation in financial management, with expertise in commercial practices and accounting principles.',
      expertise: 'Commerce, Accounting, Financial Management',
      tags: ['Commerce', 'Accounting', 'Finance']
    },
    {
      id: 'al5',
      name: 'Ms. Shreenita Seal',
      title: 'Assistant Professor',
      qualifications: 'MA English',
      image: '/uploads/Amitha-Krushnen.jpeg',
      description: 'Brings expertise in Business Communication and Soft Skills, helping students enhance their corporate communication abilities.',
      fullBio: 'Ms. Shreenita Seal brings expertise in Business Communication and Soft Skills. She helps students enhance their corporate communication abilities, focusing on effective communication strategies for business environments.',
      expertise: 'Business Communication, Soft Skills',
      tags: ['Communication', 'Soft Skills', 'English']
    },
    {
      id: 'al6',
      name: 'Ms. Sudeshna Chatterjee',
      title: 'Assistant Professor',
      qualifications: 'MHA',
      image: '/uploads/Ajay-Bailur.jpeg',
      description: 'With a specialized focus on Hospital Administration, guiding students in Healthcare Management practices.',
      fullBio: 'Ms. Sudeshna Chatterjee has a specialized focus on Hospital Administration. She guides students in Healthcare Management practices, bringing practical insights from the healthcare industry.',
      expertise: 'Hospital Administration, Healthcare Management',
      tags: ['Healthcare', 'Hospital Administration', 'Management']
    }
  ];

  const adjunctFaculty = [
    {
      id: 'af1',
      name: 'Mr. Amit Nath',
      title: 'Adjunct Professor',
      qualifications: 'CA, MBA',
      image: '/uploads/Amit-Gautam.jpeg',
      description: 'A Chartered Accountant and MBA, bridging the gap between finance theories and corporate practices.',
      fullBio: 'Mr. Amit Nath is a Chartered Accountant and MBA who bridges the gap between finance theories and corporate practices. His dual expertise in accounting and management provides students with practical insights into financial management.',
      expertise: 'Finance, Accounting, Corporate Practices',
      tags: ['Finance', 'Accounting', 'CA', 'Corporate']
    },
    {
      id: 'af2',
      name: 'Dr. Tamal Taru Roy',
      title: 'Adjunct Professor',
      qualifications: 'Ph.D. Management, MBA, MCom, PGDHRM',
      image: '/uploads/manodip-ray.jpg',
      description: 'A distinguished academician in Management Studies and Human Resources, renowned for research and leadership teachings.',
      fullBio: 'Dr. Tamal Taru Roy is a distinguished academician in Management Studies and Human Resources, renowned for his research and leadership teachings. His comprehensive qualifications span across multiple domains of management education.',
      expertise: 'Management Studies, Human Resources, Leadership',
      tags: ['Management', 'HR', 'Leadership', 'Research']
    },
    {
      id: 'af3',
      name: 'Dr. Saibal Kumar Mukhopadhyay',
      title: 'Adjunct Professor',
      qualifications: 'Ph.D. Management, MSc Economics',
      image: '/uploads/Mukhopadhyay.jpg',
      description: 'With expertise in Economics and Management, mentoring students in analytical decision-making and economic strategies.',
      fullBio: 'Dr. Saibal Kumar Mukhopadhyay brings expertise in Economics and Management. He mentors students in analytical decision-making and economic strategies, combining theoretical knowledge with practical applications.',
      expertise: 'Economics, Management, Strategic Decision-making',
      tags: ['Economics', 'Management', 'Strategy', 'Analytics']
    },
    {
      id: 'af4',
      name: 'Ms. Sweta S Sengupta',
      title: 'Adjunct Professor',
      qualifications: 'MBA HRM',
      image: '/uploads/Anuj-Ahuja.jpeg',
      description: 'An industry expert in Human Resource Management, focusing on nurturing HR leaders for the modern workplace.',
      fullBio: 'Ms. Sweta S Sengupta is an industry expert in Human Resource Management. She focuses on nurturing HR leaders for the modern workplace, bringing practical insights from contemporary HR practices.',
      expertise: 'Human Resource Management, Leadership Development',
      tags: ['HR', 'Leadership', 'Management', 'Industry Expert']
    }
  ];

  // Get filtered faculty based on active tab, search term, and selected tags
  const getFilteredFaculty = () => {
    let faculty = [];
    
    if (activeTab === 'core') {
      faculty = academicLeaders;
    } else if (activeTab === 'adjunct') {
      faculty = adjunctFaculty;
    } else {
      faculty = [...academicLeaders, ...adjunctFaculty];
    }

    // Filter by search term
    if (searchTerm) {
      faculty = faculty.filter(member => 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      faculty = faculty.filter(member => 
        selectedTags.some(tag => member.tags.includes(tag))
      );
    }

    return faculty;
  };

  // Get all unique tags
  const allTags = Array.from(new Set([...academicLeaders, ...adjunctFaculty].flatMap(member => member.tags)));

  // Toggle card expansion
  const toggleCardExpansion = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <>
      <style>{lineClampStyles}</style>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section id="faculty-hero" className="relative min-h-[50vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/uploads/imas_hero_image1.webp"
              alt="IMAS Faculty Hero Background"
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Enhanced Dark Overlay */}
            <div className="absolute inset-0 bg-gray-900/80"></div>
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 animate-pulse"></div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1550px] mx-auto px-4 text-center">
            {/* Animated Badge */}
            <div className="inline-block mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
              <div className={`bg-transparent text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl border border-white/20 backdrop-blur-sm`}>
                <Users className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">OUR DISTINGUISHED FACULTIES</span>
                <span className="sm:hidden">OUR FACULTIES</span>
              </div>
            </div>

            {/* Main Heading with Animation */}
            <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up animation-delay-200">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                <span className="block sm:inline">Meet Our Esteemed Faculty</span>{' '}
                
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light px-4 mb-6">
                <span className="hidden sm:inline">World-class education begins with world-class educators.</span>
                <span className="sm:hidden">World-class education begins with world-class educators.</span>
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up animation-delay-400 px-4">
              <Button
                size="lg"
                onClick={applyNow}
                className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm w-full sm:w-auto group"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                onClick={downloadBrochure}
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Download Brochure</span>
                <span className="sm:hidden">Brochure</span>
              </Button>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty-grid" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-[1550px] mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
                Our <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Faculty Directory</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-5xl mx-auto leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
                Our professors not only teach, but they mentor, inspire, and shape the next generation of business leaders, innovators, and entrepreneurs. With a perfect blend of academic rigour and industry relevance, the IMAS faculty team ensures every student is industry-ready and future-focused.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-8 animate-fade-in-up animation-delay-400">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-6">
                <label htmlFor="faculty-search" className="sr-only">Search faculty by name or expertise</label>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                <input
                  id="faculty-search"
                  type="text"
                  placeholder="Search by name or expertise"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200"
                  aria-describedby="search-help"
                />
                <div id="search-help" className="sr-only">Search through faculty members by typing their name or area of expertise</div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4" role="group" aria-label="Filter faculty by expertise">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      selectedTags.includes(tag)
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-cyan-500'
                    }`}
                    aria-pressed={selectedTags.includes(tag)}
                    aria-label={`Filter by ${tag} expertise`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Clear Filters */}
              {(searchTerm || selectedTags.length > 0) && (
                <div className="text-center">
                  <button
                    onClick={clearFilters}
                    className="text-cyan-600 hover:text-cyan-700 text-sm font-medium flex items-center justify-center mx-auto"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200" role="tablist" aria-label="Faculty categories">
                <button
                  onClick={() => setActiveTab('core')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    activeTab === 'core'
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  role="tab"
                  aria-selected={activeTab === 'core'}
                  aria-controls="faculty-panel"
                  id="core-tab"
                >
                  Core Faculty
                </button>
                <button
                  onClick={() => setActiveTab('adjunct')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    activeTab === 'adjunct'
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  role="tab"
                  aria-selected={activeTab === 'adjunct'}
                  aria-controls="faculty-panel"
                  id="adjunct-tab"
                >
                  Adjunct Faculty
                </button>
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    activeTab === 'all'
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  role="tab"
                  aria-selected={activeTab === 'all'}
                  aria-controls="faculty-panel"
                  id="all-tab"
                >
                  All Faculty
                </button>
              </div>
            </div>

            {/* Faculty Grid */}
            <div className="mb-16" role="tabpanel" id="faculty-panel" aria-labelledby={`${activeTab}-tab`}>
              {getFilteredFaculty().length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No faculty found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Desktop Grid */}
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {getFilteredFaculty().map((member) => (
                      <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 overflow-hidden">
                        {/* Enhanced Image Section */}
                        <div className="relative flex justify-center pt-8 pb-6">
                          <div className={`relative w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} transition-all duration-500 shadow-lg`}>
                            <img
                              src={member.image}
                              alt={`${member.name} - ${member.title}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/uploads/placeholder-faculty.jpg';
                              }}
                            />
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          </div>
                          {/* Floating badge */}
                          <div className={`absolute top-4 right-4 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white text-xs px-3 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}>
                            {member.title.includes('Professor') ? 'Faculty' : 'Leader'}
                          </div>
                        </div>

                        {/* Enhanced Content Section */}
                        <div className="px-6 pb-8 text-center">
                          <h3 className={`text-xl font-bold text-gray-800 mb-3 font-serif group-hover:${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} transition-colors duration-300`}>{member.name}</h3>
                          <p className={`text-sm font-semibold mb-3 }`}>
                            {member.title}
                          </p>
                          <p className="text-xs text-gray-500 mb-4 font-medium">{member.qualifications}</p>
                          
                          {/* Enhanced Description - Expandable */}
                          <div className="mb-4">
                            <p className={`text-sm text-gray-700 leading-relaxed ${
                              expandedCards.has(member.id) ? '' : 'line-clamp-3'
                            }`}>
                              {expandedCards.has(member.id) ? member.fullBio : member.description}
                            </p>
                            <button
                              onClick={() => toggleCardExpansion(member.id)}
                              className={`${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} hover:${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} text-sm font-semibold mt-2 flex items-center justify-center mx-auto ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 hover:${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/20 px-4 py-2 rounded-full transition-all duration-300 group/btn`}
                            >
                              {expandedCards.has(member.id) ? (
                                <><Minus className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" /> Show less</>
                              ) : (
                                <><Plus className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" /> Read more</>
                              )}
                            </button>
                          </div>

                          {/* Enhanced Expertise */}
                          <div className="flex items-center justify-center text-sm text-gray-600 mb-4 bg-gray-50 rounded-lg py-2 px-4">
                            <GraduationCap className={`w-5 h-5 mr-2 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                            <span className="font-medium">{member.expertise}</span>
                          </div>

                          {/* Enhanced Tags */}
                          <div className="flex flex-wrap justify-center gap-2">
                            {member.tags.map(tag => (
                              <span
                                key={tag}
                                className={`px-3 py-1 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white text-xs rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Swipeable Cards */}
                  <div className="md:hidden">
                    <div className="relative mb-8 sm:mb-12 md:mb-16">
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => {
                          if (carouselRef.current) {
                            const cardWidth = 320; // w-80 = 320px
                            const newIndex = Math.max(currentSlide - 1, 0);
                            setCurrentSlide(newIndex);
                            carouselRef.current.scrollTo({
                              left: newIndex * cardWidth,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                      </button>

                      <button
                        onClick={() => {
                          if (carouselRef.current) {
                            const cardWidth = 320; // w-80 = 320px
                            const newIndex = Math.min(currentSlide + 1, getFilteredFaculty().length - 1);
                            setCurrentSlide(newIndex);
                            carouselRef.current.scrollTo({
                              left: newIndex * cardWidth,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
                      >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                      </button>

                      {/* Carousel Container */}
                      <div
                        ref={carouselRef}
                        className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-12 md:px-16"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {getFilteredFaculty().map((member, index) => (
                          <div
                            key={member.id}
                            className="flex-shrink-0 w-80 group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
                          >
                            {/* Image Section - Prominent */}
                            <div className="relative h-64 sm:h-56 md:h-96 overflow-hidden">
                              <img
                                src={member.image}
                                alt={`${member.name} - ${member.title}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/uploads/placeholder-faculty.jpg';
                                }}
                              />
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center hidden">
                                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                              </div>

                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                              {/* Title Badge */}
                              <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                                <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                                  {member.title}
                                </div>
                              </div>

                              {/* Hover Effect Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-6 md:p-8">
                              <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors">
                                {member.name}
                              </h3>
                              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 font-medium">
                                {member.qualifications}
                              </p>
                              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                                {expandedCards.has(member.id) ? member.fullBio : member.description}
                              </p>

                              {/* Action Button */}
                              <div className="flex items-center justify-between">
                                <div className={`inline-flex items-center gap-1 sm:gap-2 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300`}>
                                  {expandedCards.has(member.id) ? 'Show less' : 'Read more'}
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                                <button
                                  onClick={() => toggleCardExpansion(member.id)}
                                  className={`w-6 h-6 sm:w-8 sm:h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-full flex items-center justify-center group-hover:${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} transition-all duration-300`}
                                >
                                  {expandedCards.has(member.id) ? (
                                    <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-white transition-colors" />
                                  ) : (
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-white transition-colors" />
                                  )}
                                </button>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-1 mt-4">
                                {member.tags.slice(0, 3).map(tag => (
                                  <span
                                    key={tag}
                                    className={`px-2 py-1 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white text-xs rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Dots Indicator */}
                      <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
                        {getFilteredFaculty().map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentSlide(index);
                              if (carouselRef.current) {
                                const cardWidth = 320;
                                carouselRef.current.scrollTo({
                                  left: index * cardWidth,
                                  behavior: 'smooth'
                                });
                              }
                            }}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                              ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} scale-125`
                              : "bg-gray-300 hover:bg-gray-400"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Why Learn from IMAS Faculty Section */}
        <section id="faculty-cta" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-[1550px] mx-auto px-4">
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Why Learn from <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>IMAS Faculty?</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg mb-4`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Academic Excellence</h4>
                  <p className="text-sm text-gray-600">with Practical Insights</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg mb-4`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry-Ready</h4>
                  <p className="text-sm text-gray-600">Management Education Kolkata</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg mb-4`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Mentorship</h4>
                  <p className="text-sm text-gray-600">by Industry Practitioners</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg mb-4`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Research-Driven</h4>
                  <p className="text-sm text-gray-600">Learning</p>
                </div>
              </div>
            </div>

            
          </div>
        </section>

        {/* CTA Section - Matching Home Page */}
            <section id="final-cta" className="relative py-16  bg-gray-900 text-white overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/uploads/IMASBUILDING.jpeg" 
                  alt="IMAS Building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/80"></div>
              </div>
              
              <div className="relative max-w-[1260px] mx-auto px-4 text-center z-10">
                <div className="max-w-4xl mx-auto">
                  <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} text-white px-6 py-2 rounded-full text-sm font-semibold mb-6`}>
                    ADMISSIONS OPEN
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Ready to Transform Your Career?
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join IMAS College Kolkata and become part of a community that's shaping the future of business leadership.
                  </p>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 text-teal-400" />
                      <span className="text-gray-300">{IMAS_CONTACT.PHONE}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="h-5 w-5 text-teal-400" />
                      <span className="text-gray-300">{IMAS_CONTACT.EMAIL}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <Button 
                      className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300`}
                      onClick={applyNow}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
                      onClick={downloadBrochure}
                    >
                      Download Brochure
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 text-sm text-gray-400">
                    <p>Application Deadline: <span className="text-red-400 font-semibold">24th August 2025</span></p>
                    <p className="mt-2">Limited seats available for the 2025 batch</p>
                  </div>
                </div>
              </div>
            </section>

        {/* Sticky CTA Footer */}
        <StickyCTAFooter heroSectionHeight={700} />
      </div>
    </>
  );
}