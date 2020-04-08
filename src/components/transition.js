const Cubic = [0.25, 0.1, 0.25, 1.0];

export const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 1,
        ease: Cubic
    }
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};