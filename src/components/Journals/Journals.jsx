import React from "react";
import Accordian from "../Common/Accordian";
import Button from "../Common/Button";
import Modall from "../Common/Modal";

const Journals = ({ openModal, handleClose, handleShow }) => {
  return (
    <div className="col-md-3 Journals">
      <div className="Journals-top py-2">
        <h5 className="mb-2">Journals</h5>
        <select class="form-select form-select-lg" name="" id="">
          <option selected>All</option>
          <option value="">New Delhi</option>
          <option value="">Istanbul</option>
          <option value="">Jakarta</option>
        </select>
      </div>
      <div className="accordion-list">
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
      </div>
      <Modall openModal={openModal} handleClose={handleClose} />

      <div className="mt-auto mx-3">
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
