import React, { FC } from "react";
import styles from "./UserInfo.module.css";
import Avatar from "../Avatar/Avatar";
import { UserType } from "../../models/UserType";

type UserInfoProps = {
  user: UserType;
};

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <div className={styles.info}>
      <Avatar image={user?.avatar_url!} width={300} height={300} />
      <h3>{user?.name}</h3>
      <a href={user?.html_url} target={"_blank"}>
        GitHub
      </a>
    </div>
  );
};

export default UserInfo;
