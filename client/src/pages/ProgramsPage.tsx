import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { GraduationCap, Clock, Users, Award, ArrowRight, Star, Building2, CheckCircle, Globe, Calendar, MapPin, DollarSign, BookOpen, Target, Users2, Download, Mail, ExternalLink, ChevronRight, Play, Shield, Zap, Heart } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { Link } from 'react-router-dom';
import { getProgramsByCategory } from '../lib/programsData';
import { ProgramsSection } from '../components/sections/Home/ProgramsSection';

export function ProgramsPage() {

  const programData = {
    name: 'PGDM Plus in Marketing Management',
    duration: '2 Years',
    location: 'Kolkata',
    format: 'Full Time - On Campus',
    commencement: '19th Sep 2025',
    includes: 'Includes Industry Projects & Internships',
    locationDesc: 'Located near Salt Lake Sector V'
  };

  const curriculumPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Core Management',
      duration: '6 Months',
      topics: ['Business Fundamentals', 'Management Principles', 'Leadership Skills', 'Communication']
    },
    {
      phase: 'Phase 2',
      title: 'Marketing Specialization',
      duration: '6 Months',
      topics: ['Consumer Behavior & Neuromarketing', 'Integrated Marketing Communication', 'Brand Strategy & Positioning', 'Digital & Performance Marketing']
    },
    {
      phase: 'Phase 3',
      title: 'Industry Projects & Internship',
      duration: '3 Months',
      topics: ['Live Business Projects', 'Industry Exposure', 'Mentorship', 'Networking']
    },
    {
      phase: 'Phase 4',
      title: 'Capstone & Placement',
      duration: '3 Months',
      topics: ['Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
    }
  ];

  const outcomes = [
    { metric: '100%', label: 'Placement Rate' },
    { metric: '₹18.5 LPA', label: 'Highest Package' },
    { metric: '₹8-12 LPA', label: 'Average Package' },
    { metric: '50+', label: 'Top Recruiters' }
  ];

  const pgdmPlusPrograms = getProgramsByCategory('pgdm-plus');
  const executivePrograms = getProgramsByCategory('executive');
  const mbaGlobalProgram = getProgramsByCategory('mba-global')[0];

  // Top Recruiters Data
  const topRecruiters = [
    { name: 'Amazon', logo: '/uploads/Customer-logo_Amazon.png', alt: 'Amazon Logo' },
    { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png', alt: 'Google Logo' },
    { name: 'Deloitte', logo: '/uploads/deloitte.png', alt: 'Deloitte Logo' },
    { name: 'Accenture', logo: '/uploads/Accenture.svg.webp', alt: 'Accenture Logo' },
    { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp', alt: 'Flipkart Logo' },
    { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg', alt: 'Swiggy Logo' },
    { name: 'Zomato', logo: '/uploads/Zomato-Logo.png', alt: 'Zomato Logo' },
    { name: 'Ola', logo: '/uploads/Ola_Cabs_logo.svg', alt: 'Ola Logo' },
    { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg', alt: 'Razorpay Logo' },
    { name: 'Delhivery', logo: '/uploads/delhivery.png', alt: 'Delhivery Logo' }
  ];

  // Why Choose IMAS Data
  const whyChooseIMAS = [
    {
      icon: Shield,
      title: 'AICTE Approved',
      description: 'All our programs are AICTE-approved, ensuring quality education and recognition'
    },
    {
      icon: Users,
      title: 'Industry Expert Faculty',
      description: 'Learn from professionals with 15+ years of industry experience'
    },
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'International collaborations with UK universities for global exposure'
    },
    {
      icon: Target,
      title: '100% Placement Support',
      description: 'Dedicated placement cell with 50+ top recruiters'
    },
    {
      icon: Zap,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities in Salt Lake Sector V, Kolkata'
    },
    {
      icon: Heart,
      title: 'Personalized Mentorship',
      description: 'One-on-one guidance from industry leaders and alumni'
    }
  ];

  const handleCTAAction = (action: string) => {
    switch (action) {
      case 'apply':
        window.open('/admissions', '_blank');
        break;
      case 'enquire':
        window.open('/contact', '_blank');
        break;
      case 'download':
        console.log('Download brochure');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile Friendly with Background Image */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[65vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Fallback */}
        <div className="absolute inset-0 z-0">
          <img
            src="/uploads/imas_hero_image1.webp"
            alt="IMAS Programs Hero"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              // Show fallback gradient
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'block';
              }
            }}
          />
          {/* Fallback gradient - hidden by default */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hidden"></div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/70 z-10"></div>

        {/* Animated Background Elements - Mobile Optimized */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className={`absolute top-8 left-4 sm:top-20 sm:left-10 w-8 h-8 sm:w-20 sm:h-20 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 rounded-full animate-pulse`}></div>
          <div className={`absolute top-16 right-4 sm:top-40 sm:right-20 w-6 h-6 sm:w-16 sm:h-16 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-bounce`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-8 left-1/3 sm:bottom-20 sm:left-1/4 w-4 h-4 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-[1260px] mx-auto px-4 py-6 sm:py-8 lg:py-10 relative z-20 w-full">
          <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 animate-fade-in-up">
            {/* Program Title - Mobile Optimized */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight text-white">
                Our Programs
              </h1>
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mb-3 sm:mb-4 lg:mb-6 animate-pulse font-medium px-2 sm:px-0`}>
                India's Only B-School Powered by Industry Experts & Designed for Tomorrow's Leaders
              </p>
            </div>

            {/* Key Highlights - Mobile Optimized */}
            <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-full overflow-hidden">
                <div className="flex gap-1.5 sm:gap-2 lg:gap-4 animate-scroll-left whitespace-nowrap">
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    AICTE-Approved
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    100% Placement
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    Global Partnerships
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    Expert Faculty
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    Modern Infrastructure
                  </span>
                  {/* Duplicate items for seamless loop */}
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    AICTE-Approved
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    100% Placement
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10 backdrop-blur-sm`}>
                    Global Partnerships
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.8s' }}>
              <Button 
                className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto`}
                onClick={() => handleCTAAction('apply')}
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
                onClick={() => handleCTAAction('download')}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights - Enhanced Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1260px] mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
              PROGRAM OVERVIEW
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive details about our flagship programs designed for future leaders
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Duration Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Duration</h3>
                  <p className="text-3xl font-bold text-[#143674] mb-1">2 Years</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-gray-600 font-medium">Full Time Programs</p>
                  </div>
                  <p className="text-xs text-gray-500">Intensive Learning Experience</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Location</h3>
                  <p className="text-3xl font-bold text-[#143674] mb-1">Kolkata</p>
                  <div className="flex items-center justify-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-500" />
                    <p className="text-sm text-gray-600 font-medium">Salt Lake Sector V</p>
                  </div>
                  <p className="text-xs text-gray-500">IT Hub & Business District</p>
                </div>
              </div>
            </div>

            {/* Format Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Format</h3>
                  <p className="text-3xl font-bold text-[#143674] mb-1">On Campus</p>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <p className="text-sm text-gray-600 font-medium">Full Time</p>
                  </div>
                  <p className="text-xs text-gray-500">Immersive Campus Life</p>
                </div>
              </div>
            </div>

            {/* Commencement Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                  <Calendar className="h-8 w-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Commencement</h3>
                  <p className="text-3xl font-bold text-[#143674] mb-1">Sep 2025</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <p className="text-sm text-gray-600 font-medium">Next Batch</p>
                  </div>
                  <p className="text-xs text-gray-500">Limited Seats Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">AICTE Approved</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="font-semibold">100% Placement Support</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span className="font-semibold">Global Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section from HomePage */}
      <ProgramsSection />

      {/* Why Choose IMAS Section - Mobile Friendly */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
              WHY CHOOSE IMAS
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              India's Premier Business School
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose IMAS for a transformative learning experience that combines academic excellence with industry relevance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseIMAS.map((item, index) => (
              <Card key={index} className="border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#143674]" />
                  </div>
                  <CardTitle className="text-[#143674] text-base sm:text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters Section - Mobile Friendly */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
              OUR TOP RECRUITERS
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Join Leading Companies Worldwide
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Our graduates are placed in top-tier companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {topRecruiters.map((recruiter, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <img
                    src={recruiter.logo}
                    alt={recruiter.alt}
                    className="h-8 sm:h-12 w-auto object-contain filter  transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* CTA Section - Mobile Friendly */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-900 text-white">
        <div className="max-w-[1260px] mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Be the People Leader Companies Want
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              With access to a global alumni network, certified skill training, and hands-on learning from real-world HR challenges, this PGDM in HRM in Kolkata at IMAS builds leaders who create impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300`}
                onClick={() => handleCTAAction('apply')}
              >
                Apply Now for IMAS Admission 2025
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => handleCTAAction('enquire')}
              >
                Enquire Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => handleCTAAction('download')}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
