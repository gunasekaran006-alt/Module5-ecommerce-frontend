import axiosInstance from '../../api/axiosInstance';
import { setProducts, setLoading } from '../slices/productSlice';

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axiosInstance.get('/products');
    
    const productsArray = res.data.data;

    
    dispatch(setProducts(productsArray));
  } catch (err) {
    console.error("Error fetching products", err);
  } finally {
    dispatch(setLoading(false));
  }
};