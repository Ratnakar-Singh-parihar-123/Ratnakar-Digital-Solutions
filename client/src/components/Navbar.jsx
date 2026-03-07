import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Add this import
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
  Award,
  Clock,
  MapPin,
  Shield,
  CreditCard,
} from "lucide-react";
import brandLogo from "../assets/logo/BrandLogo.png";

const Navbar = () => {
  const navigate = useNavigate(); // Add this
  const location = useLocation(); // Add this to get current path

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  // Refs for click outside
  const notificationRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchRef = useRef(null);
  const cartRef = useRef(null);
  const mobileMenuRef = useRef(null);

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
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle page navigation - FIXED VERSION
  const handleNavigation = (path) => {
    navigate(path); // This will navigate to proper URL without #
    setIsOpen(false);
    setShowSearch(false);
    setShowCart(false);
    setShowNotifications(false);
    setShowUserMenu(false);

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      // Simulated search results
      const results = [
        {
          name: "Gaming Laptop",
          category: "Electronics",
          price: "₹79,999",
          path: "/products/laptops",
        },
        {
          name: "Wireless Headphones",
          category: "Audio",
          price: "₹2,499",
          path: "/products/headphones",
        },
        {
          name: "Smart Watch",
          category: "Wearables",
          price: "₹3,999",
          path: "/products/watches",
        },
        {
          name: "4K Monitor",
          category: "Electronics",
          price: "₹24,999",
          path: "/products/monitors",
        },
        {
          name: "Mechanical Keyboard",
          category: "Accessories",
          price: "₹3,499",
          path: "/products/keyboards",
        },
      ].filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Navigation links with proper paths (without #)
  const navLinks = [
    { name: "Home", path: "/", icon: Home, description: "Go to homepage" },
    {
      name: "Products",
      path: "/products",
      icon: Package,
      description: "Browse all products",
    },
    {
      name: "Deals",
      path: "/deals",
      icon: Gift,
      description: "Today's best deals",
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
      description: "Learn about us",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
      description: "Get in touch",
    },
  ];

  // Quick links for mega menu
  const quickLinks = {
    electronics: [
      { name: "Laptops", path: "/products/laptops" },
      { name: "Smartphones", path: "/products/smartphones" },
      { name: "Tablets", path: "/products/tablets" },
      { name: "Accessories", path: "/products/accessories" },
    ],
    support: [
      { name: "FAQs", path: "/support/faqs" },
      { name: "Shipping", path: "/support/shipping" },
      { name: "Returns", path: "/support/returns" },
      { name: "Warranty", path: "/support/warranty" },
    ],
  };

  // Check if path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Sample data
  const notifications = [
    {
      id: 1,
      title: "Flash Sale: 50% Off",
      description: "On electronics - ends in 2h",
      time: "2 min ago",
      icon: "🔥",
      read: false,
      path: "/deals",
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Summer collection 2024",
      time: "1 hour ago",
      icon: "🎉",
      read: false,
      path: "/products/new-arrivals",
    },
    {
      id: 3,
      title: "Order Delivered",
      description: "Package #12345",
      time: "Yesterday",
      icon: "✅",
      read: true,
      path: "/orders/12345",
    },
    {
      id: 4,
      title: "Price Drop Alert",
      description: "Gaming Laptop now ₹79,999",
      time: "2 hours ago",
      icon: "💰",
      read: false,
      path: "/deals",
    },
  ];

  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      quantity: 1,
      image: "🎧",
      path: "/products/headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "⌚",
      path: "/products/watches",
    },
    {
      id: 3,
      name: "Phone Case",
      price: 19.99,
      quantity: 2,
      image: "📱",
      path: "/products/accessories",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section - Clickable */}
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="relative transform transition-transform group-hover:scale-110">
              <img
                src={brandLogo}
                alt="Ratnakar Digital Solutions"
                className="w-10 h-10 object-contain rounded-xl shadow-lg"
              />
              <div className="absolute -inset-1 bg-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition"></div>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-lg transition-colors ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Ratnakar Digital
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
          </button>

          {/* Desktop Navigation with hover effects */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isActivePath(link.path);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 relative group ${
                    scrolled
                      ? isActive
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                      : isActive
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                    {link.description}
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            {/* Search with autocomplete */}
            <div className="relative hidden md:block" ref={searchRef}>
              <div
                className={`flex items-center rounded-lg px-3 py-2 transition-all cursor-text ${
                  showSearch ? "w-72" : "w-40"
                } ${
                  scrolled
                    ? "bg-gray-100 border border-gray-200 hover:border-purple-400"
                    : "bg-white/20 border border-white/30 hover:bg-white/30"
                }`}
                onClick={() => setShowSearch(true)}
              >
                <Search
                  className={`w-4 h-4 mr-2 ${
                    scrolled ? "text-gray-500" : "text-white"
                  }`}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  placeholder="Search products..."
                  className={`bg-transparent border-none outline-none text-sm w-full ${
                    scrolled
                      ? "text-gray-700 placeholder-gray-400"
                      : "text-white placeholder-white/70"
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="focus:outline-none"
                  >
                    <X
                      className={`w-4 h-4 hover:scale-110 transition ${
                        scrolled ? "text-gray-500" : "text-white"
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Search Suggestions with results */}
              {showSearch && (searchQuery || searchResults.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border py-2 z-50 max-h-96 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <>
                      <div className="px-4 py-2 text-xs text-gray-500 border-b">
                        Found {searchResults.length} results
                      </div>
                      {searchResults.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            handleNavigation(item.path);
                            setShowSearch(false);
                            setSearchQuery("");
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-purple-50 flex items-center justify-between group"
                        >
                          <div>
                            <p className="text-sm text-gray-700 group-hover:text-purple-600">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item.category}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-purple-600">
                            {item.price}
                          </span>
                        </button>
                      ))}
                    </>
                  ) : null}
                </div>
              )}
            </div>

            {/* Support with phone number */}
            <div className="relative group hidden sm:block">
              <button
                className={`p-2 rounded-lg transition-all ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
                onClick={() => (window.location.href = "tel:+9193999741051")}
              >
                <Headphones className="w-5 h-5" />
              </button>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                Call: +91 93997 41051
              </div>
            </div>

            {/* Wishlist with animation */}
            <div className="relative group hidden sm:block">
              <button
                onClick={() => handleNavigation("/wishlist")}
                className={`p-2 rounded-lg transition-all relative ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Menu with profile */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center space-x-1 p-2 rounded-lg transition-all ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showUserMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Enhanced User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-1 z-50">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-3 border-b bg-gradient-to-r from-purple-50 to-blue-50">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                            JD
                          </div>
                          <div>
                            <p className="text-sm font-semibold">John Doe</p>
                            <p className="text-xs text-gray-500">
                              john@example.com
                            </p>
                            <p className="text-xs text-purple-600 mt-1 flex items-center">
                              <Award className="w-3 h-3 mr-1" />
                              Gold Member · 2,450 pts
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="py-1">
                        <button
                          onClick={() => handleNavigation("/profile")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 flex items-center"
                        >
                          <User className="w-4 h-4 mr-3 text-purple-600" />
                          My Profile
                        </button>
                        <button
                          onClick={() => handleNavigation("/orders")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 flex items-center"
                        >
                          <Package className="w-4 h-4 mr-3 text-purple-600" />
                          My Orders
                        </button>
                        <button
                          onClick={() => handleNavigation("/wishlist")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 flex items-center"
                        >
                          <Heart className="w-4 h-4 mr-3 text-purple-600" />
                          Wishlist ({wishlistCount})
                        </button>
                        <button
                          onClick={() => handleNavigation("/settings")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 flex items-center"
                        >
                          <Settings className="w-4 h-4 mr-3 text-purple-600" />
                          Settings
                        </button>
                      </div>

                      <div className="border-t pt-1">
                        <button
                          onClick={() => setIsLoggedIn(false)}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-4">
                      <button
                        onClick={() => handleNavigation("/login")}
                        className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 mb-2"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => handleNavigation("/register")}
                        className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg text-sm hover:bg-purple-50"
                      >
                        Create Account
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Enhanced Cart */}
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
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown with items */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 z-50">
                  <div className="px-4 py-2 border-b flex justify-between items-center">
                    <h3 className="font-semibold">Shopping Cart</h3>
                    <span className="text-xs text-gray-500">
                      {cartCount} items
                    </span>
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {cartItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          handleNavigation(item.path);
                          setShowCart(false);
                        }}
                        className="w-full flex items-center px-4 py-3 hover:bg-gray-50 border-b last:border-0 text-left"
                      >
                        <span className="text-2xl mr-3">{item.image}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">₹{item.price}</p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-500">
                              Total: ₹{item.price * item.quantity}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="px-4 py-3 border-t bg-gray-50">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm text-gray-600">Subtotal:</span>
                      <span className="text-sm font-bold">
                        ₹{cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleNavigation("/checkout")}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg text-sm hover:from-purple-700 hover:to-blue-700 transition"
                    >
                      Checkout
                    </button>
                    <p className="text-[10px] text-gray-500 text-center mt-2">
                      Free shipping on orders over ₹999
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Notifications */}
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

              {/* Notifications Dropdown with actions */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 z-50">
                  <div className="px-4 py-2 border-b flex justify-between items-center">
                    <h3 className="font-semibold">Notifications</h3>
                    <div className="flex items-center space-x-2">
                      {unreadCount > 0 && (
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                          {unreadCount} new
                        </span>
                      )}
                      <button className="text-xs text-gray-500 hover:text-purple-600">
                        Mark all read
                      </button>
                    </div>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <button
                        key={notif.id}
                        onClick={() => {
                          handleNavigation(notif.path);
                          setShowNotifications(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-0 transition ${
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
                            <div className="flex items-center mt-1">
                              <Clock className="w-3 h-3 text-gray-400 mr-1" />
                              <p className="text-[10px] text-gray-400">
                                {notif.time}
                              </p>
                            </div>
                          </div>
                          {!notif.read && (
                            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="px-4 py-2 border-t">
                    <button
                      onClick={() => handleNavigation("/notifications")}
                      className="w-full text-center text-sm text-purple-600 hover:text-purple-700"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all mobile-menu-button ${
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

      {/* Enhanced Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-white mt-2 mx-4 rounded-lg shadow-xl border">
          <div className="p-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-3 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
            </div>

            {/* Mobile User Info */}
            {isLoggedIn ? (
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-semibold">John Doe</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Award className="w-3 h-3 mr-1 text-purple-600" />
                      Gold Member · 2,450 pts
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleNavigation("/profile")}
                  className="text-xs text-purple-600 border border-purple-600 px-2 py-1 rounded"
                >
                  View
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleNavigation("/login")}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavigation("/register")}
                  className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg text-sm"
                >
                  Register
                </button>
              </div>
            )}

            {/* Mobile Nav Links with active state */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = isActivePath(link.path);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition ${
                      isActive
                        ? "bg-purple-50 text-purple-600"
                        : "text-gray-700 hover:bg-purple-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-purple-600" : "text-gray-500"}`}
                      />
                      <span className="font-medium">{link.name}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                QUICK LINKS
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.electronics.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigation(link.path)}
                    className="text-left p-2 text-sm text-gray-600 hover:bg-purple-50 rounded"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="pt-2 border-t">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                SUPPORT
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => (window.location.href = "tel:+9193999741051")}
                  className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-purple-50 rounded w-full"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">+91 93997 41051</span>
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:support@ratnakar.com")
                  }
                  className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-purple-50 rounded w-full"
                >
                  <Mail className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">support@ratnakar.com</span>
                </button>
              </div>
            </div>

            {/* Mobile Quick Actions with counts */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t">
              <button
                onClick={() => handleNavigation("/wishlist")}
                className="flex flex-col items-center p-2 text-gray-600 hover:bg-purple-50 rounded"
              >
                <div className="relative">
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Wishlist</span>
              </button>

              <button
                onClick={() => handleNavigation("/cart")}
                className="flex flex-col items-center p-2 text-gray-600 hover:bg-purple-50 rounded"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Cart</span>
              </button>

              <button
                onClick={() => handleNavigation("/notifications")}
                className="flex flex-col items-center p-2 text-gray-600 hover:bg-purple-50 rounded"
              >
                <div className="relative">
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                </div>
                <span className="text-xs mt-1">Alerts</span>
              </button>

              <button
                onClick={() => (window.location.href = "tel:+9193999741051")}
                className="flex flex-col items-center p-2 text-gray-600 hover:bg-purple-50 rounded"
              >
                <Headphones className="w-5 h-5" />
                <span className="text-xs mt-1">Call</span>
              </button>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3 mt-2">
              <p className="text-white text-sm font-semibold">Free Shipping</p>
              <p className="text-white text-xs opacity-90">
                On orders above ₹999
              </p>
              <button
                onClick={() => handleNavigation("/deals")}
                className="mt-2 bg-white text-purple-600 text-xs px-3 py-1 rounded-full font-medium"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
