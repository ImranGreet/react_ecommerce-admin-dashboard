import { useState, useEffect } from "react";

const ProductTable = () => {
  const [products, retrieveProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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

  console.log(products, "pro");

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-[780px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-50 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-5">
                Product name
              </th>
              <th scope="col" className="px-6 py-5">
                Product Thumbnail
              </th>
              <th scope="col" className="px-6 py-5">
                Rating
              </th>
              <th scope="col" className="px-6 py-5">
                Category
              </th>
              <th scope="col" className="px-6 py-5">
                Price
              </th>
             
              <th scope="col" className="px-6 py-5">
                <span >Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title}
                </th>
                <td className="px-6 py-4">
                  <img src={product.image} alt="" width="30" height="20" />
                </td>
                <td className="px-6 py-4">{product.rating.rate}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
               
                <td className="px-6 py-4 text-left">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
