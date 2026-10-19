import './LightRays.css';

// CSS interpretation of the light-ray effect: no canvas or rendering dependency.
export default function LightRays() {
  return (
    <div className="hero-rays" aria-hidden="true">
      <div className="hero-rays__fan hero-rays__fan--primary" />
      <div className="hero-rays__fan hero-rays__fan--secondary" />
      <div className="hero-rays__source" />
    </div>
  );
}
