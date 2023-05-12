import React from "react";

const NavbarItem = ({ data, activeTab, onClick }) => {
  return (
    <li className="nav-item" onClick={onClick}>
      <div
        className="d-flex flex-column align-items-center justify-content-center "
        style={{
          color: `${activeTab?.id === data.id ? "#F4A417" : "#C7C7C7"}`,
        }}
      >
        {data.icon}
        <p
          style={{
            color: `${activeTab?.id === data.id ? "#F4A417" : "#C7C7C7"}`,
          }}
        >
          {data.name}
        </p>
      </div>
    </li>
  );
};

export default NavbarItem;
