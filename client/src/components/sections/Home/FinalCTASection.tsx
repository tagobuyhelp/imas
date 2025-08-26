import React from 'react';
import { Button } from '../../ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_CONTACT } from '../../../lib/constants';

export function FinalCTASection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-[1260px] mx-auto px-4 text-center">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300`}>
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300">
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
  );
}
