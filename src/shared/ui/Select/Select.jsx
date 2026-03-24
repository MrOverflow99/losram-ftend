// src/shared/ui/Select/Select.jsx
import styles from './Select.module.css';

export default function Select({
  label,
  id,
  options = [],
  error,
  required = false,
  placeholder = 'Selecciona una opción',
  ...props
}) {
  const errorId = `${id}-error`;
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}{required && ' *'}
        </label>
      )}
      <select
        id={id}
        required={required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className={`${styles.select} ${error ? styles.error : ''}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && (
        <span id={errorId} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
