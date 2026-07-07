import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, removeFromCart } from '../redux/thunks/cartThunks';

const Cart = () => {
  const { items } = useSelector((state) => state.cart || { items: [] });
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = user?.user?._id || user?._id;
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  }, [dispatch, user]); 

  const cartItems = Array.isArray(items) ? items : (items?.items || []);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + ((item.productId?.price || 0) * (item.quantity || 0));
  }, 0);

  const handleRemove = (productId) => {
    const userId = user?.user?._id || user?._id;
    dispatch(removeFromCart(userId, productId));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item._id || item.productId?._id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-semibold">{item.productId?.name || "Product"}</h3>
                <p className="text-gray-600">Price: ${item.productId?.price || 0}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemove(item.productId?._id)} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 border-t pt-4">
            <h2 className="text-2xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;