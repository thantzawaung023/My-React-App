import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { Link, useParams } from "react-router-dom";


const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const { productId } = useParams();
    const url = `https://fakestoreapi.com/products/${productId}`;
    async function getProduct() {
        const response = await fetch(url);
        const product = await response.json();

        if (response.status > 300) {
            setIsError(true);
            setIsLoading(false);
        }
        setProduct(product);
        setIsLoading(false);
    }

    useEffect(() => {
        getProduct();
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
            <div style={{ backgroundColor: "aliceblue", padding: 50, display: "flex", width: 600, marginLeft: 50, marginBottom: 30, borderRadius: 20, }}>
                <div key={product.id}>
                    <img src={product.image} className="productImg" style={{ width: 180, }} />
                    <div>
                        <h2>{product.title}</h2>
                        <h4>{product.category}</h4>
                        <span>{product.description}</span>
                        <h5><span>{product.price}</span> $</h5>
                    </div>
                    <Link to={`/products`}>Back To Product List</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;