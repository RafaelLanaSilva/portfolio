import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo, MagneticButton } from './Shared';
import { getWhatsAppUrl } from '../lib/whatsapp';

const navLinks = [
  ['Serviços', '#servicos'],
  ['Processo', '#processo'],
  ['Cases', '#cases'],
  ['FAQ', '#faq']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6">
        <Logo />
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <MagneticButton
            href={getWhatsAppUrl()}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-[filter] hover:brightness-110 !py-2"
          >
            Entrar em Contato
          </MagneticButton>
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-4 rounded-2xl p-6 md:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-foreground transition-colors hover:text-glow-a"
            >
              {label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-[filter] hover:brightness-110 justify-center"
          >
            Entrar em Contato
          </a>
        </div>
      )}
    </header>
  );
}
