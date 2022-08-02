import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../models/UserType";
import { RepositoryType } from "../../../models/RepositoryType";
import { fetchUser, fetchUserRepos } from "./actionCreators";

export type UserState = {
  user: UserType | null;
  repos: RepositoryType[];
  isLoadingUser: boolean;
  isLoadingRepos: boolean;
  errorUser: string;
  errorRepos: string;
};

const initialState: UserState = {
  user: null,
  isLoadingUser: false,
  errorRepos: "",
  errorUser: "",
  isLoadingRepos: false,
  repos: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType | null>) {
      state.user = action.payload;
    },
    setRepos(state, action: PayloadAction<RepositoryType[]>) {
      state.repos = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchUser.fulfilled,
      (state, data: PayloadAction<UserType | undefined>) => {
        state.user = data.payload!;
        state.isLoadingUser = false;
        state.errorUser = "";
      }
    );

    builder.addCase(
      fetchUser.pending,
      (state, data: PayloadAction<UserType[] | undefined>) => {
        state.isLoadingUser = true;
        state.errorUser = "";
      }
    );

    builder.addCase(fetchUser.rejected, (state, data: PayloadAction<any>) => {
      state.errorUser = data.payload;
      state.isLoadingUser = false;
    });

    builder.addCase(fetchUserRepos.pending, (state, _) => {
      state.isLoadingRepos = true;
      state.errorRepos = "";
    });

    builder.addCase(
      fetchUserRepos.fulfilled,
      (state, data: PayloadAction<RepositoryType[] | undefined>) => {
        state.repos = data.payload!;
        state.isLoadingRepos = false;
        state.errorRepos = "";
      }
    );

    builder.addCase(
      fetchUserRepos.rejected,
      (state, data: PayloadAction<any>) => {
        state.errorRepos = data.payload;
        state.isLoadingRepos = false;
      }
    );
  },
});

export const { setUser, setRepos } = userSlice.actions;

export default userSlice.reducer;
