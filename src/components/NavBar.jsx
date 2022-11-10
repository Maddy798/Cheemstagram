import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-10 bg-slate-200'>
      <div>
        <a
          href='/'
          className='text-lg'>
          Cheemstagram
        </a>
      </div>
      <div>
        <Link
          to='/'
          className='ml-5 mr-5 text-lg'>
          Home
        </Link>
        <Link
          to='/'
          className='ml-5 mr-5 text-lg'>
          My Account
        </Link>
        <Link
          to='/'
          className='ml-5 mr-5 text-lg'>
          SignIn
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
