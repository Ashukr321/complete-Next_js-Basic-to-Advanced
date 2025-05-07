"use client";
import React, { useState } from "react";

const USERS_PER_PAGE = 15;

const Page = () => {
  const allUsers = Array.from({ length: 70 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    contactNum: `70042${(46315 + i).toString().padStart(5, "0")}`,
    Status: i % 2 === 0 ? "Active" : "Close",
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allUsers.length / USERS_PER_PAGE);

  const paginatedUsers = allUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 relative">
      <h1 className="text-2xl font-semibold mb-4 text-gray-white">Users</h1>

      <div className="overflow-y-auto h-[calc(100vh-25vh)] rounded-lg border border-gray-300 shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="sticky top-0 bg-gray-100 shadow-sm z-10">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Contact Number
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr
                key={index}
                className={`${
                  user.Status === "Active" ? "bg-blue-50" : "bg-red-50"
                } border-b`}
              >
                <td className="px-4 py-2 text-gray-800">{user.name}</td>
                <td className="px-4 py-2 text-gray-700">{user.email}</td>
                <td className="px-4 py-2 text-gray-700">{user.contactNum}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    user.Status === "Active" ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {user.Status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Floating Add Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
        onClick={() => alert("Add User functionality coming soon")}
      >
        + Add User
      </button>
    </div>
  );
};

export default Page;
