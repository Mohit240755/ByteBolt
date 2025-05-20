import { useEffect, useState } from "react";
import { FaShoppingBag, FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import axios from "axios";
import Footer from "../Footer/footer";

const Cart = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectSize, setSelectedSize] = useState("S");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <>
      <div className="w-200 border-2 rounded-2xl p-2 ml-90 mt-10">
        <div className="flex justify-center items-center">
          <div className="cart flex">
            <div className="w-1/2 h-full p-5">
              <img src={data.image} alt={data.title} className="w-full h-auto" />
            </div>
            <div className="w-1/2 pt-10">
              <h1 className="font-bold text-2xl">{data.title}</h1>
              <p className="border w-20 p-1 mt-5 text-center">{data.rating.rate}</p>
              <p className="font-bold pt-3">${data.price} <span className="text-amber-800">(30% OFF)</span></p>
              <p className="text-xs text-blue-700">Including all taxes</p>

              <div className="pt-5">
                <label className="font-bold text-2xl">Select Size</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border font-medium ${
                        selectSize === size
                          ? "bg-black text-white border-white"
                          : "bg-white text-black border-gray-300 hover:bg-gray-200"
                      } transition duration-200`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="font-semibold">Quantity :</label>
                <input
                  className="border rounded-2xl p-1 ml-2 w-20 h-8"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
              </div>

              <div className="mt-5">
                <h1 className="text-sm">{data.description}</h1>
              </div>

              <div className="flex justify-center gap-10 mt-5">
                <button className="border rounded-2xl h-10 px-5 bg-emerald-400 hover:bg-emerald-500">
                  Buy
                </button>
                <button className="flex items-center gap-2 border rounded-2xl px-5 h-10 bg-emerald-400 hover:bg-emerald-500">
                  <FaShoppingBag /> Add to Bag
                </button>
              </div>
            </div>
          </div>
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
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Cart;
