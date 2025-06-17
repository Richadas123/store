

import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto mt-4 rounded-lg shadow">
      <table className="table-auto w-full border-collapse bg-white dark:bg-gray-800">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md">No</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md">Title</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md max-md:hidden">Genre</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md max-md:hidden">Author</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md">Year</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md max-md:hidden">Pages</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md max-md:hidden">Publisher</th>
            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <td className="border px-4 py-2 text-green-600 dark:text-green-400">{index + 1}</td>
              <td className="border px-4 py-2 text-green-600 dark:text-green-400">{book.title}</td>
              <td className="border px-4 py-2 text-green-600 dark:text-green-400 max-md:hidden">{book.genre}</td>
              <td className="border px-4 py-2 text-green-600 dark:text-green-400 max-md:hidden">{book.author}</td>
              <td className="border px-4 py-2 text-green-600 dark:text-green-400">{book.year}</td>
              <td className="border px-4 py-2 text-green-600 dark:text-green-400 max-md:hidden">{book.pages}</td>
              <td className="border px-4 py-2 text-green-600 dark:text-green-400 max-md:hidden">{book.publisher}</td>
              <td className="border px-4 py-2 flex justify-center gap-2 text-center">
                <Link to={`/update/${book._id}`} title="Edit">
                  <AiOutlineEdit className="text-2xl text-blue-500 hover:text-blue-600" />
                </Link>
                <Link to={`/book/${book._id}`} title="Details">
                  <FaInfoCircle className="text-2xl text-yellow-500 hover:text-yellow-600" />
                </Link>
                <Link to={`/delete/${book._id}`} title="Delete">
                  <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-600" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.string,
      pages: PropTypes.number,
      publisher: PropTypes.string,
    })
  ).isRequired,
};

export default BooksTable;
