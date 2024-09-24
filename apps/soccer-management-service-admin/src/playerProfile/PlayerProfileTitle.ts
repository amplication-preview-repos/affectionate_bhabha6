import { PlayerProfile as TPlayerProfile } from "../api/playerProfile/PlayerProfile";

export const PLAYERPROFILE_TITLE_FIELD = "position";

export const PlayerProfileTitle = (record: TPlayerProfile): string => {
  return record.position?.toString() || String(record.id);
};
