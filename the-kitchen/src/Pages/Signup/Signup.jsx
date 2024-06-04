import React, { useState } from "react";
import { Link } from 'react-router-dom';
import register from '../../assets/register.svg';

function Signup() {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(userInfo)
  };
  return (
    <div className="container w-11/12 absolute md:my-12 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 h-auto flex flex-col-reverse md:flex-row bg-white shadow-md rounded-xl overflow-hidden md:w-10/12">
      {/* left */}
      <div className="w-full md:w-1/2 h-full p-4">
        <h2 className="font-semibold text-xl text-center">Create an Account</h2>
        <p className="text-gray-700 text-center mx-16 md:mx-3 text-sm">
          You are a few click away from getting the best Kota in town
        </p>
        <form className="flex flex-col">
          <label className="text-sm font-semibold my-2" htmlFor="fullname">
            Full name
          </label>
          <input
            className="border border-gray-100 p-2 h-10 rounded-md placeholder:text-sm text-sm outline-none focus:border-yellow-200"
            type="text"
            name="fullname"
            id="fullname"
            value={userInfo.fullname}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            
          />
          <label className="text-sm font-semibold my-2" htmlFor="email">
            Email Address
          </label>
          <input
          className="border border-gray-100 p-2 h-10 rounded-md placeholder:text-sm text-sm outline-none focus:border-yellow-200"
            type="email"
            name="email"
            id="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="e.g. johndoe@gmail.com"
          />
          <label className="text-sm font-semibold my-2" htmlFor="phone">
            Phone Number
          </label>
          <input
          className="border border-gray-100 p-2 h-10 rounded-md placeholder:text-sm text-sm outline-none focus:border-yellow-200"
            type="tel"
            name="phone"
            id="phone"
            value={userInfo.phone}
            onChange={handleChange}
            placeholder="e.g. 0800000000"
          />
          <label className="text-sm font-semibold my-2" htmlFor="password">
            Password
          </label>
          <input
          className="border border-gray-100 p-2 h-10 rounded-md placeholder:text-sm text-sm outline-none focus:border-yellow-200"
            type="password"
            name="password"
            id="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="***********"
          />

          <button onClick={handleSubmit} className="bg-yellow-400 transition-all duration-300 ease-in hover:bg-yellow-500 text-white text-sm font-semibold h-10 w-max my-4 rounded-3xl px-3 py-2">Create Account</button>
        </form>
        <p className="my-4 text-sm text-gray-400">Already have an account? <Link className="text-yellow-400 transition-all duration-300 ease-in hover:text-yellow-500 hover:underline" to="/login">Login here</Link></p>
      </div>

      {/* //right */}
      <div className="hidden md:w-1/2 md:flex h-full p-8 items-center justify-center">
        <img className="object-contain h-full w-full" src={register} alt="" />
      </div>
    </div>
  );
}

export default Signup;
