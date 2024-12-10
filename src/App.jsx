import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Импортируем страницу "Home"
import About from './pages/About';  // Импортируем страницу "About"
import Services from './pages/Services';  // Импортируем страницу "Services"
import Contact from './pages/Contact';  // Импортируем страницу "Contact"
import Error from './pages/Error';  // Импортируем страницу "Error"
import Header from './components/Header/Header';  // Импортируем Header
import Admin from './pages/Admin';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<Admin/>} ></Route>
      </Routes>
    </>
  );
};

export default App;
