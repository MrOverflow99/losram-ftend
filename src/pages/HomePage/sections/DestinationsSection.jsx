// src/pages/HomePage/sections/DestinationsSection.jsx
import { Link } from 'react-router-dom';
import Section from '../../../shared/ui/Section/Section';
import Container from '../../../shared/ui/Container/Container';
import { DESTINATIONS } from '../../../shared/constants/destinations';
import { ROUTES } from '../../../app/router/routes';
import styles from './DestinationsSection.module.css';

export default function DestinationsSection() {
  return (
    <Section id="destinos">
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Destinos</span>
          <h2 className={styles.title}>¿A dónde quieres ir?</h2>
        </div>

        <div className={styles.grid}>
          {DESTINATIONS.map(dest => (
            <Link to={ROUTES.REQUEST} key={dest.id} className={styles.card} aria-label={`Ver paquetes para ${dest.label}`}>
              <div
                className={styles.cardBg}
                style={{ background: dest.gradient }}
                aria-hidden="true"
              />
              <div className={styles.cardOverlay}>
                <span className={styles.cardEmoji} aria-hidden="true">{dest.emoji}</span>
                <h3 className={styles.cardLabel}>{dest.label}</h3>
                <span className={styles.cardCta}>Ver paquetes →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
