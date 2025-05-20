import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import A57 from "../image/a57.jpeg"
import A58 from "../image/a58.webp"
import A59 from "../image/a59.webp"
import A60 from "../image/a60.webp"
import A61 from "../image/a61.webp"
import A62 from "../image/a62a.webp"
import A63 from "../image/a63.avif"
import A64 from "../image/a64.webp"
import A65 from "../image/a65.webp"
import A66 from "../image/a66.webp"
import A67 from "../image/a67.webp"
import A68 from "../image/A68.webp"
import A69 from "../image/a69.webp"
import A70 from "../image/a70.webp"
import A71 from "../image/a71.webp"
import A72 from "../image/a72.webp"
import A73 from "../image/a73.webp"
import A74 from "../image/a74.webp"
import A75 from "../image/a75.webp"
import A76 from "../image/a76.webp"
import A77 from "../image/a77.webp"
import A78 from "../image/a78.webp"
import A79 from "../image/a79.webp"
import A80 from "../image/a80.webp"
import A81 from "../image/a81.webp"
import A82 from "../image/a82.webp"
import A83 from "../image/a83.webp"
import A84 from "../image/a84.webp"

export const crocsProducts = [
    { id: 1, brand: "Crocs", name: "Classic Clog", price: 2499, originalPrice: 3999, discount: 38, image: A57, rating: "4.5 ⭐⭐⭐⭐⭐" },
    { id: 2, brand: "Nike", name: "Jordan Hydro Croc", price: 3199, originalPrice: 4999, discount: 36, image: A58, rating: "4.6 ⭐⭐⭐⭐⭐" },
    { id: 3, brand: "Adidas", name: "Adilette Clog", price: 2799, originalPrice: 4599, discount: 39, image: A59, rating: "4.4 ⭐⭐⭐⭐" },
    { id: 4, brand: "Skechers", name: "Foamies Clog", price: 1999, originalPrice: 3499, discount: 43, image:A60, rating: "4.2 ⭐⭐⭐⭐" },
    { id: 5, brand: "Puma", name: "Cool Cat Clog", price: 1899, originalPrice: 2999, discount: 37, image: A61, rating: "4.1 ⭐⭐⭐⭐" },
    { id: 6, brand: "Under Armour", name: "UA Ignite Clog", price: 2299, originalPrice: 3999, discount: 42, image: A62, rating: "4.3 ⭐⭐⭐⭐" },
    { id: 7, brand: "Fila", name: "Slide Clog", price: 1799, originalPrice: 2799, discount: 35, image: A63, rating: "4.0 ⭐⭐⭐⭐" },
    { id: 8, brand: "Reebok", name: "Clog Lite", price: 2099, originalPrice: 3499, discount: 40, image: A64, rating: "4.2 ⭐⭐⭐⭐" },
    { id: 9, brand: "Campus", name: "Slip On Clog", price: 1599, originalPrice: 2599, discount: 38, image: A65, rating: "3.9 ⭐⭐⭐⭐" },
    { id: 10, brand: "Bata", name: "Comfort Clog", price: 1499, originalPrice: 2499, discount: 40, image: A66, rating: "4.0 ⭐⭐⭐⭐" },
    { id: 11, brand: "Liberty", name: "Casual Clog", price: 1399, originalPrice: 2399, discount: 42, image: A67, rating: "3.8 ⭐⭐⭐" },
    { id: 12, brand: "Action", name: "Easy Wear Clog", price: 1299, originalPrice: 2199, discount: 41, image: A68, rating: "3.9 ⭐⭐⭐⭐" },
    { id: 13, brand: "Sparx", name: "Flex Clog", price: 1199, originalPrice: 2099, discount: 43, image: A69, rating: "4.1 ⭐⭐⭐⭐" },
    { id: 14, brand: "Relaxo", name: "Daily Wear Clog", price: 999, originalPrice: 1999, discount: 50, image: A70, rating: "4.0 ⭐⭐⭐⭐" },
    { id: 15, brand: "Paragon", name: "Outdoor Clog", price: 1099, originalPrice: 1899, discount: 42, image: A71, rating: "3.7 ⭐⭐⭐" },
    { id: 16, brand: "Lancer", name: "Sporty Clog", price: 1199, originalPrice: 1999, discount: 40, image: A72, rating: "3.9 ⭐⭐⭐⭐" },
    { id: 17, brand: "Khadim", name: "Budget Clog", price: 899, originalPrice: 1799, discount: 50, image: A73, rating: "3.8 ⭐⭐⭐" },
    { id: 18, brand: "Asian", name: "Trendy Clog", price: 999, originalPrice: 1899, discount: 47, image: A74, rating: "4.0 ⭐⭐⭐⭐" },
    { id: 19, brand: "Red Tape", name: "Premium Clog", price: 2199, originalPrice: 3999, discount: 45, image: A75, rating: "4.3 ⭐⭐⭐⭐" },
    { id: 20, brand: "Woodland", name: "Outdoor Clog", price: 2399, originalPrice: 4299, discount: 44, image: A76, rating: "4.4 ⭐⭐⭐⭐" },
    { id: 21, brand: "Lee Cooper", name: "LC Comfort Clog", price: 2099, originalPrice: 3599, discount: 42, image: A77, rating: "4.1 ⭐⭐⭐⭐" },
    { id: 22, brand: "HRX", name: "Active Clog", price: 1899, originalPrice: 3299, discount: 42, image: A78, rating: "4.0 ⭐⭐⭐⭐" },
    { id: 23, brand: "Wildcraft", name: "Explorer Clog", price: 2499, originalPrice: 4499, discount: 44, image: A79, rating: "4.5 ⭐⭐⭐⭐⭐" },
    { id: 24, brand: "Metro", name: "Soft Clog", price: 1899, originalPrice: 2999, discount: 36, image: A80, rating: "4.1 ⭐⭐⭐⭐" },
    { id: 25, brand: "Walkaroo", name: "Everyday Clog", price: 999, originalPrice: 1999, discount: 50, image: A81, rating: "3.9 ⭐⭐⭐⭐" },
    { id: 26, brand: "Marc Loret", name: "Luxury Clog", price: 2799, originalPrice: 4999, discount: 44, image: A82, rating: "4.5 ⭐⭐⭐⭐⭐" },
    { id: 27, brand: "Sole Threads", name: "Eco Clog", price: 1599, originalPrice: 2799, discount: 43, image: A83, rating: "4.2 ⭐⭐⭐⭐" },
    { id: 28, brand: "Power", name: "Durable Clog", price: 1399, originalPrice: 2499, discount: 44, image: A84, rating: "4.0 ⭐⭐⭐⭐" },
  ];

  
  const Mens8 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
          <h1 className="text-center pt-3 border bg-gradient-to-r from-stone-700 via-warm-gray-600 to-neutral-500 text-white h-20 text-5xl font-bold font-serif">Skechers Product</h1>
          <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>
    
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {crocsProducts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men8/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men8/${product.id}`}><button className="border rounded-2xl h-10 w-60 text-white bg-gradient-to-r from-stone-700 via-warm-gray-600 to-neutral-500 hover:bg-blue-500 font-semibold">
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

export default Mens8;