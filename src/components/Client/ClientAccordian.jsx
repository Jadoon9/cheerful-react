import React, { useState } from "react";
import ClientDetailsCard from "./ClientDetailsCard";

const ClientAccordian = ({
  id,
  data,
  header,
  setSelectedClient,
  selectedClient,
}) => {
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
              // aria-controls="collapseOne"
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
              {data?.map((item) => {
                return (
                  <ClientDetailsCard
                    client={item}
                    setSelectedClient={setSelectedClient}
                    selectedClient={selectedClient}
                  />
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
