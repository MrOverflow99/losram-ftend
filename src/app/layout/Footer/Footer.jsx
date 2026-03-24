// src/app/layout/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import Logo from '../../../shared/ui/Logo/Logo';
import { BRAND } from '../../../shared/constants/brand';
import { ROUTES } from '../../router/routes';
import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Logo variant="logotipo" size={150} />
          </div>
          <p>Agencia de viajes venezolana con experiencia en destinos nacionales e internacionales. Tu aventura es nuestra pasión.</p>
        </div>

        <div>
          <p className={styles.colTitle}>Navegación</p>
          <nav className={styles.links}>
            <Link to={ROUTES.HOME}>Inicio</Link>
            <a href="/#servicios">Servicios</a>
            <a href="/#por-que">¿Por qué nosotros?</a>
            <Link to={ROUTES.REQUEST}>Solicitar cotización</Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>Contacto</p>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <InstagramIcon />
            {BRAND.instagramHandle}
          </a>
          <div className={styles.contactItem}>
            <EmailIcon />
            {BRAND.email}
          </div>
          <div className={styles.contactItem}>
            <PhoneIcon />
            {BRAND.phone}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 2025 LOSRAM VIAJES Y TURISMO C.A. · {BRAND.avavit} ·{' '}
          <a href="#">Política de privacidad</a>
        </span>
      </div>
    </footer>
  );
}