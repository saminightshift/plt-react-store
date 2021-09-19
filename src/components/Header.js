import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BasketIconComponent from "./BasketIconComponent";
import BasketDropdown from "./BasketComponent";
import { connect } from "react-redux";

const Header = ({ hidden }) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavCollapse = () => setIsCollapsed(!isCollapsed);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = () => {
    axios
      .get("https://my-json-server.typicode.com/benirvingplt/products/menu")
      .then((res) => res.data)
      .then((menuApi) => setMenus(menuApi))
      .then(setLoading(true))
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="px-4">
            <Link className="link-light text-decoration-none" to="/">
              PLT React.
            </Link>
          </h1>

          {loading &&
            menus.map((menu) => (
              <>
                {menu.children.map((child, i) => (
                  <div className="nav justify-content-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-dark dropdown-toggle"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded={!isCollapsed ? true : false}
                        aria-label="Toggle dropdown"
                        key={i}
                        onClick={handleNavCollapse}
                      >
                        {child.name}
                      </button>
                      <div
                        className={`${
                          isCollapsed ? "collapse" : ""
                        } navbar-collapse`}
                        id="navbarDropDown"
                      >
                        <ul className="dropdown-menu">
                          {child.categories.map((item) => {
                            return (
                              <li
                                className="dropdown-item text-light"
                                key={item}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          <div className="basket-menu px-4">
            <BasketIconComponent />
          </div>
          {hidden ? null : <BasketDropdown />}
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = ({ basket: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Header);
