import React, { useState } from 'react';
import { Scale, Linkedin, Twitter, Facebook, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string; content: React.ReactNode }> = {
    'privacy': {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <p>Alvina & Associates ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">1. Information We Collect</h5>
          <p>We collect several types of information from and about users of our Website, including information: by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information"); and about your internet connection, the equipment you use to access our Website, and usage details.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">2. How We Use Your Information</h5>
          <p>We use information that we collect about you or that you provide to us, including any personal information: to present our Website and its contents to you; to provide you with information, products, or services that you request from us; to fulfill any other purpose for which you provide it; and to notify you about changes to our Website or any products or services we offer or provide though it.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">3. Data Security</h5>
          <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.</p>
        </div>
      )
    },
    'terms': {
      title: 'Terms of Service',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>Please read these Terms of Service carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Service and our Privacy Policy.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">No Legal Advice or Attorney-Client Relationship</h5>
          <p>The information contained on this Website is for informational purposes only and does not constitute legal advice. Your use of this Website, including sending information to us via contact forms, email, or the AI Case Evaluator, does not create an attorney-client relationship. You should not act or rely on any information on this Website without seeking the advice of an attorney.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">Intellectual Property Rights</h5>
          <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">Limitation of Liability</h5>
          <p>In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website, or such other websites.</p>
        </div>
      )
    },
    'disclaimer': {
      title: 'Legal Disclaimer',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
          <h5 className="font-bold text-slate-800 text-base mt-4">Attorney Advertising</h5>
          <p>This website and its contents may be considered attorney advertising under the rules of professional conduct of certain jurisdictions. Prior results do not guarantee a similar outcome.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">No Warranty</h5>
          <p>The information provided on this website is provided "as is" without warranty of any kind, either express or implied, including without limitation warranties of merchantability, fitness for a particular purpose, or non-infringement. Alvina & Associates periodically adds, changes, improves, or updates the information and documents on this website without notice.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">Jurisdictional Limitations</h5>
          <p>Our attorneys are licensed to practice law in specific jurisdictions as indicated in their individual biographies. We do not intend to represent anyone desiring representation based upon viewing this website in a state where this website fails to comply with all laws and ethical rules of that state.</p>
        </div>
      )
    },
    'accessibility': {
      title: 'Accessibility Statement',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>Alvina & Associates is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">Conformance Status</h5>
          <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Alvina & Associates is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>
          
          <h5 className="font-bold text-slate-800 text-base mt-4">Feedback</h5>
          <p>We welcome your feedback on the accessibility of the Alvina & Associates website. Please let us know if you encounter accessibility barriers:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Phone: +1 (555) 123-4567</li>
            <li>E-mail: accessibility@alvinaassociates.com</li>
            <li>Postal address: 1200 Legal Avenue, Suite 500, Metropolis, NY 10012</li>
          </ul>
          <p className="mt-2">We try to respond to feedback within 5 business days.</p>
        </div>
      )
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') return;
    
    // Kept generic handler but removed explicit #evaluator check as link is removed from UI
    if (href === '#evaluator') {
      window.location.hash = 'evaluator';
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLegal = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setActiveModal(key);
  };

  return (
    <>
      <footer className="bg-primary text-gray-300 py-12 border-t border-white/10 relative z-40">
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
                <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-secondary transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-secondary transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5"/></a>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-secondary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5"/></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#practice-areas" onClick={(e) => handleNavClick(e, '#practice-areas')} className="hover:text-secondary transition-colors">Corporate Law</a></li>
                <li><a href="#practice-areas" onClick={(e) => handleNavClick(e, '#practice-areas')} className="hover:text-secondary transition-colors">Family Law</a></li>
                <li><a href="#practice-areas" onClick={(e) => handleNavClick(e, '#practice-areas')} className="hover:text-secondary transition-colors">Criminal Defense</a></li>
                <li><a href="#practice-areas" onClick={(e) => handleNavClick(e, '#practice-areas')} className="hover:text-secondary transition-colors">Personal Injury</a></li>
                <li><a href="#practice-areas" onClick={(e) => handleNavClick(e, '#practice-areas')} className="hover:text-secondary transition-colors">Estate Planning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-secondary transition-colors">Attorneys</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" onClick={(e) => openLegal(e, 'privacy')} className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => openLegal(e, 'terms')} className="hover:text-secondary transition-colors">Terms of Service</a></li>
                <li><a href="#" onClick={(e) => openLegal(e, 'disclaimer')} className="hover:text-secondary transition-colors">Disclaimer</a></li>
                <li><a href="#" onClick={(e) => openLegal(e, 'accessibility')} className="hover:text-secondary transition-colors">Accessibility</a></li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Alvina & Associates. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveModal(null)}
            aria-hidden="true"
          ></div>
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto flex flex-col animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 id="modal-title" className="text-xl font-serif font-bold text-primary">{legalContent[activeModal].title}</h3>
              <button 
                onClick={() => setActiveModal(null)} 
                className="text-gray-400 hover:text-secondary transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {legalContent[activeModal].content}
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-right sticky bottom-0">
              <button 
                onClick={() => setActiveModal(null)} 
                className="px-5 py-2 bg-primary text-white rounded hover:bg-slate-800 text-sm font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;