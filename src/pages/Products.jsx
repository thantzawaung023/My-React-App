import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const url = "https://fakestoreapi.com/products";
    async function getProducts() {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);
        if (response.status > 300) {
            setIsError(true);
            setIsLoading(false);
        }
        setProducts(products);
        setIsLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    else if (isError) {
        return <h1>Error is Found...</h1>
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {
                    products.map((p) => {
                        return (
                            <li key={p.id}>
                                <p>{p.title}</p>
                                <p><span>{p.price}</span> $</p>
                                <Link to={`/products/${p.id}`}>More Info</Link>
                            </li>
                        );
                    })
                }

            </ul>
        </div>
    );
}

export default Products;