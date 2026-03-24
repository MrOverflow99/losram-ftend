// src/app/layout/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../shared/ui/Logo/Logo';
import Button from '../../../shared/ui/Button/Button';
import { ROUTES } from '../../router/routes';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Inicio', to: ROUTES.HOME },
  { label: 'Servicios', to: '/#servicios' },
  { label: '¿Por qué nosotros?', to: '/#por-que' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleHashLink = (e, to) => {
    if (to.includes('#')) {
      e.preventDefault();
      const [path, hash] = to.split('#');
      if (location.pathname !== path && path !== '') {
        navigate(path);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (to) => {
    if (to.includes('#')) return false;
    return location.pathname === to;
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={styles.inner}>
        <Link to={ROUTES.HOME} className={styles.logoLink} aria-label="LOSRAM - Inicio">
          <Logo variant="isotipo" size={70} />
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.to}
              onClick={(e) => handleHashLink(e, link.to)}
              className={`${styles.navLink} ${isActive(link.to) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to={ROUTES.REQUEST}>
            <Button variant="primary" size="sm">Cotizar ahora</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
