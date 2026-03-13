import { Schema, model } from "mongoose";
import { PlayerActivity } from "../types/Player";

interface IPlayer {
  name: string;
  level: number;
  experience: number;
  activity: PlayerActivity;
  class: string;
  specialization?: string;
}

const userSchema = new Schema<IPlayer>({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  activity: { type: String, required: true },
  class: { type: String, required: true },
  specialization: String,
});

const User = model("User", userSchema);

export default User;
