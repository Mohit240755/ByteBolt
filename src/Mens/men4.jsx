import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import AE from "../image/ae.webp"
import AF from "../image/af.webp"
import AG from "../image/ag.webp"
import AH from "../image/ah.webp"
import AI from "../image/ai.webp"
import AJ from "../image/aj.webp"
import AK from "../image/ak.webp"
import AL from "../image/al.webp"
import AM from "../image/am.webp"
import AN from "../image/an.webp"
import AO from "../image/ao.webp"
import AP from "../image/ap.webp"
import AQ from "../image/aq.webp"
import AR from "../image/ar.webp"
import AS from "../image/as.webp"
import AT from "../image/at.webp"
import AU from "../image/au.webp"
import AV from "../image/av.webp"
import AW from "../image/aw.webp"
import AX from "../image/ay.webp"
import AY from "../image/az.webp"
import AZ from "../image/ax.webp"
import AAA from "../image/aaa.webp"
import AAB from "../image/aab.webp"
import AAC from "../image/aac.webp"
import AAD from "../image/aad.webp"
import AAE from "../image/aae.webp"
import AAF from "../image/aaf.webp"

export const tommyHilfigerProducts = [
    { id: 1, brand: "Tommy Hilfiger", name: "Classic White Sneakers For Men", price: 3599, originalPrice: 7999, discount: 55, image: AE, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 2, brand: "Tommy Hilfiger", name: "Striped Polo T-Shirt For Men", price: 2499, originalPrice: 4999, discount: 50, image: AF, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 3, brand: "Tommy Hilfiger", name: "Denim Slim Fit Jeans For Men", price: 4599, originalPrice: 8999, discount: 49, image: AG, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 4, brand: "Tommy Hilfiger", name: "Casual Lace-Up Shoes For Men", price: 3899, originalPrice: 6999, discount: 44, image: AH, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 5, brand: "Tommy Hilfiger", name: "Logo Printed Hoodie For Men", price: 3199, originalPrice: 6499, discount: 51, image: AI, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 6, brand: "Tommy Hilfiger", name: "Lightweight Running Shoes For Men", price: 4299, originalPrice: 7999, discount: 46, image: AJ, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 7, brand: "Tommy Hilfiger", name: "Slim Fit Formal Shirt For Men", price: 2899, originalPrice: 5799, discount: 50, image: AK, rating: "4.1 | ⭐⭐⭐⭐☆" },
    { id: 8, brand: "Tommy Hilfiger", name: "Casual Shorts For Men", price: 2199, originalPrice: 3999, discount: 45, image: AL, rating: "3.9 | ⭐⭐⭐⭑☆" },
    { id: 9, brand: "Tommy Hilfiger", name: "Suede Loafers For Men", price: 3699, originalPrice: 7499, discount: 51, image: AM, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 10, brand: "Tommy Hilfiger", name: "Casual Leather Belt For Men", price: 1599, originalPrice: 2999, discount: 47, image: AN, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 11, brand: "Tommy Hilfiger", name: "Sports Graphic T-Shirt For Men", price: 1799, originalPrice: 3499, discount: 49, image: AO, rating: "4.0 | ⭐⭐⭐⭐☆" },
    { id: 12, brand: "Tommy Hilfiger", name: "Slim Fit Chinos For Men", price: 2899, originalPrice: 5999, discount: 52, image: AP, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 13, brand: "Tommy Hilfiger", name: "Leather Wallet For Men", price: 1299, originalPrice: 2499, discount: 48, image: AQ, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 14, brand: "Tommy Hilfiger", name: "Bomber Jacket For Men", price: 4899, originalPrice: 9999, discount: 51, image: AR, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 15, brand: "Tommy Hilfiger", name: "Cotton Cap For Men", price: 899, originalPrice: 1999, discount: 55, image: AS, rating: "4.1 | ⭐⭐⭐⭐☆" },
    { id: 16, brand: "Tommy Hilfiger", name: "Printed Swim Shorts For Men", price: 1999, originalPrice: 3999, discount: 50, image: AT, rating: "4.0 | ⭐⭐⭐⭐☆" },
    { id: 17, brand: "Tommy Hilfiger", name: "Running Sneakers For Men", price: 4499, originalPrice: 8499, discount: 47, image: AU, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 18, brand: "Tommy Hilfiger", name: "Padded Jacket For Men", price: 5499, originalPrice: 10999, discount: 50, image: AV, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 19, brand: "Tommy Hilfiger", name: "Short Sleeve Polo Shirt For Men", price: 2599, originalPrice: 4999, discount: 48, image: AW, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 20, brand: "Tommy Hilfiger", name: "Rugby Stripe T-Shirt For Men", price: 2799, originalPrice: 5499, discount: 49, image: AX, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 21, brand: "Tommy Hilfiger", name: "Essential Crew Neck T-Shirt For Men", price: 1899, originalPrice: 3599, discount: 47, image: AY, rating: "4.0 | ⭐⭐⭐⭐☆" },
    { id: 22, brand: "Tommy Hilfiger", name: "Tailored Suit Jacket For Men", price: 7499, originalPrice: 14999, discount: 50, image: AZ, rating: "4.8 | ⭐⭐⭐⭐⭐" },
    { id: 23, brand: "Tommy Hilfiger", name: "Slim Fit Suit Pants For Men", price: 3999, originalPrice: 7999, discount: 50, image: AAA, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 24, brand: "Tommy Hilfiger", name: "Regular Fit Jeans For Men", price: 3599, originalPrice: 7499, discount: 52, image: AAB, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 25, brand: "Tommy Hilfiger", name: "Graphic Hoodie For Men", price: 3299, originalPrice: 6699, discount: 51, image: AAC, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 26, brand: "Tommy Hilfiger", name: "Suede Chelsea Boots For Men", price: 5999, originalPrice: 11999, discount: 50, image: AAD, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 27, brand: "Tommy Hilfiger", name: "Slim Fit Chino Shorts For Men", price: 2499, originalPrice: 4999, discount: 50, image: AAE, rating: "4.1 | ⭐⭐⭐⭐☆" },
    { id: 28, brand: "Tommy Hilfiger", name: "Cotton Bomber Jacket For Men", price: 5299, originalPrice: 10499, discount: 50, image: AAF, rating: "4.7 | ⭐⭐⭐⭐⭐" },
  ];
  



const Mens4 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">
  Tommy and Hilfiger
</h1>
          <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>
    
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {tommyHilfigerProducts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men4/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men4/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white font-semibold">
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

export default Mens4;
