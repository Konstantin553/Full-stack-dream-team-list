import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  nationality: {
    type: String,
    require: true,
  },
});

export const Player = mongoose.model("Ronaldo", playerSchema);
