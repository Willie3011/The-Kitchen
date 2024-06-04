import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='bg-gray-700 grid grid-cols-2 gap-2 md:flex justify-between p-6 md:px-14'>
      <div className="">
        <h3 className='text-gray-400 text-lg font-semibold'>My Account</h3>
        <ul className='flex flex-col gap-1 text-white'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className='text-gray-400 text-lg font-semibold'>Quick Links</h3>
        <ul className='flex flex-col gap-1 text-white'>
          <li>
            <Link to="/terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/help">Help & Support</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className='text-gray-400 text-lg font-semibold'>Product</h3>
        <ul className='flex flex-col gap-1 text-white'>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer