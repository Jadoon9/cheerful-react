import React, { useEffect, useState } from "react";

const ClientDetailsCard = ({ client, selectedClient, setSelectedClient }) => {
  console.log(selectedClient, "23423ds");

  const [checkMatch, setCheckMatch] = useState(false);
  useEffect(() => {
    if (client.id === selectedClient?.id && selectedClient !== undefined) {
      setCheckMatch(true);
    } else {
      setCheckMatch(false);
    }
  }, [selectedClient]);

  console.log(checkMatch, "weqwe");
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: checkMatch ? "#fafafa" : "white",
      }}
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
