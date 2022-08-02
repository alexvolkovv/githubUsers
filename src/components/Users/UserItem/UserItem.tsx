import React, { FC } from "react";
import styles from "./UserItem.module.css";
import { UserType } from "../../../models/UserType";
import { Link } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";

type UserItemProps = {
  user: UserType;
};

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={styles.item}>
      <Avatar
        image={user.avatar_url}
        width={80}
        height={80}
        className={styles.avatar}
      />

      <div className="info">
        <div className={styles.title}>{user.login}</div>
        <div>Тип: {user.type}</div>
        <Link to={`/user/${user.id}`}>Профиль</Link>
      </div>
    </div>
  );
};

export default UserItem;
