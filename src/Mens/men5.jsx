import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import AAG from "../image/aag.webp"
import AAH from "../image/aah.webp"
import AAI from "../image/aai.webp"
import AAJ from "../image/aaj.webp"
import AAK from "../image/aak.webp"
import AAL from "../image/aal.webp"
import AAM from "../image/aaq.webp"
import AAN from "../image/aan.webp"
import AAO from "../image/aao.webp"
import AAP from "../image/aap.webp"
import AAQ from "../image/aam.webp"
import AAR from "../image/aar.webp"
import AAS from "../image/aas.jpg"
import AAT from "../image/aat.webp"
import AAU from "../image/aau.webp"
import AAV from "../image/aav.webp"
import AAW from "../image/aaw.webp"
import AAX from "../image/aax.webp"
import AAY from "../image/aay.webp"
import AAZ from "../image/aaz.webp"
import BA from "../image/ba.webp"
import BB from "../image/bb.webp"
import BC from "../image/bc.webp"
import BD from "../image/bd.webp"
import BE from "../image/be.webp"
import BF from "../image/bf.webp"
import BG from "../image/bg.webp"
import BH from "../image/bh.webp"

export const nikeProducts = [
    { id: 1, brand: "Nike", name: "Nike Air Zoom Pegasus 39 Running Shoes", price: 7499, originalPrice: 9999, discount: 25, image: AAG, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 2, brand: "Nike", name: "Nike Revolution 6 NN Men's Running Shoes", price: 4299, originalPrice: 5999, discount: 28, image: AAH, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 3, brand: "Nike", name: "Nike Court Legacy Canvas Sneakers", price: 3699, originalPrice: 5299, discount: 30, image: AAI, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 4, brand: "Nike", name: "Nike Air Max SC Men's Shoes", price: 6499, originalPrice: 8999, discount: 28, image: AAJ, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 5, brand: "Nike", name: "Nike Renew Run 3 Men's Running Shoes", price: 4999, originalPrice: 7499, discount: 33, image: AAK, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 6, brand: "Nike", name: "Nike Dri-FIT Men's Training T-Shirt", price: 1999, originalPrice: 2999, discount: 33, image: AAL, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 7, brand: "Nike", name: "Nike Sportswear Club Fleece Hoodie", price: 3499, originalPrice: 4999, discount: 30, image: AAM, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 8, brand: "Nike", name: "Nike Dri-FIT Academy Soccer Shorts", price: 1799, originalPrice: 2499, discount: 28, image: AAN, rating: "4.1 | ⭐⭐⭐⭐☆" },
    { id: 9, brand: "Nike", name: "Nike Air Max Excee Men's Shoes", price: 5999, originalPrice: 8999, discount: 33, image: AAO, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 10, brand: "Nike", name: "Nike SB Chron 2 Skate Shoes", price: 3899, originalPrice: 5999, discount: 35, image: AAP, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 11, brand: "Nike", name: "Nike Court Royale 2 Sneakers", price: 3799, originalPrice: 5499, discount: 31, image: AAQ, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 12, brand: "Nike", name: "Nike Air Force 1 '07 Men's Shoes", price: 7999, originalPrice: 10999, discount: 27, image: AAR, rating: "4.8 | ⭐⭐⭐⭐⭐" },
    { id: 13, brand: "Nike", name: "Nike Dri-FIT Academy Drill Top", price: 2599, originalPrice: 3999, discount: 35, image: AAS, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 14, brand: "Nike", name: "Nike Club Joggers", price: 2999, originalPrice: 4499, discount: 33, image: AAT, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 15, brand: "Nike", name: "Nike ZoomX Vaporfly NEXT% 2", price: 16999, originalPrice: 21999, discount: 23, image: AAU, rating: "4.9 | ⭐⭐⭐⭐⭐" },
    { id: 16, brand: "Nike", name: "Nike Air Max 90 Men's Shoes", price: 8999, originalPrice: 12999, discount: 31, image: AAV, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 17, brand: "Nike", name: "Nike Challenger Running Shorts", price: 1999, originalPrice: 2799, discount: 29, image: AAW, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 18, brand: "Nike", name: "Nike SB Charge Canvas Skate Shoes", price: 3399, originalPrice: 4999, discount: 32, image: AAX, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 19, brand: "Nike", name: "Nike Yoga Dri-FIT Men's Tank", price: 1599, originalPrice: 2299, discount: 30, image: AAY, rating: "4.0 | ⭐⭐⭐⭐☆" },
    { id: 20, brand: "Nike", name: "Nike Air Monarch IV Training Shoes", price: 4799, originalPrice: 6999, discount: 32, image: AAZ, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 21, brand: "Nike", name: "Nike Tech Fleece Full-Zip Hoodie", price: 6999, originalPrice: 9999, discount: 30, image: BA, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 22, brand: "Nike", name: "Nike Sportswear Club Cargo Pants", price: 3499, originalPrice: 4999, discount: 30, image: BB, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 23, brand: "Nike", name: "Nike Air Max Alpha Trainer 5", price: 5499, originalPrice: 7999, discount: 31, image: BC, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 24, brand: "Nike", name: "Nike Zoom Fly 5 Running Shoes", price: 8999, originalPrice: 12999, discount: 31, image: BD, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 25, brand: "Nike", name: "Nike Dri-FIT Legend Training T-Shirt", price: 1899, originalPrice: 2699, discount: 30, image: BE, rating: "4.1 | ⭐⭐⭐⭐☆" },
    { id: 26, brand: "Nike", name: "Nike Flex Runner 2 Kids' Shoes", price: 3199, originalPrice: 4499, discount: 29, image: BF, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 27, brand: "Nike", name: "Nike Sportswear Club Fleece Sweatpants", price: 2999, originalPrice: 4499, discount: 33, image: BG, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 28, brand: "Nike", name: "Nike Air Max Plus Men's Shoes", price: 9999, originalPrice: 13999, discount: 29, image: BH, rating: "4.8 | ⭐⭐⭐⭐⭐" },
  ];
  

  const Mens5 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
          <h1 className="text-center pt-3 border bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white h-20 text-5xl font-bold font-serif">Nike Product</h1>
          <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>
    
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {nikeProducts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men5/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men5/${product.id}`}><button className="border rounded-2xl h-10 w-60 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 hover:bg-gray-500 font-semibold">
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

export default Mens5;