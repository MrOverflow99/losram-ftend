// src/shared/lib/validators.js

export function validateRequired(value, label = 'Este campo') {
  if (!value || String(value).trim() === '') {
    return `${label} es requerido`;
  }
  return null;
}

export function validateEmail(value) {
  if (!value) return 'El correo electrónico es requerido';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return 'Ingresa un correo electrónico válido';
  return null;
}

export function validatePhone(value) {
  if (!value) return null; // optional
  const cleaned = value.replace(/[\s\-\(\)\+]/g, '');
  if (!/^\d{7,15}$/.test(cleaned)) return 'Ingresa un número de teléfono válido';
  return null;
}

export function validateDate(value, label = 'La fecha') {
  if (!value) return `${label} es requerida`;
  return null;
}

export function validateDateRange(startDate, endDate) {
  if (!startDate || !endDate) return null;
  if (new Date(endDate) <= new Date(startDate)) {
    return 'La fecha de regreso debe ser posterior a la fecha de salida';
  }
  return null;
}

export function validateMinNumber(value, min, label = 'Este campo') {
  const num = Number(value);
  if (isNaN(num) || num < min) return `${label} debe ser al menos ${min}`;
  return null;
}

export function validateStep1(data) {
  const errors = {};
  errors.fullName = validateRequired(data.fullName, 'El nombre completo');
  errors.email = validateEmail(data.email);
  errors.phone = validatePhone(data.phone);
  errors.destination = validateRequired(data.destination, 'El destino');
  errors.travelDateStart = validateDate(data.travelDateStart, 'La fecha de salida');
  errors.travelDateEnd = validateDate(data.travelDateEnd, 'La fecha de regreso');
  if (!errors.travelDateStart && !errors.travelDateEnd) {
    errors.travelDateEnd = validateDateRange(data.travelDateStart, data.travelDateEnd);
  }
  Object.keys(errors).forEach(k => { if (!errors[k]) delete errors[k]; });
  return errors;
}

export function validateStep2(data) {
  const errors = {};
  errors.adults = validateMinNumber(data.adults, 1, 'La cantidad de adultos');
  Object.keys(errors).forEach(k => { if (!errors[k]) delete errors[k]; });
  return errors;
}
