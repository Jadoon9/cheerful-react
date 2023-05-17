import React from "react";
import Button from "../Common/Button";
import { MdArrowBackIos } from "react-icons/md";
import UserCard from "../Common/UserCard";
import clientImage1 from "../..//assets/images/Ellipse 352.png";

const JournalDetails = () => {
  return (
    <div className="col-md-4 col-lg-6 morning-journal">
      <div className="d-flex justify-content-between align-items-center flex-wrap morning-journal-top">
        <div className="d-flex gap-2 align-items-center">
          <div className="p-1 d-flex align-items-center justify-content-center carrot-left">
            <MdArrowBackIos />
          </div>
          <h5>Morning Journal Entry</h5>
        </div>
        <div className="d-flex gap-2 button-group">
          <Button text="Message" bgcolor="#F3F8F4" color="#1E5542" />
          <Button text="Schedule a Session" bgcolor="#1A3A5F" color="white" />
        </div>
      </div>
      <div className="client-detail">
        <UserCard image={clientImage1} name="Brandi Fadel IV" />
        <div className="client-detail-content">
          <p>
            Gastropub chillwave lumbersexual umami lyft. Poke austin direct
            trade, marfa raclette letterpress actually. Chartreuse sriracha
            pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism
            organic hot chicken literally heirloom occupy af semiotics food
            truck.{" "}
          </p>
          <p>
            Aesthetic asymmetrical gluten-free, health goth shaman meh
            lumbersexual bespoke kinfolk helvetica vaporware fashion axe
            freegan. Pour-over hammock succulents disrupt chartreuse raw denim.{" "}
          </p>
          <p>
            Brunch aesthetic fanny pack subway tile everyday carry green juice
            neutra beard cray small batch poke yuccie plaid pork belly. Blue
            bottle 8-bit flexitarian hashtag. Scenester marfa yuccie snackwave
            edison bulb. VHS blog pickled scenester venmo hashtag lo-fi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JournalDetails;
