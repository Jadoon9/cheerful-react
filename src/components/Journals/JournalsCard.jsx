import React from "react";

const JournalsCard = ({ cardTitle }) => {
  return (
    <div className="d-flex flex-column">
      <h6>{cardTitle}</h6>
      <p>6 July 2022 @ 3:00 PM </p>
    </div>
  );
};

export default JournalsCard;
