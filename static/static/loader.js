// Loader personalizado para Andy Axcel IA Abierta de Andy Dominguez
document.addEventListener('DOMContentLoaded', function() {
  console.log('Andy Axcel IA Abierta de Andy Dominguez - Cargando...');
  
  // Personalizar el mensaje de bienvenida
  const welcomeMessage = document.createElement('div');
  welcomeMessage.style.position = 'fixed';
  welcomeMessage.style.bottom = '20px';
  welcomeMessage.style.right = '20px';
  welcomeMessage.style.backgroundColor = '#3498db';
  welcomeMessage.style.color = 'white';
  welcomeMessage.style.padding = '10px 20px';
  welcomeMessage.style.borderRadius = '5px';
  welcomeMessage.style.zIndex = '9999';
  welcomeMessage.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  welcomeMessage.textContent = '¡Bienvenido a Andy Axcel IA Abierta de Andy Dominguez!';
  
  // Añadir el mensaje después de 2 segundos
  setTimeout(function() {
    document.body.appendChild(welcomeMessage);
    
    // Eliminar el mensaje después de 5 segundos
    setTimeout(function() {
      welcomeMessage.style.transition = 'opacity 1s';
      welcomeMessage.style.opacity = '0';
      
      setTimeout(function() {
        document.body.removeChild(welcomeMessage);
      }, 1000);
    }, 5000);
  }, 2000);
});