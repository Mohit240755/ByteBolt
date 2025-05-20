import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import B1 from "../image/b1.webp"
import B2 from "../image/b2.webp"
import B3 from "../image/b3.webp"
import B4 from "../image/b4.webp"
import B5 from "../image/b5.webp"
import B6 from "../image/b6.webp"
import B7 from "../image/b7.webp"
import B8 from "../image/b8.webp"
import B9 from "../image/b9.webp"
import B10 from "../image/b10.webp"
import B11 from "../image/b11.webp"
import B12 from "../image/b12.webp"
import B13 from "../image/b13.webp"
import B14 from "../image/b14.webp"
import B15 from "../image/b15.webp"
import B16 from "../image/b16.webp"
import B17 from "../image/b17.webp"
import B18 from "../image/b18.webp"
import B19 from "../image/b19.webp"
import B20 from "../image/b20.webp"
import B21 from "../image/b21.webp"
import B22 from "../image/b22.webp"
import B23 from "../image/b23.webp"
import B24 from "../image/b24.webp"
import B25 from "../image/b25.webp"
import B26 from "../image/b26.webp"
import B27 from "../image/b27.webp"
import B28 from "../image/b28.webp"

export const shirts = [
    { id: 1, brand: "Levi's", name: "Slim Fit Casual Shirt", price: 999, originalPrice: 2599, discount: 62, image: B1, rating: "4.4 ⭐⭐⭐⭐☆" },
    { id: 2, brand: "Allen Solly", name: "Regular Fit Cotton Shirt", price: 899, originalPrice: 1999, discount: 55, image: B2, rating: "4.2 ⭐⭐⭐⭐☆" },
    { id: 3, brand: "Louis Philippe", name: "Formal Slim Fit Shirt", price: 1299, originalPrice: 3199, discount: 59, image: B3, rating: "4.5 ⭐⭐⭐⭐⭑" },
    { id: 4, brand: "Peter England", name: "Casual Checked Shirt", price: 749, originalPrice: 1699, discount: 56, image: B4, rating: "4.1 ⭐⭐⭐⭐☆" },
    { id: 5, brand: "Van Heusen", name: "Solid Formal Shirt", price: 1099, originalPrice: 2799, discount: 61, image: B5, rating: "4.3 ⭐⭐⭐⭐☆" },
    { id: 6, brand: "U.S. Polo Assn.", name: "Checked Casual Shirt", price: 1199, originalPrice: 2999, discount: 60, image: B6, rating: "4.2 ⭐⭐⭐⭐☆" },
    { id: 7, brand: "Jack & Jones", name: "Denim Shirt", price: 1399, originalPrice: 3599, discount: 61, image: B7, rating: "4.4 ⭐⭐⭐⭐☆" },
    { id: 8, brand: "Wrangler", name: "Western Denim Shirt", price: 1299, originalPrice: 3399, discount: 62, image: B8, rating: "4.3 ⭐⭐⭐⭐☆" },
    { id: 9, brand: "Lee", name: "Slim Fit Checked Shirt", price: 999, originalPrice: 2599, discount: 62, image: B9, rating: "4.2 ⭐⭐⭐⭐☆" },
    { id: 10, brand: "Arrow", name: "Formal Plain Shirt", price: 999, originalPrice: 2399, discount: 58, image: B10, rating: "4.0 ⭐⭐⭐⭐☆" },
    { id: 11, brand: "Flying Machine", name: "Casual Printed Shirt", price: 849, originalPrice: 1999, discount: 58, image: B11, rating: "4.1 ⭐⭐⭐⭐☆" },
    { id: 12, brand: "Spykar", name: "Slim Fit Denim Shirt", price: 1199, originalPrice: 2999, discount: 60, image: B12, rating: "4.3 ⭐⭐⭐⭐☆" },
    { id: 13, brand: "Pepe Jeans", name: "Solid Casual Shirt", price: 1099, originalPrice: 2599, discount: 58, image: B13, rating: "4.4 ⭐⭐⭐⭐☆" },
    { id: 14, brand: "Roadster", name: "Checked Cotton Shirt", price: 699, originalPrice: 1799, discount: 61, image: B14, rating: "4.0 ⭐⭐⭐⭐☆" },
    { id: 15, brand: "H&M", name: "Oversized Cotton Shirt", price: 999, originalPrice: 2199, discount: 55, image: B15, rating: "4.3 ⭐⭐⭐⭐☆" },
    { id: 16, brand: "Uniqlo", name: "Oxford Casual Shirt", price: 1099, originalPrice: 2399, discount: 54, image: B16, rating: "4.5 ⭐⭐⭐⭐⭑" },
    { id: 17, brand: "Zara", name: "Slim Fit Linen Shirt", price: 1599, originalPrice: 3999, discount: 60, image: B17, rating: "4.6 ⭐⭐⭐⭐⭐" },
    { id: 18, brand: "Mango", name: "Regular Fit Striped Shirt", price: 1499, originalPrice: 3599, discount: 58, image: B18, rating: "4.4 ⭐⭐⭐⭐☆" },
    { id: 19, brand: "Superdry", name: "Casual Flannel Shirt", price: 1799, originalPrice: 4199, discount: 57, image: B19, rating: "4.5 ⭐⭐⭐⭐⭑" },
    { id: 20, brand: "Celio", name: "Checked Regular Fit Shirt", price: 1199, originalPrice: 2799, discount: 57, image: B20, rating: "4.2 ⭐⭐⭐⭐☆" },
    { id: 21, brand: "Selected Homme", name: "Cotton Poplin Shirt", price: 1499, originalPrice: 3799, discount: 60, image: B21, rating: "4.4 ⭐⭐⭐⭐☆" },
    { id: 22, brand: "Lacoste", name: "Premium Polo Shirt", price: 2499, originalPrice: 5999, discount: 58, image: B22, rating: "4.7 ⭐⭐⭐⭐⭐" },
    { id: 23, brand: "Calvin Klein", name: "Slim Fit Dress Shirt", price: 1999, originalPrice: 4999, discount: 60, image: B23, rating: "4.6 ⭐⭐⭐⭐⭐" },
    { id: 24, brand: "Tommy Hilfiger", name: "Striped Cotton Shirt", price: 1899, originalPrice: 4599, discount: 59, image: B24, rating: "4.5 ⭐⭐⭐⭐⭑" },
    { id: 25, brand: "Gap", name: "Oxford Shirt", price: 1099, originalPrice: 2399, discount: 54, image: B25, rating: "4.3 ⭐⭐⭐⭐☆" },
    { id: 26, brand: "Marks & Spencer", name: "Formal Cotton Shirt", price: 1299, originalPrice: 3199, discount: 59, image: B26, rating: "4.4 ⭐⭐⭐⭐☆" },
    { id: 27, brand: "Massimo Dutti", name: "Premium Linen Shirt", price: 2199, originalPrice: 5599, discount: 60, image: B27, rating: "4.7 ⭐⭐⭐⭐⭐" },
    { id: 28, brand: "Hollister", name: "Casual Plaid Shirt", price: 1199, originalPrice: 2999, discount: 60, image: B28, rating: "4.3 ⭐⭐⭐⭐☆" },
  ];
  

  
  const Mens9 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
          <h1 className="text-center pt-3 border bg-gradient-to-r from-green-800 via-emerald-600 to-lime-500 text-white h-20 text-5xl font-bold font-serif">Branded Shrits</h1>
          <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {shirts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men9/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men9/${product.id}`}><button className="border rounded-2xl h-10 w-60 text-white bg-gradient-to-r from-green-800 via-emerald-600 to-lime-500 hover:bg-blue-500 font-semibold">
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

export default Mens9;