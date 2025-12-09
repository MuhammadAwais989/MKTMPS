import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../../utils/constant';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaUserGraduate, 
  FaUserCircle,
  FaSignOutAlt
} from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { notification } from 'antd';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        console.log('User is logged in:', user.email);
      } else {
        setCurrentUser(null);
        console.log('User is logged out');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserDropdown(false);
      notification.success({
        message: 'Logged Out',
        description: 'You have been successfully logged out',
        placement: 'topRight',
      });
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      notification.error({
        message: 'Logout Failed',
        description: 'Unable to logout. Please try again.',
        placement: 'topRight',
      });
    }
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative bg-transparent text-white">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-3 rounded-xl text-white hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FaTimes className="w-5 h-5 transition-transform duration-300" />
        ) : (
          <FaBars className="w-5 h-5 transition-transform duration-300" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {navLinks.map((link, index) => (
          <div key={link.name} className="relative">
            {link.type === 'dropdown' ? (
              <>
                <button
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                  className={`px-4 py-3 font-medium flex items-center transition-all duration-300 rounded-xl border border-transparent ${
                    activeDropdown === index
                      ? 'text-blue-600 bg-blue-50 shadow-sm border-blue-200'
                      : 'text-white hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    activeDropdown === index ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {link.icon}
                  </span>
                  <span className="ml-2 font-semibold text-sm lg:text-base">{link.name}</span>
                  <FaChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                    activeDropdown === index ? 'rotate-180 text-blue-600' : 'text-white'
                  }`} />
                </button>
                {activeDropdown === index && (
                  <div
                    className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-2xl py-3 z-50 border border-gray-200 animate-fadeIn mt-1"
                    onMouseEnter={() => handleDropdownEnter(index)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500"
                      >
                        <span className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 text-sm">
                          {subLink.icon}
                        </span>
                        <span className="ml-3 font-medium text-sm">{subLink.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={link.path}
                className={`px-4 py-3 font-semibold transition-all duration-300 rounded-xl flex items-center border border-transparent text-sm lg:text-base ${
                  isActiveLink(link.path)
                    ? 'text-blue-600 bg-blue-50 shadow-sm border-blue-200'
                    : 'text-white hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200'
                }`}
              >
                <span className={`transition-colors duration-300 ${
                  isActiveLink(link.path) ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {link.icon}
                </span>
                <span className="ml-2">{link.name}</span>
              </Link>
            )}
          </div>
        ))}

        {/* User Authentication Section */}
        <div className="flex space-x-2 ml-4">
          {currentUser ? (
            // User is logged in - Show user dropdown
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="flex items-center gap-2 px-4 py-3 font-semibold transition-all duration-300 rounded-xl cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <FaUserCircle className="text-white text-4xl" />
                </div>
                
              </button>

              {/* User Dropdown Menu */}
              {userDropdown && (
                <div className="absolute top-full right-0 w-64 bg-white shadow-2xl rounded-2xl py-3 z-50 border border-gray-200 animate-fadeIn mt-2">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                        <FaUserCircle className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {currentUser.email.split('@')[0]}
                        </p>
                        <p className="text-xs text-gray-500 truncate max-w-[180px]">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full cursor-pointer flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-all duration-200 group border-t border-gray-100 mt-1"
                  >
                    <FaSignOutAlt className="text-red-500 group-hover:text-red-600 mr-3" />
                    <span className="font-medium text-sm text-blue-500">Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            // User is not logged in - Show login button
            <Link 
              to="/login" 
              className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover-lift flex items-center group text-sm lg:text-base"
            >
              <FaUserGraduate className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full right-0 w-90 bg-white shadow-2xl rounded-2xl py-4 md:hidden z-50 border border-gray-200 animate-slideIn mt-2 max-h-[90vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 last:border-b-0">
              {link.type === 'dropdown' ? (
                <details className="group">
                  <summary className="flex! justify-between items-center px-6 py-4 text-gray-700 hover:bg-blue-50 cursor-pointer transition-all duration-300 list-none hover:border-l-4 hover:border-blue-500">
                    <div className="flex items-center">
                      <span className="text-gray-500 group-open:text-blue-600 transition-colors duration-300">
                        {link.icon}
                      </span>
                      <span className="ml-3 font-semibold text-sm">{link.name}</span>
                    </div>
                    <FaChevronDown className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300 text-gray-400" />
                  </summary>
                  <div className="ml-6 mt-1 border-l-2 border-blue-100">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group border-l-4 border-transparent hover:border-blue-500"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 text-sm">
                          {subLink.icon}
                        </span>
                        <span className="ml-3 font-medium text-sm">{subLink.name}</span>
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`transition-colors duration-300 ${
                    isActiveLink(link.path) ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {link.icon}
                  </span>
                  <span className="ml-3 font-semibold text-sm">{link.name}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Mobile User Authentication Section */}
          <div className="mt-4 px-4 space-y-3">
            {currentUser ? (
              <>
                {/* User Info in Mobile */}
                <div className="px-4 py-3 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                      <FaUserCircle className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {currentUser.email.split('@')[0]}
                      </p>
                      <p className="text-xs text-gray-500">
                        {currentUser.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Logout Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center bg-linear-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl hover:from-red-600 hover:to-red-700 font-semibold transition-all duration-300 shadow-lg"
                >
                  <FaSignOutAlt className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              // Mobile Login Button
              <Link 
                to="/login" 
                className="w-full bg-linear-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 font-semibold transition-all duration-300 shadow-lg flex items-center justify-center group hover-lift"
                onClick={() => setIsOpen(false)}
              >
                <FaUserGraduate className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;