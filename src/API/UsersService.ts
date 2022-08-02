import { host } from "./index";
import { FetchUsersResponseType } from "../store/reducers/UsersReducer/actionCreators";

export class UsersService {
  public static async fetchUsers(
    currentPage: number,
    perPage: number = 10
  ): Promise<FetchUsersResponseType> {
    try {
      const response = await host.get<FetchUsersResponseType>(
        `/search/users?&page=${currentPage}&per_page=${perPage}&q=type:user`
      );

      return response.data;
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }
}
