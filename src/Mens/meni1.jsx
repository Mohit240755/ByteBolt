import { useParams } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShoppingBag, FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { productss } from "./men2";
import Footer from "../Footer/footer";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slide";
import { toast,ToastContainer } from "react-toastify";

const Menii = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectSize, setSelectedSize] = useState("VI");
  const sizes = ["VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const [quantity, setQuantity] = useState(1);
  const product = productss.find(p => p.id === Number(id));

  console.log("product", product);

  const handleClick = () => {
          dispatch(increment({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: Number(quantity),
          }));
          toast.success("Added to cart successfully!");
        };
      


  return (
    <>
      <div className="w-300 shadow-lg rounded-lg bg-white  overflow-hidden p-2 ml-40 mt-10  transition-shadow duration-300">
        <div className="flex rounded-lg justify-center bg-yellow-50 items-center">
          <div className="cart flex">
            <div className="w-1/2 h-full p-5">
              <img src={product.image} alt="no" className="w-full h-auto object-contain pr-10" />
            </div>
            <div className="w-1/2 pt-10">
              <h1 className="font-bold text-4xl">{product.brand} </h1>

              <p className="font-semibold text-2xl">{product.name}</p>
              <p className=" w-40 p-1 pl-3 border-white bg-green-300 rounded-xl  mt-5 ">{product.rating}</p>
              <p className="font-bold pt-3">₹{product.price}<span className="line-through"> ₹{product.originalPrice}</span> <span className="text-amber-800">{product.discount}%OFF</span></p>
              <p className="text-xs text-blue-700">Including all taxes</p>

              <div className="pt-5">
                <label className="font-bold text-2xl">Select Size</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  <select value={selectSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    {sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="font-semibold">Quantity :</label>
                <input
                  className="border rounded-sm p-1 ml-2 w-20 h-8"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  defaultValue={1}
                  min={1}
                  max={10}
                />
              </div>
              <div className="font-bold font-serif text-2xl pt-5 pl-3 flex gap-3">
                <h1>DELIVERY OPTION</h1> <span className="text-3xl font-semibold"><CiDeliveryTruck /></span>
              </div>

              <div>
                <input className="border-2 ml-3 mt-3 pl-3 w-72 rounded-2xl" type="number" placeholder="Enter your Pincode" />
                <p className="text-xs pt-1 pl-3">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                <div className="pt-5 pl-3 text-sm">
                  <p>✔ 100% Original Products</p>
                  <p className="pt-1">✔ Pay on delivery might be available</p>
                  <p className="pt-1">✔ Easy 10 days returns and exchanges</p>
                </div>
                <div className="flex gap-10 mt-5">
                  <button className="flex items-center gap-3 border mt-5 rounded-2xl px-16 h-10 w-50 bg-emerald-200 hover:bg-emerald-500 transition-all text-sm">
                    Buy Now
                  </button>
                  <button onClick={handleClick} className="flex items-center gap-3 border mt-5 rounded-2xl px-10 h-10 w-50 bg-emerald-200 hover:bg-emerald-500 transition-all text-sm">
                    <FaShoppingBag /> Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
        <ToastContainer position="top-center" autoClose={1500}/>
      </div>
      <Footer />
    </>
  )
}


export default Menii;