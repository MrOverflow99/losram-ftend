// src/shared/ui/Section/Section.jsx
import styles from './Section.module.css';

export default function Section({ children, id, className = '', style }) {
  return (
    <section id={id} className={`${styles.section} ${className}`} style={style}>
      {children}
    </section>
  );
}
