import { Logo } from './Shared';
import { getWhatsAppUrl } from '../lib/whatsapp';
import '../pages/LegalPage.css';

const copyrightYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <Logo />
          <nav className="site-footer__links" aria-label="Informações legais e contato">
            <a href="#/privacidade">Política de Privacidade</a>
            <a href="#/cookies">Política de Cookies</a>
            <a href="#/termos">Termos de Uso</a>
            <a href={getWhatsAppUrl('Olá, tenho uma solicitação sobre meus dados pessoais.')}>Privacidade e dados pessoais</a>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>© {copyrightYear} Lana Dev Studio. Todos os direitos reservados.</p>
          <p className="site-footer__credit">Site desenvolvido por <a href="https://www.linkedin.com/in/rafaeldelana/" target="_blank" rel="noopener noreferrer">Rafael Lana</a>.</p>
        </div>
      </div>
    </footer>
  );
}
