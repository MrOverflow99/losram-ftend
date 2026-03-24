// src/shared/ui/Input/Input.jsx
import styles from './Input.module.css';

export default function Input({
  label,
  id,
  type = 'text',
  error,
  required = false,
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
      <input
        id={id}
        type={type}
        required={required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...props}
      />
      {error && (
        <span id={errorId} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
