import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-gray-900 via-gray-800 to-zinc-900 p-10 mt-10">
      <div className="flex justify-between flex-wrap">
        <nav className="flex flex-col space-y-2">
          <h1 className="text-2xl font-serif">Get to Know Us</h1>
          <a href="">About ByteBolt</a>
          <a href="">Careers</a>
          <a href="">Press Releases</a>
          <a href="">ByteBolt Science</a>
        </nav>

        <nav className="flex flex-col space-y-2">
          <h1 className="text-2xl font-serif">Make Money with Us</h1>
          <a href="">Sell On ByteBolt</a>
          <a href="">Product and Build Your Brand</a>
          <a href="">ByteBolt Global Selling</a>
          <a href="">Supply To ByteBolt</a>
          <a href="">Become an Affiliate</a>
          <a href="">Fulfillment by ByteBolt</a>
          <a href="">ByteBolt Pay on Merchants</a>
        </nav>

        <nav className="flex flex-col space-y-2">
          <h1 className="text-2xl font-serif">Let Us Help You</h1>
          <a href="">Your Account</a>
          <a href="">Return Center</a>
          <a href="">Product Safety Alert</a>
          <a href="">100% Purchase Protection</a>
          <a href="">ByteBolt App Download</a>
        </nav>

        <nav className="flex flex-col space-y-2">
          <h1 className="text-2xl font-serif">Questions? Contact us.</h1>
          <p className="text-lg font-medium">Enter Your Email :</p>
          <div>
            <input
              className="bg-amber-50 text-black w-80 rounded-2xl h-10 p-2"
              type="text"
              placeholder="www.gmail.com"
            />
            <button className="bg-amber-400 text-black w-28 h-10 rounded-2xl mt-2">Submit</button>
            <h1 className="font-medium pt-5 text-lg">Keep In Touch With</h1>
            <div className="text-2xl flex gap-3 mt-2">
              <a href=""><FaFacebook /></a>
              <a href=""><FaTwitter /></a>
              <a href=""><FaInstagramSquare /></a>
              <a href=""><FaYoutube /></a>
            </div>
          </div>
        </nav>
      </div>

      <div className="text-center mt-10">
        <div className="space-x-3 text-xs">
          <a href="">Conditions of Use</a>
          <a href="">Privacy Notice</a>
          <a href="">Interest-Based Ads</a>
        </div>
        <div className="text-xs mt-2 flex justify-center items-center gap-1">
          <p>©1996-2025, ByteBolt.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};



export default Footer;