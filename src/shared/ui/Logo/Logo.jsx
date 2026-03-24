// src/shared/ui/Logo/Logo.jsx

export default function Logo({ variant = 'isotipo', size }) {
  const src = variant === 'logotipo'
    ? '/assets/logo-logotipo.png'
    : '/assets/logo-isotipo.png';

  const alt = variant === 'logotipo'
    ? 'LOSRAM Viajes y Turismo'
    : 'LOSRAM';

  const style = {};
  if (size) {
    if (variant === 'logotipo') {
      style.width = typeof size === 'number' ? `${size}px` : size;
      style.height = 'auto';
    } else {
      style.height = typeof size === 'number' ? `${size}px` : size;
      style.width = 'auto';
    }
  }

  return <img src={src} alt={alt} style={style} />;
}
