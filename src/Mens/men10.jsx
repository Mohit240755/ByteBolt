import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import C1 from "../image/C1.webp"
import C2 from "../image/C2.webp"
import C3 from "../image/C3.webp"
import C4 from "../image/C4.webp"
import C5 from "../image/C5.webp"
import C6 from "../image/C6.webp"
import C7 from "../image/C7.webp"
import C8 from "../image/C8.webp"
import C9 from "../image/C9.webp"
import C10 from "../image/C10.webp"
import C11 from "../image/C11.webp"
import C12 from "../image/C12.webp"
import C13 from "../image/C13.webp"
import C14 from "../image/C14.webp"
import C15 from "../image/C15.webp"
import C16 from "../image/C16.webp"
import C17 from "../image/C17.webp"
import C18 from "../image/C18.webp"
import C19 from "../image/C19.webp"
import C20 from "../image/C20.webp"
import C21 from "../image/C21.webp"
import C22 from "../image/C22.webp"
import C23 from "../image/C23.webp"
import C24 from "../image/C24.webp"
import C25 from "../image/C25.webp"
import C26 from "../image/C26.webp"
import C27 from "../image/C27.webp"
import C28 from "../image/C28.webp"

export const mensJeans = [
  { id: 1, brand: "Levi's", name: "Slim Fit Stretch Jeans", price: 1699, originalPrice: 3499, discount: 52, image: J1, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 2, brand: "Wrangler", name: "Regular Fit Denim", price: 1499, originalPrice: 2999, discount: 50, image: J2, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 3, brand: "Pepe Jeans", name: "Straight Fit Jeans", price: 1399, originalPrice: 2799, discount: 50, image: J3, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 4, brand: "Jack & Jones", name: "Skinny Fit Jeans", price: 1599, originalPrice: 3199, discount: 50, image: J4, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 5, brand: "Spykar", name: "Distressed Jeans", price: 1299, originalPrice: 2599, discount: 50, image: J5, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 6, brand: "Roadster", name: "Washed Slim Fit Jeans", price: 1199, originalPrice: 2399, discount: 50, image: J6, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 7, brand: "H&M", name: "Tapered Fit Jeans", price: 1799, originalPrice: 3599, discount: 50, image: J7, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 8, brand: "Zara", name: "Skinny Stretch Denim", price: 1999, originalPrice: 3999, discount: 50, image: J8, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 9, brand: "Diesel", name: "Dark Wash Jeans", price: 2499, originalPrice: 4999, discount: 50, image: J9, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 10, brand: "Calvin Klein", name: "Tapered Fit Jeans", price: 2299, originalPrice: 4599, discount: 50, image: J10, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 11, brand: "U.S. Polo Assn.", name: "Straight Fit Denim", price: 1599, originalPrice: 3199, discount: 50, image: J11, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 12, brand: "Mufti", name: "Low Rise Slim Fit Jeans", price: 1299, originalPrice: 2599, discount: 50, image: J12, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 13, brand: "HRX", name: "High Rise Fit Jeans", price: 1099, originalPrice: 2199, discount: 50, image: J13, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 14, brand: "Flying Machine", name: "Tapered Fit Blue Jeans", price: 1399, originalPrice: 2799, discount: 50, image: J14, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 15, brand: "Van Heusen", name: "Black Slim Fit Jeans", price: 1699, originalPrice: 3399, discount: 50, image: J15, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 16, brand: "Allen Solly", name: "Stone Wash Jeans", price: 1199, originalPrice: 2399, discount: 50, image: J16, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 17, brand: "Gap", name: "Classic Blue Denim", price: 1499, originalPrice: 2999, discount: 50, image: J17, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 18, brand: "Louis Philippe", name: "Clean Look Jeans", price: 1899, originalPrice: 3799, discount: 50, image: J18, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 19, brand: "Superdry", name: "Vintage Slim Jeans", price: 2199, originalPrice: 4399, discount: 50, image: J19, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 20, brand: "Aeropostale", name: "Distressed Denim", price: 1299, originalPrice: 2599, discount: 50, image: J20, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 21, brand: "Celio", name: "Light Wash Jeans", price: 1199, originalPrice: 2399, discount: 50, image: J21, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 22, brand: "Tommy Hilfiger", name: "Logo Patch Jeans", price: 2399, originalPrice: 4799, discount: 50, image: J22, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 23, brand: "Marks & Spencer", name: "Regular Fit Jeans", price: 1599, originalPrice: 3199, discount: 50, image: J23, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 24, brand: "Peter England", name: "Mid Rise Denim", price: 1099, originalPrice: 2199, discount: 50, image: J24, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 25, brand: "Lee", name: "Slim Fit Clean Look", price: 1499, originalPrice: 2999, discount: 50, image: J25, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 26, brand: "Numero Uno", name: "Tapered Fit Stone Wash", price: 1199, originalPrice: 2399, discount: 50, image: J26, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 27, brand: "Denizen", name: "Comfort Fit Jeans", price: 1399, originalPrice: 2799, discount: 50, image: J27, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 28, brand: "Killer", name: "Black Denim Jeans", price: 1499, originalPrice: 2999, discount: 50, image: J28, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 }
];



  
  const Mens8a = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
          <h1 className="text-center pt-3 border bg-gradient-to-r from-rose-300 via-amber-200 to-pink-400 text-white h-20 text-5xl font-bold font-serif">Branded T-Shirts</h1>
          <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {mensTshirts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men8a/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men8a/${product.id}`}><button className="border rounded-2xl h-10 w-60 text-white bg-gradient-to-r from-rose-300 via-amber-200 to-pink-400 hover:bg-blue-500 font-semibold">
                    BUY
                  </button></Link> 
                </div>
              </div>
            ))}
          </div>
        </div> 
        <Footer/>
        </>
      );
}

export default Mens8a;



