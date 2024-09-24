import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerProfileUpdateInput = {
  position?: string | null;
  skills?: Array<"Option1">;
  team?: TeamWhereUniqueInput | null;
};
