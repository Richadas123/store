
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');
  const [publisher, setPublisher] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/create`, {
        title,
        genre,
        author,
        year,
        pages,
        publisher,
      });
      enqueueSnackbar('Book created successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      enqueueSnackbar('Error creating book', { variant: 'error' });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <BackButton />
      <div className="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">Create a New Book</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { id: "title", value: title, setter: setTitle },
            { id: "genre", value: genre, setter: setGenre },
            { id: "author", value: author, setter: setAuthor },
            { id: "year", value: year, setter: setYear },
            { id: "pages", value: pages, setter: setPages },
            { id: "publisher", value: publisher, setter: setPublisher },
          ].map(({ id, value, setter }) => (
            <div key={id}>
              <label htmlFor={id} className="block font-semibold capitalize">
                {id}
              </label>
              <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
          ))}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md focus:ring focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
