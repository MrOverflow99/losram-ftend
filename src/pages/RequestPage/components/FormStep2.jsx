// src/pages/RequestPage/components/FormStep2.jsx
import Input from '../../../shared/ui/Input/Input';
import Select from '../../../shared/ui/Select/Select';
import TextArea from '../../../shared/ui/TextArea/TextArea';
import styles from '../RequestPage.module.css';

const BUDGET_OPTIONS = [
  { value: 'menos500', label: 'Menos de $500' },
  { value: '500-1000', label: '$500 – $1,000' },
  { value: '1000-2500', label: '$1,000 – $2,500' },
  { value: '2500-5000', label: '$2,500 – $5,000' },
  { value: 'mas5000', label: '$5,000+' },
  { value: 'noindico', label: 'Prefiero no indicarlo' },
];

const TRIP_STYLES = [
  { value: 'playa', label: '🏖 Playa' },
  { value: 'ciudad', label: '🏙 Ciudad' },
  { value: 'aventura', label: '🧗 Aventura' },
  { value: 'romantico', label: '💑 Romántico' },
  { value: 'familiar', label: '👨‍👩‍👧 Familiar' },
  { value: 'crucero', label: '🚢 Crucero' },
  { value: 'corporativo', label: '💼 Corporativo' },
];

export default function FormStep2({ data, errors, onChange, onToggleTripStyle }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div className={styles.row2col}>
        <Input
          label="Adultos"
          id="adults"
          name="adults"
          type="number"
          required
          min="1"
          value={data.adults}
          onChange={handleChange}
          error={errors.adults}
        />
        <Input
          label="Niños"
          id="children"
          name="children"
          type="number"
          min="0"
          value={data.children}
          onChange={handleChange}
          error={errors.children}
        />
      </div>

      <Select
        label="Presupuesto aproximado"
        id="budgetRange"
        name="budgetRange"
        options={BUDGET_OPTIONS}
        value={data.budgetRange}
        onChange={handleChange}
        placeholder="Selecciona un rango"
      />

      <div>
        <p className={styles.checkboxLabel}>Tipo de viaje (puedes elegir varios)</p>
        <div className={styles.checkboxGrid}>
          {TRIP_STYLES.map(style => {
            const selected = data.tripStyle.includes(style.value);
            return (
              <button
                key={style.value}
                type="button"
                className={`${styles.styleChip} ${selected ? styles.selected : ''}`}
                onClick={() => onToggleTripStyle(style.value)}
                aria-pressed={selected}
              >
                {style.label}
              </button>
            );
          })}
        </div>
      </div>

      <TextArea
        label="Notas adicionales"
        id="notes"
        name="notes"
        maxLength={500}
        value={data.notes}
        onChange={handleChange}
        placeholder="Cuéntanos más sobre tu viaje ideal, necesidades especiales, etc. (opcional)"
      />
    </>
  );
}
