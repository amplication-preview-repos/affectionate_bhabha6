import { SortOrder } from "../../util/SortOrder";

export type PlayerProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  position?: SortOrder;
  skills?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
