import React from "react";
import Button from "../Common/Button";
import InputField from "../Common/InputField";
import { BsSearch } from "react-icons/bs";

import ClientAccordian from "./ClientAccordian";
import Modall from "../Common/Modal";
import {
  clientAccordianDetails1,
  clientAccordianDetails2,
} from "../../helpers/data";

const Client = ({
  openModal,
  handleClose,
  handleShow,
  setSelectedClient,
  selectedClient,
}) => {
  return (
    <div className="col-md-3 client-list">
      <div className="client-list-top d-flex justify-content-between align-items-center">
        <h5 className="m-0">Client List</h5>
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
        selectedClient={selectedClient}
      />
      <ClientAccordian
        data={clientAccordianDetails2}
        header="Shared With You"
        id="two"
        setSelectedClient={setSelectedClient}
        selectedClient={selectedClient}
      />
      <Modall openModal={openModal} handleClose={handleClose} />
    </div>
  );
};

export default Client;
