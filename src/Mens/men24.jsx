import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import H1 from "../image/H1.webp"
import H2 from "../image/H2.webp"
import H3 from "../image/H3.webp"
import H4 from "../image/H4.webp"
import H5 from "../image/H5.webp"
import H6 from "../image/H6.webp"
import H7 from "../image/H7.webp"
import H8 from "../image/H8.webp"
import H9 from "../image/H9.webp"
import H10 from "../image/H10.webp"
import H11 from "../image/H11.webp"
import H12 from "../image/H12.webp"
import H13 from "../image/H13.webp"
import H14 from "../image/H14.webp"
import H15 from "../image/H15.webp"
import H16 from "../image/H16.webp"
import H17 from "../image/H17.webp"
import H18 from "../image/H18a.webp"
import H19 from "../image/H19.webp"
import H20 from "../image/H20.webp"
import H21 from "../image/H21.webp"
import H22 from "../image/H22.webp"
import H23 from "../image/H23.webp"
import H24 from "../image/H24.webp"
import H25 from "../image/H25.webp"
import H26 from "../image/H26.jpg"
import H27 from "../image/H27.webp"
import H28 from "../image/H28.jpg"

export const wirelessHeadphones = [
  { id: 1, brand: "Sony", name: "WH-1000XM5 ANC Headphones", price: 24999, originalPrice: 34999, discount: 29, image: H1, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 2, brand: "Bose", name: "QuietComfort 45", price: 22999, originalPrice: 32999, discount: 30, image: H2, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 3, brand: "JBL", name: "Live 660NC Wireless", price: 9999, originalPrice: 14999, discount: 33, image: H3, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 4, brand: "Sennheiser", name: "Momentum 4", price: 19999, originalPrice: 29999, discount: 33, image: H4, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 5, brand: "boAt", name: "Rockerz 450 Pro", price: 1799, originalPrice: 3999, discount: 55, image: H5, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 6, brand: "OnePlus", name: "Bullets Wireless Z2", price: 1999, originalPrice: 2299, discount: 13, image: H6, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 7, brand: "realme", name: "Buds Wireless 3", price: 1699, originalPrice: 2499, discount: 32, image: H7, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 8, brand: "Noise", name: "Two Wireless Headphones", price: 1899, originalPrice: 2999, discount: 37, image: H8, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 9, brand: "Zebronics", name: "Zeb-Rush", price: 1499, originalPrice: 2799, discount: 46, image: H9, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 10, brand: "Infinity", name: "Glide 510 by Harman", price: 1999, originalPrice: 3499, discount: 43, image: H10, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 11, brand: "Fire-Boltt", name: "Blast 1400", price: 1799, originalPrice: 2999, discount: 40, image: H11, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 12, brand: "Boult Audio", name: "ProBass Flex", price: 1299, originalPrice: 2299, discount: 43, image: H12, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 13, brand: "Hammer", name: "Bash 2.0", price: 1099, originalPrice: 1999, discount: 45, image: H13, rating: "3.9 ⭐⭐⭐⭑☆", rate: 3.9 },
  { id: 14, brand: "pTron", name: "Studio Over-Ear", price: 999, originalPrice: 1899, discount: 47, image: H14, rating: "3.8 ⭐⭐⭐⭑☆", rate: 3.8 },
  { id: 15, brand: "Skullcandy", name: "Hesh ANC", price: 7999, originalPrice: 11999, discount: 33, image: H15, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 16, brand: "Apple", name: "AirPods Max", price: 59999, originalPrice: 66900, discount: 10, image: H16, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 17, brand: "Marshall", name: "Major IV Wireless", price: 12999, originalPrice: 15999, discount: 19, image: H17, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 18, brand: "Beats", name: "Solo3 Wireless", price: 17999, originalPrice: 24999, discount: 28, image: H18, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 19, brand: "Boat", name: "Rockerz 510", price: 1699, originalPrice: 2999, discount: 43, image: H19, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 20, brand: "Crossbeats", name: "Raga Bluetooth Headphones", price: 2599, originalPrice: 3999, discount: 35, image: H20, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 21, brand: "Portronics", name: "Muffs M", price: 1399, originalPrice: 2299, discount: 39, image: H21, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 22, brand: "Blaupunkt", name: "BH21 ANC Headphones", price: 2999, originalPrice: 4999, discount: 40, image: H22, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 23, brand: "Truke", name: "BTG Beta", price: 1199, originalPrice: 1999, discount: 40, image: H23, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 24, brand: "Ubon", name: "Over-Ear Boom", price: 999, originalPrice: 1699, discount: 41, image: H24, rating: "3.9 ⭐⭐⭐⭑☆", rate: 3.9 },
  { id: 25, brand: "Lenovo", name: "HD116 Wireless", price: 1699, originalPrice: 2999, discount: 43, image: H25, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 26, brand: "TCL", name: "MTRO200BT", price: 2499, originalPrice: 3999, discount: 38, image: H26, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 27, brand: "Panasonic", name: "RB-M300B Deep Bass", price: 5999, originalPrice: 8999, discount: 33, image: H27, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 28, brand: "Philips", name: "TAPH802BK Hi-Res", price: 3499, originalPrice: 4999, discount: 30, image: H28, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 }
];


const Mens24 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Branded Shorts and Trousers</h1>
        <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
          {wirelessHeadphones.map((product) => (
            <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
              <Link to={`/men24/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
              <div className="main">
                <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                <p>{product.name.slice(0, 20)}...</p>
                <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                <p className="font-semibold">
                  ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <Link to={`/men24/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-blue-500 font-semibold">
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

export default Mens24;



