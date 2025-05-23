import "./men1.css";
import { FaShoppingBag, FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import all images
import IIM1 from "../image/iim1.webp";
import IIM2 from "../image/iim2.webp";
import IIM3 from "../image/iim3.webp";
import IIM4 from "../image/iim4.webp";
import IIM5 from "../image/iim5.webp";
import IIM6 from "../image/iim6.webp";
import IIM7 from "../image/iim7.webp";
import IIM8 from "../image/iim8.webp";
import IIM9 from "../image/iim9.webp";
import IIM10 from "../image/iim10.webp";
import IIM11 from "../image/iim11.webp";
import IIM12 from "../image/iim12.webp";
import IIM13 from "../image/iim13.webp";
import IIM14 from "../image/iim14.webp";
import IIM15 from "../image/iim15.webp";
import IIM16 from "../image/iim16.webp";
import IIM17 from "../image/iim17.webp";
import IIM18 from "../image/iim18.webp";
import IIM19 from "../image/iim19.webp";
import IIM20 from "../image/iim20.webp";
import IIM21 from "../image/iim21.webp";
import IIM22 from "../image/iim22a.webp";
import IIM23 from "../image/iim23a.webp";
import IIM24 from "../image/iim24a.webp";
import IIM25 from "../image/iim25a.webp";
import IIM26 from "../image/iim26.webp";
import IIM27 from "../image/iim27.webp";
import IIM28 from "../image/iim28.webp";
import IIM29 from "../image/iim29.webp";
import IIM30 from "../image/iim30.webp";
import Footer from "../Footer/footer";

// Product data array
export const products = [ 
  {
    id: 1,
    brand: "DENEEJA",
    name: "Men Regular Fit Self Design Spread Collar Casual Shirt",
    price: 280,
    originalPrice: 600,
    discount: 60,
    rating: "4.2 |⭐⭐⭐⭐☆",
    image: IIM1
  },
  {
    id: 2,
    brand: "TRIPR",
    name: "Men Solid Henley Neck Cotton Blend White T-Shirt",
    price: 300,
    originalPrice: 750,
    discount: 65,
    rating: "4.5 |⭐⭐⭐⭐⭑",
    image: IIM2
  },
  {
    id: 3,
    brand: "JACKBELLA",
    name: "Men Regular Fit Self Design Casual Shirt",
    price: 385,
    originalPrice: 850,
    discount: 75,
    rating: "3.8 |⭐⭐⭐⭑☆",
    image: IIM3
  },
  {
    id: 4,
    brand: "VeBNoR",
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: 265,
    originalPrice: 530,
    discount: 45,
    rating: "4.0 |⭐⭐⭐⭐☆",
    image: IIM4
  },
  {
    id: 5,
    brand: "KAJARU",
    name: "Men Printed Round Neck Polyester Black, Blue T-Shirt",
    price: 460,
    originalPrice: 800,
    discount: 55,
    rating: "3.9 |⭐⭐⭐⭐☆",
    image: IIM5
  },
  {
    id: 6,
    brand: "DIMMY",
    name: "Men Regular Fit Self Design Button Down Collar Casual Shirt",
    price: 550,
    originalPrice: 850,
    discount: 60,
    rating: "4.1 |⭐⭐⭐⭐☆",
    image: IIM6
  },
  {
    id: 7,
    brand: "VeBNoR",
    name: "Men Solid Round Neck Polyester Light Green T-Shirt",
    price: 530,
    originalPrice: 1150,
    discount: 60,
    rating: "3.5 |⭐⭐⭐⭑☆",
    image: IIM7
  },
  {
    id: 8,
    brand: "JACKBELLA",
    name: "Men Regular Fit Self Design Casual Shirt",
    price: 570,
    originalPrice: 1110,
    discount: 75,
    rating: "4.3 |⭐⭐⭐⭐☆",
    image: IIM8
  },
  {
    id: 9,
    brand: "Fame Forever",
    name: "Men Regular Fit Printed Lapel Collar Casual Shirt",
    price: 440,
    originalPrice: 985,
    discount: 45,
    rating: "4.0 |⭐⭐⭐⭐☆",
    image: IIM9
  },
  {
    id: 10,
    brand: "VeBNoR",
    name: "Men Solid Round Neck Polyester Green T-Shirt",
    price: 660,
    originalPrice: 1220,
    discount: 70,
    rating: "3.7 |⭐⭐⭐⭐☆",
    image: IIM10
  },
  {
    id: 11,
    brand: "DIMMY",
    name: "Men Regular Fit Self Design Button Down Collar Casual Shirt",
    price: 290,
    originalPrice: 560,
    discount: 35,
    rating: "4.6 |⭐⭐⭐⭐⭑",
    image: IIM11
  },
  {
    id: 12,
    brand: "NB NICKY BOY",
    name: "Men Typography Round Neck Cotton Blend Grey T-Shirt",
    price: 400,
    originalPrice: 980,
    discount: 60,
    rating: "4.4 |⭐⭐⭐⭐☆",
    image: IIM12
  },
  {
    id: 13,
    brand: "rizim",
    name: "Men Geometric Print Polo Neck Pure Cotton Black T-Shirt",
    price: 580,
    originalPrice: 1250,
    discount: 65,
    rating: "3.6 |⭐⭐⭐⭑☆",
    image: IIM13
  },
  {
    id: 14,
    brand: "Surhi",
    name: "Men Regular Fit Checkered Spread Collar Casual Shirt",
    price: 395,
    originalPrice: 1185,
    discount: 75,
    rating: "4.3 |⭐⭐⭐⭐☆",
    image: IIM14
  },
  {
    id: 15,
    brand: "CODE by Lifestyle",
    name: "Men Regular Fit Embroidered Casual Shirt",
    price: 530,
    originalPrice: 985,
    discount: 35,
    rating: "3.9 |⭐⭐⭐⭐☆",
    image: IIM15
  },
  {
    id: 16,
    brand: "Surhi",
    name: "Men Regular Fit Checkered Spread Collar Casual Shirt",
    price: 465,
    originalPrice: 990,
    discount: 55,
    rating: "4.1 |⭐⭐⭐⭐☆",
    image: IIM16
  },
  {
    id: 17,
    brand: "Feel high",
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: 550,
    originalPrice: 990,
    discount: 40,
    rating: "3.8 |⭐⭐⭐⭑☆",
    image: IIM17
  },
  {
    id: 18,
    brand: "TB Blue",
    name: "Men Striped Polo Neck Cotton Blend Black, Red T-Shirt",
    price: 685,
    originalPrice: 1220,
    discount: 55,
    rating: "4.2 |⭐⭐⭐⭐☆",
    image: IIM18
  },
  {
    id: 19,
    brand: "METRONAUT",
    name: "Men Regular Fit Checkered Spread Collar Casual Shirt",
    price: 390,
    originalPrice: 1125,
    discount: 85,
    rating: "4.5 |⭐⭐⭐⭐⭑",
    image: IIM19
  },
  {
    id: 20,
    brand: "YUTU",
    name: "Men Printed V Neck Polyester Navy Blue, Red T-Shirt",
    price: 480,
    originalPrice: 1175,
    discount: 75,
    rating: "4.0 |⭐⭐⭐⭐☆",
    image: IIM20
  },
  {
    id: 21,
    brand: "Try This",
    name: "Men Solid Hooded Neck Cotton Blend Red T-Shirt",
    price: 550,
    originalPrice: 790,
    discount: 25,
    rating: "3.7 |⭐⭐⭐⭐☆",
    image: IIM21
  },
  {
    id: 22,
    brand: "TeeWink",
    name: "TeeWink Oversized Men Self Design Round Neck Cotton Blend Light Blue",
    price: 600,
    originalPrice: 1280,
    discount: 60,
    rating: "4.6 |⭐⭐⭐⭐⭑",
    image: IIM22
  },
  {
    id: 23,
    brand: "KAJARU",
    name: "Men Striped Round Neck Polycotton Brown T-Shirt",
    price: 680,
    originalPrice: 1280,
    discount: 65,
    rating: "4.4 |⭐⭐⭐⭐☆",
    image: IIM23
  },
  {
    id: 24,
    brand: "TRIPR",
    name: "Men Striped Polo Neck Cotton Blend Dark Green T-Shirt",
    price: 545,
    originalPrice: 1100,
    discount: 65,
    rating: "3.5 |⭐⭐⭐⭑☆",
    image: IIM24
  },
  {
    id: 25,
    brand: "KAJARU",
    name: "Men Self Design Polo Neck Polyester Dark Green T-Shirt",
    price: 460,
    originalPrice: 985,
    discount: 45,
    rating: "4.0 |⭐⭐⭐⭐☆",
    image: IIM25
  },
  {
    id: 26,
    brand: "JACKBELLA",
    name: "Men Regular Fit Self Design Casual Shirt",
    price: 450,
    originalPrice: 1100,
    discount: 55,
    rating: "3.9 |⭐⭐⭐⭐☆",
    image: IIM26
  },
  {
    id: 27,
    brand: "JACKBELLA",
    name: "Men Regular Fit Self Design Spread Collar Casual Shirt",
    price: 550,
    originalPrice: 1290,
    discount: 60,
    rating: "4.1 |⭐⭐⭐⭐☆",
    image: IIM27
  },
  {
    id: 28,
    brand: "JACKBELLA",
    name: "Men Regular Fit Self Design Casual Shirt",
    price: 650,
    originalPrice: 1200,
    discount: 65,
    rating: "4.3 |⭐⭐⭐⭐☆",
    image: IIM28
  },
];



 
const Menss = () => {
  
  return (
    <>
    <div className="p-6 bg-gray-100" >
    <h1 className="text-center pt-3 text-5xl border bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 text-white  h-20 font-bold font-serif">
  Mens Trending Footwear
</h1>
      <p className="p-6 font-sans text-[25px]">(Showing 1 – 40 products of 29,732 products)</p>

      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-6">
        {products.map((product) => (
          <div key={product.id} className="M border-gray-200 rounded-lg shadow-lg p-2 w-75 ">
            <Link to={`/mens1/${product.id}`}><img className=" object-contain w-70 h-70 rounded-3xl" src={product.image} alt={product.name} /></Link>
            <div className="main">
              <h1 className="font-bold font-mono text-lg">{product.brand}</h1>
              <p>{product.name.slice(0, 20)}....</p>
              <p className="font-semibold">
                ₹{product.price} <span className="line-through"> ₹{product.originalPrice}</span> <span className="text-green-800">{product.discount}% OFF</span>
              </p>
            </div>
            <div className="flex justify-center gap-10 mt-5">
              <Link to={`/mens1/${product.id}`}><button className="border rounded-2xl h-10 w-60  bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-500 hover:bg-gray-500 font-semibold text-white">
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

export default Menss;