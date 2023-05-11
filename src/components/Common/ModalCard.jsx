import React from "react";

const ModalCard = ({ title, image, text, color }) => {
  console.log("jnjnnnn");
  return (
    <div
      className="d-flex align-item-center justify-content-between modal-card"
      style={{ backgroundColor: color }}
    >
      <div className="d-flex flex-column">
        <h6 className="journal_card_text_color">{title}</h6>
        <p className="journal_card_text_color"> {text}</p>
      </div>
      <img src={image} alt="icon" />
    </div>
  );
};

export default ModalCard;
