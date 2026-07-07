import axiosInstance from '../../api/axiosInstance';
import { loginSuccess } from '../slices/authSlice';

export const loginUserStep1 = (credentials) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/auth/login-step1', credentials);
    return res.data;
  } catch (err) {
    // எர்ரர் மெசேஜை பிரண்ட்-எண்டிற்கு அனுப்ப 'throw' முக்கியம்
    throw err.response?.data || { message: "Login Step 1 failed" };
  }
};

export const loginUserStep2 = (otpData) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/auth/login-step2', otpData);
    dispatch(loginSuccess(res.data)); // லாகின் வெற்றி பெற்றால் மட்டும் ஸ்டேட்டை அப்டேட் செய்யவும்
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "OTP Verification failed" };
  }
};