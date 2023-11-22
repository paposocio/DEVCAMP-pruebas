const express = require("express");
const Bootcamp = require("../models/bootcampsModel");
const { default: mongoose } = require("mongoose");

//definimos el ruteador de los bootcamp
const router = express.Router();

//uris de bootcamps (direcciones
//o identificadores de recursos)

router.get("/", async (request, response) => {
  const bootcamps = await Bootcamp.find();
  //escenario 1: no hay bootcamps en la bd
  if (bootcamps.length > 0) {
    //hay bootcamps en la bd
    response.status(200).json({
      success: true,
      data: bootcamps,
    });
  } else {
    //no hay bootcamps en la bd
    response.status(404).json({
      success: false,
      msg: "No hay bootcamps",
    });
  }
});

//uri de bootcamps por id
router.get("/:id", async (request, response) => {
  const bootcampid = request.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(bootcampid)) {
      return response.status(500).json({
        success: false,
        msg: "Id invalido",
      });
    } else {
      const bootcamp = await Bootcamp.findById(bootcampid);
      if (!bootcamp) {
        response.status(404).json({
          success: false,
          msg: "Bootcamp no encontrado",
        });
      } else {
        response.status(200).json({
          success: true,
          data: bootcamp,
        });
      }
      return response.json({
        success: true,
        data: bootcamp,
      });
    }
  } catch (error) {
    return response.status(500).json({
      success: false,
      msg: `Error encontrado: ${error.message}`,
    });
  }
});

//crear bootcamp
router.post("/", async (request, response) => {

  try{
    //guardar bootcamp que viene de body
    const newBootcamp = await Bootcamp.create(request.body);

    return response.status(201).json({
      success: true,
      data: newBootcamp,
    });
  }catch(error){
    response.status(500).json({
      success: false,
      data: `Error encontrado: ${error.message}`,
    })
  }
});

//actualizar bootcamp por id
router.put("/", async (request, response) => {
  const bootcampid = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(bootcampid)) {
    return response.status(500).json({
      success: false,
      msg: "Id invalido",
    });
  }

  const bootcamp = await Bootcamp.findById(bootcampid);

  if (!bootcamp) {
    return response.status(404).json({
      success: false,
      msg: "Bootcamp no encontrado",
    });
  }

  const updatedBootcamp = await Bootcamp.findByIdAndUpdate(bootcampid, request.body, {
    new: true,
    options: {
      returnDocument: "after"
    }
  });

  response.status(200).json({
    success: true,
    data: updatedBootcamp
  });
});


//eliminar bootcamp por id
router.delete("/", (request, response) => {
  bootcampid = request.params.id;
  return response.json({
    success: true,
    message: "eliminando bootcamp con id: " + bootcampid,
  });
});

module.exports = router;
