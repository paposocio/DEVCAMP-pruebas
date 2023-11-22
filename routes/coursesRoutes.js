const express = require("express");

//definimos el ruteador de los cursos
const router = express.Router();

//uris de cursos (direcciones o identificadores de recursos)
// URI de todos los cursos

router.get('/curses', (request, response) => {
    return response.json({
      success: true,
      message: 'Seleccionando todos los cursos'
    })
  })
  
  // URI de un curso por ID
  router.get('/curses/:id', (request, response) => {
    const curseId = request.params.id
    return response.json({
      success: true,
      message: `Seleccionando el curso con ID: ${curseId}`
    })
  })
  
  // Crear un curso
  router.post('/curses', (request, response) => {
    return response.json({
      success: true,
      message: 'Creando un curso'
    })
  })
  
  // Actualizar un curso por ID
  router.put('/curses/:id', (request, response) => {
    const curseId = request.params.id
    return response.json({
      success: true,
      message: `Actualizando el curso con ID: ${curseId}`
    })
  })
  
  // Eliminar un curso por ID
  router.delete('/curses/:id', (request, response) => {
    const curseId = request.params.id
    return response.json({
      success: true,
      message: `Eliminando el curso con ID: ${curseId}`
    })
  })

  module.exports = router