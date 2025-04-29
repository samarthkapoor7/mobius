import HeroSection from '../sections/Hero';
import HowWeWorkSection from '../sections/HowWeWork';
import AboutUsSection from '../sections/AboutUs';
import TestimonialsSection from '../sections/Testimonials';
import PricingSection from '../sections/Pricing';
import ResumeCoachingSection from '../sections/ResumeCoaching';
import ContactSection from '../sections/Contact';
import Footer from '../layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <HeroSection />
      <HowWeWorkSection />
      <AboutUsSection />
      <TestimonialsSection />
      <PricingSection />
      <ResumeCoachingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;