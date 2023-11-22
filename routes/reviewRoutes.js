  // URI de todas las reseñas
  app.get('/reviews', (request, response) => {
    return response.json({
      success: true,
      message: 'Seleccionando todas las reseñas'
    })
  })
  
  // URI de una reseña por ID
  app.get('/reviews/:id', (request, response) => {
    const reviewId = request.params.id
    return response.json({
      success: true,
      message: `Seleccionando la reseña con ID: ${reviewId}`
    })
  })
  
  // Crear una reseña
  app.post('/reviews', (request, response) => {
    return response.json({
      success: true,
      message: 'Creando una reseña'
    })
  })
  
  // Actualizar una reseña por ID
  app.put('/reviews/:id', (request, response) => {
    const reviewId = request.params.id
    return response.json({
      success: true,
      message: `Actualizando la reseña con ID: ${reviewId}`
    })
  })
  
  // Eliminar una reseña por ID
  app.delete('/reviews/:id', (request, response) => {
    const reviewId = request.params.id
    return response.json({
      success: true,
      message: `Eliminando la reseña con ID: ${reviewId}`
    })
  })