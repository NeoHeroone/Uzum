import React from 'react';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="search-content">
          <button className="category">
            <img src="/katalog.svg" alt="" />
            <p>Katalog</p>
          </button>
          <form>
            <input type="text" placeholder='Mahsulotlar va turkumlar izlash' />
            <button>
              <img src="/search.svg" alt="" />
            </button>
          </form>
        </div>
        <ul>
          <li>
            <img src="/user.svg" alt="" />
            <a href="#">Kirish</a>
          </li>
          <li>
            <img src="/likeed.svg" alt="" />
            <a href="">Saralangan</a>
          </li>
          <li>
            <img src="/savat.svg" alt="" />
            <a href="#">Savat</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;