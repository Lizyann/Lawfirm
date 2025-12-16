import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Alvina & Associates handled my corporate merger with absolute precision. Their attention to detail and strategic foresight saved us millions.",
    author: "James Wilson",
    role: "CEO, TechFlow Inc.",
    rating: 5
  },
  {
    id: 2,
    text: "I was overwhelmed by my legal situation until I met Elena. She fought for my family as if we were her own. I cannot recommend this firm enough.",
    author: "Sarah Jenkins",
    role: "Family Law Client",
    rating: 5
  },
  {
    id: 3,
    text: "Professional, responsive, and incredibly effective. They turned a complex litigation nightmare into a manageable process with a favorable outcome.",
    author: "Robert Chen",
    role: "Business Owner",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Voices of Trust</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our reputation is built on the satisfaction and success of the clients we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-100 fill-gray-100" />
              <div className="flex space-x-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{item.text}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-bold text-primary">{item.author}</p>
                <p className="text-sm text-secondary font-medium">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;