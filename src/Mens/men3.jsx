import "./men3.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import A from "../image/a.jpg"
import B from "../image/b.jpg"
import C from "../image/c.jpg"
import D from "../image/d.jpg"
import E from "../image/e.jpg"
import F from "../image/f.jpg"
import G from "../image/g.webp"
import H from "../image/h.jpg"
import I from "../image/i.webp"
import J from "../image/j.webp"
import K from "../image/k.webp"
import L from "../image/l.jpg"
import M from "../image/m.webp"
import N from "../image/n.jpg"
import O from "../image/o.webp"
import P from "../image/p.webp"
import Q from "../image/q.webp"
import R from "../image/r.webp"
import S from "../image/s.webp"
import T from "../image/t.webp"
import U from "../image/u.webp"
import V from "../image/v.webp"
import W from "../image/w.jpg"
import X from "../image/x.webp"
import Y from "../image/y.jpg"
import Z from "../image/z.jpg"
import AA from "../image/aa.jpg"
import AB from "../image/ab.webp"


export const ucbProducts = [
    {
      id: 1,
      brand: "UCB",
      name: "Classic Sneakers For Men",
      price: 1299,
      originalPrice: 4999,
      discount: 74,
      image: A,
      rating: "4.3 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 2,
      brand: "UCB",
      name: "Stylish Lace-Up Sneakers For Men",
      price: 1399,
      originalPrice: 5499,
      discount: 75,
      image: B,
      rating: "4.5 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 3,
      brand: "UCB",
      name: "Running Shoes With Cushioned Sole For Men",
      price: 1490,
      originalPrice: 5999,
      discount: 75,
      image: C,
      rating: "4.2 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 4,
      brand: "UCB",
      name: "Slip-On Casual Shoes For Men",
      price: 1190,
      originalPrice: 4499,
      discount: 73,
      image: D,
      rating: "4.0 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 5,
      brand: "UCB",
      name: "Low-Top Sneakers For Men",
      price: 1599,
      originalPrice: 6499,
      discount: 76,
      image: E,
      rating: "4.6 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 6,
      brand: "UCD",
      name: "High-Top Street Style Sneakers For Men",
      price: 1799,
      originalPrice: 6999,
      discount: 74,
      image: F,
      rating: "4.4 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 7,
      brand: "UCD",
      name: "Leather Sneakers For Men",
      price: 1990,
      originalPrice: 7499,
      discount: 73,
      image: G,
      rating: "4.7 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 8,
      brand: "UCD",
      name: "Classic Running Shoes For Men",
      price: 1399,
      originalPrice: 5999,
      discount: 77,
      image: H,
      rating: "4.1 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 9,
      brand: "UCB",
      name: "Mesh Breathable Sneakers For Men",
      price: 1250,
      originalPrice: 4999,
      discount: 75,
      image: I,
      rating: "4.3 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 10,
      brand: "UCB",
      name: "Casual Walking Shoes For Men",
      price: 1099,
      originalPrice: 4499,
      discount: 76,
      image: J,
      rating: "4.2 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 11,
      brand: "UCB",
      name: "Performance Running Sneakers For Men",
      price: 1499,
      originalPrice: 5999,
      discount: 75,
      image: K,
      rating: "4.5 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 12,
      brand: "UCB",
      name: "Casual Loafers For Men",
      price: 1350,
      originalPrice: 4999,
      discount: 73,
      image: L,
      rating: "4.0 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 13,
      brand: "UCB",
      name: "White Sneakers With Logo Detail",
      price: 1650,
      originalPrice: 6999,
      discount: 76,
      image: M,
      rating: "4.7 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 14,
      brand: "UCB",
      name: "Black High-Top Sneakers For Men",
      price: 1899,
      originalPrice: 7499,
      discount: 75,
      image: N,
      rating: "4.8 |⭐⭐⭐⭐⭐ ",
    },
    {
      id: 15,
      brand: "UCB",
      name: "Sporty Running Shoes With Soft Insole",
      price: 1450,
      originalPrice: 5999,
      discount: 76,
      image: O,
      rating: "4.2 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 16,
      brand: "UCB",
      name: "Slip-Resistant Casual Sneakers",
      price: 1299,
      originalPrice: 4999,
      discount: 74,
      image: P,
      rating: "4.1 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 17,
      brand: "UCB",
      name: "Suede Finish Sneakers For Men",
      price: 1590,
      originalPrice: 6499,
      discount: 75,
      image: Q,
      rating: "4.5 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 18,
      brand: "UCB",
      name: "Lightweight Running Shoes For Men",
      price: 1390,
      originalPrice: 5499,
      discount: 75,
      image: R,
      rating: "4.3 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 19,
      brand: "UCB",
      name: "Fashion Sneakers With Color Block Design",
      price: 1699,
      originalPrice: 6999,
      discount: 76,
      image: S,
      rating: "4.6 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 20,
      brand: "UCB",
      name: "Stylish Slip-On Sneakers",
      price: 1190,
      originalPrice: 4499,
      discount: 74,
      image: T,
      rating: "4.0 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 21,
      brand: "United Colors of Benetton",
      name: "Canvas Sneakers With Branding",
      price: 1390,
      originalPrice: 5499,
      discount: 75,
      image: U,
      rating: "4.4 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 22,
      brand: "UCB",
      name: "Chunky Sole Sneakers For Men",
      price: 1790,
      originalPrice: 6999,
      discount: 74,
      image: V,
      rating: "4.7 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 23,
      brand: "UCB",
      name: "Lightweight Lace-Up Sneakers",
      price: 1490,
      originalPrice: 5999,
      discount: 75,
      image: W,
      rating: "4.2 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 24,
      brand: "UCB",
      name: "Premium Leather Sneakers",
      price: 1990,
      originalPrice: 7499,
      discount: 73,
      image: X,
      rating: "4.8 |⭐⭐⭐⭐⭐ ",
    },
    {
      id: 25,
      brand: "UCB",
      name: "Retro Style Sneakers For Men",
      price: 1550,
      originalPrice: 6499,
      discount: 76,
      image: Y,
      rating: "4.5 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 26,
      brand: "UCB",
      name: "Comfy Slip-On Shoes For Men",
      price: 1250,
      originalPrice: 4999,
      discount: 75,
      image: Z,
      rating: "4.1 |⭐⭐⭐⭐☆ ",
    },
    {
      id: 27,
      brand: "UCB",
      name: "Bold Logo Sneakers For Men",
      price: 1590,
      originalPrice: 6499,
      discount: 76,
      image: AA,
      rating: "4.6 |⭐⭐⭐⭐⭑ ",
    },
    {
      id: 28,
      brand: "UCB",
      name: "Sporty Mesh Running Sneakers",
      price: 1390,
      originalPrice: 5499,
      discount: 75,
      image: AB,
      rating: "4.4 |⭐⭐⭐⭐☆ ",
    },
  ];
  




const Menss1 = () => {
    return (
        <>
        <div className="p-6 bg-gray-100" >
        <h1 className="text-center pt-3 text-5xl border bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white h-20 font-bold font-serif">
  United Colors of Benetton
</h1>
          <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>
    
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
            {ucbProducts.map((product) => (
              <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
                <Link to={`/men3/${product.id}`}><img className=" object-contain w-70 h-70 rounded-2xl" src={product.image} alt={product.name} /></Link>
                <div className="main"> 
                  <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
                  <p>{product.name.slice(0,20)}...</p>
                  <p className="font-semibold">
                    ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
                  </p>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <Link to={`/men3/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white hover:bg-gray-500 font-semibold">
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
    };
export default Menss1;