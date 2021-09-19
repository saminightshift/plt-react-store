import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BasketIconComponent from "./BasketIconComponent";
import BasketDropdown from "./BasketComponent";
import { connect } from "react-redux";
import "../styles/menu.dropdown.scss";

const Header = ({ hidden }) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

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
                    <ul className="list-group list-group-horizontal">
                      <li
                        className="nav-link dropdown-toggle text-light "
                        key={i}
                      >
                        {child.name}
                        {hidden ? null : (
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
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
                        )}
                      </li>
                    </ul>
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
