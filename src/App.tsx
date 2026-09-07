import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientCarousel from '@/components/ClientCarousel';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import QuoteEstimator from '@/components/QuoteEstimator';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Bhawan Techno Construction Pvt. Ltd. | Premier Turnkey Construction';
  }, []);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ClientCarousel />
        <Services />
        <Projects />
        <WhyChooseUs />
        <QuoteEstimator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
