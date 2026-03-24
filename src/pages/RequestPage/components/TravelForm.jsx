// src/pages/RequestPage/components/TravelForm.jsx
import { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import Button from '../../../shared/ui/Button/Button';
import { validateStep1, validateStep2 } from '../../../shared/lib/validators';
import { submitTravelRequest } from '../../../services/travelRequests';
import styles from '../RequestPage.module.css';

const INITIAL_DATA = {
  fullName: '',
  email: '',
  phone: '',
  destination: '',
  travelDateStart: '',
  travelDateEnd: '',
  adults: 1,
  children: 0,
  budgetRange: '',
  tripStyle: [],
  notes: '',
};

export default function TravelForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (name, value) => {
    setData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleToggleTripStyle = (value) => {
    setData(prev => {
      const current = prev.tripStyle;
      const next = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, tripStyle: next };
    });
  };

  const handleNext = () => {
    const validationErrors = validateStep1(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateStep2(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      await submitTravelRequest(data);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage('Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente.');
    }
  };

  const handleReset = () => {
    setData(INITIAL_DATA);
    setErrors({});
    setStatus('idle');
    setStep(1);
  };

  if (status === 'success') {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon} aria-hidden="true">✅</div>
        <h2 className={styles.successTitle}>¡Solicitud enviada!</h2>
        <p className={styles.successMsg}>
          Recibimos tu solicitud de cotización. Te contactaremos pronto con las mejores opciones para tu viaje.
        </p>
        <Button onClick={handleReset} variant="outline">Enviar otra solicitud</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.stepIndicator}>
        <div className={`${styles.stepDot} ${step >= 1 ? styles.stepActive : ''}`}>
          <span>1</span>
          <p>Datos del viaje</p>
        </div>
        <div className={styles.stepLine} />
        <div className={`${styles.stepDot} ${step >= 2 ? styles.stepActive : ''}`}>
          <span>2</span>
          <p>Preferencias</p>
        </div>
      </div>

      <div className={styles.formFields}>
        {step === 1 && (
          <FormStep1
            data={data}
            errors={errors}
            onChange={handleChange}
          />
        )}
        {step === 2 && (
          <FormStep2
            data={data}
            errors={errors}
            onChange={handleChange}
            onToggleTripStyle={handleToggleTripStyle}
          />
        )}
      </div>

      {status === 'error' && (
        <p className={styles.errorBanner} role="alert">{errorMessage}</p>
      )}

      <div className={styles.formActions}>
        {step === 2 && (
          <Button type="button" variant="outline" onClick={handleBack}>
            ← Atrás
          </Button>
        )}
        {step === 1 && (
          <Button type="button" variant="primary" onClick={handleNext}>
            Continuar →
          </Button>
        )}
        {step === 2 && (
          <Button type="submit" variant="primary" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <><span className={styles.spinner} aria-hidden="true" /> Enviando...</>
            ) : (
              'Enviar solicitud ✈'
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
