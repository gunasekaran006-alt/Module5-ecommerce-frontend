import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserStep1, loginUserStep2 } from '../redux/thunks/authThunks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: '', password: '', otpCode: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button pressed!"); 
    try {
      if (step === 1) {
        await dispatch(loginUserStep1({ email: formData.email, password: formData.password }));
        setStep(2);
        toast.success("OTP sent to your email!");
      } else {
        await dispatch(loginUserStep2({ email: formData.email, otpCode: formData.otpCode }));
        toast.success("Login Successful!");
        navigate('/');
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {step === 1 ? "Login - Step 1" : "Verify OTP"}
        </h2>

        {step === 1 ? (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded"
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded"
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </>
        ) : (
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="w-full p-3 mb-4 border rounded"
            onChange={e => setFormData({ ...formData, otpCode: e.target.value })}
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          {step === 1 ? "Get OTP" : "Verify & Login"}
        </button>

        <p className="mt-4 text-center">
          Don't have an account? <a href="/register" className="text-blue-600 font-bold">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;