const techList = [
  'Design Gráfico',
  'Sites Institucionais',
  'Banners & Cartazes',
  'Panfletos & Flyers',
  'Photoshop',
  'Illustrator',
  'Figma',
  'InDesign',
  'Landing Pages',
  'Identidade Visual',
  'React',
  'Tailwind'
];

export default function TechMarquee() {
  return (
    <div className="relative border-y py-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {[...techList, ...techList].map((tech, idx) => (
          <span
            key={idx}
            className="glass rounded-full px-5 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
