'use client';

import { HeroSection } from '@components/HeroSection';
import { BenefitsSection } from '@components/BenefitsSection';
import { AuthorSection } from '@components/AuthorSection';
import { CourseDetailsSection } from '@components/CourseDetailsSection';
import { TestimonialsSection } from '@components/TestimonialsSection';

import * as Styled from './styles';

export default function LandingPage() {
  return (
    <Styled.Container>
      <HeroSection />
      <BenefitsSection />
      <AuthorSection />
      <CourseDetailsSection />
      <TestimonialsSection />
    </Styled.Container>
  );
}
