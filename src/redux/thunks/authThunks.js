import axiosInstance from '../../api/axiosInstance';
import { loginSuccess } from '../slices/authSlice';

export const loginUserStep1 = (credentials) => async () => {
  return await axiosInstance.post('/auth/login-step1', credentials);
};

export const loginUserStep2 = (otpData) => async (dispatch) => {
  const res = await axiosInstance.post('/auth/login-step2', otpData);
  dispatch(loginSuccess(res.data));
  return res.data;
};