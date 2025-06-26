// Función para cargar secciones HTML en el contenedor principal
async function loadSection(page) {// Función para cargar secciones HTML en el contenedor principal
  const container = document.getElementById('content-container'); // Contenedor principal

  try {
    const response = await fetch(page); // Hace la petición del archivo
    if (!response.ok) throw new Error('Página no encontrada'); // Error si falla

    const html = await response.text(); // Convierte a texto
    container.innerHTML = html; // Inserta el contenido
  } catch (error) {
    container.innerHTML = `<h2 class="text-red-600">Error:</h2><p>${error.message}</p>`; // Muestra el error
  }
}

// Cargar la sección de inicio por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {// Cargar la sección de inicio por defecto al cargar la página
  loadSection('inicio.html');
});

// Alternar el menú en dispositivos móviles
document.getElementById('menu-toggle')?.addEventListener('click', () => {// Alternar el menú en dispositivos móviles
  document.getElementById('menu')?.classList.toggle('active');// Alterna la clase 'active' del menú
});// Alternar el menú en dispositivos móviles
