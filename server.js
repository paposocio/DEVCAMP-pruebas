const express = require('express')

//crear el objeto express
const app = express()

//url o ruta de prueba y definimos la accion que queremos que realice
app.get('/prueba',(request,response)=>{
    //ejemplo de response o respuesta
    response.send('messi')
})

//uris de bootcamps (direcciones 
//o identificadores de recursos)
app.get(('/bootcamps'),
        (request,response)=>{
            return response.json({
                success:true,
                message:"seleccionando todos los bootcamp"
            })
        })

//uri de bootcamps por id 
app.get(('/bootcamps/:id'),
(request,response)=>{
    bootcampid=request.params.id
    return response.json({
        success:true,
        message:'seleccionando todos los bootcamp con id: '+bootcampid
    })
})

//crear bootcamp
app.post(('/bootcamps'),
        (request,response)=>{
            return response.json({
                success:true,
                message:"crear bootcamp"
            })
        })

//actualizar bootcamp por id 
app.put(('/bootcamps/:id'),
        (request,response)=>{
            bootcampid=request.params.id
            return response.json({
                success:true,
                message:'actualizando bootcamp con id: '+bootcampid
            })
        })

//actualizar bootcamp por id 
app.delete(('/bootcamps/:id'),
        (request,response)=>{
            bootcampid=request.params.id
            return response.json({
                success:true,
                message:'eliminando bootcamp con id: '+bootcampid
            })
        })

//definir puerto del server
const puerto = 4500

//definicion de server
app.listen(puerto,
    console.log('Server ejecutandose en '+ puerto))