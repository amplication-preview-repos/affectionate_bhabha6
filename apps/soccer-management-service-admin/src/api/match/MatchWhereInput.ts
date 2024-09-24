import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  matchDate?: DateTimeNullableFilter;
};
