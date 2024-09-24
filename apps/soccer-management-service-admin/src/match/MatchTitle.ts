import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "location";

export const MatchTitle = (record: TMatch): string => {
  return record.location?.toString() || String(record.id);
};
