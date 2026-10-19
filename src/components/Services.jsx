import { Globe, Palette, Megaphone, Zap, Layers, Bot, Clapperboard, ShoppingBag } from 'lucide-react';
import { FadeIn, handleSpotlight, SectionHeader } from './Shared';
import './Services.css';

const servicesData = [
  {
    icon: Globe,
    t: 'Criação de Sites Institucionais',
    d: 'Presença digital completa, moderna e responsiva. Transmita autoridade, conquiste credibilidade e apresente sua empresa com elegância e alta performance.',
    span: 'service-slot service-slot--wide',
    stat: '100% responsivo e otimizado para o Google'
  },
  {
    icon: Megaphone,
    t: 'Serviços de Design',
    d: 'Banners, panfletos, cartazes e cartões de visita. Materiais personalizados para divulgar seu negócio, com arquivos preparados para impressão ou uso digital.',
    span: 'service-slot service-slot--compact',
    stat: 'Pronto para impressão e mídias digitais'
  },
  {
    icon: Zap,
    t: 'Landing Pages de Alta Conversão',
    d: 'Páginas estratégicas e focadas em conversão rápida de leads e vendas. Carregamento ultrarrápido, design persuasivo e integração direta com WhatsApp.',
    span: 'service-slot service-slot--compact',
    stat: 'Foco em campanhas, leads e vendas'
  },
  {
    icon: Palette,
    t: 'Identidade Visual & Design Gráfico',
    d: 'Criação e modernização de marcas: logos marcantes, paleta de cores, tipografia e manuais completos de identidade para seu negócio se destacar da concorrência.',
    span: 'service-slot service-slot--wide',
    stat: 'Identidade visual única e memorável'
  },
  {
    icon: Layers,
    t: 'Pacotes de Posts para Redes Sociais',
    d: 'Pacotes de artes para posts, carrosséis e stories, alinhados à identidade da sua marca. Conteúdo visual para divulgar produtos, serviços e campanhas nas suas redes.',
    span: 'service-slot service-slot--half',
    stat: 'Comunicação visual consistente'
  },
  {
    icon: Bot,
    t: 'Automações & Chatbots',
    d: 'Automação de tarefas e fluxos com n8n, integração entre ferramentas e chatbots para atendimento. Conecte formulários, organize leads e agilize a rotina do seu negócio.',
    span: 'service-slot service-slot--half',
    stat: 'Menos tarefas repetitivas, mais tempo para o negócio'
  },
  {
    icon: Clapperboard,
    t: 'Motion Design & Animações',
    d: 'Dê movimento à sua marca com logos animados, peças para redes sociais e animações para sites. Criações que combinam design, ritmo e narrativa para apresentar ideias, produtos e serviços.',
    span: 'service-slot service-slot--half',
    stat: 'Sua identidade visual em movimento'
  },
  {
    icon: ShoppingBag,
    t: 'Criação & Configuração de Lojas Virtuais',
    d: 'Sua loja virtual com Shopify ou Nuvemshop, personalizada para sua marca. Configuração do tema, organização do catálogo e apoio na configuração de pagamentos e entregas para começar a vender online.',
    span: 'service-slot service-slot--half',
    stat: 'Shopify & Nuvemshop'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        tag="// Serviços"
        title="Design que encanta, soluções que convertem."
        sub="Sites, design, animações e automações para fortalecer sua marca e simplificar a rotina do seu negócio."
      />
      <div className="services-grid">
        {servicesData.map((item, idx) => (
          <FadeIn key={item.t} delay={idx * 0.08} className={item.span}>
            <div
              onMouseMove={handleSpotlight}
              className="service-card spotlight glass group h-full overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border bg-secondary transition-colors group-hover:border-glow-a/50">
                <item.icon size={22} className="text-glow-a" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{item.t}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{item.d}</p>
              {item.stat && (
                <p className="service-card__detail mt-6 font-mono text-xs text-gradient">{item.stat}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
