import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Импортируем Link для навигации
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <Link to="/">My Logo</Link>  {/* Ссылка на главную страницу */}
          </div>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>  {/* Ссылка на главную страницу */}
              <li><Link to="/about">About</Link></li>  {/* Ссылка на страницу "О нас" */}
              <li><Link to="/services">Services</Link></li>  {/* Ссылка на страницу "Услуги" */}
              <li><Link to="/contact">Contact</Link></li>  {/* Ссылка на страницу "Контакты" */}
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
