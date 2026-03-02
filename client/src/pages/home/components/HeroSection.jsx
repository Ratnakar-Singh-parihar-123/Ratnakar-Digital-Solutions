import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Code,
  Smartphone,
  Zap,
  Star,
  ArrowDown,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImage =
    "https://blog.spacematrix.com/sites/default/files/styles/resp_large_breakpoints_theme_archi_dark_wide_1x/public/blog/Resized%20Images-05%20%285%29.jpg";

  const fullText = "RATNAKAR DIGITAL SOLUTIONS";

  // Letter animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Letter rendering with better styling
  const renderText = () => {
    return fullText.split("").map((char, index) => {
      const isVisible = index < currentIndex;

      if (char === " ") {
        return (
          <span
            key={index}
            className="inline-block w-2 sm:w-3 md:w-4 lg:w-6"
          ></span>
        );
      }

      return (
        <span
          key={index}
          className={`inline-block transition-all duration-700 font-bold ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-90"
          }`}
          style={{
            fontSize: "clamp(1.5rem, 6vw, 4rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 8px rgba(255,255,255,0.15)",
            letterSpacing: "-0.01em",
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-600/20 backdrop-blur-sm rounded-full text-purple-200 text-xs sm:text-sm font-medium border border-purple-500/30 mt-10">
              <Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" />
              India's Trusted Tech Partner
            </span>
          </div>

          {/* Company Name */}
          <h1 className="mt-4 sm:mt-6 md:mt-8 mb-3 sm:mb-4 md:mb-6 leading-tight max-w-5xl mx-auto">
            {renderText()}
          </h1>

          {/* Tagline */}
          <div
            className={`transform transition-all duration-1000 delay-[1200ms] ${
              currentIndex === fullText.length
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              Transforming ideas into powerful digital solutions with
              cutting-edge technology.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-4">
              {[
                {
                  icon: <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                  text: "Web Dev",
                },
                {
                  icon: <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                  text: "Mobile",
                },
                {
                  icon: <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                  text: "UI/UX",
                },
                {
                  icon: <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                  text: "Marketing",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/90 text-xs"
                >
                  <span className="text-purple-400">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center text-sm">
                Start Project
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center text-sm">
                <Play className="w-4 h-4 mr-2" />
                Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 max-w-2xl mx-auto px-4">
              {[
                { num: "500+", label: "Projects" },
                { num: "200+", label: "Clients" },
                { num: "8+", label: "Years" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.num}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 text-xs text-gray-400">
              <span className="flex items-center">✓ ISO Certified</span>
              <span className="flex items-center">✓ 24/7 Support</span>
              <span className="flex items-center">✓ 100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="flex flex-col items-center space-y-1">
          <span className="text-white/40 text-xs tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
