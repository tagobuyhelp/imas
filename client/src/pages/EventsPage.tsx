import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Calendar,
  MapPin,
  Users,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid3X3,
  List,
  ExternalLink,
  Award,
  Building2,
  GraduationCap,
  Heart
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND } from '../lib/constants';
import { staticEvents, EventItem } from '../data/events';
import { Image as ImageIcon } from 'lucide-react';

// Safely encode image URLs with spaces or emojis
const safeSrc = (url: string) => encodeURI(url);

// Get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Academic Talk':
      return GraduationCap;
    case 'Industry Engagement':
      return Building2;
    case 'Industrial Visit':
      return ExternalLink;
    case 'Cultural Celebration':
      return Heart;
    default:
      return Award;
  }
};

// Get category color
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Academic Talk':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Industry Engagement':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Industrial Visit':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Cultural Celebration':
      return 'bg-pink-100 text-pink-800 border-pink-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

function EventsHeroSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/IMASBUILDING.jpeg"
          alt="IMAS Events Hero Background"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY}/90`}></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-lg">
            <Calendar className="w-4 h-4" />
            EVENTS & EXPERIENCES
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Moments That
            <span className="block bg-gradient-to-r from-[#26c1d3] to-[#4fd1c7] bg-clip-text text-transparent">
              Shape Futures
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the vibrant tapestry of experiences that define our academic journey - from industry collaborations to cultural celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className={`${IMAS_TAILWIND_CLASSES.GRADIENT_SECONDARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              Explore Events
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, onImageClick }: { event: EventItem; onImageClick: (event: EventItem, index: number) => void }) {
  const CategoryIcon = getCategoryIcon(event.category);
  
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2 h-full flex flex-col">
      {/* Event Image */}
      {event.images && event.images.length > 0 ? (
        <div 
          className="relative aspect-[4/3] overflow-hidden cursor-zoom-in flex-shrink-0"
          onClick={() => onImageClick(event, 0)}
        >
          <img
            src={safeSrc(event.images[0])}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Image count badge */}
          {event.images.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {event.images.length} photos
            </div>
          )}
          
          {/* Featured badge */}
          {event.featured && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
          <div className="text-center">
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">No images available</p>
          </div>
        </div>
      )}

      {/* Event Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(event.category)}`}>
            <CategoryIcon className="w-3 h-3" />
            {event.category}
          </div>
          {event.date && (
            <span className="text-xs text-gray-500 font-medium">{event.date}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#143674] transition-colors duration-300">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4 flex-grow">
          {event.description}
        </p>

        {/* Thumbnail Gallery */}
        {event.images && event.images.length > 1 && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {event.images.slice(1, 5).map((thumb, idx) => (
              <img
                key={idx}
                src={safeSrc(thumb)}
                alt={`${event.title} thumbnail ${idx + 1}`}
                className="w-12 h-12 object-cover rounded-lg border border-gray-200 cursor-pointer hover:border-[#26c1d3] transition-colors flex-shrink-0"
                loading="lazy"
                onClick={() => onImageClick(event, idx + 1)}
              />
            ))}
          </div>
        )}

        {/* Action Button */}
        {event.images && event.images.length > 0 && (
          <div className="mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-[#143674] text-[#143674] hover:bg-[#143674] hover:text-white font-semibold transition-all duration-300 group-hover:scale-105"
              onClick={() => onImageClick(event, 0)}
            >
              View Gallery ({event.images.length})
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

function EventsGrid() {
  const [lightbox, setLightbox] = useState<{ event: EventItem | null; index: number }>({ event: null, index: 0 });
  const [filter, setFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(staticEvents.map(event => event.category)))];
  
  const filteredEvents = filter === 'All' 
    ? staticEvents 
    : staticEvents.filter(event => event.category === filter);

  const openLightbox = (event: EventItem, index: number) => {
    setLightbox({ event, index });
  };

  const closeLightbox = () => {
    setLightbox({ event: null, index: 0 });
  };

  const nextImage = () => {
    if (!lightbox.event?.images) return;
    const total = lightbox.event.images.length;
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % total }));
  };

  const prevImage = () => {
    if (!lightbox.event?.images) return;
    const total = lightbox.event.images.length;
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + total) % total }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.event) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.event]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
            OUR EVENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Celebrating <span className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Excellence</span> Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From academic achievements to cultural celebrations, explore the moments that define our vibrant community.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {filter} ({filteredEvents.length})
            </Button>
            
            {/* Desktop Filter Pills */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white border-transparent shadow-lg`
                      : `border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400`
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-1 text-xs opacity-75">
                      ({staticEvents.filter(e => e.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'masonry' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Masonry view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {showFilters && (
          <div className="sm:hidden mb-8 bg-white rounded-xl shadow-lg p-4 border">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    filter === category
                      ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white border-transparent`
                      : `border-gray-300 text-gray-700 hover:bg-gray-100`
                  }`}
                  onClick={() => {
                    setFilter(category);
                    setShowFilters(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className={
          viewMode === 'masonry' 
            ? "columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        }>
          {filteredEvents.map((event) => (
            <div key={event.id} className={viewMode === 'masonry' ? 'break-inside-avoid' : 'flex'}>
              <EventCard event={event} onImageClick={openLightbox} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <ImageIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">Try selecting a different category to see more events.</p>
            <Button
              variant="outline"
              onClick={() => setFilter('All')}
              className="border-[#143674] text-[#143674] hover:bg-[#143674] hover:text-white"
            >
              Show All Events
            </Button>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox Modal */}
      {lightbox.event && lightbox.event.images && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          {/* Close Button */}
          <button
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/50 rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation Buttons */}
          {lightbox.event.images.length > 1 && (
            <>
              <button
                aria-label="Previous image"
                className="absolute left-4 z-20 text-white/80 hover:text-white bg-black/50 rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                aria-label="Next image"
                className="absolute right-4 z-20 text-white/80 hover:text-white bg-black/50 rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          
          <div className="max-w-7xl w-full px-4 sm:px-8">
            <img
              src={safeSrc(lightbox.event.images[lightbox.index])}
              alt={lightbox.event.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                {lightbox.event.title}
              </h3>
              {lightbox.event.images.length > 1 && (
                <p className="text-white/70 text-sm">
                  {lightbox.index + 1} of {lightbox.event.images.length}
                </p>
              )}
            </div>
            
            {/* Thumbnail Navigation */}
            {lightbox.event.images.length > 1 && (
              <div className="mt-6 flex gap-2 justify-center overflow-x-auto pb-2">
                {lightbox.event.images.map((thumb: string, idx: number) => (
                  <img
                    key={idx}
                    src={safeSrc(thumb)}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => setLightbox(prev => ({ ...prev, index: idx }))}
                    className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer transition-all flex-shrink-0 ${
                      lightbox.index === idx 
                        ? 'border-white shadow-lg scale-110' 
                        : 'border-white/40 hover:border-white/70 hover:scale-105'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export function EventsPage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Events & Experiences - {IMAS_BRAND.SHORT_NAME}</title>
        <meta 
          name="description" 
          content="Explore IMAS events, industry engagements, cultural celebrations, and academic achievements. Discover the vibrant community that shapes our students' futures." 
        />
        <meta name="keywords" content="IMAS events, industry engagement, cultural celebrations, academic talks, student experiences, college events" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <EventsHeroSection />
      <EventsGrid />
    </div>
  );
}