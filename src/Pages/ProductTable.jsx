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
                            <th scope="col">Product name</th>
                            <th scope="col">Product Thumbnail</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>

                            <th scope="col">
                                <span>Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <th
                                    scope="row"
                                    className="table-row-first"
                                >
                                    {product.title}
                                </th>
                                <td>
                                    <img
                                        src={product.image}
                                        alt=""
                                        width="30"
                                        height="20"
                                    />
                                </td>
                                <td>{product.rating.rate}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>

                                <td className=" text-left">
                                    <a
                                        href="#"
                                        className="action"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductTable;
