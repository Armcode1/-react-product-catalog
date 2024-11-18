import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import { FaCartPlus } from "react-icons/fa6";


const ProductDetails = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by ID and update state
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]); // Run when `id` changes

  // If product is not found, show an error message
  if (!product) {
    return (
      <div className="product-details">
        <p>Product not found.</p>
        <Link to="/" className="inline-block mb-5 px-4 py-2.5 bg-blue-500 text-white no-underline rounded hover:bg-blue-700">
          Back to Products
        </Link>
      </div>
    );
  }

  // Render product details
  return (
    <div className=" md:bg-lime-100">
      <Link to="/" className="inline-block text-xs mb-5 px-2 py-2 ml-2 mt-2 bg-blue-500 text-white no-underline rounded hover:bg-blue-700">
        Back to Products
      </Link>

      <div className="md:flex">



        <img className="md:w-1/2 rounded-lg w-96 bg-transparent" src={product.image} alt={product.name} />



        <div className="md:flex md:flex-col bg-lime-200 text-black text-center md:w-1/2">

          <h1 className="from-neutral-950 font-bold text-center text-3xl pb-5 pt-4">{product.name}</h1>


          <p className="p-2">Category: {product.category}</p>

          <p className="font-light">{product.description}</p>
          <p className=" text-center md:pt-6 font-bold text-xl pb-8 pt-8">Price: ${product.price}</p>
          <div className="flex text-center justify-center gap-20  pb-5">

            <button className="bg-yellow-400 p-2 px-4 rounded-lg hover:bg-yellow-600 font-bold text-white">Buy Now</button>
            <button className="bg-gray-500  rounded-lg p-2 px-4 text-white text-center hover:bg-slate-950 "><FaCartPlus />Add To Cart</button>

          </div>



        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
