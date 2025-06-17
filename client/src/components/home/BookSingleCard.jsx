

import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import BookModal from './BookModal';

const BookSingleCard = ({ book, favorites, toggleFavorite }) => {
  const [showModal, setShowModal] = useState(false);
  const isFavorite = favorites.includes(book._id);

  return (
    <div className="border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-4 m-4 relative hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
      <h2 className="absolute top-2 right-3 px-3 py-1 bg-red-300 text-sm rounded-lg">
        {book.year}
      </h2>
      <h4 className="my-2 text-gray-500 dark:text-gray-400 text-sm truncate">{book._id}</h4>

      <div className="flex items-center gap-2">
        <PiBookOpenTextLight className="text-red-400 text-2xl" />
        <h2 className="font-semibold text-lg">{book.title}</h2>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <BiUserCircle className="text-red-400 text-2xl" />
        <h2 className="text-md">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center mt-4 px-2">
        <BiShow
          className="text-2xl text-blue-700 hover:text-black dark:hover:text-white cursor-pointer"
          onClick={() => setShowModal(true)}
          title="Quick View"
        />
        <Link to={`/book/${book._id}`} title="More Info">
          <BsInfoCircle className="text-2xl text-green-600 hover:text-blue-700" />
        </Link>
        <Link to={`/update/${book._id}`} title="Edit Book">
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-blue-700" />
        </Link>
        <Link to={`/delete/${book._id}`} title="Delete Book">
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-blue-700" />
        </Link>
        <div
          onClick={() => toggleFavorite(book._id)}
          className="cursor-pointer text-xl"
          title={isFavorite ? "Unfavorite" : "Mark as Favorite"}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 hover:scale-110 transition-transform" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-red-500 hover:scale-110 transition-transform" />
          )}
        </div>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

BookSingleCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    year: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default BookSingleCard;
