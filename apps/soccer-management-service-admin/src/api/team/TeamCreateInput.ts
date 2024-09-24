import { PlayerProfileCreateNestedManyWithoutTeamsInput } from "./PlayerProfileCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  captain?: string | null;
  playerProfiles?: PlayerProfileCreateNestedManyWithoutTeamsInput;
  teamName?: string | null;
};
