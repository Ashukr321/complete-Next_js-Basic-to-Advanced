"use client";
import React, { startTransition, useState } from "react";

const usersPerPage = 15;

const Page = () => {
  const users = Array.from({ length: 50 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@gmail.com`,
  }));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      startTransition(() => {
        setCurrentPage(page);
      });
    }
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="p-4">
      {paginatedUsers.map((user, index) => (
        <div key={index}>
          <span className="mr-2">{user.name}</span>
          <span className="ml-2">{user.email}</span>
        </div>
      ))}

      <div className="mt-4 flex justify-center gap-2 items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-1 bg-gray-200 text-black rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              handlePageChange(i + 1);
            }}
            className={`px-3 py-1 cursor-pointer rounded ${
              currentPage == i + 1 ? "bg-blue-500" : "bg-gray-200 text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-1 bg-gray-200 text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
