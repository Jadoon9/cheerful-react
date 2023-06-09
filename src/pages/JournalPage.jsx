import React, { useState } from "react";
import Client from "../components/Client/Client";
import JournalDetails from "../components/Journals/JournalDetails";
import Journals from "../components/Journals/Journals";

const JournalPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [accordian1, setAccordian1] = useState(false);
  const [accordian2, setAccordian2] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

  console.log(selectedClient, "43343");
  return (
    <div className="main-container">
      <div class="row">
        {/* Coll 1 */}
        <Client
          openModal={openModal}
          handleClose={handleClose}
          handleShow={handleShow}
          setSelectedClient={setSelectedClient}
          selectedClient={selectedClient}
        />
        {/* Coll 2 */}
        <Journals
          openModal={openModal}
          handleClose={handleClose}
          handleShow={handleShow}
          setSelectedJournal={setSelectedJournal}
          selectedJournal={selectedJournal}
        />
        {/* Col 3 */}

        <JournalDetails />
      </div>
    </div>
  );
};

export default JournalPage;
