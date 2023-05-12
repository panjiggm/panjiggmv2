export let easeing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

export const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
export const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

export const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

export const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: '100%',
  },
  whileTap: {
    scale: 0.8,
    rotate: 630,
    borderRadius: '100%',
  },
};

export const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
    },
  },
};
