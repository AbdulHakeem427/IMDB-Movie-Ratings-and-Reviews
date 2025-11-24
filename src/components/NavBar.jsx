// import React from "react";
// import Logo from "../MovieLogo.png";
// import {Link} from 'react-router-dom'
// function NavBar() {
//   return (
//     <div className="flex space-x-8 items-center pl-3 py-4">
//       <Link to='/'><img className="w-[50px]" src={Logo} /></Link>

//       <Link to="/"  className="text-blue-500 text-3xl font-bold">
//         Movies
//       </Link>

//       <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
//         Watchlist
//       </Link>
//       <Link to="/recommend" className="text-blue-500 text-3xl font-bold">
//         AI Recommendations
//       </Link>
//     </div>
//   );
// }

// export default NavBar;
import React, { useState } from "react";
import Logo from "../MovieLogo.png";
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-3 py-4">
      {/* Desktop and Mobile Header */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img className="w-[40px] sm:w-[50px]" src={Logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-blue-500 text-2xl lg:text-3xl font-bold hover:text-blue-600">
            Movies
          </Link>
          <Link to="/watchlist" className="text-blue-500 text-2xl lg:text-3xl font-bold hover:text-blue-600">
            Watchlist
          </Link>
          <Link to="/recommend" className="text-blue-500 text-2xl lg:text-3xl font-bold hover:text-blue-600">
            AI Recommendations
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-blue-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
          <Link 
            to="/" 
            className="text-blue-500 text-xl font-bold hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Movies
          </Link>
          <Link 
            to="/watchlist" 
            className="text-blue-500 text-xl font-bold hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Watchlist
          </Link>
          <Link 
            to="/recommend" 
            className="text-blue-500 text-xl font-bold hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            AI Recommendations
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
