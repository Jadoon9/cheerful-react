import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { RxDashboard } from "react-icons/rx";
import { IoVideocam } from "react-icons/io5";
import { BsFillPersonFill, BsTools, BsPersonFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { MdNotifications, MdEmail } from "react-icons/md";
import userImage from "../../assets/images/Ellipse 326.png";
import { useLocation, useNavigate } from "react-router-dom";

const navbarItems = [
  { id: 1, name: "Dashboard", icon: <RxDashboard />, link: "/" },
  { id: 2, name: "Appointments", icon: <IoVideocam />, link: "/" },
  { id: 3, name: "Clients", icon: <BsFillPersonFill />, link: "/" },
  { id: 4, name: "Assesments", icon: <GrNotes />, link: "/" },
  { id: 5, name: "Tools & Guides", icon: <BsTools />, link: "/" },
  { id: 6, name: "Notes", icon: <GrNotes />, link: "/" },
  { id: 7, name: "Journal", icon: <GrNotes />, link: "/" },
  { id: 7, name: "Login", icon: <BsPersonFill />, link: "/login" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const selectedSideItem = navbarItems?.find(
      (item) => item?.link === location?.pathname
    );
    setActiveTab(selectedSideItem);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbarr navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <p className="navbar-brand">Logo</p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              {navbarItems.map((item) => {
                return (
                  <NavbarItem
                    name={item.name}
                    icon={item.icon}
                    link={item.link}
                    onClick={() => navigate(item.link)}
                    activeTab={activeTab}
                  />
                );
              })}
            </ul>
            <div className="d-flex">
              <MdNotifications />
              <MdEmail />
              <div class="btn-group">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img src={userImage} alt="" />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
