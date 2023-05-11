import React from "react";
import JournalsCard from "../Journals/JournalsCard";

const Accordian = ({ id, data, header, cardTitle, cardTitle2 }) => {
  return (
    <div className="mb-3">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="accordian_title_color m-0"> {header}</p>
            </button>
          </h2>
          <div
            id={id}
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <JournalsCard cardTitle={cardTitle} />
              <JournalsCard cardTitle={cardTitle2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
