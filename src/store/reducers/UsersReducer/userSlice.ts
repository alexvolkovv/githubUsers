import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../models/UserType";
import { fetchUsers, FetchUsersResponseType } from "./actionCreators";

export type UsersState = {
  users: UserType[];
  isLoading: boolean;
  error: string;
  totalCount: number;
  perPage: number;
  page: number;
};

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: "",
  totalCount: 0,
  page: 0,
  perPage: 12,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UserType[]>) {
      state.users = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      if (
        action.payload != 0 &&
        action.payload * state.perPage < state.totalCount
      ) {
        state.page = action.payload;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, data: PayloadAction<FetchUsersResponseType | undefined>) => {
        state.users = data.payload?.items!;
        state.totalCount = data.payload?.total_count!;
        state.error = "";
        state.isLoading = false;
      }
    );

    builder.addCase(
      fetchUsers.pending,
      (state, data: PayloadAction<UserType[] | undefined>) => {
        state.error = "";
        state.isLoading = true;
      }
    );

    builder.addCase(fetchUsers.rejected, (state, data: PayloadAction<any>) => {
      state.error = data.payload;
      state.isLoading = false;
    });
  },
});

export const { setUsers, setPage } = usersSlice.actions;

export default usersSlice.reducer;
