import {
  Navbar,
  Hero,
  SheetStatistics,
  FeaturesSection,
  SectionDownloadsApp,
  SectionLearnMore,
  Footer,
  SectionSubscribe,
} from '../components';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <SheetStatistics />
      <FeaturesSection />
      <SectionDownloadsApp />
      <SectionLearnMore />
      <SectionSubscribe />
      <Footer />
    </div>
  );
};

export default LandingPage;
