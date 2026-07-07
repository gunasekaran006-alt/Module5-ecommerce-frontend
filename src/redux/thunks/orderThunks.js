import axiosInstance from '../../api/axiosInstance';
export const placeOrder = (orderData) => async () => {
    return await axiosInstance.post('/orders', orderData);
};