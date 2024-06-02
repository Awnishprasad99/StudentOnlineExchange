import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = ({Instagram,Twitter,Facebook}) => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">SLX</h1>
          <p className=" text-sm">
           We are here to build strong community so that every student can help each other and get success in their life
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link 
            to="ourItems"
              spy={true}
              smooth={true}
              duration={500}


              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
             Our Items
            </Link>
            <Link
            to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </Link>
            <Link
            to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Item
            </Link>
            <Link to="review"
              spy={true}
              smooth={true}
              duration={500}
              // className="hover:text-brightColor transition-all cursor-pointer"
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <Link  to="ourItems"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Items
            </Link>
            <Link

            to="premium"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              SLXcommunity@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +64 958 248 966
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer "
              href="/"
            >
              Social media
             
            </a>
            <a className="cursor-pointer"> 
            <BsInstagram/>Instagram 
            </a>
            <a className="cursor-pointer">
              <BsFacebook/>Facebook
            </a>
            <a className="cursor-pointer">
              <RiTwitterXFill/>Twitter
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> champion programmers</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
