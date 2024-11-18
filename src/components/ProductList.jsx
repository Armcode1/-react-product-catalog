import React, { useState } from "react";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";
import Card from "./Card";


const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Extract unique categories from products
  const categories = [...new Set(productsData.map((product) => product.category))];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) // Remove if already selected
        : [...prev, category] // Add if not selected
    );
  };

  // Filter products based on search and category selection
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className=" bg-white">
      <div className="bg-blue-950 text-center">
        {/* Search Bar */}


        <input

          type="text"
          placeholder="Search products and Brands..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2.5 text-base mb-5 w-full max-w-[600px] border border-gray-300 rounded mt-2.5"
        />

        {/* Category Filter */}
        <div className="md:flex md:space-x-6 md:pb-10 pb-2 text-white md:ml-5 md: space-x-2">
          <h3>Filter by Category</h3>
          {categories.map((category) => (
            <label key={category} className="md:flex md:flex-wrap">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>

      </div>

      <div className=" flex flex-wrap p-10 justify-center gap-4 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card name={product.name} id={product.id} image={product.image} price={product.price}/>
        ))
        ) : (
          <p>No products found.</p>
        )}


      </div>
      </div>
      );
     
};

      export default ProductList;
