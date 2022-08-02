import React, { FC } from "react";
import styles from "./Avatar.module.css";

export type AvatarProps = {
  image: string;
  width: number;
  height: number;
  [key: string]: any;
};

const Avatar: FC<AvatarProps> = ({ image, width, height, ...props }) => {
  const cssProperties = {
    width: width + "px",
    height: height + "px",
  };

  return (
    <div
      {...props}
      style={cssProperties}
      className={[styles.avatar, props.className ? props.className : " "].join(
        " "
      )}
    >
      <img src={image} alt="Avatar" />
    </div>
  );
};

export default Avatar;
