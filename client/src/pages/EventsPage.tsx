import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  ExternalLink,
  Building2,
  GraduationCap,
  TrendingUp,
  Briefcase,
  Award
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND } from '../lib/constants';

// Event data based on provided content
const eventsData = [
  {
    id: 1,
    title: 'Money Matters Made Simple – A FACT Training Program',
    description: 'Join us for an insightful financial awareness session aimed at simplifying money management and empowering participants with practical financial skills. The program will be led by CMA Angshuman Bhattacharya as part of the FACT Training Program.',
    startDate: '2nd September, 2025',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    timezone: 'IST',
    organizer: 'IAER & IMAS, under the guidance of NCFE-RBI',
    status: 'upcoming',
    participants: null,
    icon: TrendingUp,
    category: 'Financial Training'
  },
  {
    id: 2,
    title: 'Presentation on National Education Policy (NEP)',
    description: 'Students gained awareness of how NEP will influence management education, research opportunities, and employability.',
    startDate: '29 June, 2024',
    startTime: '11:00 AM',
    endTime: '1:00 PM',
    timezone: 'IST',
    organizer: 'IMAS',
    status: 'completed',
    participants: 25,
    icon: GraduationCap,
    category: 'Education Policy'
  },
  {
    id: 3,
    title: 'KYC Training & Internship at India Post Payments Bank (IPPB), Dalhousie',
    description: 'Students bridged classroom learning with real-world banking practices, preparing them for careers in finance, fintech, and BFSI.',
    startDate: '26 August 2025',
    startTime: '11:00 AM',
    endTime: '3:00 PM',
    timezone: 'IST',
    organizer: 'IMAS & IPPB',
    status: 'upcoming',
    participants: 10,
    icon: Building2,
    category: 'Banking & Finance'
  },
  {
    id: 4,
    title: 'Industrial Visit to Coca-Cola Factory',
    description: 'Students developed practical insights into large-scale manufacturing, logistics, and quality control.',
    startDate: '26 August 2025',
    startTime: '11:00 AM',
    endTime: '3:00 PM',
    timezone: 'IST',
    organizer: 'IMAS',
    status: 'completed',
    participants: 30,
    icon: Briefcase,
    category: 'Industrial Visit'
  },
  {
    id: 5,
    title: 'Seminar at Bengal Chamber of Commerce & Industry (BCCI)',
    description: 'Students got exposure to corporate practices, economic discussions, and industry networking.',
    startDate: '26 August 2025',
    startTime: '11:00 AM',
    endTime: '3:00 PM',
    timezone: 'IST',
    organizer: 'IMAS & BCCI',
    status: 'completed',
    participants: 30,
    icon: Award,
    category: 'Corporate Seminar'
  }
];

function EventsHeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            EVENTS & INDUSTRY ENGAGEMENT
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Connecting Learning with
            <span className="block text-[#26c1d3]">Real-World Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of events, training programs, and industry engagements designed to bridge the gap between academic knowledge and practical application.
          </p>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: typeof eventsData[0] }) {
  const IconComponent = event.icon;
  const isUpcoming = event.status === 'upcoming';
  
  // Get background image based on event category
  const getEventImage = (category: string) => {
    switch (category) {
      case 'Financial Training':
        return '/uploads/Workshop_at_JSW_Plant.jpg';
      case 'Education Policy':
        return '/uploads/imas_hero_image1.webp';
      case 'Banking & Finance':
        return '/uploads/Visit to_Apollo_Hospital.jpeg';
      case 'Industrial Visit':
        return '/uploads/Industrial_visit_at_Reliance_Trends.jpeg';
      case 'Corporate Seminar':
        return '/uploads/TDK_Industries_exposure_for_PGDM_students.jpeg';
      default:
        return '/uploads/imas_hero_image_2.webp';
    }
  };
  
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
      {/* Event Header with Background Image */}
      <div className="relative p-6 text-white overflow-hidden h-48">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getEventImage(event.category)}
            alt={`${event.category} background`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY}/85`}></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 z-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <Badge 
              variant={isUpcoming ? "default" : "secondary"} 
              className={`${isUpcoming ? 'bg-[#26c1d3] hover:bg-[#26c1d3]/90' : 'bg-white/20 text-white'} font-semibold`}
            >
              {isUpcoming ? 'Upcoming' : 'Completed'}
            </Badge>
          </div>
          <div className="text-sm opacity-90 mb-2">{event.category}</div>
          <h3 className="text-xl font-bold leading-tight">{event.title}</h3>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
        
        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Calendar className="w-4 h-4 text-[#143674]" />
            <span className="font-medium">{event.startDate}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Clock className="w-4 h-4 text-[#143674]" />
            <span>{event.startTime} - {event.endTime} ({event.timezone})</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Building2 className="w-4 h-4 text-[#143674]" />
            <span>{event.organizer}</span>
          </div>
          {event.participants && (
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Users className="w-4 h-4 text-[#143674]" />
              <span>{event.participants} people participated</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        {isUpcoming ? (
          <Button 
            className={`w-full ${IMAS_TAILWIND_CLASSES.GRADIENT_SECONDARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white font-semibold py-3 group-hover:scale-105 transition-all duration-300`}
          >
            Register Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="w-full border-[#143674] text-[#143674] hover:bg-[#143674] hover:text-white font-semibold py-3 group-hover:scale-105 transition-all duration-300"
          >
            View Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function EventsGrid() {
  const upcomingEvents = eventsData.filter(event => event.status === 'upcoming');
  const completedEvents = eventsData.filter(event => event.status === 'completed');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
                UPCOMING EVENTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Join Our <span className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Upcoming Events</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't miss these exciting opportunities to enhance your learning and network with industry professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {completedEvents.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
                PAST EVENTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Recent <span className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the impactful events and training programs we've successfully conducted.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function EventsPage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Events & Industry Engagement - {IMAS_BRAND.SHORT_NAME}</title>
        <meta 
          name="description" 
          content="Discover IMAS events, training programs, and industry engagements. Join upcoming sessions or explore our successful past events that bridge academic learning with real-world experience." 
        />
        <meta name="keywords" content="IMAS events, training programs, industry engagement, workshops, seminars, financial training, education policy, banking internship" />
      </Helmet>
      
      <EventsHeroSection />
      <EventsGrid />
    </div>
  );
}