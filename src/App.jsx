import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import Process from './components/Process';
import Cases from './components/Cases';
import Estimator from './components/Estimator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useEffect, useState } from 'react';
import LegalPage from './pages/LegalPage';
import { legalPages } from './pages/legalContent';
import SectionBand from './components/SectionBand';
import './sections.css';

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1).split('#')[0]);
  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash.slice(1).split('#')[0]);
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  if (legalPages[route]) return <LegalPage page={legalPages[route]} />;

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechMarquee />
      <SectionBand tone="services"><Services /></SectionBand>
      <SectionBand tone="process"><Process /></SectionBand>
      <SectionBand tone="portfolio"><Cases /></SectionBand>
      <SectionBand tone="estimator"><Estimator /></SectionBand>
      <SectionBand tone="faq"><FAQ /></SectionBand>
      <SectionBand tone="contact"><Contact /></SectionBand>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
