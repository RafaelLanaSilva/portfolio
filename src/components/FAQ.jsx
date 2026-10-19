import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './Shared';

const faqItems = [
  [
    'Quanto tempo leva um projeto?',
    'Landing pages ficam prontas em cerca de 2 semanas; sites institucionais entre 3 e 5 semanas, dependendo do escopo.'
  ],
  [
    'Vocês trabalham com qualquer segmento?',
    'Sim. Já atendemos fintechs, varejo, saúde, educação e startups em estágio inicial.'
  ],
  [
    'Posso editar o site depois?',
    'Sim. Entregamos com CMS ou painel simples para sua equipe atualizar conteúdo sem depender de código.'
  ],
  [
    'Oferecem suporte após o lançamento?',
    'Oferecemos planos de manutenção e evolução contínua, além de 30 dias de suporte inclusos.'
  ]
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-28">
      <SectionHeader tag="// FAQ" title="Perguntas frequentes." />
      <div className="divide-y border-y">
        {faqItems.map(([question, answer], idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={question}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between py-6 text-left text-lg font-medium transition-colors hover:text-foreground"
              >
                <span>{question}</span>
                <span
                  className={`text-glow-a font-mono text-xl transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-muted-foreground">{answer}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
