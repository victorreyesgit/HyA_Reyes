document.getElementById('buyBookForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página
  
    // Aquí podrías recoger los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
  
    // Simulación de proceso de compra (en un caso real se enviaría una petición AJAX o se redirigiría a una pasarela de pago)
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = `¡Gracias ${nombre}! Tu petición ha sido registrada. Te enviaremos un correo de confirmación a ${email}.`;
  
    // Reiniciar el formulario
    e.target.reset();
  });
  