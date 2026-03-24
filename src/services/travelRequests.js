// src/services/travelRequests.js

export async function submitTravelRequest(formData) {
  const payload = {
    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
    subject: 'Nueva solicitud de cotización - LOSRAM',
    from_name: formData.fullName,
    ...formData,
  };

  // Mock mode when no key is configured
  if (!import.meta.env.VITE_WEB3FORMS_KEY) {
    return new Promise(resolve =>
      setTimeout(() => resolve({ success: true, mock: true }), 800)
    );
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Error al enviar el formulario');
  return res.json();
}
