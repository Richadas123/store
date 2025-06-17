

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');
  const [favorites, setFavorites] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false); //New state

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/allbooks`
        );
        setBooks(res.data.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const toggleFavorite = (bookId) => {
    setFavorites((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  //Filter books if showOnlyFavorites is true
  const filteredBooks = showOnlyFavorites
    ? books.filter((book) => favorites.includes(book._id))
    : books;

  return (
    <div className="p-4">
      <header className="flex justify-between items-center flex-wrap gap-y-2">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Books List
        </h1>
        <Link to="/create">
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded-lg">
            <MdOutlineAddBox className="text-xl mr-1" />
            Add Book
          </button>
        </Link>
      </header>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <div>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={showOnlyFavorites}
              onChange={() => setShowOnlyFavorites((prev) => !prev)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            Show Only Favorites
          </label>
        </div>

        <div className="flex gap-x-2">
          <button
            className={`${
              showType === 'table'
                ? 'bg-sky-600'
                : 'bg-sky-300 hover:bg-sky-600'
            } px-4 py-1 rounded-lg text-white font-semibold`}
            onClick={() => setShowType('table')}
          >
            Table View
          </button>
          <button
            className={`${
              showType === 'card'
                ? 'bg-sky-600'
                : 'bg-sky-300 hover:bg-sky-600'
            } px-4 py-1 rounded-lg text-white font-semibold`}
            onClick={() => setShowType('card')}
          >
            Card View
          </button>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'card' ? (
        <BooksCard
          books={filteredBooks}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <BooksTable books={filteredBooks} />
      )}
    </div>
  );
};

export default Home;
