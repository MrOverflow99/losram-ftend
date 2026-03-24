// src/pages/HomePage/sections/HeroSection.jsx
import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';
import Logo from '../../../shared/ui/Logo/Logo';
import { ROUTES } from '../../../app/router/routes';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper} aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-poster.jpg"
          className={styles.video}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
          <Logo variant="logotipo" size={200} />
        </div>

        <p className={styles.badge}>✈ Afiliados AVAVIT · Venezuela</p>

        <h1 className={styles.headline}>
          Tu próxima aventura<br />
          <span>comienza aquí</span>
        </h1>

        <p className={styles.subheadline}>
          Agencia de viajes venezolana con experiencia en destinos nacionales e internacionales
        </p>

        <div className={styles.ctas}>
          <Link to={ROUTES.REQUEST}>
            <Button variant="primary" size="lg">Solicitar cotización</Button>
          </Link>
          <a href="#servicios" onClick={handleScrollToServices}>
            <Button variant="secondary" size="lg">Conócenos</Button>
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
