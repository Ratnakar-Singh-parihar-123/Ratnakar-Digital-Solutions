import React, { useState, useEffect } from "react";
import {
  Star,
  ChevronRight,
  Clock,
  Zap,
  Shield,
  CheckCircle,
  Gift,
  Rocket,
  Sparkles,
  Users,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Award,
  Calendar,
  Percent,
  Crown,
  Briefcase,
  Heart,
  Download,
  X,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
  Timer,
} from "lucide-react";

const DealsPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredDeal, setHoveredDeal] = useState(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      name: "Starter Package",
      tagline: "Perfect for startups and small businesses",
      price: "$999",
      originalPrice: "$1,499",
      discount: "33% OFF",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media integration",
        "1 month support included",
      ],
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      savings: "$500",
      badge: "Best for Startups",
    },
    {
      id: 2,
      name: "Business Package",
      tagline: "Complete digital solution for growing businesses",
      price: "$2,499",
      originalPrice: "$3,499",
      discount: "28% OFF",
      features: [
        "15-page dynamic website",
        "Mobile app (iOS & Android)",
        "Advanced SEO package",
        "E-commerce functionality",
        "6 months priority support",
        "Analytics dashboard",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      popular: true,
      savings: "$1,000",
      badge: "Most Popular",
    },
    {
      id: 3,
      name: "Premium Package",
      tagline: "Enterprise-grade solution with full customization",
      price: "$4,999",
      originalPrice: "$6,999",
      discount: "28% OFF",
      features: [
        "Custom web application",
        "Advanced mobile apps",
        "Custom API development",
        "Cloud infrastructure setup",
        "12 months premium support",
        "Team training included",
      ],
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      popular: false,
      savings: "$2,000",
      badge: "Enterprise Ready",
    },
    {
      id: 4,
      name: "UI/UX Design Bundle",
      tagline: "Professional design package for your brand",
      price: "$1,499",
      originalPrice: "$2,299",
      discount: "35% OFF",
      features: [
        "Complete brand identity",
        "UI/UX design system",
        "Wireframing & prototyping",
        "User testing included",
        "Design files (Figma/Sketch)",
        "3 months design support",
      ],
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      popular: false,
      savings: "$800",
      badge: "Design Special",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechFlow Solutions",
      role: "Founder",
      quote:
        "The Business Package transformed our digital presence. Got our website and app at an unbeatable price!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
      deal: "Business Package",
    },
    {
      id: 2,
      name: "Priya Mehta",
      company: "StyleCraft",
      role: "CEO",
      quote:
        "Started with the Starter Package, now we're upgrading to Premium. Amazing value for money!",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
      rating: 5,
      deal: "Starter Package",
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "FoodieExpress",
      role: "CTO",
      quote:
        "The UI/UX Bundle gave us a stunning brand identity. Our user engagement increased by 200%!",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
      rating: 5,
      deal: "UI/UX Bundle",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How long are these deals valid?",
      answer:
        "Our special promotional deals are valid for a limited time only. The current offers expire in 2 days, but we recommend booking your package soon to secure these prices. After the timer ends, prices will return to regular rates.",
    },
    {
      id: 2,
      question: "Can I customize the packages?",
      answer:
        "Absolutely! While our packages are designed to cover common needs, we're happy to customize any package based on your specific requirements. Contact our sales team for a personalized quote.",
    },
    {
      id: 3,
      question: "What's included in the support?",
      answer:
        "Support includes technical assistance, bug fixes, and minor updates. The duration varies by package: Starter includes 1 month, Business includes 6 months, and Premium includes 12 months of priority support.",
    },
    {
      id: 4,
      question: "Do you offer payment plans?",
      answer:
        "Yes! We offer flexible payment options including 50% upfront and 50% on completion, or monthly installments for larger packages. Contact us to discuss the best option for you.",
    },
    {
      id: 5,
      question: "Can I upgrade my package later?",
      answer:
        "Definitely! You can upgrade your package at any time. We'll credit the amount you've already paid toward your new package. Many clients start with Starter and upgrade as they grow.",
    },
  ];

  const limitedTimeOffers = [
    {
      id: 1,
      title: "Free Domain + Hosting",
      description: "For 1 year with any web development package",
      icon: <Gift className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "SEO Audit Worth $499",
      description: "Free comprehensive SEO analysis",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "2 Extra Revisions",
      description: "On all design packages",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 transform translate-y-0 transition-transform duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              {/* <Fire className="w-4 h-4 animate-pulse" /> */}
              <span className="font-semibold">FLASH SALE:</span>
              <span>Extra 10% off on all packages. Use code: RATNAKAR10</span>
            </div>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

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

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ${showAnnouncement ? "mt-12" : ""}`}
      >
        {/* 1. Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6 animate-fadeIn">
            <Percent className="w-4 h-4 mr-2" />
            Limited Time Offers
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slideUp">
            Exclusive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}
              Deals
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slideUp animation-delay-200">
            Unlock special packages designed to accelerate your digital journey.
            Save big on our premium development services.
          </p>

          {/* Savings counter */}
          <div className="flex items-center justify-center space-x-4 mb-8 animate-slideUp animation-delay-400">
            <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">
                Save up to $2,000
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center">
              View All Deals
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Gift className="w-5 h-5 mr-2" />
              Claim Your Offer
            </button>
          </div>

          {/* Hero stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                number: "500+",
                label: "Happy Clients",
              },
              {
                icon: <Gift className="w-5 h-5" />,
                number: "$50K+",
                label: "Savings Given",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                number: "48h",
                label: "Left to Save",
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

        {/* 3. Limited Time / Special Offers Section */}
        <div className="mb-16 lg:mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative px-8 py-10 lg:py-12">
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

              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
                    <Timer className="w-4 h-4 mr-2" />
                    Limited Time Offer
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Flash Sale Ends In
                  </h2>

                  {/* Countdown Timer */}
                  <div className="flex space-x-4 mb-6">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
                          <div className="text-3xl font-bold text-white">
                            {value}
                          </div>
                          <div className="text-xs text-white/80 uppercase">
                            {unit}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/90 mb-6">
                    Grab these exclusive packages before prices go back up!
                  </p>

                  <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center">
                    Grab the Deal
                    <Zap className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Additional offers */}
                <div className="grid gap-4">
                  {limitedTimeOffers.map((offer) => (
                    <div
                      key={offer.id}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        {offer.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {offer.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Deals / Packages Cards Section */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Perfect Package
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                  deal.popular ? "lg:scale-105 z-10" : ""
                }`}
                onMouseEnter={() => setHoveredDeal(deal.id)}
                onMouseLeave={() => setHoveredDeal(null)}
              >
                {/* Popular badge */}
                {deal.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                      <Crown className="w-3 h-3 mr-1" />
                      {deal.badge}
                    </span>
                  </div>
                )}

                {/* Discount badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    {deal.discount}
                  </span>
                </div>

                {/* Card Header with Gradient */}
                <div
                  className={`h-24 bg-gradient-to-r ${deal.gradient} p-6 relative overflow-hidden`}
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-2">
                      {deal.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {deal.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{deal.tagline}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-end space-x-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {deal.price}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        {deal.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      Save {deal.savings}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {deal.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                      hoveredDeal === deal.id
                        ? `bg-gradient-to-r ${deal.gradient} text-white shadow-lg`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Claim Now
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Guarantee badge */}
                  <p className="text-xs text-gray-400 text-center mt-3">
                    30-day money-back guarantee
                  </p>
                </div>

                {/* Bottom border on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${deal.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>

          {/* Savings note */}
          <p className="text-center text-sm text-gray-500 mt-8">
            * All packages include lifetime updates and 24/7 support
          </p>
        </div>

        {/* 4. Testimonials Section */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses that saved
              big with our deals
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

                <div className="flex items-center text-sm">
                  <span className="text-gray-500">Used</span>
                  <span className="font-semibold text-purple-600 ml-1">
                    {testimonial.deal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FAQ Section */}
        <div className="mb-20 lg:mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Got questions? We've got answers
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Bottom Call to Action */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-2xl transform rotate-12 animate-float-slow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-3xl transform -rotate-12 animate-float-slower"></div>
          </div>

          <div className="relative px-8 py-16 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Don't miss out on our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}
                exclusive packages!
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              These deals won't last forever. Start your digital journey today
              with our best prices ever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center">
                Claim Your Deal
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>

            {/* Contact options */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a
                href="tel:+919876543210"
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </a>
              <a
                href="mailto:sales@ratnakar.digital"
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                sales@ratnakar.digital
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                Secure Payment
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                30-Day Guarantee
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-2 text-green-400" />
                Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
          <button className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <Gift className="w-6 h-6" />
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

export default DealsPage;
