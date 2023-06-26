import {
  Navbar,
  Hero,
  SheetStatistics,
  FeaturesSection,
  SectionDownloadsApp,
  SectionLearnMore,
  Footer,
  SectionSubscribe,
  FormContactUs,
} from '../components';
import { useState } from 'react';

const LandingPage = () => {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => setIsModal(true);

  const hideModal = () => setIsModal(false);

  return (
    <div className="landing-page">
      <Navbar showModal={showModal} />
      <Hero />
      <SheetStatistics />
      <FeaturesSection />
      <SectionDownloadsApp />
      <SectionLearnMore />
      <SectionSubscribe />
      <Footer />
      <FormContactUs isModal={isModal} hideModal={hideModal} />
    </div>
  );
};

export default LandingPage;
