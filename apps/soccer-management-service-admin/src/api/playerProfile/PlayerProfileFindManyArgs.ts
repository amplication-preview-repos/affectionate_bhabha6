import { PlayerProfileWhereInput } from "./PlayerProfileWhereInput";
import { PlayerProfileOrderByInput } from "./PlayerProfileOrderByInput";

export type PlayerProfileFindManyArgs = {
  where?: PlayerProfileWhereInput;
  orderBy?: Array<PlayerProfileOrderByInput>;
  skip?: number;
  take?: number;
};
