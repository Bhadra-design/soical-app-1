import { Models } from "appwrite";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type UserCardProps = {
  creator: Models.Document;
};

const UserCard = ({ creator }: UserCardProps) => {
  if (!creator) return null;
  return (
    <Link to={`/profile/${creator.id}`} className="creator-card">
      <img
        src={creator.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt={creator.name}
        className="rounded-full w-14 h-14 items-center justify-center flex"
      />
      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-left line-clamp-1 mt-1">
          {creator.name}
        </p>
        <p className="small-regular text-light-3 text-left mt-1 line-clamp-1">
          @{creator.username}
        </p>
      </div>
      <Button type="button" size={"sm"} className="shad-button_primary px-5 mt-3">
        Follow
      </Button>
    </Link>
  );
};

export default UserCard;
