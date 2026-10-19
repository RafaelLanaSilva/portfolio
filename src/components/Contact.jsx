import { ArrowUpRight } from 'lucide-react';
import { FadeIn, MagneticButton } from './Shared';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { getWhatsAppUrl } from '../lib/whatsapp';

const formInputClass = 'w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-glow-a';
const projectTypes = ['Site Institucional', 'Landing Page', 'Serviços de Design', 'Identidade Visual & Design Gráfico', 'Pacotes de Posts para Redes Sociais', 'Automações & Chatbots', 'Motion Design & Animações', 'Loja Virtual — Shopify ou Nuvemshop', 'Outro projeto'];

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Olá! Gostaria de conversar sobre um projeto com a Lana Dev Studio.', '',
      `Nome: ${data.get('name').trim()}`,
      `E-mail: ${data.get('email').trim()}`,
      `Tipo de projeto: ${data.get('project')}`, '',
      data.get('message').trim()
    ].join('\n');
    window.location.assign(getWhatsAppUrl(message));
  }

  return (
    <section id="contato" className="grain relative overflow-hidden px-4 py-28">
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-glow-a">// Contato</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-tighter md:text-7xl">Vamos criar algo <span className="text-gradient">extraordinário</span>.</h2>
          <div className="mt-8">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white">
              <WhatsAppIcon size={20} />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-3xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required autoComplete="name" aria-label="Nome" placeholder="Nome" className={formInputClass} />
              <input name="email" required type="email" autoComplete="email" aria-label="E-mail" placeholder="E-mail" className={formInputClass} />
            </div>
            <select name="project" required defaultValue="" aria-label="Tipo de projeto" className={formInputClass}>
              <option value="" disabled>Tipo de projeto</option>
              {projectTypes.map((label) => <option key={label} value={label}>{label}</option>)}
            </select>
            <textarea name="message" rows={4} aria-label="Conte sobre seu projeto" placeholder="Conte sobre seu projeto" className={formInputClass} />
            <MagneticButton type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-[filter] hover:brightness-110 w-full justify-center">
              Enviar pelo WhatsApp <ArrowUpRight size={16} />
            </MagneticButton>
            <p className="text-xs text-muted-foreground">Seu WhatsApp será aberto com a mensagem preenchida. Basta confirmar o envio por lá. Saiba como seus dados são utilizados na <a href="#/privacidade" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>Política de Privacidade</a>.</p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
