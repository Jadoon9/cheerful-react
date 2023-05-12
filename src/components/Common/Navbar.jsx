import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

import { MdNotifications, MdEmail } from "react-icons/md";
import userImage from "../../assets/images/Ellipse 326.png";
import { useLocation, useNavigate } from "react-router-dom";
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

  return (
    <div>
      <nav className="navbar navbarr navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <p className="navbar-brand" onClick={() => navigate("/journal")}>
              Logo
            </p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              {navbarItems.map((item) => {
                return (
                  <NavbarItem
                    data={item}
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
