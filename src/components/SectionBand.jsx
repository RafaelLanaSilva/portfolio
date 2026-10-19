export default function SectionBand({ tone, children }) {
  return <div className={`section-band section-band--${tone}`}>{children}</div>;
}
