import React, { useState } from "react";
import {
  ArrowRight,
  Star,
  ChevronRight,
  Globe,
  Smartphone,
  Code,
  Palette,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Download,
  Play,
  CheckCircle,
  Layers,
  Rocket,
  Award,
  Clock,
  Filter,
  X,
  ExternalLink,
  Sparkles,
  Briefcase,
  Cpu,
  Cloud,
  Lock,
  Eye,
} from "lucide-react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "All Products", icon: <Layers className="w-4 h-4" /> },
    { id: "web", name: "Web Apps", icon: <Globe className="w-4 h-4" /> },
    {
      id: "mobile",
      name: "Mobile Apps",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      id: "uiux",
      name: "UI/UX Templates",
      icon: <Palette className="w-4 h-4" />,
    },
    { id: "tools", name: "Dev Tools", icon: <Code className="w-4 h-4" /> },
  ];

  const products = [
    {
      id: 1,
      name: "WebApp Builder Pro",
      tagline: "Create stunning web applications without code",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: [
        "Drag-and-drop interface",
        "50+ pre-built templates",
        "Responsive design",
        "SEO optimized",
        "One-click deployment",
      ],
      price: "$49/mo",
      rating: 4.8,
      reviews: 128,
      popular: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "MobileApp Suite",
      tagline: "Build iOS & Android apps simultaneously",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      features: [
        "Cross-platform development",
        "Native performance",
        "Push notifications",
        "Offline support",
        "App store submission",
      ],
      price: "$79/mo",
      rating: 4.9,
      reviews: 256,
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "UI/UX Design System",
      tagline: "Professional design templates and components",
      category: "uiux",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
      features: [
        "200+ UI components",
        "Figma & Sketch files",
        "Dark mode ready",
        "Accessibility compliant",
        "Regular updates",
      ],
      price: "$29/mo",
      rating: 4.7,
      reviews: 89,
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "DevOps Automation",
      tagline: "Streamline your development workflow",
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      features: [
        "CI/CD pipelines",
        "Automated testing",
        "Container management",
        "Monitoring & alerts",
        "Team collaboration",
      ],
      price: "$99/mo",
      rating: 4.6,
      reviews: 67,
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "E-Commerce Platform",
      tagline: "Launch your online store in minutes",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: [
        "Inventory management",
        "Payment integration",
        "Order tracking",
        "Analytics dashboard",
        "Marketing tools",
      ],
      price: "$69/mo",
      rating: 4.8,
      reviews: 192,
      popular: true,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      name: "Analytics Dashboard",
      tagline: "Real-time insights for your business",
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: [
        "Custom reports",
        "Data visualization",
        "User behavior tracking",
        "Export capabilities",
        "API access",
      ],
      price: "$39/mo",
      rating: 4.5,
      reviews: 45,
      popular: false,
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const featuredProduct = {
    name: "Enterprise Suite",
    tagline: "Complete digital transformation platform",
    description:
      "All-in-one solution for businesses looking to scale. Includes web apps, mobile apps, analytics, and DevOps tools in one integrated platform.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    features: [
      "Integrated development environment",
      "Team collaboration tools",
      "Enterprise-grade security",
      "24/7 priority support",
      "Custom integrations",
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      quote:
        "WebApp Builder Pro helped us launch our MVP in just 2 weeks. The templates are fantastic and the support team is incredible.",
      image:
        "https://images.unsplash.com/photo-1494790108777-76675c5f1209?w=200&h=200&fit=crop",
      rating: 5,
      product: "WebApp Builder Pro",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Innovate Labs",
      role: "Product Manager",
      quote:
        "The MobileApp Suite saved us months of development time. We now have both iOS and Android apps with a single codebase.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      rating: 5,
      product: "MobileApp Suite",
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "Design Studio Co.",
      role: "Lead Designer",
      quote:
        "The UI/UX Design System is a game-changer. Consistent, beautiful components that save us hours of work every week.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
      rating: 5,
      product: "UI/UX Design System",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* 1. Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 mr-2" />
            Discover Our Products
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slideUp">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slideUp animation-delay-200">
            Innovative digital solutions designed to transform your ideas into
            powerful, scalable applications. Built for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center">
              Explore All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Hero stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                number: "10,000+",
                label: "Active Users",
              },
              {
                icon: <Star className="w-5 h-5" />,
                number: "4.8/5",
                label: "Rating",
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                number: "500+",
                label: "Companies",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-600"
              >
                <span className="text-purple-600">{stat.icon}</span>
                <span className="font-bold text-gray-900">{stat.number}</span>
                <span className="text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Product Categories Section (Filterable) */}
        <div className="mb-12">
          {/* Mobile filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full mb-4 px-4 py-3 bg-white rounded-xl shadow-md flex items-center justify-between"
          >
            <span className="font-semibold text-gray-900">Filter Products</span>
            <Filter className="w-5 h-5 text-purple-600" />
          </button>

          {/* Categories */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30"
                      : "bg-white text-gray-600 hover:text-purple-600 hover:shadow-md"
                  }`}
                >
                  <span
                    className={
                      selectedCategory === category.id
                        ? "text-white"
                        : "text-purple-600"
                    }
                  >
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Product Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 lg:mb-24">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                    <Zap className="w-3 h-3 mr-1 fill-current" />
                    POPULAR
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-90`}
                ></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />

                {/* Quick view overlay */}
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="px-4 py-2 bg-white rounded-lg text-gray-900 font-semibold flex items-center">
                    Quick View
                    <Eye className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold ml-1">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{product.tagline}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {product.features.length > 3 && (
                    <li className="text-sm text-purple-600 font-medium">
                      +{product.features.length - 3} more features
                    </li>
                  )}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                  <button className="group/btn px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 flex items-center">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Bottom gradient border on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* 4. Featured Product Section */}
        <div className="mb-20 lg:mb-24">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm mb-6">
                  <Rocket className="w-4 h-4 mr-2" />
                  Featured Product
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {featuredProduct.name}
                </h2>
                <p className="text-xl text-purple-300 mb-4">
                  {featuredProduct.tagline}
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {featuredProduct.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredProduct.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                    Request Demo
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex items-center space-x-4 mt-8 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Lock className="w-4 h-4 mr-1" />
                    Enterprise Security
                  </span>
                  <span className="flex items-center">
                    <Cloud className="w-4 h-4 mr-1" />
                    Cloud Hosted
                  </span>
                  <span className="flex items-center">
                    <Cpu className="w-4 h-4 mr-1" />
                    AI-Powered
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Testimonials / Success Stories Section */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Innovators
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers say about our products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center text-sm text-gray-500">
                  <span>Used</span>
                  <span className="font-semibold text-purple-600 ml-1">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Bottom Call to Action */}
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>

          {/* App screenshots floating effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl transform rotate-12 animate-float-slow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-3xl transform -rotate-12 animate-float-slower"></div>
          </div>

          <div className="relative px-8 py-16 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready to experience our products?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of businesses that trust Ratnakar Digital Solutions
              for their digital needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                Get Started Now
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                Request a Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/80">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                No credit card required
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                14-day free trial
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
          <button className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <Download className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(17deg);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-25px) rotate(-7deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ProductsPage;
