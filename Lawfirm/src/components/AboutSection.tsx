import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Meeting Room"
                className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1575505586569-64e7183553f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Law books"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">About Alvina & Associates</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Dedicated to upholding justice and protecting your future.
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, Alvina & Associates has established a reputation for excellence in the legal community. We believe that every client deserves vigorous representation and personalized attention. Our attorneys bring decades of combined experience to the table, ensuring that no stone is left unturned in the pursuit of your success.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Over 25 years of combined legal experience',
                'Recognized by State Bar Association for Excellence',
                'Client-centric approach with 24/7 support',
                'Proven track record of multi-million dollar settlements'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-block"
            >
              Meet Our Attorneys
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;