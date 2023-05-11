import React from "react";
import Button from "../Common/Button";
import InputField from "../Common/InputField";
import { BsSearch } from "react-icons/bs";
import clientImage1 from "../..//assets/images/Ellipse 352.png";
import clientImage2 from "../../assets/images/Ellipse 352 2.png";
import ClientAccordian from "./ClientAccordian";
import Modall from "../Common/Modal";

const clientAccordianDetails1 = [
  { id: 1, image: clientImage1, name: "Maurice Hilpert ", text: "Yet To View" },
  { id: 2, image: clientImage2, name: "Valerie Hickle ", text: "Viewed" },
  { id: 2, image: clientImage2, name: "Brandi Fadel IV ", text: "Shared" },
];
const clientAccordianDetails2 = [
  { id: 1, image: clientImage1, name: "Maurice Hilpert " },
  { id: 2, image: clientImage2, name: "Valerie Hickle " },
  { id: 2, image: clientImage2, name: "Brandi Fadel IV " },
];

const Client = ({ openModal, handleClose, handleShow, setSelectedClient }) => {
  return (
    <div className="col-md-3" style={{ height: "90vh" }}>
      <div className="d-flex justify-content-between align-items-center bg-white p-2">
        <p>Client List</p>
        <Button
          type="button"
          text="Assign a Journal"
          onClick={handleShow}
          bgcolor="#1A3A5F"
          color="white"
        />
      </div>
      <InputField placeHolder="Search by client name" icon={BsSearch} />
      <ClientAccordian
        data={clientAccordianDetails1}
        header="Assigned By You"
        id="one"
        setSelectedClient={setSelectedClient}
      />
      <ClientAccordian
        data={clientAccordianDetails2}
        header="Shared With You"
        id="two"
        setSelectedClient={setSelectedClient}
      />
      <Modall openModal={openModal} handleClose={handleClose} />
    </div>
  );
};

export default Client;
