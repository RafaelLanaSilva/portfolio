import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { FadeIn, MagneticButton } from './Shared';
import { getWhatsAppUrl } from '../lib/whatsapp';

export const estimatorOptions = [
  { id: 'inst', label: 'Site Institucional', days: 15 },
  { id: 'lp', label: 'Landing Page', days: 7 },
  { id: 'banners', label: 'Banners & Cartazes', days: 3 },
  { id: 'panfletos', label: 'Panfletos & Flyers', days: 4 },
  { id: 'identidade', label: 'Identidade Visual & Branding', days: 10 },
  { id: 'social', label: 'Artes para Redes Sociais', days: 4 }
];

export default function Estimator() {
  const [selected, setSelected] = useState(['lp']);

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activeItems = estimatorOptions.filter((opt) => selected.includes(opt.id));
  const rawDays = activeItems.reduce((acc, curr) => acc + curr.days, 0);
  const totalDays = activeItems.length > 1 ? Math.round(rawDays * 0.8) : rawDays;

  return (
    <section className="mx-auto max-w-6xl px-4 py-28">
      <FadeIn>
        <div className="glass grid gap-10 rounded-3xl p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-glow-a">// Estimador</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tighter md:text-5xl">Monte seu escopo.</h2>
            <p className="mt-4 text-muted-foreground">
              Selecione o que você precisa e veja um prazo estimado em segundos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {estimatorOptions.map((opt) => {
                const isSelected = selected.includes(opt.id);
                return (
                  <motion.button
                    key={opt.id}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => toggleOption(opt.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      isSelected
                        ? 'border-glow-a bg-glow-a/10 text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isSelected && <Check size={14} className="text-glow-a" />}
                    {opt.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border bg-background/50 p-8">
            <div>
              <p className="text-sm text-muted-foreground">Prazo estimado</p>
              <motion.p
                key={totalDays}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-6xl font-semibold tracking-tighter text-gradient"
              >
                {totalDays ? `~${totalDays} dias` : '—'}
              </motion.p>
              <p className="mt-3 text-sm text-muted-foreground">
                {activeItems.length > 1
                  ? 'Pacote combinado com 20% de agilidade.'
                  : 'Prazo médio para este tipo de projeto.'}
              </p>
            </div>
            <MagneticButton
              href={getWhatsAppUrl(`Olá! Gostaria de receber uma proposta da Lana Dev Studio.${activeItems.length ? `\nServiços: ${activeItems.map((item) => item.label).join(', ')}.` : ''}`)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-[filter] hover:brightness-110 mt-8 self-start"
            >
              Receber proposta <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
