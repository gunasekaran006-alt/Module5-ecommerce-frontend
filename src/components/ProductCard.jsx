import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/thunks/cartThunks';
import { toast } from 'react-toastify';
import axiosInstance from '../api/axiosInstance'; 

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleAddToCart = async () => {
    const currentUserId = user?.user?._id || user?._id || user?.id; 

    if (!currentUserId) {
      toast.error("Please login again.");
      return;
    }

    try {
      await dispatch(addToCart(product, currentUserId));
      toast.success("Added to database!");
    } catch (err) {
      console.error("Save Error:", err);
      toast.error("Failed to add");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <img src={product.image} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-blue-600 font-bold mb-4">${product.price}</p>
      <button 
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;