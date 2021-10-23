import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes, FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link as Scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((cart) => cart.ShopReducer);

  return (
    <div className='bg-gray-700 text-white transition duration-1000 p-4'>
      <header className='flex justify-between items-center'>
        <div>Navbar</div>

        <div className='md:hidden'>
          {isOpen ? (
            <FaTimes className='link' onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars className='link' onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>

        <nav className='hidden md:flex gap-5 items-center '>
          <NavLink to='/'>Home</NavLink>

          <Scroll className='link' smooth={true} to='about'>
            About
          </Scroll>
          <Scroll className='link' smooth={true} to='shop'>
            Shop
          </Scroll>

          <NavLink
            className='bg-white gap-2 rounded-lg px-2 py-1 text-black'
            to='/cart'
          >
            <span className='flex items-center text-gray-700 gap-5 '>
              <FaShoppingBag className='text-gray-700' />
              {cart.length}
            </span>
          </NavLink>
        </nav>
      </header>

      <div
        className={`${
          isOpen ? 'block md:hidden' : 'hidden'
        }  flex flex-col text-left mt-6 transform space-y-4`}
      >
        <NavLink to='/' onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <Scroll
          className='link'
          smooth={true}
          to='about'
          onClick={() => setIsOpen(false)}
        >
          About
        </Scroll>
        <Scroll
          className='link'
          smooth={true}
          to='shop'
          onClick={() => setIsOpen(false)}
        >
          Shop
        </Scroll>
        <NavLink
          className='bg-white gap-2 w-16 rounded-lg px-2 py-1 text-black'
          to='/cart'
        >
          <span className='flex items-center text-gray-700 gap-5 '>
            <FaShoppingBag className='text-gray-700' />
            {cart.length}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
