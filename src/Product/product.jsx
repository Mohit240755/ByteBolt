import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = show ? data.slice(0, 15) : data;

  if (loading) return <div>Please wait...</div >;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold font-serif m-5">Product List</h1>

      <div className="mb-4">

        <input
          className="text-black border-2 w-100 rounded-2xl p-1"
          type="search"
          placeholder="Search"
        />
      </div>

      <div className="grid grid-cols-5 ">

        {filteredData.map((product) => (  
          <div
            key={product.id}
            className="w-64 border rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold mb-2 text-lg">{product.title.slice(0, 20)}</h3>
            <img
              src={product.image}     
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <p className="text-sm text-gray-600">{product.description.slice(0, 30)}...</p>
            <p className="font-bold text-green-600 mt-2">${product.price}</p>
            <Link to={`/product/${product.id}`}><button className="border-2 p-2 m-2 rounded-2xl w-40 bg-blue-200 hover:bg-amber-200">
              Add To Cart
            </button></Link>
          </div>
        ))}
      </div>

      <div className="my-6">
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-200 hover:bg-amber-200 border-2 text-black px-6 py-2 rounded-2xl w-40"
        >
          {show ? "See More" : "See Less"}
        </button>
      </div>
   <Footer/>
    </div>
  );
};

export default Products;
