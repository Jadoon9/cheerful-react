import React from "react";
import JournalsCard from "../Journals/JournalsCard";
import ClientDetailsCard from "./ClientDetailsCard";

const ClientAccordian = ({
  id,
  data,
  header,
  cardTitle,
  cardTitle2,
  setSelectedClient,
}) => {
  return (
    <div>
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
              <p className="accordian_title_color"> {header}</p>
            </button>
          </h2>
          <div
            id={id}
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {data?.map((item) => {
                return (
                  <div className="my-4">
                    <ClientDetailsCard
                      client={item}
                      setSelectedClient={setSelectedClient}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAccordian;