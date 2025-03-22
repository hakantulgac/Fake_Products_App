import React from "react";
import ProductsList from "./ProductsList";

export const Products = ({ basketActions, data }) => { 

    return <ProductsList data={data} basketActions={basketActions} />
}
export default Products;