import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  captain?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  teamName?: SortOrder;
  updatedAt?: SortOrder;
};
