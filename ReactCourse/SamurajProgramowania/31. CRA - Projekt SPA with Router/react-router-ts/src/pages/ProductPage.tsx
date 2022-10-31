import React from "react";
import { Link, useLocation } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
    const { state } = useLocation();
    return (
        <>
            <div>Product Page</div>
            <Product id={state} />
            <Link to="/products/">Back to products list</Link>
        </>
    );
}

export default ProductPage;