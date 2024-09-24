import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  matchDate?: SortOrder;
  updatedAt?: SortOrder;
};
