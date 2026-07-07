import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../api/axiosInstance';
import { setOrders } from '../redux/slices/orderSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.orders);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axiosInstance.get('/orders');
      dispatch(setOrders(res.data));
    };
    fetchOrders();
  }, [dispatch]);

  return (
    <div>
      <h1>Your Orders</h1>
      {items.map(order => <div key={order._id}>Order ID: {order._id}</div>)}
    </div>
  );
};
export default Orders;