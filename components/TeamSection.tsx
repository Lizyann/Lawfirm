import React from 'react';
import { Attorney } from '../types';

const attorneys: Attorney[] = [
  {
    name: 'Sarah Alvina',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializing in corporate law with over 20 years of experience leading high-stakes mergers.'
  },
  {
    name: 'Michael Ross',
    role: 'Senior Associate',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'An expert in criminal defense, Michael has successfully defended over 500 cases in state courts.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Family Law Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Elena brings compassion and tenacity to family disputes, ensuring fair outcomes for all parties.'
  },
  {
    name: 'David Chen',
    role: 'Litigation Counsel',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Known for his sharp analytical skills, David handles complex civil litigation and contract disputes.'
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Meet The Attorneys</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our diverse team of legal experts works collaboratively to provide top-tier representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-4 relative h-80">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-90"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold font-serif mb-1">{attorney.name}</h4>
                <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-3">{attorney.role}</p>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {attorney.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;