import React from 'react';
import { Briefcase, Heart, Scale, ShieldAlert, FileText, Gavel } from 'lucide-react';
import { PracticeArea } from '../types';

const practices: PracticeArea[] = [
  {
    title: 'Corporate Law',
    description: 'Navigating complex business landscapes with strategic legal counsel for mergers, acquisitions, and compliance.',
    icon: Briefcase,
  },
  {
    title: 'Family Law',
    description: 'Compassionate representation for divorce, custody, and family matters, prioritizing the well-being of loved ones.',
    icon: Heart,
  },
  {
    title: 'Civil Litigation',
    description: 'Aggressive advocacy in disputes involving contracts, property, and torts to protect your rights and interests.',
    icon: Scale,
  },
  {
    title: 'Criminal Defense',
    description: 'Protecting your liberty with rigorous defense strategies against misdemeanors and felony charges.',
    icon: ShieldAlert,
  },
  {
    title: 'Estate Planning',
    description: 'Securing your legacy through meticulous drafting of wills, trusts, and comprehensive estate administration.',
    icon: FileText,
  },
  {
    title: 'Personal Injury',
    description: 'Fighting for fair compensation for victims of negligence, accidents, and workplace injuries.',
    icon: Gavel,
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Comprehensive Legal Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a wide range of legal services tailored to meet the unique needs of our diverse clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-100 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 hover:bg-white"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <practice.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3 font-serif">{practice.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {practice.description}
              </p>
              <a href="#contact" className="text-secondary font-semibold group-hover:text-amber-700 inline-flex items-center text-sm uppercase tracking-wide">
                Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;