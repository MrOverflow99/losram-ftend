// src/pages/HomePage/HomePage.jsx
import { useMeta } from '../../shared/lib/useMeta';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import WhyUsSection from './sections/WhyUsSection';
import DestinationsSection from './sections/DestinationsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import CtaBannerSection from './sections/CtaBannerSection';

export default function HomePage() {
  useMeta(
    'LOSRAM | Agencia de Viajes en Venezuela',
    'Agencia de viajes venezolana afiliada a AVAVIT. Vuelos, hoteles, paquetes, cruceros y más. Destinos nacionales e internacionales.'
  );

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <DestinationsSection />
      <HowItWorksSection />
      <CtaBannerSection />
    </>
  );
}
