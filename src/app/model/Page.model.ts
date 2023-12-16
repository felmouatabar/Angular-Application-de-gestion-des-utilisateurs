import { UserModel } from './User.model';

export interface PageModel {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: UserModel[];
}
