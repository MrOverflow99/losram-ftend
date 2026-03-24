// src/pages/HomePage/sections/HowItWorksSection.jsx
import Section from '../../../shared/ui/Section/Section';
import Container from '../../../shared/ui/Container/Container';
import styles from './HowItWorksSection.module.css';

const STEPS = [
  {
    id: 1,
    icon: '💬',
    title: 'Cuéntanos tu viaje',
    description: 'Comparte tu destino soñado, fechas disponibles y presupuesto estimado.',
  },
  {
    id: 2,
    icon: '📋',
    title: 'Recibe opciones',
    description: 'Te enviamos propuestas personalizadas adaptadas a tus necesidades.',
  },
  {
    id: 3,
    icon: '✅',
    title: 'Confirmamos tu reserva',
    description: 'Gestionamos todos los detalles de tu viaje por ti.',
  },
  {
    id: 4,
    icon: '🌟',
    title: '¡A viajar!',
    description: 'Solo disfruta la experiencia. Nosotros nos encargamos del resto.',
  },
];

export default function HowItWorksSection() {
  return (
    <Section id="como-funciona" className={styles.howItWorks}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Proceso</span>
          <h2 className={styles.title}>¿Cómo funciona?</h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map(step => (
            <div key={step.id} className={styles.step}>
              <div className={styles.stepNumber} aria-hidden="true">
                {step.icon}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
