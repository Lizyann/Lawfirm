import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import CaseEvaluator from './components/CaseEvaluator';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <StatsSection />
        <CaseEvaluator />
        <TeamSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;