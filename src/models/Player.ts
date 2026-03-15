import { Document, Model, Schema, model } from "mongoose";
import type { Player } from "../types/Player";

export type PlayerDocument = Player & Document;

const userSchema = new Schema<PlayerDocument>({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  activity: { type: String, required: true },
  class: {
    type: String,
    required: true,
    enum: [
      "Paladin",
      "Rogue",
      "Warrior",
      "Hunter",
      "Cleric",
      "Monk",
      "Necromancer",
    ],
  },
  specialization: String,
});

export default model<PlayerDocument>(
  "User",
  userSchema,
) as Model<PlayerDocument>;
