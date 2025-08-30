import React, { useState } from 'react';
import { Award, Users, Globe, BookOpen, MapPin, Building, Target, ArrowRight, CheckCircle, Info, MapPin as MapPinIcon, Star } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'vision' | 'highlights'>('about');

  const keyHighlights = [
    {
      icon: Award,
      title: 'AICTE Approved',
      description: 'All programs officially recognized',
      highlight: 'Government Recognized'
    },
    {
      icon: Users,
      title: '100% Placement',
      description: 'Assured career support',
      highlight: 'Career Guaranteed'
    },
    {
      icon: BookOpen,
      title: 'Industry Focus',
      description: 'Real-world learning approach',
      highlight: 'Market Ready'
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'International collaborations',
      highlight: 'Worldwide Network'
    }
  ];

  const visionMission = {
    vision: {
      title: 'Our Vision',
      description: 'To be a global hub for excellence in management education, innovation, industry collaboration, and social impact, building a legacy of ethical leadership and technological advancement.',
      icon: Target
    },
    mission: {
      title: 'Our Mission',
      points: [
        'Develop capable and ethical leaders through rigorous academics',
        'Bridge the gap between academia and industry via real-world insights',
        'Encourage critical thinking, innovation, and global business outlook',
        'Foster diversity, transparency, and fearless debate'
      ],
      icon: Building
    }
  };

  const tabs = [
    {
      id: 'about',
      label: 'About',
      icon: Info,
      content: (
        <div className="space-y-6">
          {/* Main Content Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Row - Content */}
            <div className="space-y-6">
              {/* About IMAS Content */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">About IMAS Kolkata</h3>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                      Established 2021
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong>IMAS Kolkata</strong>, a premier <strong>business school in Kolkata</strong>, is redefining management education with a sharp focus on{' '}
                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>Management</span>,{' '}
                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>Business Analytics</span>,{' '}
                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>Artificial Intelligence</span>,{' '}
                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>Data Science</span>,{' '}
                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>Fintech</span>, and{' '}
                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>Innovation, Entrepreneurship & Venture Development</span>.
                  </p>
                  <p>
                    Established in <strong>2021</strong> under the <strong>Institute of Advance Education & Research</strong>, IMAS stands tall among the{' '}
                    <strong>best business schools in Kolkata</strong>, driving academic excellence with a global perspective.
                  </p>
                </div>
              </div>

              {/* Location & Infrastructure */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
                    <MapPinIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Strategic Location</h3>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                      Salt Lake Sector V
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    Strategically located near <strong>Salt Lake Sector V</strong>, the heart of Kolkata's IT hub, and close to{' '}
                    <strong>St. Xavier's University Newtown</strong>, <strong>IMAS College Kolkata</strong> offers an unparalleled environment for management education.
                  </p>
                  <p>
                    IMAS is approved by <strong>AICTE</strong>, ensuring credibility and quality across all its programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Row - Campus Image */}
            <div className="space-y-6">
              {/* Campus Image Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <div className="relative h-full sm:h-full md:h-full lg:h-full">
                  <img
                    src="/uploads/IMASBUILDING.jpeg"
                    alt="IMAS Campus - Premier Business School in Kolkata"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
                        <Building className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">IMAS Campus</h3>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white`}>
                          State-of-the-Art Facilities
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      label: 'Vision',
      icon: Target,
      content: (
        <div className="space-y-6">
          {/* Vision Card */}
          <div className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-lg p-6 text-white shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <visionMission.vision.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{visionMission.vision.title}</h3>
                <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
                  Future Focused
                </div>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              {visionMission.vision.description}
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
                <visionMission.mission.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{visionMission.mission.title}</h3>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                  Our Commitment
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {visionMission.mission.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'highlights',
      label: 'Key',
      icon: Star,
      content: (
        <div className="space-y-6">
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-4 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <highlight.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-800 mb-1">{highlight.title}</h4>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                      {highlight.highlight}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border border-gray-200 shadow-lg">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Ready to Join IMAS?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Start your journey towards excellence in management education
              </p>
              <button className={`inline-flex items-center gap-2 px-6 py-3 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95`}>
                <span>Learn More About IMAS</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about-imas" className="py-8 sm:py-12 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-[1260px] mx-auto px-4">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-8">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            ABOUT IMAS KOLKATA
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Premier Business School in Kolkata
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Redefining management education with cutting-edge programs and industry-focused curriculum
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white rounded-lg p-0.5 shadow-md border border-gray-200 w-full max-w-sm sm:max-w-md md:max-w-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-1/3 px-1 sm:px-2 md:px-3 py-1.5 sm:py-2 rounded-md font-semibold transition-all duration-300 text-xs sm:text-xs md:text-sm ${activeTab === tab.id
                  ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
              >
                <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                  <tab.icon className="h-3 w-3 sm:h-3 sm:w-3 md:h-3 md:w-3" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
}
