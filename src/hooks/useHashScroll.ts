import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToIdWithRetry, scrollToTop } from '../utils/scroll';

export const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      scrollToTop();
      return;
    }

    const targetId = location.hash.replace('#', '');
    scrollToIdWithRetry(targetId);
  }, [location]);
};
