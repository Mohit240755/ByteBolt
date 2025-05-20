import "./women.css"
import {React ,useState,useEffect} from "react"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import I9 from "../image/i9.webp"
import I10 from "../image/i10.webp"
import I11 from "../image/i11.webp"
import I12 from "../image/i12.webp"
import I13 from "../image/i13.webp"
import I14 from "../image/i14.webp"

import w1 from "../image/iw1.webp"
import w2 from "../image/iw2.webp"
import w3 from "../image/iw3.webp"
import w4 from "../image/iw4.webp"
import w5 from "../image/iw5.webp"


import w6 from "../image/iw6.webp"
import w7 from "../image/iw7.webp"
import w8 from "../image/iw8.webp"
import w9 from "../image/iw9.webp"
import w10 from "../image/iw10.jpg"


import w11 from "../image/iw11.webp"
import w12 from "../image/iw12.webp"
import w13 from "../image/iw13.webp"
import w14 from "../image/iw14.webp"
import w15 from "../image/iw15.webp"
import w16 from "../image/iw16.webp"


import w17 from "../image/iw17.webp"
import w18 from "../image/iw18.webp"
import w19 from "../image/iw19.webp"
import w20 from "../image/iw20.webp"
import w21 from "../image/iw21.webp"

import w22 from "../image/iw22.webp"
import w23 from "../image/iw23.webp"
import w24 from "../image/iw24.webp"
import w25 from "../image/iw25.webp"
import w26 from "../image/iw26.webp"

import w27 from "../image/iw27.webp"
import w28 from "../image/iw28.webp"
import w29 from "../image/iw29.webp"
import w30 from "../image/iw30.webp"
import w31 from "../image/iw31.webp"
import Footer from "../Footer/footer";



 const  image=[I9,I10,I11,I12,I13,I14];
const Women=() => {
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
            <a href=""><img src={w1} alt="no" /></a>
            <a href=""><img src={w2} alt="no" /></a>
            <a href=""><img src={w3} alt="no" /></a>
            <a href=""><img src={w4} alt="no" /></a>
            <a href=""><img src={w5} alt="no" /></a>
        </div>

        <div className="flex justify-around p-5">
            <a href=""><img src={w6} alt="no" /></a>
            <a href=""><img src={w7} alt="no" /></a>
            <a href=""><img src={w8} alt="no" /></a>
            <a href=""><img src={w9} alt="no" /></a>
            <a href=""><img src={w10} alt="no" /></a>
        </div>


        <div>
            <h1 className="text-3xl font-bold font-serif p-10">CATEGORIES TO BAG</h1>
        </div>
        <div className="flex justify-around p-5">
            <a href=""><img src={w11} alt="no" /></a>
            <a href=""><img src={w12} alt="no" /></a>
            <a href=""><img src={w13} alt="no" /></a>
            <a href=""><img src={w14} alt="no" /></a>
            <a href=""><img src={w15} alt="no" /></a>
            <a href=""><img src={w16} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">EXPLORE TOP BRANDS</h1>
        </div>
        <div className="flex justify-around p-5">
            <a href=""><img src={w17} alt="no" /></a>
            <a href=""><img src={w18} alt="no" /></a>
            <a href=""><img src={w19} alt="no" /></a>
            <a href=""><img src={w20} alt="no" /></a>
            <a href=""><img src={w21} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">TRANDING IN FOOTWEAR</h1>
        </div>
        <div className="flex justify-around p-5 gap-5">
            <a href=""><img src={w22} alt="no" /></a>
            <a href=""><img src={w23} alt="no" /></a>
            <a href=""><img src={w24} alt="no" /></a>
            <a href=""><img src={w25} alt="no" /></a>
            <a href=""><img src={w26} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">TRANDING IN ACCESSORIES</h1>
        </div>
        <div className="flex justify-around p-5 gap-5">
            <a href=""><img src={w27} alt="no" /></a>
            <a href=""><img src={w28} alt="no" /></a>
            <a href=""><img src={w29} alt="no" /></a>          
            <a href=""><img src={w30} alt="no" /></a>          
            <a href=""><img src={w31} alt="no" /></a>          
        </div>

        <Footer/>
        </div>
        </>
    )
}

export default Women;