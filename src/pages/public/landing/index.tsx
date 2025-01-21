import Header from "../../../components/global-components/Header";
import HeroSection from "../../../components/reusable-components/landing-page/HeroSection";
import RatingSection from "../../../components/reusable-components/landing-page/RatingSection";
import CollaboratorSection from "../../../components/reusable-components/landing-page/CollaboratorSection";
import FeatureSection from "../../../components/reusable-components/landing-page/FeatureSection";
import BenefitSection from "../../../components/reusable-components/landing-page/BenefitSection";
import PaymentSection from "../../../components/reusable-components/landing-page/paymentSection";
import ContactSection from "../../../components/reusable-components/landing-page/contactSection";
import Footer from "../../../components/global-components/Footer";
const Index = () => {
  return (
    <>
      <div className="w-full container flex flex-col gap-16 lg:gap-20 m-auto px-8">
        <Header />
        <HeroSection />
        <CollaboratorSection />
        <RatingSection />
        <FeatureSection />
        <BenefitSection />
        <PaymentSection />
      </div>
      <div className="bg-dark flex flex-col gap-10 lg:gap-20 m-auto py-14 lg:pt-20 mt-10 lg:mt-20 px-2">
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
