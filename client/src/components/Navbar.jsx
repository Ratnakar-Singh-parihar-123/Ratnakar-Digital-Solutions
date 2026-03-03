import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  Search,
  Menu,
  X,
  Phone,
  User,
  ShoppingBag,
  ChevronDown,
  Heart,
  Settings,
  LogOut,
  Home,
  Package,
  Info,
  Mail,
  Headphones,
  Star,
  Gift,
  Truck,
} from "lucide-react";

import brandLogo from "../assets/logo/BrandLogo.png";

const Navbar = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);

  // Refs for click outside
  const notificationRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchRef = useRef(null);
  const cartRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/products", icon: Package },
    { name: "Deals", href: "/deals", icon: Gift },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  // Sample data
  const notifications = [
    {
      id: 1,
      title: "Flash Sale: 50% Off",
      description: "On electronics - ends in 2h",
      time: "2 min ago",
      icon: "🔥",
      read: false,
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Summer collection 2024",
      time: "1 hour ago",
      icon: "🎉",
      read: false,
    },
    {
      id: 3,
      title: "Order Delivered",
      description: "Package #12345",
      time: "Yesterday",
      icon: "✅",
      read: true,
    },
  ];

  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 1 },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-purple-900/90 to-blue-900/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={brandLogo}
                alt="Ratnakar Digital Solutions"
                className="w-10 h-10 object-contain rounded-xl"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-lg transition-colors ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Ratnakar Digital Solutions
              </h1>
              <p
                className={`text-[10px] flex items-center ${
                  scrolled ? "text-gray-500" : "text-gray-200"
                }`}
              >
                <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                Trusted by 50K+ customers
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                    scrolled
                      ? "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative hidden md:block" ref={searchRef}>
              <div
                className={`flex items-center rounded-lg px-3 py-2 transition-all ${
                  showSearch ? "w-64" : "w-40"
                } ${
                  scrolled
                    ? "bg-gray-100 border border-gray-200"
                    : "bg-white/20 border border-white/30"
                }`}
              >
                <Search
                  className={`w-4 h-4 mr-2 ${
                    scrolled ? "text-gray-500" : "text-white"
                  }`}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  placeholder="Search..."
                  className={`bg-transparent border-none outline-none text-sm w-full ${
                    scrolled
                      ? "text-gray-700"
                      : "text-white placeholder-white/70"
                  }`}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")}>
                    <X
                      className={`w-4 h-4 ${scrolled ? "text-gray-500" : "text-white"}`}
                    />
                  </button>
                )}
              </div>

              {/* Search Suggestions */}
              {showSearch && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border py-2 z-50">
                  {["Laptops", "Phones", "Headphones"].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Support */}
            <div className="relative group hidden sm:block">
              <button
                className={`p-2 rounded-lg transition-all ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <Headphones className="w-5 h-5" />
              </button>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                24/7 Support: +91 93997 41051
              </div>
            </div>

            {/* Wishlist */}
            <div className="relative group hidden sm:block">
              <button
                className={`p-2 rounded-lg transition-all relative ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center space-x-1 p-2 rounded-lg transition-all ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showUserMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-1 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-semibold">John Doe</p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    My Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Orders
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Wishlist
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Settings
                  </a>
                  <div className="border-t pt-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setShowCart(!showCart)}
                className={`p-2 rounded-lg transition-all relative ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50">
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold">
                      Shopping Cart ({cartCount})
                    </h3>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center px-4 py-2 hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-semibold">₹{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t">
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-lg transition-all relative ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2">
                    <span className="absolute inset-0 bg-red-500 rounded-full animate-ping"></span>
                    <span className="absolute inset-0 bg-red-500 rounded-full"></span>
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 z-50">
                  <div className="px-4 py-2 border-b flex justify-between">
                    <h3 className="font-semibold">Notifications</h3>
                    {unreadCount > 0 && (
                      <span className="text-xs text-purple-600">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`px-4 py-3 hover:bg-gray-50 border-b last:border-0 ${
                          !notif.read ? "bg-purple-50/30" : ""
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{notif.icon}</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notif.title}</p>
                            <p className="text-xs text-gray-500">
                              {notif.description}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1">
                              {notif.time}
                            </p>
                          </div>
                          {!notif.read && (
                            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                          )}
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
              className={`lg:hidden p-2 rounded-lg transition-all ${
                scrolled
                  ? "hover:bg-gray-100 text-gray-600"
                  : "hover:bg-white/20 text-white"
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-white mt-2 mx-4 rounded-lg shadow-xl border">
          <div className="p-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Mobile User Info */}
            <div className="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">Gold Member · 250 pts</p>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-purple-50 rounded-lg"
                  >
                    <Icon className="w-5 h-5 text-purple-600" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Quick Actions */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t">
              <button className="flex flex-col items-center p-2 text-gray-600">
                <div className="relative">
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Wishlist</span>
              </button>
              <button className="flex flex-col items-center p-2 text-gray-600">
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Cart</span>
              </button>
              <button className="flex flex-col items-center p-2 text-gray-600">
                <div className="relative">
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>
                <span className="text-xs mt-1">Alerts</span>
              </button>
              <button className="flex flex-col items-center p-2 text-gray-600">
                <Headphones className="w-5 h-5" />
                <span className="text-xs mt-1">Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
