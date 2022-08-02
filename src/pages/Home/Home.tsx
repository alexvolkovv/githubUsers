import React, { useEffect } from "react";
import Users from "../../components/Users/Users";
import styles from "./Home.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchUsers,
  FetchUsersRequestType,
} from "../../store/reducers/UsersReducer/actionCreators";
import Pagination from "../../components/Pagination/Pagination";
import { setPage } from "../../store/reducers/UsersReducer/userSlice";

const Home = () => {
  const { page, perPage, totalCount } = useAppSelector(
    (state) => state.usersReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestObj: FetchUsersRequestType = {
      currentPage: page,
      perPage: perPage,
    };

    dispatch(fetchUsers(requestObj));
  }, [page, perPage]);

  return (
    <div className={styles.title}>
      <h1>Пользователи GitHub</h1>
      <Users />
      <Pagination
        totalCount={totalCount}
        perPage={perPage}
        page={page}
        prevButtonClick={() => {
          dispatch(setPage(page - 1));
        }}
        nextButtonClick={() => {
          dispatch(setPage(page + 1));
        }}
      />
    </div>
  );
};

export default Home;
