document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por escribirnos! Te responderemos pronto.');
});


document.getElementById('formContacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !mensaje) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const numeroWhatsApp = '573245703281'; // Reemplaza con tu número real

  const texto = `Hola, soy ${nombre}%0A📧 Correo: ${correo}%0A📝 Mensaje: ${mensaje}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

  window.open(url, '_blank'); // Abre WhatsApp Web
});
