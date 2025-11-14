import { PageTransition } from '../components/layout/PageTransition';
import { ContactSection } from '../components/sections/ContactSection';
import { useHashScroll } from '../hooks/useHashScroll';

export const ContactPage = () => {
  useHashScroll();

  return (
    <PageTransition>
      <ContactSection />
    </PageTransition>
  );
};
