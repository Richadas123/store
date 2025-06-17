

import BookSingleCard from './BookSingleCard';
import PropTypes from 'prop-types';

const BooksCard = ({ books, favorites, toggleFavorite }) => {
  if (!books || books.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
        No books found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard
          key={item._id}
          book={item}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default BooksCard;
