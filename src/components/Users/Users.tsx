import React from "react";
import styles from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import { useAppSelector } from "../../hooks/redux";

const Users = () => {
  const { users, error, isLoading } = useAppSelector(
    (state) => state.usersReducer
  );

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.users}>
      {users?.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
