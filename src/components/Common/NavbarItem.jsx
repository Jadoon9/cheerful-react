import React from "react";

const NavbarItem = ({ name, icon, activeTab, onClick, link }) => {
  console.log(activeTab, "asdad");
  return (
    <li className="nav-item" onClick={onClick}>
      <div className="nav-link d-flex flex-column align-items-center justify-content-center ">
        {icon}
        <p>{name}</p>
      </div>
    </li>
  );
};

export default NavbarItem;
