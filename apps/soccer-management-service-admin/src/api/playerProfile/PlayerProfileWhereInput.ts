import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerProfileWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
};
