'use client';

import { HeroSection } from '@components/HeroSection';
import { BenefitsSection } from '@components/BenefitsSection';
import { AuthorSection } from '@components/AuthorSection';
import { CourseDetailsSection } from '@components/CourseDetailsSection';
import { TestimonialsSection } from '@components/TestimonialsSection';
import { FinalCTASection } from '@components/FinalCTASection';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export const LandingPage = () => {
  return (
     <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <AuthorSection />
      <CourseDetailsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
     </>

  );
}
