import type { Variants } from 'framer-motion';

// Fade In Up - for text and content blocks
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom ease
    }
  }
};

// Fade In Down - for headers
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Scale In - for cards and images
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Slide In Left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Slide In Right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Stagger Container - for wrapping multiple animated children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger Container Fast - quicker stagger
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Letter Stagger - for animating text letter by letter
export const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Hover variants for interactive elements
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Hover Glow - for buttons and cards
export const hoverGlow = {
  rest: { 
    boxShadow: "0px 0px 0px rgba(255, 107, 53, 0)" 
  },
  hover: { 
    boxShadow: "0px 8px 32px rgba(255, 107, 53, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Rotate In - for icons and decorative elements
export const rotateIn: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -180 
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Floating animation - for decorative orbs
export const floatingVariant: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pulse animation - for attention-grabbing elements
export const pulseVariant: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Modal variants
export const modalBackdropVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export const modalContentVariant: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3
    }
  }
};

// Mobile menu variants
export const mobileMenuVariant: Variants = {
  hidden: { 
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Divider reveal animation
export const dividerReveal: Variants = {
  hidden: { 
    scaleX: 0,
    originX: 0
  },
  visible: { 
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Image reveal - for masking effect
export const imageReveal: Variants = {
  hidden: { 
    clipPath: 'inset(0 100% 0 0)'
  },
  visible: { 
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Alias for modal variants
export const modalVariants = modalContentVariant;

// Bounce animation for scroll indicators
export const bounceAnimation: Variants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
