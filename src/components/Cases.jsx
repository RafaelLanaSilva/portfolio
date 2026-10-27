import { ArrowUpRight, ExternalLink, Lock } from 'lucide-react';
import { FadeIn, SectionHeader } from './Shared';
import './Cases.css';
import TiltLink from './TiltLink';

const casesData = [
  {
    id: 'fqm',
    name: 'FQM Engenharia',
    tag: 'Site Institucional',
    displayUrl: 'fqmengenharia.com',
    url: 'https://fqmengenharia.com/',
    image: `${import.meta.env.BASE_URL}projects/fqm.png`,
    description:
      'Site institucional para escritório de arquitetura e engenharia. Apresentação técnica de projetos estruturais, elétricos, PPCI e planejamento com metodologia BIM.',
    tags: ['Arquitetura & Engenharia', 'Metodologia BIM', 'Responsivo'],
  },
  {
    id: 'iam-inst',
    name: "I'am Pulseiras",
    tag: 'Site Institucional',
    displayUrl: 'iampulseiras.com',
    url: 'https://iampulseiras.com/',
    image: `${import.meta.env.BASE_URL}projects/iam-institucional.png`,
    description:
      'Site institucional para fábrica e personalização de pulseiras. Catálogo interativo de produtos, apresentação de modelos e direcionamento direto para orçamentos via WhatsApp.',
    tags: ['Catálogo de Produtos', 'Fábrica & Vendas', 'Integração WhatsApp'],
  },
  {
    id: 'iam-lp',
    name: "I'am Pulseiras — Landing Page",
    tag: 'Landing Page',
    displayUrl: 'iampulseiras.com/pulseiras...',
    url: 'https://iampulseiras.com/pulseiras-personalizadas/',
    image: `${import.meta.env.BASE_URL}projects/iam-lp.png`,
    description:
      'Landing page estratégica de alta conversão. Simulador de gravação em tempo real, prova social, tabela de benefícios e captação rápida de leads.',
    tags: ['Alta Conversão', 'Simulador em Tempo Real', 'Captação de Leads'],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        tag="// Portfólio"
        title="Projetos reais entregues."
        sub="Conheça alguns dos sites e páginas que desenvolvemos para nossos clientes."
      />

      <div className="cases-grid">
        {casesData.map((item, idx) => (
          <FadeIn key={item.id} delay={idx * 0.1} className="case-slot">
            <TiltLink
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${item.name} (abre em nova aba)`}
              className="case-card glass group"
            >
              {/* Mockup de Janela do Navegador */}
              <div className="case-browser">
                <div className="case-browser__row">
                  {/* Bolinhas estilo Mac */}
                  <div className="case-browser__dots" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                  </div>

                  {/* Barra de Endereço com Ícone de Cadeado */}
                  <div className="case-browser__address">
                    <Lock size={10} className="shrink-0 text-emerald-400" />
                    <span>{item.displayUrl}</span>
                  </div>

                  {/* Ícone de link externo */}
                  <div className="text-muted-foreground transition-colors group-hover:text-glow-a">
                    <ExternalLink size={13} />
                  </div>
                </div>
              </div>

              {/* Print / Screenshot Real do Site */}
              <div className="case-preview">
                <img
                  src={item.image}
                  alt={`Screenshot do site ${item.name}`}
                  loading="lazy"
                  decoding="async"
                  className="case-preview__image"
                />
                <span className="case-preview__cta" aria-hidden="true">Explorar projeto <ArrowUpRight size={16} /></span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Informações do Projeto */}
              <div className="case-content">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex rounded-full border border-glow-a/25 bg-glow-a/10 px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-glow-a">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-tight transition-colors group-hover:text-glow-a">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rodapé do Card com CTA */}
                <div className="case-footer">
                  <span>Ver projeto ao vivo <span className="case-footer__hint">Abre em nova aba</span></span>
                  <span className="case-footer__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </TiltLink>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
