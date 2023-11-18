import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const data = useSelector((state) => {
    return state.Carts
  })


  return (
    <>
      <div>
        <nav>
          <input type="checkbox" id='nav-toggle' />
          <div className="logo">
            <strong><Link to={'/'} className='link_tag'>ShoeStore</Link></strong>
          </div>
          <ul className='links'>
            <li> <Link to={'/'} className='link_tag'>Home</Link></li>
            <li> <Link to={'/product'} className='link_tag'>Products</Link></li>
            <li> <Link to={'/mens'} className='link_tag'>Mens</Link></li>
            <li> <Link to={'/womens'} className='link_tag'>Women</Link></li>
            <li> <Link to={'/kids'} className='link_tag'>Kids</Link></li>
            <li> <Link to={'/cart'} className='link_tag cart_item'>
              <div className="cart_length">
                <span style={{ color: "white" }}>
                  {data.length == 0 ? "" : data.length}
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>

            </Link></li>

          </ul>
          <label htmlFor="nav-toggle" className='icon-burger'>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
      </div>
    </>
  )
}

export default Navbar;