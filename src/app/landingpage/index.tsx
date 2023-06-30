'use client';

import { HeroSection } from '@components/HeroSection';
import { BenefitsSection } from '@components/BenefitsSection';
import { AuthorSection } from '@components/AuthorSection';

import * as Styled from './styles';
import { CourseDetailsSection } from '../components/CourseDetailsSection';

export default function LandingPage() {
  return (
    <Styled.Container>
      <HeroSection />
      <BenefitsSection />
      <AuthorSection />
      <CourseDetailsSection />
    </Styled.Container>
  );
}
