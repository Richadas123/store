// import { AiOutlineClose } from 'react-icons/ai';
// import { PiBookOpenTextLight } from 'react-icons/pi';
// import { BiUserCircle } from 'react-icons/bi';

// const BookModal = ({ book, onClose }) => {
//   return (
//     <div
//       className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
//       onClick={onClose}
//     >
//       <div
//         onClick={(event) => event.stopPropagation()}
//         className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
//       >
//         <AiOutlineClose
//           className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
//           onClick={onClose}
//         />
//         <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
//           {book.publishYear}
//         </h2>
//         <h4 className='my-2 text-gray-500'>{book._id}</h4>
//         <div className='flex justify-start items-center gap-x-2'>
//           <PiBookOpenTextLight className='text-red-300 text-2xl' />
//           <h2 className='my-1'>{book.title}</h2>
//         </div>
//         <div className='flex justify-start items-center gap-x-2'>
//           <BiUserCircle className='text-red-300 text-2xl' />
//           <h2 className='my-1'>{book.author}</h2>
//         </div>
//         <p className='mt-4'>Anything You want to show</p>
//         <p className='my-2'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
//           voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
//           necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
//           nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
//           dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
//           vitae voluptate sequi repellat!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookModal;






import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-2xl h-auto bg-white dark:bg-gray-800 rounded-xl p-6 relative shadow-xl transition-all"
      >
        {/* Close button */}
        <AiOutlineClose
          className="absolute right-4 top-4 text-2xl text-red-600 cursor-pointer hover:scale-110 transition"
          onClick={onClose}
        />

        {/* Book Info */}
        <div className="mb-4">
          <h2 className="inline-block px-3 py-1 bg-red-300 dark:bg-red-600 text-white rounded-lg text-sm">
            {book.publishYear}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 break-all">
            ID: {book._id}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <PiBookOpenTextLight className="text-red-400 text-xl" />
            <h3 className="font-semibold text-lg dark:text-white">{book.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <BiUserCircle className="text-red-400 text-xl" />
            <h3 className="font-medium dark:text-gray-200">{book.author}</h3>
          </div>
        </div>

        {/* Optional Content */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Description</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
            voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
            necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
            nesciunt cupiditate voluptas?
          </p>
        </div>
      </div>
    </div>
  );
};

BookModal.propTypes = {
  book: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookModal;
