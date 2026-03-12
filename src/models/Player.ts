import { Schema, model } from "mongoose";
import type { PlayerActivity } from "../types/Player";

interface IPlayer {
  name: string;
  level: number;
  experience: number;
  activity: PlayerActivity;
}

const userSchema = new Schema<IPlayer>({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  activity: { type: String, required: true },
});

const User = model("User", userSchema);

export default User;
