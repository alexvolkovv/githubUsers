import { UserType } from "./UserType";

export type RepositoryType = {
  id: number;
  name: string;
  description: string;
  owner: UserType;
  html_url: string;
  language?: string;
  updated_at: Date;
};
