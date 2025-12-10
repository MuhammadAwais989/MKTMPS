import React, { useState } from "react";
import HeaderComponent from "../sections/HeaderComponent";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { notification } from 'antd'; // Ant Design notification import
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const navigate = useNavigate();

  // Notification function
  const showNotification = (type, message, description = '') => {
    notification[type]({
      message: message,
      description: description,
      placement: 'topRight',
      duration: 3,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Success notification
      showNotification('success', 'Login Successful', 'Welcome to Homework Management System');
      
      console.log('Logged in user:', user);
      
      // Redirect to homework page after successful login
      setTimeout(() => {
  navigate('/homework');
}, 500);
      
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
    
      
      // Error notification
      showNotification('error', errorMessage, errorDescription);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderComponent />
        
      <div className="min-h-fit -translate-y-10 flex items-center justify-center px-4 relative">

        {/* Login Card */}
        <div className="relative bg-linear-to-b from-green-50 to-emerald-100 
                shadow-xl border border-emerald-200 
                p-8 rounded-3xl w-full max-w-sm backdrop-blur-md">

          {/* Login Heading with Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg mb-4 mx-auto">
              <FaSignInAlt className="text-2xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
              Login
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <label className="text-gray-700 font-medium text-sm flex items-center gap-2 mb-2">
                <FaEnvelope className="text-gray-500 text-sm" />
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: ''});
                  }}
                  placeholder="Enter your email"
                  className={`w-full p-3 rounded-xl bg-white 
                           border focus:outline-none focus:ring-2 
                           transition-all pr-10 ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-200'
                  }`}
                  disabled={loading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium text-sm flex items-center gap-2 mb-2">
                <FaLock className="text-gray-500 text-sm" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: ''});
                  }}
                  placeholder="Enter your password"
                  className={`w-full p-3 rounded-xl bg-white 
                           border focus:outline-none focus:ring-2 
                           transition-all pr-12 ${
                    errors.password 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-200'
                  }`}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 disabled:text-gray-300"
                  disabled={loading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white! font-semibold py-3.5 rounded-xl 
                       hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all shadow-lg
                       disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5  border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <FaSignInAlt />
                  Login
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </>
  );
};

export default Login;