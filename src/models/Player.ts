import { Schema, model } from "mongoose";
import type { IPlayer } from "../types/Player";

const userSchema = new Schema<IPlayer>({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  activity: { type: String, required: true },
});

const User = model("User", userSchema);

export default User;
