// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from "./pages/Home";
// import CreateBook from "./pages/CreateBook";
// import UpdateBook from "./pages/UpdateBook";
// import ShowBook from "./pages/ShowBook";
// import DeleteBook from "./pages/DeleteBook";




// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<CreateBook />} />
//         <Route path="/book/:id" element={<ShowBook />} />
//         <Route path="/update/:id" element={<UpdateBook />} />
//         <Route path="/delete/:id" element={<DeleteBook />} />
//       </Routes>
//     </>
//   )

// }

// export default App





import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import ThemeToggle from './components/ThemeToggle'; // ✅ Import ThemeToggle

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header or Theme toggle section */}
      <div className="p-4 flex justify-end">
        <ThemeToggle />
      </div>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/book/:id" element={<ShowBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default App;
