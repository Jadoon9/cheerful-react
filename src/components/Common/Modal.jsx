import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";
import InputField from "./InputField";
import { BsSearch } from "react-icons/bs";
import ModalCard from "./ModalCard";
import { ModalBody } from "react-bootstrap";
import Image1 from "../../assets/images/Reflective.png";
import Image2 from "../../assets/images/Goal.png";
import Image3 from "../../assets/images/Reflective2.png";

const modalCardData = [
  {
    id: 1,
    title: "Reflective",
    image: Image3,
    text: "Find meaning and purpose daily",
    color: "#EEEEEE",
  },
  {
    id: 2,
    title: "Goals",
    image: Image1,
    text: "Identify your goals and objectives",
    color: "#FBE5A7",
  },
  {
    id: 3,
    title: "Goals",
    image: Image1,
    text: "Identify your goals and objectives",
    color: "#DCF5C4",
  },
  {
    id: 4,
    title: "Reflective",
    image: Image2,
    text: "Find meaning and purpose daily",
    color: "#FBE5A7",
  },
  {
    id: 5,
    title: "Reflective",
    image: Image3,
    text: "Find meaning and purpose daily",
    color: "#EEEEEE",
  },
  {
    id: 5,
    title: "Goals",
    image: Image1,
    text: "Identify your goals and objectives",
    color: "#DCF5C4",
  },
];

function Modall({ openModal, handleClose }) {
  return (
    <>
      <Modal
        show={openModal}
        onHide={handleClose}
        className="journal-modal modal-md"
      >
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h6>Assign Journal</h6>
            <div onClick={handleClose}>
              <RxCross2 />
            </div>
          </div>
          <InputField iconStart={BsSearch} />

          <div className="row">
            {modalCardData.map((item) => {
              return (
                <div className="col-md-6 g-3">
                  <ModalCard
                    title={item.title}
                    text={item.text}
                    color={item.color}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modall;
