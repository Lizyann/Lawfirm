import React from 'react';
import { Trophy, Users, Scale, History } from 'lucide-react';
import { Stat } from '../../types';

const stats: Stat[] = [
  { label: 'Recovered for Clients', value: '$500M+', icon: Trophy },
  { label: 'Years of Excellence', value: '25+', icon: History },
  { label: 'Qualified Attorneys', value: '40+', icon: Users },
  { label: 'Cases Resolved', value: '10k+', icon: Scale },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;