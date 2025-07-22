// Mensaje de bienvenida personalizado para Andy Axcel IA Abierta de Andy Dominguez

document.addEventListener('DOMContentLoaded', function() {
  // Crear elemento para mostrar mensaje de bienvenida
  const welcomeMessage = document.createElement('div');
  welcomeMessage.className = 'andy-header';
  welcomeMessage.innerHTML = `
    <h2>¡Bienvenido a Andy Axcel IA Abierta de Andy Dominguez!</h2>
    <p>La mejor experiencia de inteligencia artificial para Perú</p>
  `;
  
  // Insertar al inicio del cuerpo del documento
  const body = document.body;
  if (body.firstChild) {
    body.insertBefore(welcomeMessage, body.firstChild);
  } else {
    body.appendChild(welcomeMessage);
  }
  
  // Mostrar mensaje por 5 segundos y luego desvanecerlo
  setTimeout(function() {
    welcomeMessage.style.transition = 'opacity 1s';
    welcomeMessage.style.opacity = '0';
    
    // Eliminar después de la transición
    setTimeout(function() {
      welcomeMessage.remove();
    }, 1000);
  }, 5000);
  
  // Agregar pie de página personalizado
  const footer = document.createElement('footer');
  footer.className = 'andy-footer';
  footer.innerHTML = `
    <p>Andy Axcel IA Abierta de Andy Dominguez © ${new Date().getFullYear()}</p>
    <p>Desarrollado con ❤️ en Perú</p>
  `;
  
  // Agregar al final del cuerpo
  document.body.appendChild(footer);
});