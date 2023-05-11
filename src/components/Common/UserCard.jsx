import React from "react";

const UserCard = ({ image, name, text }) => {
  return (
    <div className="d-flex align-items-center gap-2 user-card">
      <img src={image} alt="user" />
      <div className="d-flex flex-column">
        <p className="client-name">{name}</p>
        <div className="d-flex client-desc">
          <p>
            {" "}
            Daily Journal <span>Assigned on -</span> 6 July 2022 @ 3:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
