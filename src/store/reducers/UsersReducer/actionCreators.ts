import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "../../../API/UsersService";
import { UserType } from "../../../models/UserType";

export type FetchUsersRequestType = {
  currentPage: number;
  perPage?: number;
};

export type FetchUsersResponseType = {
  total_count: number;
  incomplete_results: boolean;
  items: UserType[];
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (config: FetchUsersRequestType, thunkApi) => {
    try {
      return await UsersService.fetchUsers(config.currentPage, config.perPage);
    } catch (e) {
      return thunkApi.rejectWithValue("Не получилось загрузить пользователей");
    }
  }
);
