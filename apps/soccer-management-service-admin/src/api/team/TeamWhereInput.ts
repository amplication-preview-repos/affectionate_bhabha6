import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerProfileListRelationFilter } from "../playerProfile/PlayerProfileListRelationFilter";

export type TeamWhereInput = {
  captain?: StringNullableFilter;
  id?: StringFilter;
  playerProfiles?: PlayerProfileListRelationFilter;
  teamName?: StringNullableFilter;
};
