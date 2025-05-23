import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import S1 from "../image/S1.webp"
import S2 from "../image/S2.webp"
import S3 from "../image/S3.webp"
import S4 from "../image/S4.webp"
import S5 from "../image/S5.webp"
import S6 from "../image/S6.webp"
import S7 from "../image/S7.webp"
import S8 from "../image/S8.webp"
import S9 from "../image/S9.webp"
import S10 from "../image/S10.webp"
import S11 from "../image/S11.webp"
import S12 from "../image/S12.webp"
import S13 from "../image/S13.webp"
import S14 from "../image/S14.webp"
import S15 from "../image/S15.webp"
import S16 from "../image/S16.webp"
import S17 from "../image/S17.webp"
import S18 from "../image/S18.webp"
import S19 from "../image/S19.webp"
import S20 from "../image/S20.webp"
import S21 from "../image/S21.webp"
import S22 from "../image/S22.webp"
import S23 from "../image/S23.webp"
import S24 from "../image/S24.webp"
import S25 from "../image/S25.webp"
import S26 from "../image/S26.webp"
import S27 from "../image/S27.webp"
import S28 from "../image/S28.webp"

export const mensCasualShoes = [
  { id: 1, brand: "Nike", name: "Court Vision Low", price: 2999, originalPrice: 5999, discount: 50, image: S1, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 2, brand: "Adidas", name: "VL Court 2.0 Shoes", price: 3199, originalPrice: 6399, discount: 50, image: S2, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 3, brand: "Puma", name: "Smash V2 Sneakers", price: 2799, originalPrice: 5599, discount: 50, image: S3, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 4, brand: "Reebok", name: "Classic Leather Shoes", price: 3299, originalPrice: 6599, discount: 50, image: S4, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 5, brand: "New Balance", name: "574 Casual Shoes", price: 3499, originalPrice: 6999, discount: 50, image: S5, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 6, brand: "Skechers", name: "Go Walk Slip-Ons", price: 2899, originalPrice: 5799, discount: 50, image: S6, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 7, brand: "Woodland", name: "Leather Casual Loafers", price: 3299, originalPrice: 6599, discount: 50, image: S7, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 8, brand: "Red Tape", name: "Synthetic Lace-Up Shoes", price: 2399, originalPrice: 4799, discount: 50, image: S8, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 9, brand: "Bata", name: "Canvas Slip-Ons", price: 1999, originalPrice: 3999, discount: 50, image: S9, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 10, brand: "HRX", name: "Training Casual Shoes", price: 2199, originalPrice: 4399, discount: 50, image: S10, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 11, brand: "Sparx", name: "Mesh Lace-Up Sneakers", price: 1899, originalPrice: 3799, discount: 50, image: S11, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 12, brand: "Hush Puppies", name: "Loafers with Cushion Heel", price: 3299, originalPrice: 6599, discount: 50, image: S12, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 13, brand: "Campus", name: "Street Casual Sneakers", price: 1699, originalPrice: 3399, discount: 50, image: S13, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 14, brand: "Action", name: "Casual Walking Shoes", price: 1799, originalPrice: 3599, discount: 50, image: S14, rating: "3.9 ⭐⭐⭐⭑☆", rate: 3.9 },
  { id: 15, brand: "Fila", name: "Ray Tracer Casual Shoes", price: 2699, originalPrice: 5399, discount: 50, image: S15, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 16, brand: "Lee Cooper", name: "Leather Casual Sneakers", price: 2899, originalPrice: 5799, discount: 50, image: S16, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 17, brand: "Roadster", name: "Canvas High-Tops", price: 2199, originalPrice: 4399, discount: 50, image: S17, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 18, brand: "Jack & Jones", name: "Low-Top Lace-Ups", price: 2499, originalPrice: 4999, discount: 50, image: S18, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 19, brand: "Levi's", name: "Casual Slip-On Shoes", price: 2599, originalPrice: 5199, discount: 50, image: S19, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 20, brand: "U.S. Polo Assn.", name: "Lace-Up Plimsolls", price: 2399, originalPrice: 4799, discount: 50, image: S20, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 21, brand: "Tommy Hilfiger", name: "Suede Casual Shoes", price: 3999, originalPrice: 7999, discount: 50, image: S21, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 22, brand: "United Colors of Benetton", name: "Canvas Loafers", price: 2299, originalPrice: 4599, discount: 50, image: S22, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 23, brand: "Mufti", name: "Leather Slip-Ons", price: 2699, originalPrice: 5399, discount: 50, image: S23, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 24, brand: "Louis Philippe", name: "Smart Casual Loafers", price: 3199, originalPrice: 6399, discount: 50, image: S24, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 25, brand: "Allen Solly", name: "Casual Textured Slip-Ons", price: 2099, originalPrice: 4199, discount: 50, image: S25, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 26, brand: "H&M", name: "Classic Sneakers", price: 2299, originalPrice: 4599, discount: 50, image: S26, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 27, brand: "Mochi", name: "Textile Round-Toe Shoes", price: 2499, originalPrice: 4999, discount: 50, image: S27, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 28, brand: "Metro", name: "Canvas Mid-Tops", price: 2199, originalPrice: 4399, discount: 50, image: S28, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 }
];
const Mens12 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Branded Shorts and Trousers</h1>
        <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
          {mensCasualShoes.map((product) => (
            <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
              <Link to={`/men12/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
              <div className="main">
                <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                <p>{product.name.slice(0, 20)}...</p>
                <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                <p className="font-semibold">
                  ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <Link to={`/men12/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-blue-500 font-semibold">
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

export default Mens12;



