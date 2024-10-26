"use client";
import React from "react";

const Header = () => {
  return (
    <nav
      className="bg-transparent backdrop-blur-md shadow-lg py-4 rounded-full w-3/4 fixed top-0 left-0 right-0 z-50  max-w-screen-2xl mx-auto"
      style={{ marginTop: "10px" }}
    >
      <div className="flex justify-between items-center">
        <div
          className="text-pink-500 font-bold text-xl mx-auto"
          style={{ marginLeft: "50px" }}
        >
          Flower Shop
        </div>
        <div className="hidden md:flex md:space-x-10 text-pink-500 list-none">
          <li className="hover:text-pink-400 font-bold  text-center md:text-left">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-pink-400 font-bold text-center md:text-left">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-pink-400 font-bold text-center md:text-left">
            <a href="#products">Our Products</a>
          </li>
          <li
            className="hover:text-pink-400 font-bold text-center md:text-left"
            style={{ marginRight: "20px" }}
          >
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
