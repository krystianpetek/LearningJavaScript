import React from "react";

const Product = (id: any) => {

    return (
        <article className="product">
            <h1>{id.id}</h1>
        </article>
    );
}

export default Product;