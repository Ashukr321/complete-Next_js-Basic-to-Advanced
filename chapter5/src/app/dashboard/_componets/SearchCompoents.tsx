"use client";
import React, { useState, startTransition } from "react";

const SearchCompoents = () => {
  const [search, setSearch] = useState<string>(""); // defined the types 
  const [filterResult, setFilterResult] = useState<string[]>([]);

  // Sample array of 10 items
  const allItem = Array.from({ length: 10 }, (_, i) => `item ${i + 1}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    startTransition(() => {
      // Fix the filter method to correctly return the result
      const filtered = allItem.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilterResult(filtered);
    });
  };
  
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={handleChange}
      />
      <ul>
        {filterResult.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCompoents;
