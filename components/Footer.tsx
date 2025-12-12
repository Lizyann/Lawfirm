import React from 'react';
import { Scale, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-secondary" />
              <span className="font-serif text-xl font-bold text-white">
                Alvina <span className="text-secondary">&</span> Associates
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premier legal representation rooted in integrity, excellence, and a commitment to justice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5"/></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#practice-areas" className="hover:text-secondary transition-colors">Corporate Law</a></li>
              <li><a href="#practice-areas" className="hover:text-secondary transition-colors">Family Law</a></li>
              <li><a href="#practice-areas" className="hover:text-secondary transition-colors">Criminal Defense</a></li>
              <li><a href="#practice-areas" className="hover:text-secondary transition-colors">Personal Injury</a></li>
              <li><a href="#practice-areas" className="hover:text-secondary transition-colors">Estate Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-secondary transition-colors">Attorneys</a></li>
              <li><a href="#evaluator" className="hover:text-secondary transition-colors">Case Evaluator</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Accessibility</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alvina & Associates. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;