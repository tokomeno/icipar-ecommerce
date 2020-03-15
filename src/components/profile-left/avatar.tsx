import React, { useRef, useCallback } from "react";
import { connect } from "react-redux";
import { IUser } from "../../redux/auth/authTypes";
import { AvatarService } from "../../services/avatar.http";
import { updateAvatar } from "../../redux/auth/authActions";

interface AvatarProps {
  user: IUser;
  updateAvatar: typeof updateAvatar;
}

const _Avatar: React.FC<AvatarProps> = ({ user, updateAvatar }) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const fileSelectedHandler = useCallback(
    event => {
      if (event.target.files && event.target.files[0]) {
        AvatarService.upload(event.target.files[0]).then(res => {
          updateAvatar(res.data.data.avatar);
        });
      }
    },
    [updateAvatar]
  );

  return (
    <div
      onClick={() => {
        if (fileInput.current) fileInput.current.click();
      }}
      className="user-image"
    >
      <img src={user.avatar} alt="user" />
      <input
        ref={fileInput}
        style={{ display: "none" }}
        type="file"
        onChange={fileSelectedHandler}
      />
    </div>
  );
};

const mapStatToProps = () => ({});

export const Avatar = connect(mapStatToProps, { updateAvatar })(_Avatar);
