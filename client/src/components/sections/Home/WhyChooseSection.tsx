import React, { useState } from 'react';
import { CheckCircle, Globe, Users, Award, BookOpen, Briefcase, ArrowRight, Star, TrendingUp, Shield, Zap, Play } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

// Video Content Component
const VideoContent = ({ title, description, videoUrl }: { title: string; description: string; videoUrl: string }) => {
  return (
    <div className="space-y-5 font-serif">
      <div className="text-center space-y-3">
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">
          {title.toUpperCase()}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          {description.toUpperCase()}
        </p>
      </div>

      {/* Video Description */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center flex-shrink-0`}>
            <Play className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">VIDEO OVERVIEW</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
            Experience Our Modern Campus Facilities, State-of-the-art Classrooms, And Vibrant Learning Environment Through This Comprehensive Virtual Tour.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">CAMPUS TOUR</p>
              <p className="text-xs text-gray-600">Virtual Walkthrough</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">FACILITIES</p>
              <p className="text-xs text-gray-600">Modern Infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Statistics Content Component
const StatsContent = ({ title, stats }: { title: string; stats: Array<{ number: string; title: string; subtitle: string }> }) => (
  <div className="space-y-6 font-serif">
    <div className="text-center">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
        {title.toUpperCase()}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        OUR COMMITMENT TO EXCELLENCE IS REFLECTED IN THESE IMPRESSIVE NUMBERS
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="group relative">
          {/* Background Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-blue-200">
            {/* Icon Background */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-center pt-3">
              {/* Number */}
              <div className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-2 group-hover:scale-110 transition-transform duration-300 leading-none`}>
                {stat.number}
              </div>

              {/* Title */}
              <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                {stat.title.toUpperCase()}
              </div>

              {/* Subtitle */}
              <div className="text-xs text-gray-600 leading-relaxed">
                {stat.subtitle.toUpperCase()}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className={`w-6 h-6 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full`}></div>
            </div>
            <div className="absolute bottom-3 left-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className={`w-4 h-4 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="text-center pt-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
        <div className={`w-2 h-2 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full animate-pulse`}></div>
        <span className="text-xs font-medium text-gray-700">LIVE STATISTICS</span>
      </div>
    </div>
  </div>
);

// Benefits Content Component
const BenefitsContent = ({ title, benefits }: { title: string; benefits: string[] }) => (
  <div className="space-y-5 font-serif">
    <div className="text-center">
      <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
        {title.toUpperCase()}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">
        DISCOVER WHAT MAKES IMAS THE PREFERRED CHOICE FOR MANAGEMENT EDUCATION
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
          <div className={`w-4 h-4 sm:w-5 sm:h-5 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
            <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-800 text-xs sm:text-sm leading-relaxed">
              {benefit.toUpperCase()}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Text Content Component
const TextContent = ({ title, description }: { title: string; description: string }) => (
  <div className="space-y-4 font-serif">
    <div className="text-center">
      <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
        {title.toUpperCase()}
      </h3>
    </div>
    <div className="max-w-3xl mx-auto">
      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center">
        {description.toUpperCase()}
      </p>
    </div>
    <div className="text-center pt-2">
      <button className={`inline-flex items-center gap-2 px-4 py-2 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}>
        <span className="text-xs">LEARN MORE</span>
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  </div>
);

// Career & Placements Content Component
const CareerContent = () => (
  <div className="space-y-5 font-serif">
    <div className="text-center">
      <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
        CAREER & PLACEMENTS
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">
        RECOGNIZED AS A TOP MBA PLACEMENT COLLEGE KOLKATA
      </p>
    </div>
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
      <div className="text-center space-y-3">
        <div className={`w-14 h-14 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center mx-auto`}>
          <Briefcase className="h-7 w-7 text-white" />
        </div>
        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
          100% PLACEMENT ASSISTANCE
        </h4>
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          IMAS BOASTS 100% PLACEMENT ASSISTANCE WITH TOP RECRUITERS FROM DIVERSE INDUSTRIES. THE CURRICULUM IS TAILORED TO PRODUCE INDUSTRY-READY PROFESSIONALS, MAKING IMAS A COLLEGE WITH 100% PLACEMENT IN KOLKATA.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
      <div className="text-center p-2 sm:p-3 rounded-lg bg-white border border-gray-200">
        <div className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>
          100%
        </div>
        <div className="text-xs sm:text-sm font-medium text-gray-800">
          PLACEMENT RATE
        </div>
      </div>
      <div className="text-center p-2 sm:p-3 rounded-lg bg-white border border-gray-200">
        <div className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>
          ₹14.5L-18.5L
        </div>
        <div className="text-xs sm:text-sm font-medium text-gray-800">
          AVERAGE CTC
        </div>
      </div>
    </div>
  </div>
);

export function WhyChooseSection() {
  const [activeTab, setActiveTab] = useState('placements');

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    if (!url || url === '#') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };



  const navigationTabs = [
    {
      id: 'placements',
      title: 'Campus Introduction',
      icon: TrendingUp
    },
    {
      id: 'degree',
      title: '100% Placement Assurance',
      icon: Award
    },
    {
      id: 'difference',
      title: 'AICTE-Approved Programs',
      icon: Star
    },
    {
      id: 'coding',
      title: 'Industry-Ready Curriculum',
      icon: Zap
    },
    {
      id: 'curriculum',
      title: 'International Partnerships',
      icon: BookOpen
    },
    {
      id: 'pursue',
      title: 'Affordable Education',
      icon: CheckCircle
    },
    {
      id: 'career',
      title: 'Career & Placements',
      icon: Briefcase
    }
  ];

  const videoContent = [
    {
      id: 'placements',
      title: 'Campus Introduction',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/campus-intro.jpg',
      description: 'Take a virtual tour of our state-of-the-art campus and facilities',
      videoUrl: 'https://youtu.be/rM3MWkhO6GA?si=BHHYMQRMq9aRpK5o',
      content: {
        type: 'video',
        videoUrl: 'https://youtu.be/rM3MWkhO6GA?si=BHHYMQRMq9aRpK5o',
        description: 'Experience our modern campus facilities, state-of-the-art classrooms, and vibrant learning environment through this comprehensive virtual tour.'
      }
    },
    {
      id: 'degree',
      title: '100% Placement Assurance',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/placements-video.jpg',
      description: 'Discover our proven track record of 100% placement support',
      videoUrl: '#',
      content: {
        type: 'stats',
        title: "WE'RE PROUD OF OUR IMPACT",
        stats: [
          {
            number: '117+',
            title: 'Certified Faculty',
            subtitle: 'Industry Experts & Academicians'
          },
          {
            number: '12,456+',
            title: 'Courses Delivered',
            subtitle: 'PGDM & MBA Programs Completed'
          },
          {
            number: '2,20,234+',
            title: 'Students Empowered',
            subtitle: 'Professionals Trained'
          }
        ]
      }
    },
    {
      id: 'difference',
      title: 'AICTE-Approved Programs',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/aicte-programs.jpg',
      description: 'Learn about our government-recognized management courses',
      videoUrl: '#',
      content: {
        type: 'benefits',
        title: 'Why Choose Us?',
        benefits: [
          'AICTE-Approved Programmes',
          '100% Placement Support & IMAS Placement Success',
          'Average CTC between ₹14.5L - ₹18.5L',
          'International Student Exchange Programs',
          'Industry-Ready Management Courses Kolkata with dual certification options',
          'Strategic partnerships with universities in Europe and Asia',
          'Affordable course fees with options for Education Loans & IMAS Scholarship 2025'
        ]
      }
    },
    {
      id: 'coding',
      title: 'Industry-Ready Curriculum',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/curriculum-video.jpg',
      description: 'How our courses prepare you for real-world challenges',
      videoUrl: '#',
      content: {
        type: 'text',
        title: 'Industry-Ready Curriculum',
        description: 'Our curriculum is designed in collaboration with industry leaders to ensure students are equipped with the latest skills and knowledge required in today\'s dynamic business environment. We focus on practical learning, case studies, and real-world projects.'
      }
    },
    {
      id: 'curriculum',
      title: 'International Partnerships',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/international-partners.jpg',
      description: 'Global exposure through European and Asian university partnerships',
      videoUrl: '#',
      content: {
        type: 'text',
        title: 'Global Partnerships',
        description: 'We have strategic partnerships with leading universities in Europe and Asia, providing our students with international exposure, exchange programs, and dual certification opportunities. This global perspective enhances their career prospects worldwide.'
      }
    },
    {
      id: 'pursue',
      title: 'Affordable Education',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/scholarship-video.jpg',
      description: 'Education loans and IMAS Scholarship 2025 opportunities',
      videoUrl: '#',
      content: {
        type: 'text',
        title: 'Affordable Education',
        description: 'We believe quality education should be accessible to all. Our affordable course fees, combined with education loan options and the IMAS Scholarship 2025, make world-class management education within reach for deserving students.'
      }
    },
    {
      id: 'career',
      title: 'Career & Placements',
      subtitle: 'at IMAS COLLEGE KOLKATA',
      image: '/uploads/career-placements.jpg',
      description: 'Discover our placement success and career opportunities',
      videoUrl: '#',
      content: {
        type: 'career'
      }
    }
  ];

  const currentVideo = videoContent.find(video => video.id === activeTab) || videoContent[0];

  const renderContent = () => {
    switch (currentVideo.content.type) {
      case 'video':
        return <VideoContent
          title={currentVideo.title}
          description={currentVideo.content.description || ''}
          videoUrl={currentVideo.content.videoUrl || ''}
        />;
      case 'stats':
        return currentVideo.content.stats ? (
          <StatsContent
            title={currentVideo.content.title || ''}
            stats={currentVideo.content.stats}
          />
        ) : null;
      case 'benefits':
        return currentVideo.content.benefits ? (
          <BenefitsContent
            title={currentVideo.content.title || ''}
            benefits={currentVideo.content.benefits}
          />
        ) : null;
      case 'text':
        return <TextContent
          title={currentVideo.content.title || ''}
          description={currentVideo.content.description || ''}
        />;
      case 'career':
        return <CareerContent />;
      default:
        return <TextContent title={currentVideo.title} description={currentVideo.description} />;
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1260px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            GET YOUR MANAGEMENT DEGREE WITH 100% PLACEMENT ASSURANCE
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            AT IMAS KOLKATA, WE DON'T JUST EDUCATE, WE{' '}
            <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              TRANSFORM FUTURES
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            WITH OUR AICTE-APPROVED, INDUSTRY-READY MANAGEMENT COURSES.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
          {/* Left Column - Navigation Tabs */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 sm:p-4 lg:p-6">
              <div className="space-y-1 sm:space-y-2">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-2 sm:p-3 lg:p-4 rounded-lg transition-all duration-300 flex items-center gap-2 sm:gap-3 ${activeTab === tab.id
                      ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-md`
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    <tab.icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${activeTab === tab.id ? 'text-white' : IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE
                      }`} />
                    <span className="text-xs sm:text-sm lg:text-base font-medium">{tab.title.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Content Header */}
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900">
                {currentVideo.content.type === 'video' && currentVideo.videoUrl && currentVideo.videoUrl !== '#' ? (
                  /* Video Player for Campus Introduction */
                  <div className="w-full h-full">
                                         <iframe
                       src={`https://www.youtube-nocookie.com/embed/${getYouTubeVideoId(currentVideo.videoUrl)}?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&autoplay=0&loop=0&playlist=${getYouTubeVideoId(currentVideo.videoUrl)}`}
                       title={currentVideo.title}
                       className="w-full h-full"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen
                     ></iframe>
                  </div>
                ) : (
                  /* Image for other tabs */
                  <>
                    <img
                      src={currentVideo.image}
                      alt={currentVideo.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                        {/* IMAS Logo Placeholder */}
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm sm:text-base lg:text-lg">I</span>
                        </div>

                        <div className="flex-1">
                                                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1">
                          {currentVideo.title.toUpperCase()}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm lg:text-base">
                          {currentVideo.subtitle.toUpperCase()}
                        </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Dynamic Content Based on Tab */}
              <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
