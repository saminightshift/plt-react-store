import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BasketIconComponent from "./BasketIconComponent";
import BasketDropdown from "./BasketComponent";
import { connect } from "react-redux";

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
      <div className="header">
        <h1>
          <Link to="/">PLT React</Link>
        </h1>
        <div className="dropdown-menu">
          {loading &&
            menus.map((menu) => (
              <div className="menu">
                <div className="menu-bg">
                  {menu.children.map((child, i) => (
                    <div>
                      <ul>
                        <li key={i}>{child.name}</li>
                        {child.categories.map((item) => {
                          return <li key={item}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="basket-menu">
          <BasketIconComponent />
        </div>
        {hidden ? null : <BasketDropdown />}
      </div>
    </>
  );
};

const mapStateToProps = ({ basket: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Header);
