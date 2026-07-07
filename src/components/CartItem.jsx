import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center border-b p-4">
      <h3 className="font-semibold">{item.name}</h3>
      <p>${item.price}</p>
      <button 
        onClick={() => dispatch(removeFromCart(item._id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};
export default CartItem;