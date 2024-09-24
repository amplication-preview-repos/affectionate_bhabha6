import { PlayerProfileWhereUniqueInput } from "./PlayerProfileWhereUniqueInput";
import { PlayerProfileUpdateInput } from "./PlayerProfileUpdateInput";

export type UpdatePlayerProfileArgs = {
  where: PlayerProfileWhereUniqueInput;
  data: PlayerProfileUpdateInput;
};
