import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import SW1 from "../image/SW1.webp"
import SW2 from "../image/SW2.webp"
import SW3 from "../image/SW3.webp"
import SW4 from "../image/SW4.webp"
import SW5 from "../image/SW5.webp"
import SW6 from "../image/SW6.webp"
import SW7 from "../image/SW7.webp"
import SW8 from "../image/SW8.webp"
import SW9 from "../image/SW9.jpg"
import SW10 from "../image/SW10.webp"
import SW11 from "../image/SW11.webp"
import SW12 from "../image/SW12.webp"
import SW13 from "../image/SW13.webp"
import SW14 from "../image/SW14.webp"
import SW15 from "../image/SW15.webp"
import SW16 from "../image/SW16.webp"
import SW17 from "../image/SW17.webp"
import SW18 from "../image/SW18.webp"
import SW19 from "../image/SW19.webp"
import SW20 from "../image/SW20.webp"
import SW21 from "../image/SW21.webp"
import SW22 from "../image/SW22.webp"
import SW23 from "../image/SW23.webp"
import SW24 from "../image/SW24.webp"
import SW25 from "../image/SW25.webp"
import SW26 from "../image/SW26.webp"
import SW27 from "../image/SW27.webp"
import SW28 from "../image/SW28.webp"

export const sportWatches = [
  { id: 1, brand: "Garmin", name: "Forerunner 245", price: 26999, originalPrice: 34999, discount: 23, image: SW1, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 2, brand: "Apple", name: "Watch SE (2nd Gen)", price: 29999, originalPrice: 35999, discount: 17, image: SW2, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 3, brand: "Samsung", name: "Galaxy Watch 5", price: 23999, originalPrice: 30999, discount: 23, image: SW3, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 4, brand: "Fitbit", name: "Versa 4", price: 19999, originalPrice: 24999, discount: 20, image: SW4, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 5, brand: "boAt", name: "Xtend Smartwatch", price: 2799, originalPrice: 7999, discount: 65, image: SW5, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 6, brand: "Noise", name: "ColorFit Ultra 3", price: 3499, originalPrice: 6999, discount: 50, image: SW6, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 7, brand: "Fire-Boltt", name: "Invincible Plus", price: 3999, originalPrice: 7999, discount: 50, image: SW7, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 8, brand: "Fossil", name: "Gen 6 Smartwatch", price: 18999, originalPrice: 24999, discount: 24, image: SW8, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 9, brand: "Titan", name: "Smart Pro", price: 9999, originalPrice: 12999, discount: 23, image: SW9, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 10, brand: "Timex", name: "iConnect Active", price: 6499, originalPrice: 8999, discount: 28, image: SW10, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 11, brand: "Amazfit", name: "GTS 4 Mini", price: 7499, originalPrice: 9999, discount: 25, image: SW11, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 12, brand: "Crossbeats", name: "Orbit X", price: 5999, originalPrice: 9999, discount: 40, image: SW12, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 13, brand: "Fastrack", name: "Reflex Vox", price: 2999, originalPrice: 6995, discount: 57, image: SW13, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 14, brand: "Pebble", name: "Frost", price: 2499, originalPrice: 5999, discount: 58, image: SW14, rating: "3.9 ⭐⭐⭐⭑☆", rate: 3.9 },
  { id: 15, brand: "TAGG", name: "Verve Sense", price: 2299, originalPrice: 4999, discount: 54, image: SW15, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 16, brand: "Boult", name: "Crown R", price: 2799, originalPrice: 6999, discount: 60, image: SW16, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 17, brand: "Zebronics", name: "Zeb-Fit920CH", price: 1999, originalPrice: 4299, discount: 53, image: SW17, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 18, brand: "pTron", name: "Force X11", price: 1499, originalPrice: 2999, discount: 50, image: SW18, rating: "3.8 ⭐⭐⭐⭑☆", rate: 3.8 },
  { id: 19, brand: "Gionee", name: "STYLFIT GSW6", price: 2999, originalPrice: 6999, discount: 57, image: SW19, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 20, brand: "Realme", name: "Watch 3 Pro", price: 4299, originalPrice: 6999, discount: 39, image: SW20, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 21, brand: "Redmi", name: "Watch 2 Lite", price: 3499, originalPrice: 6999, discount: 50, image: SW21, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 22, brand: "Mi", name: "Revolve Active", price: 6499, originalPrice: 9999, discount: 35, image: SW22, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 23, brand: "Dizo", name: "Watch R Talk", price: 3499, originalPrice: 5999, discount: 42, image: SW23, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 24, brand: "Helix", name: "Smart 2.0", price: 2999, originalPrice: 5995, discount: 50, image: SW24, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 25, brand: "Inbase", name: "Urban LYF Z", price: 1799, originalPrice: 3999, discount: 55, image: SW25, rating: "3.9 ⭐⭐⭐⭑☆", rate: 3.9 },
  { id: 26, brand: "Goqii", name: "Smart Vital Ultra", price: 3999, originalPrice: 6999, discount: 43, image: SW26, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 27, brand: "AQFiT", name: "W15 Fitness Watch", price: 1899, originalPrice: 3999, discount: 53, image: SW27, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 28, brand: "Hammer", name: "Pulse Ace", price: 1599, originalPrice: 3499, discount: 54, image: SW28, rating: "3.8 ⭐⭐⭐⭑☆", rate: 3.8 }
];



const Mens25 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Branded Shorts and Trousers</h1>
        <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
          {sportWatches.map((product) => (
            <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
              <Link to={`/men25/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
              <div className="main">
                <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                <p>{product.name.slice(0, 20)}...</p>
                <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                <p className="font-semibold">
                  ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <Link to={`/men25/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-blue-500 font-semibold">
                  BUY
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mens25;



