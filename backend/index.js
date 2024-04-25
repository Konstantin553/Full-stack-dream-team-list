import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Player } from "./models/playerModel.js";
import playersRoute from "./routes/playersRoute.js";
import cors from "cors";

const app = express();
//Middleware for handling CORS Policy
app.use(cors());

//Middleware for parsing req body
app.use(express.json());
//Middleware for handling routes
app.use("/players", playersRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to Dream Team List");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    //Run express server only if the database connection is successfull
    app.listen(PORT, () => {
      console.log(`App listen on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
