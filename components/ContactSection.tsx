import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              We are here to listen and help.
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              If you are facing a legal challenge, do not hesitate to reach out. Our team is ready to review your case and provide the guidance you need.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md rounded-full mr-4 text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Office Location</h4>
                  <p className="text-gray-600">1200 Legal Avenue, Suite 500<br/>Metropolis, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md rounded-full mr-4 text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md rounded-full mr-4 text-secondary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-gray-600">consult@alvinaassociates.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md rounded-full mr-4 text-secondary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
            <h4 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;