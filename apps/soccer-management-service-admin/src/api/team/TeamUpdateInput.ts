import { PlayerProfileUpdateManyWithoutTeamsInput } from "./PlayerProfileUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  captain?: string | null;
  playerProfiles?: PlayerProfileUpdateManyWithoutTeamsInput;
  teamName?: string | null;
};
