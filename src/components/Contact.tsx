
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
            Contact
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Begin your design journey with us. Every exceptional space starts with a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 tracking-wide">
                Let's Create Together
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-12">
                Whether you're envisioning a complete transformation or seeking design consultation, 
                we're here to bring your vision to life with artisanal excellence and timeless elegance.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Studio Address</h4>
                  <p className="text-white/70 leading-relaxed">
                    123 Design Avenue<br />
                    Artisan Quarter, Mumbai<br />
                    Maharashtra 400001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <p className="text-white/70">
                    +91 93157 48516
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="text-white/70">
                    nupur@spacecouture.in
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="border-t border-white/20 pt-8">
              <h4 className="text-xl font-semibold mb-4">Studio Hours</h4>
              <div className="space-y-2 text-white/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-12 rounded-lg">
            <h3 className="text-3xl font-bold mb-8 tracking-wide">
              Start Your Journey
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:bg-white/15 outline-none transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:bg-white/15 outline-none transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:bg-white/15 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:bg-white/15 outline-none transition-all"
                  placeholder="+91 93157 48516"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-white/40 focus:bg-white/15 outline-none transition-all">
                  <option value="" className="bg-navy-900">Select project type</option>
                  <option value="residential" className="bg-navy-900">Residential Interior Design</option>
                  <option value="commercial" className="bg-navy-900">Commercial Interior Design</option>
                  <option value="vastu" className="bg-navy-900">Vastu Consultancy</option>
                  <option value="space-planning" className="bg-navy-900">Space Planning & Layout</option>
                  <option value="consultation" className="bg-navy-900">Design Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:bg-white/15 outline-none transition-all resize-none"
                  placeholder="Share your ideas, inspirations, and project requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-navy-900 py-4 font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
