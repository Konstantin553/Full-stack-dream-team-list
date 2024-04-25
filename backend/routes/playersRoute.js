import express from "express";
import { Player } from "../models/playerModel.js";

const router = express.Router();

//Route for creating new Player
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.position ||
      !request.body.nationality
    ) {
      return response.status(400).send({
        message: "Send all required field: name, position, nationality",
      });
    }
    const newPlayer = {
      name: request.body.name,
      position: request.body.position,
      nationality: request.body.nationality,
    };

    const player = await Player.create(newPlayer);

    return response.status(201).send(player);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for getting all Players from database
router.get("/", async (request, response) => {
  try {
    const players = await Player.find({});

    return response.status(200).json({
      count: players.length,
      data: players,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for getting one Player from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const player = await Player.findById(id);

    return response.status(200).json(player);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for updating Player
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.position ||
      !request.body.nationality
    ) {
      return response.status(400).send({
        message: "Send all required field: name, position, nationality",
      });
    }
    const { id } = request.params;
    const result = await Player.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Player not found" });
    }
    return response
      .status(200)
      .send({ message: "Player updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for deleting Player
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Player.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Player not found" });
    }
    return response
      .status(200)
      .send({ message: "Player deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
