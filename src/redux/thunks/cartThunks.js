import axiosInstance from '../../api/axiosInstance';
import { setCart } from '../slices/cartSlice';

// 1. கார்ட் பொருட்களைப் பெற (Fetch)
export const fetchCartItems = (userId) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/cart/${userId}`);
    // res.data.items-க்கு பதில் res.data என்று கொடுங்கள்
    dispatch(setCart(res.data)); 
  } catch (error) {
    console.error("Error fetching cart", error);
  }
};

// 2. கார்ட்டில் பொருட்களைச் சேர்க்க (Add)
export const addToCart = (product, userId) => async (dispatch) => {
  try {
    // பேக்-எண்டிற்கு userId மற்றும் productId ஆகியவற்றை அனுப்புகிறோம்
    await axiosInstance.post('/cart/add', { 
        userId: userId, 
        productId: product._id 
    });

    // டேட்டாபேஸில் சேர்த்த பிறகு, கார்ட் லிஸ்ட்டை புதுப்பிக்கிறோம்
    dispatch(fetchCartItems(userId)); 
  } catch (error) {
    console.error("Cart update failed", error);
    throw error; // எர்ரர் வந்தால் UI-ல் காட்ட உதவும்
  }
};

export const removeFromCart = (userId, productId) => async (dispatch) => {
  try {
    // பேக்-எண்டில் delete ரூட் இருக்க வேண்டும் (DELETE or POST)
    await axiosInstance.post('/cart/remove', { userId, productId });
    dispatch(fetchCartItems(userId)); // நீக்கிய பிறகு லிஸ்ட்டைப் புதுப்பிக்கவும்
  } catch (error) {
    console.error("Remove failed", error);
  }
};