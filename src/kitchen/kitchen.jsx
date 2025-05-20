import "./kitchen.css"
import {React ,useState,useEffect} from "react"
import I20 from "../image/i20.webp"
import I21 from "../image/i21.png"
import I22 from "../image/i22.png"
import I23 from "../image/i23.png"


     const  image=[I20,I21,I22,I23];
const Kitchen= () => {
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
          <h1>Shop By Categories</h1>
        </div>



        </div>
        </>
    )
}
export default Kitchen;