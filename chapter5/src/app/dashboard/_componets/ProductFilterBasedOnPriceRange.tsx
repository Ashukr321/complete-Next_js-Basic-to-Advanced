"use client";
import React, { useEffect, useState } from "react";

const ProductFilterBasedOnPriceRange = () => {
  type ProductType = {
    name: string;
    price: number;
  };

  const minPriceAvailable = 0;
  const maxPriceAvailable = 100000;

  const [selectedPrice, setSelectedPrice] = useState<number>(maxPriceAvailable);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const products: ProductType[] = [
    { name: "apple", price: 400 },
    { name: "mango", price: 40 },
    { name: "macbook", price: 96000 },
    { name: "ipad", price: 4500 },
  ];

  // ✅ Only runs when selectedPrice changes

  useEffect(() => {
    const filtered = products.filter(product => product.price <= selectedPrice);
    setFilteredProducts(filtered);
  }, [selectedPrice]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Product Filter by Price</h1>

      {/* Slider */}
      <div className="mb-4">
        <input
          type="range"
          min={minPriceAvailable}
          max={maxPriceAvailable}
          value={selectedPrice}
          onChange={e => setSelectedPrice(Number(e.target.value))}
          className="w-full accent-green-500"
        />
        <div className="flex justify-between mt-1 text-sm text-gray-700">
          <span>₹{minPriceAvailable}</span>
          <span className="font-semibold">Selected: ₹{selectedPrice}</span>
          <span>₹{maxPriceAvailable}</span>
        </div>
      </div>

      {/* Filtered Products */}
      <ul className="space-y-2">
        {filteredProducts.map(prd => (
          <li key={prd.name} className="border p-2 rounded">
            {prd.name} - ₹{prd.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilterBasedOnPriceRange;
