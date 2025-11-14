const getResponsiveOffset = () => {
  if (typeof window === 'undefined') {
    return 104;
  }

  if (window.matchMedia('(max-width: 600px)').matches) {
    return 72;
  }

  if (window.matchMedia('(max-width: 960px)').matches) {
    return 88;
  }

  return 112;
};

export const scrollToId = (
  targetId: string,
  options?: {
    behavior?: ScrollBehavior;
    offset?: number;
  }
): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const element = document.getElementById(targetId);
  if (!element) {
    return false;
  }

  const offset = options?.offset ?? getResponsiveOffset();
  const behavior = options?.behavior ?? 'smooth';
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetTop = Math.max(elementTop - offset, 0);

  window.scrollTo({ top: targetTop, behavior });
  return true;
};

export const scrollToIdWithRetry = async (
  targetId: string,
  options?: {
    behavior?: ScrollBehavior;
    offset?: number;
    maxAttempts?: number;
    delay?: number;
  }
): Promise<boolean> => {
  const maxAttempts = options?.maxAttempts ?? 8;
  const delay = options?.delay ?? 120;
  const behavior = options?.behavior ?? 'smooth';
  const offset = options?.offset;

  let attempts = 0;

  const attemptScroll = (resolve: (value: boolean) => void) => {
    const success = scrollToId(targetId, { behavior, offset });
    if (success || attempts >= maxAttempts) {
      resolve(success);
      return;
    }

    attempts += 1;
    window.setTimeout(() => attemptScroll(resolve), delay);
  };

  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    window.requestAnimationFrame(() => attemptScroll(resolve));
  });
};

export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  if (typeof window === 'undefined') {
    return;
  }

  window.scrollTo({ top: 0, behavior });
};
