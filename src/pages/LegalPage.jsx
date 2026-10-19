import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import { getWhatsAppUrl } from '../lib/whatsapp';
import './LegalPage.css';

const privacyContact = getWhatsAppUrl('Olá, tenho uma solicitação sobre meus dados pessoais.');

export default function LegalPage({ page }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${page.title} — Lana Dev Studio`;
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, [page]);

  return (
    <>
      <main className="legal-page">
        <a href="#" className="legal-back"><ArrowLeft size={16} /> Voltar ao site</a>
        <p className="legal-eyebrow">LANA DEV STUDIO · INFORMAÇÕES LEGAIS</p>
        <h1>{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>
        <p className="legal-date">Última atualização: 18 de outubro de 2026</p>
        <nav className="legal-index" aria-label="Nesta página">
          {page.sections.map(({ title }, index) => <a key={title} href={`#${window.location.hash.slice(1).split('#')[0]}#topico-${index + 1}`} onClick={(event) => { event.preventDefault(); document.getElementById(`topico-${index + 1}`)?.scrollIntoView({ behavior: 'smooth' }); }}>{title}</a>)}
        </nav>
        {page.sections.map(({ title, content }, index) => (
          <section key={title} id={`topico-${index + 1}`} className="legal-section">
            <h2>{index + 1}. {title}</h2>
            {content}
          </section>
        ))}
        <a className="legal-back" href={privacyContact}>Falar com o atendimento <ArrowUpRight size={16} /></a>
      </main>
      <Footer />
    </>
  );
}
