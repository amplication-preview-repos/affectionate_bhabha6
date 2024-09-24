import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerProfileCreateInput = {
  position?: string | null;
  skills?: Array<"Option1">;
  team?: TeamWhereUniqueInput | null;
};
