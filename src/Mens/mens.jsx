import "./mens.css"
import {React ,useState,useEffect} from "react"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import I5 from "../image/i5.webp"
import I6 from "../image/i6.webp"
import I7 from "../image/i7.webp"
import I8 from "../image/i8.webp"

import M1 from "../image/im1.webp"
import M2 from "../image/im2.webp"
import M3 from "../image/im3.webp"
import M4 from "../image/im4.webp"

import M5 from "../image/im5.webp"
import M6 from "../image/im6.webp"
import M7 from "../image/im7.webp"
import M8 from "../image/im8.webp"

import M9 from "../image/im9.webp"
import M10 from "../image/im10.webp"
import M11 from "../image/im11.webp"
import M12 from "../image/im12.webp"
import M13 from "../image/im13.webp"
import M14 from "../image/im14.webp"

import M15 from "../image/im15.webp"
import M16 from "../image/im16.webp"
import M17 from "../image/im17.webp"
import M18 from "../image/im18.webp"
import M19 from "../image/im19.webp"

import M20 from "../image/im20.webp"
import M21 from "../image/im21.webp"
import M22 from "../image/im22.webp"
import M23 from "../image/im23.webp"
import M24 from "../image/im24.webp"

import M25 from "../image/im25.webp"
import M26 from "../image/im26.webp"
import M27 from "../image/im27.webp"
import M28 from "../image/im28.webp"
import M29 from "../image/im29.webp"

import { Link } from 'react-router-dom';
import Footer from "../Footer/footer";



 const  image=[I5,I6,I7,I8];
const Mens=() => {
     const [CurrIndex,SetIndex]=useState(0);
         useEffect(() => {
            const interval = setInterval(() => {
                SetIndex(prev => (prev+1) % image.length);
            }, 5000)
            return () => clearInterval(interval);
             }, []);
    
             const goToImage=(index) => {
                SetIndex(index)
             }
    return(
        <>
        <div>
            
            <div className="slider-container pt-10">
                <div
          className="slider-track"
          style={{ transform: `translateX(-${CurrIndex * 100}vw)` }}
        >
          {image.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>
                </div>
                <div className="dots">
          {image.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === CurrIndex ? 'active' : ''}`}
               onClick={() => goToImage(idx)}
            ></span>
          ))}
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">Biggest Deal On Top Brand</h1>
        </div>

        <div className="flex justify-around p-5">
        <Link to="/men1">
        <img src={M1} alt="no" />
      </Link>
        <Link to="/men2"> <img src={M2} alt="no" /></Link> 
           <Link to="/men3"><img src={M3} alt="no" /></Link>
           <Link to ="/men4"> <img src={M4} alt="no" /></Link>
        </div>

        <div className="flex justify-around p-5">
           <Link to="/men5"><img src={M5} alt="no" /></Link> 
           <Link to ="/men6"><img src={M6} alt="no" /></Link>
           <Link to ="/men7"> <img src={M7} alt="no" /></Link>
           <Link to = "/men8"> <img src={M8} alt="no" /></Link>
        </div>


        <div>
            <h1 className="text-3xl font-bold font-serif p-10">CATEGORIES TO BAG</h1>
        </div>
        <div className="flex justify-around p-5">
         <Link to="/men9">  <img src={M9} alt="no" /></Link> 
          <Link to="/men8a"> <img src={M10} alt="no" /></Link>
            <a href=""><img src={M11} alt="no" /></a>
            <a href=""><img src={M12} alt="no" /></a>
            <a href=""><img src={M13} alt="no" /></a>
            <a href=""><img src={M14} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">EXPLORE TOP BRANDS</h1>
        </div>
        <div className="flex justify-around p-5">
            <a href=""><img src={M15} alt="no" /></a>
            <a href=""><img src={M16} alt="no" /></a>
            <a href=""><img src={M17} alt="no" /></a>
            <a href=""><img src={M18} alt="no" /></a>
            <a href=""><img src={M19} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">TRANDING IN FOOTWEAR</h1>
        </div>
        <div className="flex justify-around p-5 gap-5">
            <a href=""><img src={M20} alt="no" /></a>
            <a href=""><img src={M21} alt="no" /></a>
            <a href=""><img src={M22} alt="no" /></a>
            <a href=""><img src={M23} alt="no" /></a>
            <a href=""><img src={M24} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">TRANDING IN ACCESSORIES</h1>
        </div>
        <div className="flex justify-around p-5 gap-5">
            <a href=""><img src={M25} alt="no" /></a>
            <a href=""><img src={M26} alt="no" /></a>
            <a href=""><img src={M27} alt="no" /></a>
            <a href=""><img src={M28} alt="no" /></a>
            <a href=""><img src={M29} alt="no" /></a>
        </div>
<Footer/>
        </div>
        </>
    )
}

export default Mens;