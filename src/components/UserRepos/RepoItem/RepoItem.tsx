import React, { FC } from "react";
import styles from "./RepoItem.module.css";
import { RepositoryType } from "../../../models/RepositoryType";

type RepoItemProps = {
  repo: RepositoryType;
};

const RepoItem: FC<RepoItemProps> = ({ repo }) => {
  return (
    <div className={styles.repo}>
      <a href={repo.html_url} target={"_blank"} className={styles.link}>
        {repo.name}
      </a>
      <div>{repo.description}</div>
      {repo.language && (
        <div className={styles.lang}>Язык: {repo.language}</div>
      )}
      <div className={styles.updated}>
        Обновлено: {repo.updated_at.toString().slice(0, 10)},{" "}
        {repo.updated_at.toString().slice(-9, -1)}
      </div>
    </div>
  );
};

export default RepoItem;
