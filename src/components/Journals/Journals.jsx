import React from "react";
import Accordian from "../Common/Accordian";
import Button from "../Common/Button";
import Modall from "../Common/Modal";

const Journals = ({ openModal, handleClose, handleShow }) => {
  return (
    <div className="col-md-3 Journals">
      <div className="d-flex flex-column">
        <div className="Journals-top">
          <h5 className="my-3">Journals</h5>
          <div class="mb-2">
            <select class="form-select form-select-lg" name="" id="">
              <option selected>All</option>
              <option value="">New Delhi</option>
              <option value="">Istanbul</option>
              <option value="">Jakarta</option>
            </select>
          </div>
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
    </div>
  );
};

export default Journals;
