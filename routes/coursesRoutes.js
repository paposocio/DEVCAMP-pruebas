const express = require("express");
const Course = require("../models/courseModel");
const { default: mongoose } = require("mongoose");

// Define the router for 'cursos'
const router = express.Router();

// URI for all cursos
router.get("/", async (request, response) => {
  const cursos = await Course.find();

  // Scenario 1: There are no cursos in the database
  if (cursos.length > 0) {
    // There are courses in the database
    response.status(200).json({
      success: true,
      data: cursos,
    });
  } else {
    // There are no courses in the database
    response.status(404).json({
      success: false,
      msg: "No hay cursos",
    });
  }
});

// URI for a curso by ID
router.get("/:id", async (request, response) => {
  const cursoId = request.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(cursoId)) {
      return response.status(500).json({
        success: false,
        msg: "Id inválido",
      });
    } else {
      const curso = await Course.findById(cursoId);

      if (!curso) {
        response.status(404).json({
          success: false,
          msg: "Curso no encontrado",
        });
      } else {
        response.status(200).json({
          success: true,
          data: curso,
        });
      }
    }
  } catch (error) {
    return response.status(500).json({
      success: false,
      msg: `Error encontrado: ${error.message}`,
    });
  }
});

// Create a curso
router.post("/", async (request, response) => {
  try {
    // Save the curso from the request body
    const newCurso = await Course.create(request.body);

    return response.status(201).json({
      success: true,
      data: newCurso,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      data: `Error encontrado: ${error.message}`,
    });
  }
});

module.exports = router;