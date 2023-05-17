import React, { useEffect, useState } from "react";

const JournalsCard = ({ data, setSelectedJournal, selectedJournal }) => {
  const [activeJournal, setActiveJournal] = useState(false);

  useEffect(() => {
    if (data?.id === selectedJournal?.id && selectedJournal !== undefined) {
      setActiveJournal(true);
    } else {
      setActiveJournal(false);
    }
  }, [activeJournal, selectedJournal]);

  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: activeJournal && "#ffffff",
        border: activeJournal && "1px solid #e9edea;",
      }}
      className="d-flex flex-column daily-journal"
      onClick={() => setSelectedJournal(data)}
    >
      <h6>{data?.title}</h6>
      <p>{data?.text}</p>
    </div>
  );
};

export default JournalsCard;
