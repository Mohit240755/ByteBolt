import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import FW1 from "../image/FW1.webp"
import FW2 from "../image/FW2.webp"
import FW3 from "../image/FW3.webp"
import FW4 from "../image/FW4.webp"
import FW5 from "../image/FW5.webp"
import FW6 from "../image/FW6.webp"
import FW7 from "../image/FW7.webp"
import FW8 from "../image/FW8.webp"
import FW9 from "../image/FW9.webp"
import FW10 from "../image/FW10.webp"
import FW11 from "../image/FW11.webp"
import FW12 from "../image/FW12.webp"
import FW13 from "../image/FW13.webp"
import FW14 from "../image/FW14.webp"
import FW15 from "../image/FW15.webp"
import FW16 from "../image/FW16.webp"
import FW17 from "../image/FW17.webp"
import FW18 from "../image/FW18.webp"
import FW19 from "../image/FW19.webp"
import FW20 from "../image/FW20.webp"
import FW21 from "../image/FW21.webp"
import FW22 from "../image/FW22.webp"
import FW23 from "../image/FW23.webp"
import FW24 from "../image/FW24.webp"
import FW25 from "../image/FW25.webp"
import FW26 from "../image/FW26.webp"
import FW27 from "../image/FW27.webp"
import FW28 from "../image/FW28.webp"

export const formalWatches = [
  { id: 1, brand: "Fossil", name: "Grant Chronograph Watch", price: 7499, originalPrice: 10999, discount: 32, image: FW1, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 2, brand: "Casio", name: "Enticer Men's Watch", price: 4299, originalPrice: 5999, discount: 28, image: FW2, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 3, brand: "Titan", name: "Edge Analog Watch", price: 6499, originalPrice: 8999, discount: 28, image: FW3, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 4, brand: "Daniel Wellington", name: "Classic Black Sheffield", price: 9999, originalPrice: 14999, discount: 33, image: FW4, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 5, brand: "Timex", name: "Waterbury Traditional", price: 3799, originalPrice: 5499, discount: 31, image: FW5, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 6, brand: "Sonata", name: "Formal Analog Watch", price: 1299, originalPrice: 1999, discount: 35, image: FW6, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 7, brand: "Fastrack", name: "Leather Strap Watch", price: 2299, originalPrice: 3499, discount: 34, image: FW7, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 8, brand: "Diesel", name: "Mega Chief Chronograph", price: 10999, originalPrice: 15999, discount: 31, image: FW8, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 9, brand: "Armani Exchange", name: "Three-Hand Dress Watch", price: 8999, originalPrice: 12999, discount: 31, image: FW9, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 10, brand: "Michael Kors", name: "Slim Runway Watch", price: 11999, originalPrice: 16999, discount: 29, image: FW10, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 11, brand: "Tommy Hilfiger", name: "Men's Quartz Dress Watch", price: 7999, originalPrice: 11999, discount: 33, image: FW11, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 12, brand: "Guess", name: "Men’s Stainless Steel Watch", price: 8499, originalPrice: 12999, discount: 35, image: FW12, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 13, brand: "Seiko", name: "Men's Formal Quartz", price: 12999, originalPrice: 17999, discount: 28, image: FW13, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 14, brand: "Fossil", name: "Neutra Chronograph", price: 7499, originalPrice: 9999, discount: 25, image: FW14, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 15, brand: "Timex", name: "Men's Easy Reader Watch", price: 2499, originalPrice: 3999, discount: 38, image: FW15, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 16, brand: "Titan", name: "Formal Stainless Steel Watch", price: 3499, originalPrice: 4999, discount: 30, image: FW16, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 17, brand: "Daniel Wellington", name: "Petite Melrose Watch", price: 10499, originalPrice: 14999, discount: 30, image: FW17, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 18, brand: "Citizen", name: "Men's Eco-Drive Watch", price: 11499, originalPrice: 16999, discount: 32, image: FW18, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 19, brand: "Tissot", name: "Men’s Formal Leather Watch", price: 17999, originalPrice: 23999, discount: 25, image: FW19, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 20, brand: "Casio", name: "Men’s Sapphire Watch", price: 5999, originalPrice: 8999, discount: 33, image: FW20, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 21, brand: "Sonata", name: "Black Leather Formal", price: 999, originalPrice: 1499, discount: 33, image: FW21, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 22, brand: "Fastrack", name: "Slim Case Formal Watch", price: 1899, originalPrice: 2899, discount: 35, image: FW22, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 23, brand: "Timex", name: "All Stainless Watch", price: 2899, originalPrice: 4499, discount: 36, image: FW23, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 24, brand: "Titan", name: "Slim Design Leather Watch", price: 3999, originalPrice: 5999, discount: 33, image: FW24, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 25, brand: "Guess", name: "Dress Style Watch", price: 7999, originalPrice: 10999, discount: 27, image: FW25, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 26, brand: "Armani Exchange", name: "Formal Chronograph", price: 8999, originalPrice: 12999, discount: 31, image: FW26, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 27, brand: "Fossil", name: "Modern Minimalist", price: 6999, originalPrice: 9999, discount: 30, image: FW27, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 28, brand: "Michael Kors", name: "Men’s Lexington Dress", price: 10999, originalPrice: 15999, discount: 31, image: FW28, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 }
];

const Mens26 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Branded Shorts and Trousers</h1>
        <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
          {formalWatches.map((product) => (
            <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
              <Link to={`/men26/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
              <div className="main">
                <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                <p>{product.name.slice(0, 20)}...</p>
                <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                <p className="font-semibold">
                  ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <Link to={`/men26/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-blue-500 font-semibold">
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

export default Mens26;



