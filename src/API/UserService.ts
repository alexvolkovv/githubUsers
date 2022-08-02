import { host } from "./index";
import { UserType } from "../models/UserType";
import { RepositoryType } from "../models/RepositoryType";

export class UserService {
  public static async getUser(id: number): Promise<UserType> {
    try {
      const response = await host.get<UserType>(`/user/${id}`);

      return response.data;
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  public static async getUserRepos(name: string): Promise<RepositoryType[]> {
    try {
      const response = await host.get<RepositoryType[]>(
        `/users/${name}/repos?sort=updated&per_page=12`
      );

      return response.data;
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }
}
