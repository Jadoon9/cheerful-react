import React from "react";

const ModalCard = ({ title, image, text, color }) => {
  return (
    <div
      className="d-flex align-item-center justify-content-between py-3 px-2 rounded journal_card_border"
      style={{ backgroundColor: color, height: "140px" }}
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
