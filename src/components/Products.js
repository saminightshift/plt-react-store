import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/button.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../redux/basket.actions";

const Products = ({ addItem }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then((res) => res.data)
      .then((productApi) => setProducts(productApi))
      .then(setLoading(true))
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      {loading &&
        products.map((item) => (
          <div className="container">
            <div className="card" key={item.id}>
              <img src={item.img} alt={item.name} width="100%" />
              <div className="card-body">
                <h4 className="card-title">{item.name.toUpperCase()}</h4>
                <p className="card-text">
                  £{item.price}
                  <br />
                  <br />
                </p>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  onClick={() => addItem(item)}
                  className="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Products);
