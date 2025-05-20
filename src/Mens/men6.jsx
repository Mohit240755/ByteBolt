import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import A1 from "../image/a1.webp"
import A2 from "../image/a2.webp"
import A3 from "../image/a3.webp"
import A4 from "../image/a4.webp"
import A5 from "../image/a5.webp"
import A6 from "../image/a6.webp"
import A7 from "../image/a7.webp"
import A8 from "../image/a8.webp"
import A9 from "../image/a9.webp"
import A10 from "../image/a10.webp"
import A11 from "../image/a11.webp"
import A12 from "../image/a12.webp"
import A13 from "../image/a13.jpg"
import A14 from "../image/a14.webp"
import A15 from "../image/a15.webp"
import A16 from "../image/a16.webp"
import A17 from "../image/a17.webp"
import A18 from "../image/a18.webp"
import A19 from "../image/a19.webp"
import A20 from "../image/a20.webp"
import A21 from "../image/a21.webp"
import A22 from "../image/a22.webp"
import A23 from "../image/a23.webp"
import A24 from "../image/a24.webp"
import A25 from "../image/a25.webp"
import A26 from "../image/a26.webp"
import A27 from "../image/a27.jpg"
import A28 from "../image/a28.jpg"

export const pumaProducts = [
    { id: 1, brand: "Puma", name: "Men's Essentials Logo T-Shirt", price: 1299, originalPrice: 1999, discount: 35, image: A1, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 2, brand: "Puma", name: "Men's Performance DryCELL T-Shirt", price: 1599, originalPrice: 2499, discount: 36, image: A2, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 3, brand: "Puma", name: "Men's Rebel Block T-Shirt", price: 1399, originalPrice: 2199, discount: 36, image: A3, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 4, brand: "Puma", name: "Men's Essentials Slim Fit Pants", price: 2499, originalPrice: 3999, discount: 37, image: A4, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 5, brand: "Puma", name: "Men's EVOSTRIPE Pants", price: 2799, originalPrice: 4499, discount: 38, image: A5, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 6, brand: "Puma", name: "Men's Knit Cargo Pants", price: 2899, originalPrice: 4699, discount: 38, image: A6, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 7, brand: "Puma", name: "Men's Track Joggers", price: 2599, originalPrice: 4299, discount: 40, image: A7, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 8, brand: "Puma", name: "Men's Essentials Shorts", price: 1699, originalPrice: 2799, discount: 39, image: A8, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 9, brand: "Puma", name: "Men's Summer Cargo Shorts", price: 1899, originalPrice: 3199, discount: 40, image: A9, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 10, brand: "Puma", name: "Men's Dri-Fit Performance Shorts", price: 1799, originalPrice: 2999, discount: 40, image: A10, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 11, brand: "Puma", name: "Men's Essential Polo T-Shirt", price: 1699, originalPrice: 2799, discount: 39, image: A11, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 12, brand: "Puma", name: "Men's Iconic MCS Track Pants", price: 2899, originalPrice: 4999, discount: 42, image: A12, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 13, brand: "Puma", name: "Men's Sportswear Cargo Pants", price: 2999, originalPrice: 5299, discount: 43, image: A13, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 14, brand: "Puma", name: "Men's Active Training T-Shirt", price: 1499, originalPrice: 2399, discount: 38, image: A14, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 15, brand: "Puma", name: "Men's Logo Graphic Tee", price: 1399, originalPrice: 2199, discount: 36, image: A15, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 16, brand: "Puma", name: "Men's ESS Logo Pants", price: 2599, originalPrice: 4299, discount: 40, image: A16, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 17, brand: "Puma", name: "Men's Amplified Track Pants", price: 2799, originalPrice: 4599, discount: 39, image: A17, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 18, brand: "Puma", name: "Men's Essentials Fleece Shorts", price: 1799, originalPrice: 2999, discount: 40, image: A18, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 19, brand: "Puma", name: "Men's  Essentials Tank Top", price: 1199, originalPrice: 1999, discount: 40, image: A19, rating: "4.2 | ⭐⭐⭐⭐☆" },
    { id: 20, brand: "Puma", name: "Men's ESS Big Logo Tee", price: 1399, originalPrice: 2299, discount: 39, image: A20, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 21, brand: "Puma", name: "Men's Better Sports Shorts", price: 1899, originalPrice: 3199, discount: 41, image: A21, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 22, brand: "Puma", name: "Men's Graphic Tee Sportswear", price: 1499, originalPrice: 2499, discount: 40, image: A22, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 23, brand: "Puma", name: "Men's Drycell Training Shorts", price: 1799, originalPrice: 2999, discount: 40, image: A23, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 24, brand: "Puma", name: "Men's Summer Casual Cargo Pants", price: 3199, originalPrice: 5399, discount: 41, image: A24, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 25, brand: "Puma", name: "Men's Archive T7 Track Pants", price: 2999, originalPrice: 4999, discount: 40, image: A25, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 26, brand: "Puma", name: "Men's Evo Core Sweatpants", price: 2799, originalPrice: 4599, discount: 39, image: A26, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 27, brand: "Puma", name: "Men's Essentials Cargo Shorts", price: 1899, originalPrice: 3199, discount: 41, image: A27, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 28, brand: "Puma", name: "Men's Performance Shorts", price: 1699, originalPrice: 2799, discount: 39, image: A28, rating: "4.4 | ⭐⭐⭐⭐⭑" },
  ];
  
  




const Mens6 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
          <h1 className="text-center pt-3 border  bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 text-white h-20 text-5xl font-bold font-serif">Puma Product</h1>
          <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>
    
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {pumaProducts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men6/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men6/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:bg-gray-500 font-semibold">
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

export default Mens6;