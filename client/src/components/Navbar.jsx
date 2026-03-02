import React, { useState, useEffect } from "react";
import {
  Bell,
  Search,
  Menu,
  X,
  Phone,
  User,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import brandLogo from "../assets/logo/BrandLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name - Fixed */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              {/* Logo Image */}
              <img
                src={brandLogo} // Fixed: Added curly braces
                alt="SastaBazar Logo"
                className="w-12 h-12 object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="hidden sm:block">
              <span
                className={`font-bold text-xl transition-colors duration-300 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Ratnakar Digital Solutions
              </span>

              <p
                className={`text-xs transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-gray-200"
                }`}
              >
                Shop Smarter, Live Better
              </p>
            </div>
          </div>

          {/* Desktop Menu - Added missing section */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Products", "About", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-gray-700 hover:text-purple-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons - Added missing section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Bar - Desktop */}
            <div
              className={`hidden md:flex items-center rounded-full px-4 py-2 transition-all duration-300 ${
                scrolled
                  ? "bg-gray-100 border border-gray-200 focus-within:border-purple-400"
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}
            >
              <Search
                className={`w-4 h-4 mr-2 ${
                  scrolled ? "text-gray-500" : "text-white"
                }`}
              />
              <input
                type="text"
                placeholder="Search products..."
                className={`bg-transparent border-none outline-none text-sm w-32 lg:w-48 placeholder-transparent md:placeholder-gray-400 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              />
            </div>

            {/* User Account */}
            <div className="relative group hidden sm:block">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`p-2 rounded-full transition-all duration-300 flex items-center space-x-1 ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <User className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Account Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 z-50 animate-fadeIn">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    My Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Orders
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Wishlist
                  </a>
                  <hr className="my-2 border-gray-100" />
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <div className="relative group">
              <button
                className={`p-2 rounded-full transition-all duration-300 relative ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
            </div>

            {/* Phone Icon */}
            <div className="relative group hidden sm:block">
              <div
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl">
                📞 24/7 Support: +91 98765 43210
              </div>
            </div>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-full transition-all duration-300 relative ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-slideDown">
                  <div className="px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">
                      Notifications
                    </h3>
                    <span className="text-xs text-purple-600 cursor-pointer hover:underline">
                      Mark all as read
                    </span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {[
                      {
                        title: "New product added!",
                        time: "2 min ago",
                        icon: "🎉",
                      },
                      {
                        title: "Special discount for you",
                        time: "1 hour ago",
                        icon: "🔥",
                      },
                      {
                        title: "Order delivered successfully",
                        time: "Yesterday",
                        icon: "✅",
                      },
                      {
                        title: "Flash sale starts in 2 hours",
                        time: "3 hours ago",
                        icon: "⚡",
                      },
                    ].map((notif, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 cursor-pointer border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-xl">{notif.icon}</span>
                          <div className="flex-1">
                            <p className="text-sm text-gray-800 font-medium">
                              {notif.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {notif.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "hover:bg-white/20 text-white"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible translate-y-0"
            : "max-h-0 opacity-0 invisible -translate-y-4"
        } overflow-hidden`}
      >
        <div className="bg-white/95 backdrop-blur-md mt-2 mx-4 rounded-2xl shadow-2xl border border-gray-100">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              />
            </div>

            {/* Mobile Menu Links with Icons */}
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all"
              >
                <span className="text-purple-600">🏠</span>
                <span className="font-medium">Home</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all"
              >
                <span className="text-blue-600">📦</span>
                <span className="font-medium">Products</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all"
              >
                <span className="text-green-600">ℹ️</span>
                <span className="font-medium">About</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all"
              >
                <span className="text-orange-600">📞</span>
                <span className="font-medium">Contact</span>
              </a>
            </div>

            {/* Mobile User Actions */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-around">
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-purple-600">
                  <User className="w-5 h-5" />
                  <span className="text-xs">Profile</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-purple-600">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="text-xs">Cart (3)</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-purple-600">
                  <Bell className="w-5 h-5" />
                  <span className="text-xs">Alerts</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-purple-600">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs">Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
