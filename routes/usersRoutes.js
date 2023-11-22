  // URI de todos los usuarios
  app.get('/users', (request, response) => {
    return response.json({
      success: true,
      message: 'Seleccionando todos los usuarios'
    })
  })
  
  // URI de un usuario por ID
  app.get('/users/:id', (request, response) => {
    const userId = request.params.id
    return response.json({
      success: true,
      message: `Seleccionando el usuario con ID: ${userId}`
    })
  })
  
  // Crear un usuario
  app.post('/users', (request, response) => {
    return response.json({
      success: true,
      message: 'Creando un usuario'
    })
  })
  
  // Actualizar un usuario por ID
  app.put('/users/:id', (request, response) => {
    const userId = request.params.id
    return response.json({
      success: true,
      message: `Actualizando el usuario con ID: ${userId}`
    })
  })
  
  // Eliminar un usuario por ID
  app.delete('/users/:id', (request, response) => {
    const userId = request.params.id
    return response.json({
      success: true,
      message: `Eliminando el usuario con ID: ${userId}`
    })
  })