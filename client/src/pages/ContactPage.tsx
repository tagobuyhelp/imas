import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Alert, AlertDescription } from '../components/ui/alert';
import { MapPin, Phone, Mail, Clock, Building2, Navigation, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { apiService, ContactFormData } from '../lib/api';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';

export function ContactPage(): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await apiService.contact.submit(formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        toast({
          title: 'Message Sent Successfully!',
          description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
        });
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An error occurred while sending your message. Please try again.');
      toast({
        title: 'Failed to Send Message',
        description: error.message || 'Please check your information and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-[#143674]/90 to-[#2e7bb3]/90 text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/uploads/imas_hero_image1.webp')",
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#143674]/80 to-[#2e7bb3]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Contact IMAS
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Get in touch with us to start your journey towards becoming a future business leader
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to transform your career? Contact us today to learn more about our programs and admission process.
                </p>
              </div>

              {/* Campus Locations */}
              <div className="space-y-6">
                {/* Main Campus */}
                <Card className="border-l-4 border-l-[#26c1d3] shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-[#143674]">
                      <Building2 className="h-6 w-6" />
                      Main Campus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-[#26c1d3] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Plot No: 33 & 37</p>
                        <p className="text-gray-600">Near St. Xavier's University Newtown</p>
                        <p className="text-gray-600">Action Area III, Block - Bhangor – II</p>
                        <p className="text-gray-600">Kolkata - 700135, West Bengal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* City Campus */}
                <Card className="border-l-4 border-l-[#2e7bb3] shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-[#143674]">
                      <Building2 className="h-6 w-6" />
                      City Campus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-[#2e7bb3] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Bengal Intelligent Park</p>
                        <p className="text-gray-600">Delta Wing Block EP & GP</p>
                        <p className="text-gray-600">Plot A2 & M2, Sector V</p>
                        <p className="text-gray-600">Kolkata - 700091, West Bengal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#26c1d3]/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#26c1d3]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+919088822777" className="text-[#143674] hover:text-[#2e7bb3] transition-colors">
                      +91 90888 22777
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#2e7bb3]/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#2e7bb3]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:admission@imas.ac.in" className="text-[#143674] hover:text-[#2e7bb3] transition-colors">
                      admission@imas.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#143674]/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#143674]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <Button 
                onClick={() => window.open('https://maps.google.com/?q=Delta,+SALT+LAKE,+Bengal+Intelligent+Park+EP+%26,+Plot+A2+%26+B2,+GP+Block,+Sector+V,+Kolkata,+West+Bengal+700091', '_blank')}
                className="w-full bg-[#26c1d3] hover:bg-[#26c1d3]/90 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Navigation className="h-5 w-5 mr-2" />
                View on Google Maps
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-[#143674] to-[#2e7bb3] text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription className="text-blue-100">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  {submitStatus === 'success' && (
                    <Alert className="mb-6 border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Your message has been sent successfully! We'll get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {submitStatus === 'error' && errorMessage && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name" 
                          required
                          disabled={isSubmitting}
                          className="border-gray-300 focus:border-[#26c1d3] focus:ring-[#26c1d3]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone || ''}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number" 
                          disabled={isSubmitting}
                          className="border-gray-300 focus:border-[#26c1d3] focus:ring-[#26c1d3]"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address" 
                        required
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#26c1d3] focus:ring-[#26c1d3]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject *</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?" 
                        required
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#26c1d3] focus:ring-[#26c1d3]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-semibold">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..." 
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#26c1d3] focus:ring-[#26c1d3] resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#143674] to-[#2e7bb3] hover:from-[#2e7bb3] hover:to-[#143674] text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="relative bg-gradient-to-r from-[#143674]/90 to-[#2e7bb3]/90 py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/uploads/IMASBUILDING.jpeg')",
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#143674]/80 to-[#2e7bb3]/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Join IMAS – Where Future Leaders Are Made!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('/programs', '_blank')}
              className="bg-white text-[#143674] hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Programs
            </Button>
            <Button 
              onClick={() => window.open('/admissions', '_blank')}
              variant="outline"
              className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-[#143674] px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}