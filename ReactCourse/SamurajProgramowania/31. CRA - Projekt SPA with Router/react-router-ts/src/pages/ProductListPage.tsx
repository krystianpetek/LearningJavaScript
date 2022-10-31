import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "bike", "motorcycle"];

const list = products.map(product => {
    return (
        <li key={product}>
            <Link state={product} to={`/product/${product}`}>{product}</Link>
        </li>
    )
})

const ProductListPage = () => {
    return (
        <div className="products">
            <div>
                {list}
            </div>
        </div>
    );
}

export default ProductListPage;