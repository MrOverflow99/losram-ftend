// src/shared/ui/TextArea/TextArea.jsx
import styles from './TextArea.module.css';

export default function TextArea({
  label,
  id,
  error,
  required = false,
  maxLength,
  value = '',
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
      <textarea
        id={id}
        required={required}
        maxLength={maxLength}
        value={value}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className={`${styles.textarea} ${error ? styles.error : ''}`}
        {...props}
      />
      {maxLength && (
        <span className={styles.charCount}>{value.length}/{maxLength}</span>
      )}
      {error && (
        <span id={errorId} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
