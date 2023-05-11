import React from "react";
import Accordian from "../Common/Accordian";
import Button from "../Common/Button";
import Modall from "../Common/Modal";

const Journals = ({ openModal, handleClose, handleShow }) => {
  return (
    <div className="col-md-3 bg_gray" style={{ height: "90vh" }}>
      <div className="d-flex flex-column">
        <p>Journals</p>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item">Action</li>
            <li className="dropdown-item">Another action</li>
            <li className="dropdown-item">Something else here</li>
          </ul>
        </div>

        <Accordian
          header="Daily Journal"
          cardTitle="Online Consultation"
          cardTitle2="Online Consultation"
          id="three"
        />
        <Accordian
          header="Grif Journal"
          cardTitle="Entry - 01"
          cardTitle2="Entry - 02"
          id="four"
        />

        <Modall openModal={openModal} handleClose={handleClose} />

        <Button
          text="Assign a Journal"
          onClick={handleShow}
          type="button"
          bgcolor="#1A3A5F"
          color="white"
        />
      </div>
    </div>
  );
};

export default Journals;
