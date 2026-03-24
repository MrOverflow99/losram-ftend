// src/pages/RequestPage/RequestPage.jsx
import { useMeta } from '../../shared/lib/useMeta';
import Container from '../../shared/ui/Container/Container';
import TravelForm from './components/TravelForm';
import styles from './RequestPage.module.css';

export default function RequestPage() {
  useMeta(
    'Solicitar Cotización | LOSRAM Viajes y Turismo',
    'Solicita tu cotización de viaje personalizada. Vuelos, hoteles, paquetes y más. Agencia venezolana afiliada a AVAVIT.'
  );

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Solicitar cotización</h1>
          <p className={styles.heroSubtitle}>
            Cuéntanos sobre tu viaje ideal y te enviaremos propuestas personalizadas sin costo
          </p>
        </div>
      </div>

      <Container>
        <div className={styles.formCard}>
          <TravelForm />
        </div>
      </Container>
    </div>
  );
}
