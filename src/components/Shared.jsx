import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const easeCustom = [0.22, 1, 0.36, 1];

export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({ children, className = '', href, type, onClick }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x, y },
    whileTap: { scale: 0.95 },
    className,
    onClick
  };

  return href ? (
    <motion.a href={href} {...motionProps}>
      {children}
    </motion.a>
  ) : (
    <motion.button type={type} {...motionProps}>
      {children}
    </motion.button>
  );
}

export function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export function SectionHeader({ tag, title, sub }) {
  return (
    <FadeIn className="mb-14 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-glow-a">{tag}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tighter md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </FadeIn>
  );
}

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 font-mono text-sm tracking-widest">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-accent text-primary-foreground font-bold">
        L/
      </span>
      LANA DEV STUDIO
    </a>
  );
}
