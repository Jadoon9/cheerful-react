import React from "react";

const UserCard = ({ image, name, text }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <img src={image} alt="user" />
      <div className="d-flex flex-column">
        <p>{name}</p>
        <div className="d-flex">
          <p> Daily Journal</p>
          <p>Assigned on - 6 July 2022 @ 3:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
