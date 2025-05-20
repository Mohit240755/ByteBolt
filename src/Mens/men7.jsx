import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import A29 from "../image/a29.jpg"
import A30 from "../image/a30.webp"
import A31 from "../image/a31.webp"
import A32 from "../image/a32.webp"
import A33 from "../image/a33.webp"
import A34 from "../image/a34.webp"
import A35 from "../image/a35.webp"
import A36 from "../image/a36.webp"
import A37 from "../image/a37.webp"
import A38 from "../image/a38.webp"
import A39 from "../image/a39.webp"
import A40 from "../image/A40.jpg"
import A41 from "../image/a41.webp"
import A42 from "../image/a42.webp"
import A43 from "../image/a43.webp"
import A44 from "../image/a44.webp"
import A45 from "../image/a45.webp"
import A46 from "../image/a46.webp"
import A47 from "../image/a47.webp"
import A48 from "../image/a48.webp"
import A49 from "../image/a49.webp"
import A50 from "../image/a50.webp"
import A51 from "../image/a51.webp"
import A52 from "../image/a52.webp"
import A53 from "../image/a53.webp"
import A54 from "../image/a54.webp"
import A55 from "../image/a55.webp"
import A56 from "../image/a56.webp"

export const skechersProducts = [
    { id: 1, brand: "Skechers", name: "Men's Go Walk Max Walking Shoes", price: 3999, originalPrice: 5999, discount: 33, image: A29, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 2, brand: "Skechers", name: "Men's Equalizer 4.0 Trail Shoes", price: 4599, originalPrice: 6999, discount: 34, image: A30, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 3, brand: "Skechers", name: "Men's Flex Advantage 4.0 Sneakers", price: 4899, originalPrice: 7499, discount: 35, image: A31, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 4, brand: "Skechers", name: "Men's Arch Fit Athletic Shoes", price: 5299, originalPrice: 7999, discount: 34, image: A32, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 5, brand: "Skechers", name: "Men's Stamina Cutback Sneakers", price: 4599, originalPrice: 6999, discount: 34, image: A33, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 6, brand: "Skechers", name: "Men's Dynamight 2.0 Sneakers", price: 4299, originalPrice: 6499, discount: 34, image: A34, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 7, brand: "Skechers", name: "Men's Summits Trainers", price: 3999, originalPrice: 5999, discount: 33, image: A35, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 8, brand: "Skechers", name: "Men's After Burn Memory Fit Shoes", price: 4999, originalPrice: 7499, discount: 33, image: A36, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 9, brand: "Skechers", name: "Men's Track Scloric Sneakers", price: 4199, originalPrice: 6399, discount: 34, image: A37, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 10, brand: "Skechers", name: "Men's Glide Step Sport Shoes", price: 5299, originalPrice: 7999, discount: 34, image: A38, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 11, brand: "Skechers", name: "Men's Delson Camben Slip-On", price: 4499, originalPrice: 6799, discount: 34, image: A39, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 12, brand: "Skechers", name: "Men's Ultra Flex 3.0 Sneakers", price: 4899, originalPrice: 7499, discount: 35, image: A40, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 13, brand: "Skechers", name: "Men's Skech-Air Envoy Trail Shoes", price: 5499, originalPrice: 8299, discount: 34, image: A41, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 14, brand: "Skechers", name: "Men's Go Run Fast Running Shoes", price: 4799, originalPrice: 7299, discount: 34, image: A42, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 15, brand: "Skechers", name: "Men's Bounder Sneakers", price: 4199, originalPrice: 6499, discount: 35, image: A43, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 16, brand: "Skechers", name: "Men's Equalizer Persistent Slip-On", price: 4299, originalPrice: 6599, discount: 35, image: A44, rating: "4.3 | ⭐⭐⭐⭐☆" },
    { id: 17, brand: "Skechers", name: "Men's Razor Excess Performance Shoes", price: 5999, originalPrice: 8999, discount: 33, image: A45, rating: "4.8 | ⭐⭐⭐⭐⭐" },
    { id: 18, brand: "Skechers", name: "Men's Flex Advantage SR Shoes", price: 4699, originalPrice: 7199, discount: 35, image: A46, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 19, brand: "Skechers", name: "Men's Arch Fit Paradyme Shoes", price: 5499, originalPrice: 8399, discount: 35, image: A47, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 20, brand: "Skechers", name: "Men's D'Lites Biggest Fan Sneakers", price: 4999, originalPrice: 7699, discount: 35, image: A48, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 21, brand: "Skechers", name: "Men's Go Walk Evolution Ultra Shoes", price: 5299, originalPrice: 7999, discount: 34, image: A49, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 22, brand: "Skechers", name: "Men's Uno Stand On Air Sneakers", price: 4899, originalPrice: 7499, discount: 35, image: A50, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 23, brand: "Skechers", name: "Men's Relaxed Fit Braver Rayland Slip-On", price: 4599, originalPrice: 6999, discount: 34, image: A51, rating: "4.4 | ⭐⭐⭐⭐⭑" },
    { id: 24, brand: "Skechers", name: "Men's Elite Flex Wasik Sneakers", price: 4799, originalPrice: 7299, discount: 34, image: A52, rating: "4.5 | ⭐⭐⭐⭐⭑" },
    { id: 25, brand: "Skechers", name: "Men's Glide Step Max Sneakers", price: 5399, originalPrice: 8299, discount: 35, image: A53, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 26, brand: "Skechers", name: "Men's Arch Fit Motley Sneakers", price: 5699, originalPrice: 8699, discount: 34, image: A54, rating: "4.7 | ⭐⭐⭐⭐⭐" },
    { id: 27, brand: "Skechers", name: "Men's Street Uno 2 Sneakers", price: 5499, originalPrice: 8399, discount: 34, image: A55, rating: "4.6 | ⭐⭐⭐⭐⭐" },
    { id: 28, brand: "Skechers", name: "Men's Relaxed Fit Expected Avillo Slip-On", price: 4499, originalPrice: 6899, discount: 35, image: A56, rating: "4.5 | ⭐⭐⭐⭐⭑" },
  ];
  


const Mens7 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
          <h1 className="text-center pt-3 border bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Skechers Product</h1>
          <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>
    
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {skechersProducts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men7/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men7/${product.id}`}><button className="border rounded-2xl h-10 w-60 text-white  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 hover:bg-blue-500 font-semibold">
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

export default Mens7;