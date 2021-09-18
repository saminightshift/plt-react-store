import React, {useEffect, useState} from "react"
import axios from "axios"

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        axios.get('https://my-json-server.typicode.com/benirvingplt/products/products')
        .then((res) => res.data)
        .then((productApi) => setProducts(productApi))
        .then(setLoading(true))
        .catch((err) => {
            alert(err.message)
        })
     }

    // Return data as different components

    return (
        <>
        <div className="container">
        {loading && products.map((product) => (
            <div className="container col d-flex align-self" key={product.id}>
                <div className="card mb-4"  style={{ width: '18rem' }}>
                    <img src={product.img} alt={product.name} width='100%'/>
                    <div className="card-body">
                    <h4 className="card-title">{product.name}
                    </h4> 
                    <p className="card-text">
                        £{product.price}<br/>
                        <br/>
                    </p> 
                    </div>
                    <div className="card-footer">
                        <button type="button" onClick="" className="btn btn-warning d-flex justify-content-center">Add to Cart</button>
                    </div>
                </div>
            </div>
            ))}
        </div>

        </>
    )
}

export default Products;