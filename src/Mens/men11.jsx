import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import ST1 from "../image/ST1.webp"
import ST2 from "../image/ST2.webp"
import ST3 from "../image/ST3.webp"
import ST4 from "../image/ST4.webp"
import ST5 from "../image/ST5.webp"
import ST6 from "../image/ST^.webp"
import ST7 from "../image/ST7.webp"
import ST8 from "../image/ST8.webp"
import ST9 from "../image/ST9.webp"
import ST10 from "../image/ST10.webp"
import ST11 from "../image/ST11.webp"
import ST12 from "../image/ST12.webp"
import ST13 from "../image/ST13.webp"
import ST14 from "../image/ST14.webp"
import ST15 from "../image/ST15.webp"
import ST16 from "../image/ST16.webp"
import ST17 from "../image/ST17.webp"
import ST18 from "../image/ST18.webp"
import ST19 from "../image/ST19.webp"
import ST20 from "../image/ST20.webp"
import ST21 from "../image/ST21.webp"
import ST22 from "../image/ST22.webp"
import ST23 from "../image/ST23.webp"
import ST24 from "../image/ST24.webp"
import ST25 from "../image/ST25.webp"
import ST26 from "../image/ST26.webp"
import ST27 from "../image/ST27.webp"
import ST28 from "../image/ST28.webp"

export const mensBottomWear = [
  { id: 1, brand: "Nike", name: "Dri-FIT Training Shorts", price: 1099, originalPrice: 2199, discount: 50, image: ST1, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 2, brand: "Adidas", name: "Climalite Sports Shorts", price: 999, originalPrice: 1999, discount: 50, image: ST2, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 3, brand: "Puma", name: "Knitted Slim Fit Shorts", price: 899, originalPrice: 1799, discount: 50, image: ST3, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 4, brand: "HRX", name: "Quick Dry Sports Shorts", price: 799, originalPrice: 1599, discount: 50, image: ST4, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 5, brand: "H&M", name: "Regular Fit Chino Shorts", price: 1299, originalPrice: 2599, discount: 50, image: ST5, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 6, brand: "Zara", name: "Tailored Fit Trousers", price: 1999, originalPrice: 3999, discount: 50, image: ST6, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 7, brand: "Levi's", name: "Slim Fit Cotton Shorts", price: 1099, originalPrice: 2199, discount: 50, image: ST7, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 8, brand: "Allen Solly", name: "Flat-Front Formal Trousers", price: 1599, originalPrice: 3199, discount: 50, image: ST8, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 9, brand: "Van Heusen", name: "Slim Fit Formal Trousers", price: 1499, originalPrice: 2999, discount: 50, image: ST9, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 10, brand: "Jack & Jones", name: "Casual Drawstring Shorts", price: 999, originalPrice: 1999, discount: 50, image: ST10, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 11, brand: "U.S. Polo Assn.", name: "Solid Twill Trousers", price: 1399, originalPrice: 2799, discount: 50, image: ST11, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 12, brand: "Roadster", name: "Casual Cargo Shorts", price: 899, originalPrice: 1799, discount: 50, image: ST12, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 13, brand: "Wrangler", name: "Slim Fit Stretch Trousers", price: 1699, originalPrice: 3399, discount: 50, image: ST13, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 14, brand: "Flying Machine", name: "Cuffed Jogger Trousers", price: 1199, originalPrice: 2399, discount: 50, image: ST14, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 15, brand: "Reebok", name: "Athletic Gym Shorts", price: 999, originalPrice: 1999, discount: 50, image: ST15, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 16, brand: "Superdry", name: "Cotton Cargo Trousers", price: 1899, originalPrice: 3799, discount: 50, image: ST16, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 17, brand: "Calvin Klein", name: "Tech Fit Slim Trousers", price: 2199, originalPrice: 4399, discount: 50, image: ST17, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 18, brand: "Pepe Jeans", name: "Washed Cotton Shorts", price: 1099, originalPrice: 2199, discount: 50, image: ST18, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 19, brand: "Gap", name: "Relaxed Fit Joggers", price: 1399, originalPrice: 2799, discount: 50, image: ST19, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 20, brand: "Diesel", name: "Tapered Fit Casual Trousers", price: 2099, originalPrice: 4199, discount: 50, image: ST20, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 21, brand: "Louis Philippe", name: "Checked Slim Trousers", price: 1799, originalPrice: 3599, discount: 50, image: ST21, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 22, brand: "Marks & Spencer", name: "Stretch Formal Trousers", price: 1699, originalPrice: 3399, discount: 50, image: ST22, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 23, brand: "Tommy Hilfiger", name: "Chino Style Shorts", price: 1399, originalPrice: 2799, discount: 50, image: ST23, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 24, brand: "Celio", name: "Casual Drawstring Joggers", price: 1199, originalPrice: 2399, discount: 50, image: ST24, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 25, brand: "Peter England", name: "Regular Fit Chinos", price: 1399, originalPrice: 2799, discount: 50, image: ST25, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 26, brand: "Mufti", name: "Utility Cargo Shorts", price: 999, originalPrice: 1999, discount: 50, image: ST26, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 27, brand: "Numero Uno", name: "Slim Fit Joggers", price: 1099, originalPrice: 2199, discount: 50, image: ST27, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 28, brand: "Denizen", name: "Elastic Waist Cotton Shorts", price: 899, originalPrice: 1799, discount: 50, image: ST28, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 }
];





const Mens11 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Branded Shorts and Trousers</h1>
        <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
          {mensBottomWear.map((product) => (
            <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
              <Link to={`/men11/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
              <div className="main">
                <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                <p>{product.name.slice(0, 20)}...</p>
                <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                <p className="font-semibold">
                  ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <Link to={`/men11/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-blue-500 font-semibold">
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

export default Mens11;



