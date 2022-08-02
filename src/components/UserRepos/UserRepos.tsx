import React, { FC, useEffect } from "react";
import styles from "./UserRepos.module.css";
import { UserType } from "../../models/UserType";
import RepoItem from "./RepoItem/RepoItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUserRepos } from "../../store/reducers/UserReducer/actionCreators";

type UserReposProps = {
  user: UserType;
};

const UserRepos: FC<UserReposProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const { repos, isLoadingRepos, errorRepos } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUserRepos(user?.login));
  }, []);

  if (errorRepos) {
    return <h2>{errorRepos}</h2>;
  }

  if (isLoadingRepos) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className={styles.repos}>
      <h2>Недавно обновленные репозитории</h2>
      <div className={styles.items}>
        {repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
