import React, { useEffect } from "react";
import styles from "./User.module.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUser } from "../../store/reducers/UserReducer/actionCreators";
import UserRepos from "../../components/UserRepos/UserRepos";
import UserInfo from "../../components/UserInfo/UserInfo";
import { setRepos, setUser } from "../../store/reducers/UserReducer/userSlice";

const User = () => {
  const { id } = useParams();
  const { user, isLoadingUser, errorUser } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser(+id!));

    return () => {
      dispatch(setUser(null));
      dispatch(setRepos([]));
    };
  }, []);

  if (errorUser) {
    return (
      <div>
        <h1>Ошибка: {errorUser}</h1>
      </div>
    );
  }

  if (isLoadingUser) {
    return (
      <div>
        <h1>Загрузка...</h1>
      </div>
    );
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>{user?.login}</h1>
      </header>
      <div className={styles.container}>
        <main className={styles.main}>
          <UserInfo user={user!} />
          <UserRepos user={user!} />
        </main>
      </div>
    </div>
  );
};

export default User;
