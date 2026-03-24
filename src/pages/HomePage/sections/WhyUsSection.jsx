// src/pages/HomePage/sections/WhyUsSection.jsx
import Section from '../../../shared/ui/Section/Section';
import Container from '../../../shared/ui/Container/Container';
import { BRAND } from '../../../shared/constants/brand';
import styles from './WhyUsSection.module.css';

const WHY_ITEMS = [
  {
    id: 'avavit',
    icon: '🏆',
    title: 'Afiliados a AVAVIT',
    description: 'Respaldo de la Asociación Venezolana de Agencias de Viajes y Turismo. Tu garantía de profesionalismo y confianza.',
  },
  {
    id: 'atencion',
    icon: '🤝',
    title: 'Atención personalizada',
    description: 'Te acompañamos en cada paso del proceso. Desde la idea inicial hasta que regresas a casa, siempre estamos contigo.',
  },
  {
    id: 'experiencia',
    icon: '🌍',
    title: 'Experiencia comprobada',
    description: `${BRAND.yearsExperience} años conectando venezolanos con el mundo. Conocemos cada destino y cada detalle que hace tu viaje perfecto.`,
  },
];

export default function WhyUsSection() {
  return (
    <Section id="por-que" className={styles.whyUs}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>¿Por qué elegirnos?</span>
          <h2 className={styles.title}>La diferencia LOSRAM</h2>
        </div>

        <div className={styles.grid}>
          {WHY_ITEMS.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.iconCircle} aria-hidden="true">
                {item.icon}
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
