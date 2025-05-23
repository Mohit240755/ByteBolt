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

export const mensTshirts = [
  { id: 1, brand: "Nike", name: "Men's Sports T-Shirt", price: 899, originalPrice: 1999, discount: 55, image: C1, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 2, brand: "Adidas", name: "Men's Training Tee", price: 799, originalPrice: 1799, discount: 56, image: C2, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 3, brand: "Puma", name: "Graphic Print T-Shirt", price: 649, originalPrice: 1599, discount: 60, image: C3, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 4, brand: "Levi's", name: "Classic Fit Crew Neck", price: 999, originalPrice: 2299, discount: 57, image: C4, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 5, brand: "HRX", name: "Solid Slim Fit T-Shirt", price: 599, originalPrice: 1499, discount: 60, image: C5, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 6, brand: "Jack & Jones", name: "Printed Round Neck Tee", price: 749, originalPrice: 1699, discount: 56, image: C6, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 7, brand: "H&M", name: "Cotton Regular T-Shirt", price: 499, originalPrice: 1299, discount: 61, image: C7, rating: "3.9 ⭐⭐⭐⭑☆", rate: 3.9 },
  { id: 8, brand: "Zara", name: "Slim Fit T-Shirt", price: 899, originalPrice: 1999, discount: 55, image: C8, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 9, brand: "Roadster", name: "Printed Cotton T-Shirt", price: 449, originalPrice: 1199, discount: 63, image: C9, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 10, brand: "United Colors of Benetton", name: "Striped Regular Fit Tee", price: 699, originalPrice: 1799, discount: 61, image: C10, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 11, brand: "Tommy Hilfiger", name: "Logo Print T-Shirt", price: 1299, originalPrice: 2999, discount: 57, image: C11, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 12, brand: "Superdry", name: "Graphic Print Crew Neck", price: 1599, originalPrice: 3499, discount: 54, image: C12, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 13, brand: "Reebok", name: "Active Dry T-Shirt", price: 899, originalPrice: 1999, discount: 55, image: C13, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 14, brand: "Wrangler", name: "Solid Polo T-Shirt", price: 799, originalPrice: 1899, discount: 58, image: C14, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 15, brand: "Pepe Jeans", name: "Printed Crew Neck Tee", price: 699, originalPrice: 1799, discount: 61, image: C15, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 16, brand: "Calvin Klein", name: "Logo Slim Fit Tee", price: 1799, originalPrice: 3999, discount: 55, image: C16, rating: "4.7 ⭐⭐⭐⭐⭐", rate: 4.7 },
  { id: 17, brand: "Diesel", name: "Graphic Slim Fit Tee", price: 1899, originalPrice: 4299, discount: 56, image: C17, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 18, brand: "Flying Machine", name: "Printed Cotton T-Shirt", price: 599, originalPrice: 1499, discount: 60, image: C18, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 19, brand: "Allen Solly", name: "Solid Regular Fit Tee", price: 749, originalPrice: 1699, discount: 56, image: C19, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 20, brand: "Van Heusen", name: "Comfort Fit Polo T-Shirt", price: 899, originalPrice: 1999, discount: 55, image: C20, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 21, brand: "Spykar", name: "Printed Slim Fit T-Shirt", price: 699, originalPrice: 1799, discount: 61, image: C21, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 22, brand: "Mufti", name: "Crew Neck Cotton T-Shirt", price: 649, originalPrice: 1599, discount: 60, image: C22, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 23, brand: "Gap", name: "Classic Logo T-Shirt", price: 1199, originalPrice: 2599, discount: 54, image: C23, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 24, brand: "Aeropostale", name: "Solid V-Neck T-Shirt", price: 799, originalPrice: 1899, discount: 58, image: C24, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 25, brand: "Celio", name: "Cotton Graphic Tee", price: 849, originalPrice: 1999, discount: 58, image: C25, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 26, brand: "Marks & Spencer", name: "Premium Cotton T-Shirt", price: 1099, originalPrice: 2499, discount: 56, image: C26, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 27, brand: "U.S. Polo Assn.", name: "Striped Polo T-Shirt", price: 999, originalPrice: 2299, discount: 57, image: C27, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 28, brand: "Louis Philippe", name: "Solid Polo T-Shirt", price: 1199, originalPrice: 2699, discount: 56, image: C28, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 }
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
                  <Link to={`/men8a/${product.id}`}><button className="border rounded-2xl h-10 w-60 text-white  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500  hover:bg-blue-500 font-semibold">
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



