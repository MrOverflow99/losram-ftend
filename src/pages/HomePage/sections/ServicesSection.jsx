// src/pages/HomePage/sections/ServicesSection.jsx
import Section from '../../../shared/ui/Section/Section';
import Container from '../../../shared/ui/Container/Container';
import { SERVICES } from '../../../shared/constants/services';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <Section id="servicios">
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Nuestros servicios</span>
          <h2 className={styles.title}>Todo lo que necesitas para viajar</h2>
          <p className={styles.subtitle}>
            Desde vuelos y hoteles hasta visas y seguros, te acompañamos en cada paso de tu aventura.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(service => (
            <article key={service.id} className={styles.card}>
              <div className={styles.iconWrapper} aria-hidden="true">
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.label}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
