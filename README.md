# MERN Bookstore App

A simple full-stack Bookstore application built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can view, add, edit, delete, and mark books as favorites.

---

##  Live Links

-  **Frontend (Render)**: [https://store-1-ddok.onrender.com]  
-  **Backend API (Render)**:  [https://store-jspi.onrender.com]  
-  **Github**: (https://richadas123.github.io/store/)
  
---

## Features

-  Display list of books
-  Add a new book
-  Edit book details
-  Delete a book
-  Mark/Unmark favorite books
-  Toggle between dark and light mode

---

## Tech Stack

### Frontend:
- React
- Tailwind CSS
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv
- CORS
- Morgan
- Cookie Parser
- Body Parser

---

## Folder Structure

MERN-BOOKSTORE/
├── client/ # React frontend
│ ├── src/
│ └── public/
├── server/ # Node backend
│ ├── routes/
│ ├── models/
│ ├── connection/
│ └── index.js



---

## Environment Variables (Backend)

Create a `.env` file inside the `server` directory with the following content:

DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password


> These are used to connect to MongoDB Atlas.

---

## Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Richadas123/store.git
cd store

2. Backend setup

cd server
npm install
npm start


3. Frontend setup

cd client
npm install
npm run dev


Deployment:-
Frontend: Deployed using GitHub Pages and Render

Backend: Deployed using Render

Status:-
Deployed and Working


Author:-
Richa Das
GitHub: @Richadas123
