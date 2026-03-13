export type PlayerActivity = "Quest" | "Dungeon" | "Raid" | "Nothing";

export type Player = {
  name: string;
  level: number;
  experience: number;
  activity: PlayerActivity;
} & (
  | {
      class: "Paladin";
      specialization: "Protect" | "Holy";
    }
  | {
      class: "Rogue";
      specialization: "Shadow" | "Poison";
    }
  | {
      class: "Warrior";
      specialization: "Sword-And-Board" | "Dual-Wielder";
    }
  | {
      class: "Hunter";
      specialization: "Beast-Master" | "Poison";
    }
  | {
      class: "Cleric";
    }
  | {
      class: "Monk";
      specialization: "Brawler" | "Zen-Master";
    }
  | {
      class: "Necromancer";
    }
);

export type ClassTypes =
  | "Paladin"
  | "Rogue"
  | "Warrior"
  | "Hunter"
  | "Cleric"
  | "Monk"
  | "Necromancer";
