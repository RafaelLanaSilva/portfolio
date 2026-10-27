import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { easeCustom, MagneticButton } from './Shared';
import LightRays from './LightRays';
import './Hero.css';

const headline = 'Marcas que convertem,código que escala.';

function typedText(text, offset, visibleCount) {
  let position = offset;
  return text.split(/(\s+)/).map((word, wordIndex) => (
    <span key={wordIndex} className={word.trim() ? 'hero-typewriter__word' : undefined}>
      {Array.from(word).map((character) => {
        const index = position++;
        const cursor = visibleCount < headline.length && (
          visibleCount === index + 1 ? 'after' : visibleCount === 0 && index === 0 ? 'before' : undefined
        );
        return (
          <span
            key={index}
            className="hero-typewriter__character"
            style={{ visibility: index < visibleCount ? 'visible' : 'hidden' }}
            data-cursor={cursor || undefined}
          >
            {character}
          </span>
        );
      })}
    </span>
  ));
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 50, y: 40 });
  const [typedCount, setTypedCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let count = 0;
    let timer;
    let cancelled = false;
    const typeNextCharacter = () => {
      count += 1;
      setTypedCount(count);
      if (count < headline.length) {
        timer = window.setTimeout(typeNextCharacter, headline[count - 1] === ',' ? 320 : 55);
      }
    };
    // Start only after the headline font settles, so its words cannot reflow
    // from the fallback font to Geist halfway through typing.
    const startTyping = async () => {
      try {
        await document.fonts.load('600 96px "Geist"', headline);
        await document.fonts.ready;
      } catch {
        // A failed font download still leaves the system font usable.
      }
      if (!cancelled) timer = window.setTimeout(typeNextCharacter, 650);
    };
    startTyping();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reducedMotion]);

  const visibleCount = reducedMotion ? headline.length : typedCount;

  return (
    <section
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
      className="grain relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, color-mix(in oklab, var(--glow-a) 18%, transparent), transparent 60%), radial-gradient(800px circle at 85% 10%, color-mix(in oklab, var(--glow-b) 10%, transparent), transparent 60%)`
        }}
      />
      <LightRays />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="hero-content relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-c opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-glow-c" />
          </span>
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeCustom }}
          className="hero-typewriter mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl"
          aria-label="Marcas que convertem, código que escala."
        >
          <span aria-hidden="true">
            {typedText('Marcas que ', 0, visibleCount)}
            <span className="hero-typewriter__word">
              <span className="text-gradient">{typedText('convertem', 11, visibleCount)}</span>
              {typedText(',', 20, visibleCount)}
            </span>
            <br />
            {typedText('código que escala.', 21, visibleCount)}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
          className="mt-8 max-w-xl text-lg text-muted-foreground"
        >
          Estúdio especializado em design gráfico, identidade visual e desenvolvimento web. Criação de banners, panfletos, cartazes e sites institucionais de alto impacto para destacar sua marca.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: easeCustom }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-[filter] hover:brightness-110"
          >
            Explorar Serviços <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton
            href="#cases"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Ver Portfólio
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
