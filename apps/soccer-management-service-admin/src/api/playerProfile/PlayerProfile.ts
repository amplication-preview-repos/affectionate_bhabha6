import { Team } from "../team/Team";

export type PlayerProfile = {
  createdAt: Date;
  id: string;
  position: string | null;
  skills?: Array<"Option1">;
  team?: Team | null;
  updatedAt: Date;
};
