import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/button.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../redux/basket.actions";
import Button from "./Button.component";

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
          <div className="col">
            <div className="card-group">
              <div
                className="card h-100 mb-4"
                key={item.id}
                style={{ width: "100%" }}
              >
                <img
                  className="card-img-top"
                  src={item.img}
                  alt={item.name}
                  width="100%"
                />
                <div className="card-body">
                  <h5 className="card-title mb-4">{item.name.toUpperCase()}</h5>
                  <p className="card-text text-muted">
                    £{item.price}
                    <br />
                    <br />
                  </p>
                  <div className="container">
                    <Button
                      type="button"
                      onClick={() => addItem(item)}
                      className="button"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
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
