import React from "react";

const NavbarItem = ({ name, icon, activeTab, onClick, link }) => {
  console.log(activeTab, "asdad");
  return (
    <li className="nav-item" onClick={onClick}>
      <div
        className="d-flex flex-column align-items-center justify-content-center "
        style={{ color: `${activeTab?.id ? "nav_active" : "black"}` }}
      >
        {icon}
        <p style={{ color: `${activeTab?.id ? "nav_active" : "black"}` }}>
          {name}
        </p>
      </div>
    </li>
  );
};

export default NavbarItem;
