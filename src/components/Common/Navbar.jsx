import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { IoVideocam } from "react-icons/io5";
import {
  BsFillPersonFill,
  BsTools,
  BsPersonFill,
  BsFillFileEarmarkTextFill,
  BsGridFill,
} from "react-icons/bs";
import { TbFileFilled } from "react-icons/tb";
import { MdNotifications, MdEmail } from "react-icons/md";
import userImage from "../../assets/images/Ellipse 326.png";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cheer-logo.png";
const navbarItems = [
  { id: 1, name: "Dashboard", icon: <BsGridFill />, link: "/" },
  { id: 2, name: "Appointments", icon: <IoVideocam />, link: "/" },
  { id: 3, name: "Clients", icon: <BsFillPersonFill />, link: "/" },
  { id: 4, name: "Assesments", icon: <BsFillFileEarmarkTextFill />, link: "/" },
  { id: 5, name: "Tools & Guides", icon: <BsTools />, link: "/" },
  { id: 6, name: "Notes", icon: <TbFileFilled />, link: "/" },
  { id: 7, name: "Journal", icon: <TbFileFilled />, link: "/" },
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
    <div className="header">
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
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
            <div class="d-flex align-items-center my-2 my-lg-0 nav-right">
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
