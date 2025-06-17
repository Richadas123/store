
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sky-600 dark:text-sky-400 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
