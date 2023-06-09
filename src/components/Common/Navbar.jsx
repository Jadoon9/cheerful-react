import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { MdNotifications, MdEmail } from "react-icons/md";
import userImage from "../../assets/images/Ellipse 326.png";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cheer-logo.png";
import { navbarItems } from "../../helpers/data";

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const selectedSideItem = navbarItems?.find(
      (item) => item?.link === location?.pathname
    );
    setActiveTab(selectedSideItem);
  }, [location]);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="navbar-brand" onClick={() => navigate("/journal")}>
            <img src={logo} alt="logo" />
          </div>

          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="collapsibleNavId"
          >
            <ul
              class="navbar-nav mx-auto mt-2 mt-lg-0"
              style={{ cursor: "pointer" }}
            >
              {navbarItems.map((item) => {
                return (
                  <NavbarItem
                    data={item}
                    onClick={() => {
                      closeNavbar();
                      navigate(item.link);
                    }}
                    activeTab={activeTab}
                  />
                );
              })}
            </ul>
            <div class="my-2 d-none d-lg-block nav-right">
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
                    <button
                      style={{ color: "red" }}
                      class="dropdown-item"
                      type="button"
                      onClick={() => {
                        setIsLoggedIn(false);
                        localStorage.clear();
                        navigate("/login");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="my-2 d-lg-none nav-right">
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
                  <button
                    style={{ color: "red" }}
                    class="dropdown-item"
                    type="button"
                    onClick={() => {
                      setIsLoggedIn(false);
                      localStorage.clear();
                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
