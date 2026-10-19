import { FadeIn, SectionHeader } from './Shared';

const processSteps = [
  ['Descoberta & Estratégia', 'Imersão no seu negócio, público e objetivos. Definimos escopo e métricas de sucesso.'],
  ['UI/UX Design', 'Wireframes, identidade visual e protótipos interativos validados com você.'],
  ['Desenvolvimento & Automação', 'Código limpo, performance máxima e integrações conectadas ao seu stack.'],
  ['Lançamento & Suporte', 'Publicação do projeto, orientação sobre hospedagem e suporte para os primeiros passos após a entrega.']
];

export default function Process() {
  return (
    <section id="processo" className="mx-auto max-w-6xl px-4 py-28">
      <SectionHeader tag="// Processo" title="Como trabalhamos." />
      <div className="relative grid gap-8 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-accent opacity-40 md:block" />
        {processSteps.map(([title, desc], idx) => (
          <FadeIn key={title} delay={idx * 0.12} className="relative">
            <div className="relative grid h-10 w-10 place-items-center rounded-full border bg-background font-mono text-sm text-glow-a">
              0{idx + 1}
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
