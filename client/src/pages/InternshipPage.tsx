import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Check, TrendingUp, Award, Globe, Phone, Mail, ArrowRight } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_CONTACT } from '../lib/constants';
import { applyNow, downloadBrochure } from '../lib/utils';
import { StickyCTAFooter } from '../components/layout/StickyCTAFooter';
import { LearnersSection } from '../components/sections/Home/LearnersSection';

export function InternshipPage() {
  const companyLogos = [
    { name: 'Deloitte', logo: '/uploads/deloitte.png' },
    { name: 'PwC', logo: '/uploads/pwclogo.png' },
    { name: 'EY', logo: '/uploads/EY_logo_2019.svg.png' },
    { name: 'McKinsey', logo: '/uploads/mckinseylogo.png' },
    { name: 'Aditya Birla Group', logo: '/uploads/Aditya_Birla_Group_Logo.svg.png' },
    { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg' },
    { name: 'Amazon', logo: '/uploads/Customer-logo_Amazon.png' },
    { name: 'Infosys', logo: '/uploads/InfosysLogo.png' },
    { name: 'Wipro', logo: '/uploads/Wipro_Primary_Logo_Color_RGB.svg.png' },
    { name: 'Fortis Healthcare', logo: '/uploads/fortis_logo.png' },
    { name: 'Apollo Hospitals', logo: '/uploads/apollo-hospitals-logo-png-transparent.png' },
    { name: 'ITC', logo: '/uploads/ITC_Limited_Logo.svg.png' },
    { name: 'BCG', logo: '/uploads/BCG_MONOGRAM.png' },
    { name: 'TCS', logo: '/uploads/tcsLogo.webp' },
    { name: 'Accenture', logo: '/uploads/Accenture.svg.webp' },
    { name: 'KPMG', logo: '/uploads/kpmglogo.png' },
    { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp' },
    { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png' },
    { name: 'Microsoft', logo: '/uploads/purepng.com-microsoft-logologobrand-logoiconslogos-251519939132du80p.png' },
    { name: 'IBM', logo: '/uploads/IBM_logo.svg.webp' },
    { name: 'Paytm', logo: '/uploads/PaytmLogo.png' },
    { name: 'Zomato', logo: '/uploads/Zomato-Logo.png' },
    { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg' },
    { name: 'HDFC Bank', logo: '/uploads/hdfc-bank-logo-czdJZ5Tf_t.jpg' },
    { name: 'ICICI Bank', logo: '/uploads/ICICI_Bank_Logo.svg.png' },
    { name: 'Axis Bank', logo: '/uploads/axisBankLogo.png' },
    { name: 'Kotak Bank', logo: '/uploads/kotaklogo.png' },
    { name: 'Tata', logo: '/uploads/tatalogo.jpg' },
    { name: 'Godrej', logo: '/uploads/Godrej_Logo.svg.png' },
    { name: 'Mahindra', logo: '/uploads/mahindra-logo-vector-free-11574210410bvsayvnvbr.png' }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Internship Program - IMAS Kolkata | Pre-Placement Opportunities</title>
        <meta name="description" content="Join IMAS Kolkata's comprehensive internship program. 75% students secure full-time offers, ₹50,000 highest stipend. Real-world experience with top companies." />
        <meta name="keywords" content="IMAS internship, pre-placement program, management internship, Kolkata business school, corporate internship" />
        <link rel="canonical" href="https://www.imas.ac.in/internships" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-32 sm:w-72 h-32 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
          <div className="absolute -bottom-4 sm:-bottom-8 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
              INTERNSHIP PROGRAM
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-6 leading-tight px-2">
              IMAS Internship Program
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              At IMAS Kolkata, we believe learning doesn't end in classrooms.
            </p>
            
            {/* Pre-Placement Outcomes */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-12 max-w-4xl mx-auto px-2">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-xl sm:text-3xl font-bold text-[#143674] mb-1 sm:mb-2">75%</div>
                <div className="text-gray-600 text-[10px] sm:text-sm">Secured full-time internships 1 month early</div>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-xl sm:text-3xl font-bold text-[#143674] mb-1 sm:mb-2">₹50,000</div>
                <div className="text-gray-600 text-[10px] sm:text-sm">Highest Monthly Stipend</div>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-xl sm:text-3xl font-bold text-[#143674] mb-1 sm:mb-2">₹40,000</div>
                <div className="text-gray-600 text-[10px] sm:text-sm">Median Full-time Internship Stipend</div>
              </div>
            </div>

            <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Our internship and pre-placement program ensure that every student applies management concepts to real-world challenges by creating tangible results even before graduation.
            </p>

            <Button 
              onClick={applyNow}
              className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              Apply Now for IMAS Admission 2025
            </Button>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 px-2">
              Our Learners Are Now Placed At
            </h2>
          </div>

          {/* Animated Company Logos */}
          <div className="relative overflow-hidden">
            {/* First Row - Left to Right */}
            <div className="flex animate-scroll-right mb-4 sm:mb-8">
              {[...companyLogos.slice(0, 15), ...companyLogos.slice(0, 15)].map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-2 sm:mx-6">
                  <div className="w-24 sm:w-32 h-16 sm:h-20 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-gray-700 font-semibold text-xs sm:text-sm text-center px-1 sm:px-2 hidden">{company.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Right to Left */}
            <div className="flex animate-scroll-left">
              {[...companyLogos.slice(15), ...companyLogos.slice(15)].map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-2 sm:mx-6">
                  <div className="w-24 sm:w-32 h-16 sm:h-20 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-gray-700 font-semibold text-xs sm:text-sm text-center px-1 sm:px-2 hidden">{company.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 px-2">
              Did You Know?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center group">
              <div className={`w-12 sm:w-16 h-12 sm:h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#143674] mb-1 sm:mb-2">₹12 Lakhs+</div>
              <div className="text-gray-600 text-sm sm:text-base px-2">Revenue Generated by startups launched by IMAS students during their internships.</div>
            </div>

            <div className="text-center group">
              <div className={`w-12 sm:w-16 h-12 sm:h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <Award className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#143674] mb-1 sm:mb-2">National Recognition</div>
              <div className="text-gray-600 text-sm sm:text-base px-2">IMAS teams have won competitions at IIMs and leading B-Schools.</div>
            </div>

            <div className="text-center group">
              <div className={`w-12 sm:w-16 h-12 sm:h-16 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <Globe className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#143674] mb-1 sm:mb-2">Global Experience</div>
              <div className="text-gray-600 text-sm sm:text-base px-2">Students interned in cross-border projects with UK & UAE-based firms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <LearnersSection />

      {/* High-Impact Roles Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-6 px-2">
                Land <span className="text-green-600">High Impact Roles</span>
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-8 px-2">
                Learners now shaping businesses as professionals.
              </p>
            </div>

            {/* Right Side - Role Statistics */}
            <div className="space-y-2 sm:space-y-4 px-2">
              <div className="flex items-center">
                <div className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]">
                  Marketing - 38%
                </div>
                <div className="flex-1 bg-gray-200 h-1.5 sm:h-2 ml-2 sm:ml-4 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{width: '38%'}}></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]">
                  Product - 21%
                </div>
                <div className="flex-1 bg-gray-200 h-1.5 sm:h-2 ml-2 sm:ml-4 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{width: '21%'}}></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]">
                  Strategy - 15%
                </div>
                <div className="flex-1 bg-gray-200 h-1.5 sm:h-2 ml-2 sm:ml-4 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]">
                  Founder's Office - 15%
                </div>
                <div className="flex-1 bg-gray-200 h-1.5 sm:h-2 ml-2 sm:ml-4 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]">
                  Operations - 6%
                </div>
                <div className="flex-1 bg-gray-200 h-1.5 sm:h-2 ml-2 sm:ml-4 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{width: '6%'}}></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]">
                  Finance - 5%
                </div>
                <div className="flex-1 bg-gray-200 h-1.5 sm:h-2 ml-2 sm:ml-4 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{width: '5%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Home Page */}
      <section id="final-cta" className="relative py-16 bg-gray-900 text-white overflow-hidden">
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
              IMAS Internships = Gateway to Placements
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              At IMAS, internships are not just stepping stones, they are career accelerators. Many students receive Pre-Placement Offers (PPOs) directly from their internship companies, leading to seamless placement success.
            </p>

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
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Enquire Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={downloadBrochure}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StickyCTAFooter 
        onPrimaryClick={applyNow}
        onFloatingClick={applyNow}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
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
        
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
}