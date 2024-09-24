import { PlayerProfile } from "../playerProfile/PlayerProfile";

export type Team = {
  captain: string | null;
  createdAt: Date;
  id: string;
  playerProfiles?: Array<PlayerProfile>;
  teamName: string | null;
  updatedAt: Date;
};
