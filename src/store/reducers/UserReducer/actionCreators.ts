import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../../API/UserService";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id: number, thunkApi) => {
    try {
      return await UserService.getUser(id);
    } catch (e) {
      return thunkApi.rejectWithValue("Не получилось загрузить пользователя");
    }
  }
);

export const fetchUserRepos = createAsyncThunk(
  "user/fetchUserRepos",
  async (name: string, thunkApi) => {
    try {
      return await UserService.getUserRepos(name);
    } catch (e) {
      return thunkApi.rejectWithValue("Не получилось загрузить репозитории");
    }
  }
);
