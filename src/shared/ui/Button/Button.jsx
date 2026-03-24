// src/shared/ui/Button/Button.jsx
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
}) {
  const sizeClass = size !== 'md' ? styles[size] : '';
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
}
