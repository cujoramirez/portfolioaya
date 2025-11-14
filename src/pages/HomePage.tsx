import { Fragment } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TableOfContentsSection } from '../components/sections/TableOfContentsSection';
import { ExperienceToolsEducationSection } from '../components/sections/ExperienceToolsEducationSection';
import { PageTransition } from '../components/layout/PageTransition';
import { useHashScroll } from '../hooks/useHashScroll';

export const HomePage = () => {
  useHashScroll();

  return (
    <PageTransition>
      <Fragment>
        <HeroSection />
        <TableOfContentsSection />
        <ExperienceToolsEducationSection />
      </Fragment>
    </PageTransition>
  );
};
