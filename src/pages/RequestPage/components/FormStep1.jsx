// src/pages/RequestPage/components/FormStep1.jsx
import Input from '../../../shared/ui/Input/Input';
import Select from '../../../shared/ui/Select/Select';

const DESTINATION_OPTIONS = [
  { value: 'caribe', label: 'Caribe' },
  { value: 'europa', label: 'Europa' },
  { value: 'norteamerica', label: 'Norteamérica' },
  { value: 'suramerica', label: 'Suramérica' },
  { value: 'asia', label: 'Asia' },
  { value: 'cruceros', label: 'Cruceros' },
  { value: 'nacional', label: 'Nacional Venezuela' },
  { value: 'abierto', label: 'Abierto a sugerencias' },
  { value: 'otro', label: 'Otro' },
];

export default function FormStep1({ data, errors, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <Input
        label="Nombre completo"
        id="fullName"
        name="fullName"
        type="text"
        required
        value={data.fullName}
        onChange={handleChange}
        error={errors.fullName}
        placeholder="Tu nombre y apellido"
      />
      <Input
        label="Correo electrónico"
        id="email"
        name="email"
        type="email"
        required
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="tu@correo.com"
      />
      <Input
        label="Teléfono"
        id="phone"
        name="phone"
        type="tel"
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="+58 412 000 0000 (opcional)"
      />
      <Select
        label="Destino de interés"
        id="destination"
        name="destination"
        required
        options={DESTINATION_OPTIONS}
        value={data.destination}
        onChange={handleChange}
        error={errors.destination}
        placeholder="¿A dónde quieres ir?"
      />
      <Input
        label="Fecha de salida"
        id="travelDateStart"
        name="travelDateStart"
        type="date"
        required
        value={data.travelDateStart}
        onChange={handleChange}
        error={errors.travelDateStart}
      />
      <Input
        label="Fecha de regreso"
        id="travelDateEnd"
        name="travelDateEnd"
        type="date"
        required
        value={data.travelDateEnd}
        onChange={handleChange}
        error={errors.travelDateEnd}
      />
    </>
  );
}
