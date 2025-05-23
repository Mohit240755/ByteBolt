import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import E1 from "../image/E1.webp"
import E2 from "../image/E2.webp"
import E3 from "../image/E3.webp"
import E4 from "../image/E4.webp"
import E5 from "../image/E5.webp"
import E6 from "../image/E6.webp"
import E7 from "../image/E7.webp"
import E8 from "../image/E8.webp"
import E9 from "../image/E9.webp"
import E10 from "../image/E10.webp"
import E11 from "../image/E11.webp"
import E12 from "../image/E12.webp"
import E13 from "../image/E13.webp"
import E14 from "../image/E14.webp"
import E15 from "../image/E15.webp"
import E16 from "../image/E16.webp"
import E17 from "../image/E17.webp"
import E18 from "../image/E18.webp"
import E19 from "../image/E19.webp"
import E20 from "../image/E20.webp"
import E21 from "../image/E21.webp"
import E22 from "../image/E22.webp"
import E23 from "../image/E23.webp"
import E24 from "../image/E24.webp"
import E25 from "../image/S25.webp"
import E26 from "../image/E26.webp"
import E27 from "../image/E27.webp"
import E28 from "../image/E28.webp"

export const mensInfactualEssentials = [
  { id: 1, brand: "Jockey", name: "Cotton Brief Pack", price: 499, originalPrice: 799, discount: 38, image: E1, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 2, brand: "Amul Macho", name: "Vest Set of 2", price: 349, originalPrice: 599, discount: 42, image: E2, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 3, brand: "Van Heusen", name: "Trunk Briefs Pack", price: 599, originalPrice: 999, discount: 40, image: E3, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 4, brand: "Lux Cozi", name: "Sleeveless Vest Combo", price: 299, originalPrice: 499, discount: 40, image: E4, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 5, brand: "U.S. Polo Assn.", name: "Casual Socks (Pack of 3)", price: 399, originalPrice: 699, discount: 43, image: E5, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 6, brand: "Puma", name: "Performance Socks (Pack of 3)", price: 429, originalPrice: 799, discount: 46, image: E6, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 7, brand: "Gillette", name: "Mach 3 Razor with Cartridges", price: 799, originalPrice: 1299, discount: 38, image: E7, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 8, brand: "Denver", name: "Hamilton Deo Pack", price: 299, originalPrice: 499, discount: 40, image: E8, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 9, brand: "Wild Stone", name: "Code Deodorant Pack", price: 349, originalPrice: 599, discount: 42, image: E9, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 10, brand: "Nivea Men", name: "Body Wash Active Clean", price: 229, originalPrice: 349, discount: 34, image: E10, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 11, brand: "Beardo", name: "Beard Oil 30ml", price: 349, originalPrice: 599, discount: 42, image: E11, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 12, brand: "Park Avenue", name: "Fragrance Kit", price: 499, originalPrice: 899, discount: 44, image: E12, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 13, brand: "Adidas", name: "Deodorant Spray", price: 299, originalPrice: 499, discount: 40, image: E13, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 14, brand: "Dollar", name: "Thermal Vest", price: 399, originalPrice: 699, discount: 43, image: E14, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 15, brand: "Jockey", name: "Boxers (2-pack)", price: 649, originalPrice: 999, discount: 35, image: E15, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 16, brand: "Nivea", name: "Roll-On for Men", price: 199, originalPrice: 299, discount: 33, image: E16, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 17, brand: "Garnier Men", name: "Face Wash OilClear", price: 179, originalPrice: 299, discount: 40, image: E17, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 18, brand: "Philips", name: "Beard Trimmer", price: 1099, originalPrice: 1999, discount: 45, image: E18, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 },
  { id: 19, brand: "Veet Men", name: "Hair Removal Cream", price: 199, originalPrice: 349, discount: 43, image: E19, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 20, brand: "Superdry", name: "Logo Boxer Shorts", price: 899, originalPrice: 1499, discount: 40, image: E20, rating: "4.4 ⭐⭐⭐⭐☆", rate: 4.4 },
  { id: 21, brand: "Under Armour", name: "Compression Boxer Briefs", price: 1099, originalPrice: 1799, discount: 39, image: E21, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 22, brand: "Jack & Jones", name: "Trunks Set of 2", price: 649, originalPrice: 1099, discount: 41, image: E22, rating: "4.3 ⭐⭐⭐⭐☆", rate: 4.3 },
  { id: 23, brand: "Himalaya Men", name: "Face Scrub", price: 169, originalPrice: 249, discount: 32, image: E23, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 24, brand: "WOW", name: "Shampoo for Men", price: 299, originalPrice: 499, discount: 40, image: E24, rating: "4.1 ⭐⭐⭐⭐☆", rate: 4.1 },
  { id: 25, brand: "Everyuth", name: "Peel-Off Mask", price: 159, originalPrice: 229, discount: 31, image: E25, rating: "4.0 ⭐⭐⭐⭐☆", rate: 4.0 },
  { id: 26, brand: "Mamaearth", name: "Charcoal Face Wash", price: 249, originalPrice: 399, discount: 38, image: E26, rating: "4.2 ⭐⭐⭐⭐☆", rate: 4.2 },
  { id: 27, brand: "Zara Men", name: "Essential Fragrance", price: 999, originalPrice: 1599, discount: 37, image: E27, rating: "4.5 ⭐⭐⭐⭐⭐", rate: 4.5 },
  { id: 28, brand: "The Man Company", name: "Essential Grooming Kit", price: 1499, originalPrice: 2499, discount: 40, image: E28, rating: "4.6 ⭐⭐⭐⭐⭐", rate: 4.6 }
];

const Mens13 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 border  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 text-5xl font-bold font-serif">Branded Shorts and Trousers</h1>
        <div className="grid grid-cols-4 pt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
          {mensInfactualEssentials.map((product) => (
            <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
              <Link to={`/men13/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
              <div className="main">
                <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                <p>{product.name.slice(0, 20)}...</p>
                <p className="border-white w-16 pl-2 rounded-lg m-1 bg-green-500">{product.rate}⭐</p>
                <p className="font-semibold">
                  ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <Link to={`/men13/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-blue-500 font-semibold">
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

export default Mens13;



