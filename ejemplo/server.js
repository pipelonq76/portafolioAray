const express = require('express');// Importa el módulo express
// Importa el módulo path para manejar rutas de archivos
const path = require('path'); // Importa el módulo path para manejar rutas de archivos
// Crea una instancia de la aplicación Express

const app = express();// Crea una instancia de la aplicación Express
// Define el puerto en el que el servidor escuchará
const PORT = 3000;// Define el puerto en el que el servidor escuchará

// Ruta estática
app.use(express.static(path.join(__dirname, 'public')));// Define la carpeta 'public' como la ruta estática

// Cualquier ruta no capturada (SPA fallback)
app.get('/*', (req, res) => {// Cualquier ruta no capturada (SPA fallback)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));// Envía el archivo index.html para cualquier ruta no capturada
});

app.listen(PORT, () => {/// Inicia el servidor en el puerto definido
  console.log(`Servidor corriendo en http://localhost:${PORT}`);// Inicia el servidor en el puerto definido
});
