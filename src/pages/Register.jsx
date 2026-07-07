import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/auth/register', formData);
      toast.success("Registration Successful! Please Login.");
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded" onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded">Register</button>
      </form>
    </div>
  );
};
export default Register;