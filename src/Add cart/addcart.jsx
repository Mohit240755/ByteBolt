import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, decrement } from "../redux/slide";

function AddCart() {
  const cartItems = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity >= 1) {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  const handleRemove = (id) => {
    dispatch(decrement(id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold font-serif mb-6">Shopping Cart</h1>
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-52 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <div className="flex items-center mt-2 gap-4">
                    <span className="text-gray-600">Quantity:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-4 text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-xl font-bold text-right">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCart;
