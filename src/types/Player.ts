export type PlayerActivity = "Quest" | "Dungeon" | "Raid" | "Nothing";

export interface IPlayer {
  name: string;
  level: number;
  experience: number;
  activity: PlayerActivity;
}

export type ClassTypes =
  | "Paladin"
  | "Rogue"
  | "Warrior"
  | "Hunter"
  | "Cleric"
  | "Monk"
  | "Necromancer";
