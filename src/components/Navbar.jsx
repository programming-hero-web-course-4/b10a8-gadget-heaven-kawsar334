import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useCartWishlist } from '../context/Contextt';

const Navbar = () => {

  const location = useLocation();
  const { cart, wishlist } = useCartWishlist();


  return (
    <div className={`${location.pathname === "/" ? "navbar bg-blue text-[white] sticky top-0 left-0 z-30" : "navbar bg-[white] text-[black] sticky top-0 left-0 z-30"} `}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue border rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Statistics</Link></li>
            <li><Link to="/dashboard/cart">Dashboard</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/login">Login</Link></li>

          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Statistics</Link></li>
          <li><Link to="/dashboard/cart">Dashboard</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>
      </div>
      <div className="navbar-end flex justify-center items-center gap-3">
      
        <Link to="/dashboard/cart" className="relative mr-2">
          <i className="fa-solid fa-cart-arrow-down text-xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            3
          </span>
        </Link>

        <Link to="/dashboard/wishlist" className="relative">
          <i className="fa-regular fa-heart text-xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            5
          </span>
        </Link>

      </div>
    </div>
  )
}

export default Navbar