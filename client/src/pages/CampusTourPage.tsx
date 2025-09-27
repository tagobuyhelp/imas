import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Building2, 
  Users, 
  GraduationCap,
  ArrowLeft,
  Download,
  Share2,
  Heart,
  Eye,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND, IMAS_CONTACT } from '../lib/constants';
import { useNavigate } from 'react-router-dom';
import { applyNow, downloadBrochure } from '../lib/utils';

export function CampusTourPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Campus photos data
  const campusPhotos = [
    {
      id: 1,
      src: '/uploads/campus_photos/DSC_2802.JPG',
      title: 'Main Campus Building',
      description: 'Our state-of-the-art main campus building with modern architecture and facilities.',
      category: 'Infrastructure'
    },
    {
      id: 2,
      src: '/uploads/campus_photos/DSC_2804.JPG',
      title: 'Campus Entrance',
      description: 'Welcoming entrance to IMAS Business School with beautiful landscaping.',
      category: 'Infrastructure'
    },
    {
      id: 3,
      src: '/uploads/campus_photos/DSC_2805.JPG',
      title: 'Academic Block',
      description: 'Modern academic facilities designed for interactive learning experiences.',
      category: 'Academic'
    },
    {
      id: 4,
      src: '/uploads/campus_photos/DSC_2807.JPG',
      title: 'Campus Courtyard',
      description: 'Beautiful courtyard area where students gather and collaborate.',
      category: 'Campus Life'
    },
    {
      id: 5,
      src: '/uploads/campus_photos/DSC_2817.JPG',
      title: 'Learning Spaces',
      description: 'Innovative learning spaces equipped with latest technology.',
      category: 'Academic'
    },
    {
      id: 6,
      src: '/uploads/campus_photos/IMG_8109.JPG',
      title: 'Student Commons',
      description: 'Vibrant student common areas for relaxation and networking.',
      category: 'Campus Life'
    },
    {
      id: 7,
      src: '/uploads/campus_photos/IMG_8110.JPG',
      title: 'Library & Study Areas',
      description: 'Comprehensive library with quiet study spaces and digital resources.',
      category: 'Academic'
    },
    {
      id: 8,
      src: '/uploads/campus_photos/IMG_8115.JPG',
      title: 'Campus Facilities',
      description: 'Modern facilities supporting student life and academic excellence.',
      category: 'Infrastructure'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Academic', 'Campus Life'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos = selectedCategory === 'All' 
    ? campusPhotos 
    : campusPhotos.filter(photo => photo.category === selectedCategory);

  const openImageViewer = (index: number) => {
    setSelectedImage(index);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredPhotos.length;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeImageViewer();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <>
      <Helmet>
        <title>Campus Tour - {IMAS_BRAND.NAME}</title>
        <meta name="description" content="Take a virtual tour of IMAS Business School campus. Explore our state-of-the-art facilities, modern infrastructure, and vibrant campus life." />
        <meta name="keywords" content="IMAS campus tour, business school facilities, campus photos, infrastructure, academic spaces" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/uploads/imas_hero_image1.webp" 
            alt="IMAS Campus Tour Hero" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className={`absolute top-20 left-10 w-20 h-20 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 rounded-full animate-pulse`}></div>
          <div className={`absolute top-40 right-20 w-16 h-16 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-bounce`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-[1260px] mx-auto px-4 py-16 lg:py-24 text-center z-20">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/20 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>

          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg border border-white/20">
              CAMPUS TOUR
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Virtual Campus Experience</h1>
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
                  Explore IMAS Facilities
                </div>
              </div>
            </div>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Take a virtual tour of our state-of-the-art campus facilities, modern infrastructure, and vibrant learning environment at IMAS Business School.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Salt Lake Sector V, Kolkata</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span>Modern Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Vibrant Campus Life</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>World-Class Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Campus <span className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Gallery</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => openImageViewer(index)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Eye className="h-6 w-6 text-gray-800" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {photo.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#143674] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
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
              VISIT OUR CAMPUS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience Our Campus?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a visit to explore our world-class facilities in person and meet our faculty and students.
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
                onClick={() => window.open(`tel:${IMAS_CONTACT.PHONE}`, '_self')}
              >
                Schedule Visit
                <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-sm text-gray-400">
              <p>Campus Tours: <span className="text-teal-400 font-semibold">Monday to Saturday, 10 AM - 4 PM</span></p>
              <p className="mt-2">Prior appointment recommended for personalized tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageViewer}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeImageViewer}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={filteredPhotos[selectedImage].src}
              alt={filteredPhotos[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-1">{filteredPhotos[selectedImage].title}</h3>
              <p className="text-white/80">{filteredPhotos[selectedImage].description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="px-2 py-1 bg-white/20 text-white text-sm rounded-full">
                  {filteredPhotos[selectedImage].category}
                </span>
                <span className="text-white/60 text-sm">
                  {selectedImage + 1} of {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}