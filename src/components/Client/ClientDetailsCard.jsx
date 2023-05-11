import React from "react";

const ClientDetailsCard = ({
  client,

  setSelectedClient,
}) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center g-2 client"
      onClick={() => setSelectedClient(client)}
    >
      <div className="d-flex gap-2 align-items-center">
        <img src={client.image} alt="user" />
        <p className="m-0">{client.name}</p>
      </div>
      <p className="accordian_text_color m-0">{client.text}</p>
    </div>
  );
};

export default ClientDetailsCard;
