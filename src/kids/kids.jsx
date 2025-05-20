import "./kids.css"
import {React ,useState,useEffect} from "react"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import I15 from "../image/i15.webp"
import I16 from "../image/i16.webp"
import I17 from "../image/i17.webp"
import I18 from "../image/i18.webp"
import I19 from "../image/i19.webp"


import k1 from "../image/ik1.webp"
import k2 from "../image/ik2.webp"
import k3 from "../image/ik3.webp"
import k4 from "../image/ik4.webp"
import k5 from "../image/ik5.webp"
import k6 from "../image/ik6.webp"
import k7 from "../image/ik7.webp"
import k8 from "../image/ik8.webp"


import k9 from "../image/ik9.jpg"
import k10 from "../image/ik10.webp"
import k11 from "../image/ik11.webp"
import k12 from "../image/ik12.webp"
import k13 from "../image/ik13.webp"


import k14 from "../image/ik14.webp"
import k15 from "../image/ik15.webp"
import k16 from "../image/ik16.webp"
import k17 from "../image/ik17.webp"
import k18 from "../image/ik18.webp"
import k19 from "../image/ik19.webp"
import k20 from "../image/ik20.jpg"
import k21 from "../image/ik21.webp"
import k22 from "../image/ik22.webp"
import k23 from "../image/ik23.webp"

import k24 from "../image/IK24.webp"
import k25 from "../image/ik25.webp"
import k26 from "../image/ik26.webp"
import k27 from "../image/ik27.webp"
import k28 from "../image/ik28.webp"
import k29 from "../image/ik29.webp"
import k30 from "../image/ik30.webp"
import k31 from "../image/ik31.webp"

import k32 from "../image/ik32.webp"
import k33 from "../image/ik33.webp"
import k34 from "../image/ik34.webp"
import k35 from "../image/ik35.webp"
import k36 from "../image/ik36.webp"
import Footer from "../Footer/footer";



 const  image=[I15,I16,I17,I18,I19];
const Kids=() => {
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
            <h1 className="text-3xl font-bold font-serif p-10">FAVOURITE</h1>
        </div>

        <div className="flex justify-around p-5">
            <a href=""><img src={k1} alt="no" /></a>
            <a href=""><img src={k2} alt="no" /></a>
            <a href=""><img src={k3} alt="no" /></a>
            <a href=""><img src={k4} alt="no" /></a>
            <a href=""><img src={k5} alt="no" /></a>
            <a href=""><img src={k6} alt="no" /></a>
            <a href=""><img src={k7} alt="no" /></a>
            <a href=""><img src={k8} alt="no" /></a>
        </div>
        <div>
            <h1 className="text-3xl font-bold font-serif p-10">ICONIC BRAND</h1>
        </div>
        <div className="flex justify-around p-5">
            <a href=""><img src={k9} alt="no" /></a>
            <a href=""><img src={k10} alt="no" /></a>
            <a href=""><img src={k11} alt="no" /></a>
            <a href=""><img src={k12} alt="no" /></a>
            <a href=""><img src={k13} alt="no" /></a>
        </div>


        <div>
            <h1 className="text-3xl font-bold font-serif p-10">FASHION AND ESSENTIALS</h1>
        </div>
        <div className="flex justify-around p-5">
            <a href=""><img src={k14} alt="no" /></a>
            <a href=""><img src={k15} alt="no" /></a>
            <a href=""><img src={k16} alt="no" /></a>
            <a href=""><img src={k17} alt="no" /></a>
            <a href=""><img src={k18} alt="no" /></a>
        </div>
        <div className="flex justify-around p-5 gap-5">
            <a href=""><img src={k19} alt="no" /></a>
            <a href=""><img src={k20} alt="no" /></a>
            <a href=""><img src={k21} alt="no" /></a>
            <a href=""><img src={k22} alt="no" /></a>
            <a href=""><img src={k23} alt="no" /></a>
        </div>

        <div>
            <h1 className="text-3xl font-bold font-serif p-10">EXPLORE MORE</h1>
        </div>
        <div className="flex justify-around ">
            <a href=""><img src={k24} alt="no" /></a>
            <a href=""><img src={k25} alt="no" /></a>
            </div>
        <div className="flex justify-around ">
            <a href=""><img src={k26} alt="no" /></a>
            <a href=""><img src={k27} alt="no" /></a>
            </div>
        <div className="flex justify-around ">
            <a href=""><img src={k28} alt="no" /></a>
            <a href=""><img src={k29} alt="no" /></a>
            </div>
            <div>

            <h1 className="text-3xl font-bold font-serif p-10">THE KIDS SPACE</h1>
        </div>
        <div className="flex justify-around ">
            <a href=""><img src={k30} alt="no" /></a>
            <a href=""><img src={k31} alt="no" /></a>
            </div>

            <div>
            <h1 className="text-3xl font-bold font-serif p-10">SHOP MORE BRANDS</h1>
        </div>
        <div className="flex justify-around p-5 gap-5">
            <a href=""><img src={k32} alt="no" /></a>
            <a href=""><img src={k33} alt="no" /></a>
            <a href=""><img src={k34} alt="no" /></a>
            <a href=""><img src={k35} alt="no" /></a>
            <a href=""><img src={k36} alt="no" /></a>
        </div>
                   
        

     <Footer/>
        </div>
        </>
    )
}

export default Kids;