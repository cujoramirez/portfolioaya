import { Fragment } from 'react';
import { BrandIdentitySection } from '../components/sections/BrandIdentitySection';
import { BrandIdentityDetailsSection } from '../components/sections/BrandIdentityDetailsSection';
import { useHashScroll } from '../hooks/useHashScroll';
import { PageTransition } from '../components/layout/PageTransition';

export const ProjectsPage = () => {
  useHashScroll();

  return (
    <PageTransition>
      <Fragment>
        <BrandIdentitySection />
        <BrandIdentityDetailsSection />
      </Fragment>
    </PageTransition>
  );
};
