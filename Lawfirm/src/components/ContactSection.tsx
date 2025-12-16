import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../services/supabaseClient';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

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
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center animate-fade-in">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h5 className="font-bold text-lg mb-2">Request Received</h5>
                <p>Thank you for contacting Alvina & Associates. A member of our team will review your message and get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-bold text-green-700 hover:text-green-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start text-sm">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;