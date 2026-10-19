import { motion, useReducedMotion, useSpring } from 'framer-motion';

export default function TiltLink({ children, ...props }) {
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 160, damping: 24 });
  const y = useSpring(0, { stiffness: 180, damping: 24 });

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
    y.set(0);
  }

  function handlePointerMove(event) {
    if (reducedMotion || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const vertical = (event.clientY - rect.top) / rect.height;
    rotateX.set((.5 - vertical) * 7);
    rotateY.set((x - .5) * 7);
    y.set(-5);
    event.currentTarget.style.setProperty('--pointer-x', `${x * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${vertical * 100}%`);
  }

  return (
    <motion.a
      {...props}
      style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY, y: reducedMotion ? 0 : y, transformPerspective: 1100 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      onBlur={reset}
    >
      {children}
    </motion.a>
  );
}
