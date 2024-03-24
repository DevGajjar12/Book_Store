import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import BookList from './pages/Books';
import AddBook from '../src/pages/AddBook';
import UpdateBook from '../src/pages/UpdateBook';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/books' element={<BookList/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
