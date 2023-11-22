const express = require("express");
const Bootcamp = require("../models/bootcampsModel");

//definimos el ruteador de los bootcamp
const router = express.Router();

//uris de bootcamps (direcciones
//o identificadores de recursos)
router.get("/", async (request, response) => {
  const bootcamps = await Bootcamp.find();
  return response.json({
    success: true,
    data: bootcamps,
  });
});

//uri de bootcamps por id
router.get("/:id", async (request, response) => {
  const bootcampid = request.params.id;
  //consultar bootcamp
  const bootcamp = await Bootcamp.findById(bootcampid);
  return response.json({
    success: true,
    data: bootcamp,
  });
});

//crear bootcamp
router.post("/", async (request, response) => {
  //guardar bootcamp que viene de body
  const newBootcamp = await Bootcamp.create(request.body)

  return response.json({
    success: true,
    data: newBootcamp
  });
});

//actualizar bootcamp por id
router.put("/", (request, response) => {
  bootcampid = request.params.id;
  return response.json({
    success: true,
    message: "actualizando bootcamp con id: " + bootcampid,
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
