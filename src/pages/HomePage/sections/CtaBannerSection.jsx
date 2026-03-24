// src/pages/HomePage/sections/CtaBannerSection.jsx
import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';
import { ROUTES } from '../../../app/router/routes';
import styles from './CtaBannerSection.module.css';

export default function CtaBannerSection() {
  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <h2 className={styles.title}>¿Listo para tu próxima aventura?</h2>
        <p className={styles.subtitle}>
          Cuéntanos a dónde quieres ir y te ayudamos a hacerlo realidad. Sin costos adicionales, sin complicaciones.
        </p>
        <Link to={ROUTES.REQUEST}>
          <Button variant="secondary" size="lg">
            Solicitar cotización gratuita
          </Button>
        </Link>
      </div>
    </section>
  );
}
