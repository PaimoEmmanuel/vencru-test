import * as React from "react";

interface IAvatarGroupProps {
  avatars: string[];
}

const AvatarGroup: React.FunctionComponent<IAvatarGroupProps> = ({
  avatars,
}) => {
  return (
    <div className="users">
      {avatars.map((avatar, index) =>
        index < 5 ? <img src={avatar} alt={avatar} key={avatar + index} /> : ""
      )}
      {avatars.length > 5 ? (
        <span className="users-plus">+{avatars.length - 5}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default AvatarGroup;
