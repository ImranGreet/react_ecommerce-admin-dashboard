import { useState, useEffect } from "react";

const ProductTable = () => {
    const [products, retrieveProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                retrieveProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="table-container">
                <table className="custom-table">
                    <thead className="custom-table-head">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Area</th>
                            <th scope="col">City</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Payment Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td className="table-row-first">John Doe</td>
                                <td>123-456-7890</td>
                                <td>Downtown</td>
                                <td>New York</td>
                                <td>john.doe@example.com</td>
                                <td>Not Available</td>
                                <td>Credit Card</td>
                                <td>$ {product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductTable;
