import React from "react";

const ClientDetailsCard = ({
  client,

  setSelectedClient,
}) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center align-content-center g-2"
      onClick={() => setSelectedClient(client)}
    >
      <div className="d-flex gap-2 align-items-center align-content-center">
        <img src={client.image} alt="user" />
        <p>{client.name}</p>
      </div>
      <p className="accordian_text_color">{client.text}</p>
    </div>
  );
};

export default ClientDetailsCard;
