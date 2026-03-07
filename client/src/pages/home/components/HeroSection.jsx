import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Code,
  Smartphone,
  Zap,
  Rocket,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Layers,
  ChevronDown,
  Hexagon,
  CircleDot,
  Sparkle,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const heroImage =
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  const fullText = "Ratnakar Digital Solutions";

  // Letter animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
      setMousePosition({ x, y });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Canvas particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Letter rendering with enhanced design
  const renderText = () => {
    return fullText.split("").map((char, index) => {
      const isCharVisible = index < currentIndex;

      if (char === " ") {
        return (
          <span key={index} className="inline-block w-2 sm:w-3 md:w-4 lg:w-6" />
        );
      }

      // Word boundaries
      const isRatnakar = index < 8;
      const isDigital = index >= 9 && index < 16;
      const isSolutions = index >= 17;

      let gradientColor = "from-purple-400 via-pink-400 to-blue-400";
      if (isRatnakar)
        gradientColor = "from-purple-400 via-fuchsia-400 to-pink-400";
      if (isDigital) gradientColor = "from-blue-400 via-cyan-400 to-teal-400";
      if (isSolutions)
        gradientColor = "from-pink-400 via-rose-400 to-orange-400";

      const delay = index * 0.02;

      return (
        <span
          key={index}
          className={`inline-block transition-all duration-700 font-black ${
            isCharVisible
              ? "opacity-100 translate-y-0 scale-100 rotate-0"
              : "opacity-0 translate-y-20 scale-50 rotate-12"
          }`}
          style={{
            fontSize: "clamp(2rem, 10vw, 5.5rem)",
            fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
            letterSpacing: "-0.03em",
            textShadow: isCharVisible
              ? "0 20px 40px rgba(0, 0, 0, 0.3)"
              : "none",
            transitionDelay: `${delay}s`,
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg) translateZ(${mousePosition.x * 0.1}px)`,
          }}
        >
          <span
            className={`relative bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 inline-block`}
            style={{
              filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))",
            }}
          >
            {char}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
          </span>
        </span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: "overlay" }}
      />

      {/* Animated Background with Enhanced Effects */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: "transform 0.2s ease-out",
            filter: "brightness(0.7) contrast(1.2)",
          }}
        />

        {/* Gradient Overlay with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBoLTJ2Mmgydi0yem0wLTI4aC0ydjJoMnYtMnptMjggMjhoLTJ2Mmgydi0yek0yIDJoLTJ2MmgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"
            style={{
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            }}
          />
        </div>

        {/* Floating Orbs with Enhanced Animation */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Premium Badge with Enhanced Design */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-full text-sm font-medium border border-white/10 shadow-2xl group hover:scale-105 transition-all duration-300 mt-8">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                India's #1 Digital Solutions Provider
              </span>
              <Award className="w-4 h-4 ml-2 text-yellow-400 animate-pulse" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
            </span>
          </div>

          {/* Company Name with 3D Effect */}
          <h1 className="mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 leading-[1.1] max-w-6xl mx-auto px-4 relative">
            {renderText()}

            {/* Glow Effect Behind Text */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 blur-3xl -z-10"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            />
          </h1>

          {/* Animated Tagline with Enhanced Typography */}
          <div
            className={`transform transition-all duration-1000 delay-[1200ms] ${
              currentIndex === fullText.length
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
              <span className="relative inline-block">
                <span className="relative z-10">Transforming ideas into</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-width" />
              </span>{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                powerful digital solutions
              </span>{" "}
              with cutting-edge technology
            </p>

            {/* Interactive Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4">
              {[
                {
                  icon: <Code className="w-5 h-5" />,
                  text: "Web Development",
                  color: "from-purple-500 to-pink-500",
                  description: "Modern web apps",
                },
                {
                  icon: <Smartphone className="w-5 h-5" />,
                  text: "Mobile Apps",
                  color: "from-blue-500 to-cyan-500",
                  description: "iOS & Android",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  text: "UI/UX Design",
                  color: "from-yellow-500 to-orange-500",
                  description: "User-centric design",
                },
                {
                  icon: <Rocket className="w-5 h-5" />,
                  text: "Digital Marketing",
                  color: "from-green-500 to-emerald-500",
                  description: "Growth solutions",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeFeature === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  />

                  {/* Card Content */}
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    {/* Icon Container */}
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-3 shadow-lg`}
                    >
                      {item.icon}
                    </div>

                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.text}
                    </h3>
                    <p className="text-gray-400 text-xs">{item.description}</p>

                    {/* Active Indicator */}
                    {activeFeature === index && (
                      <div className="absolute top-2 right-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Enhanced Design */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
              <button className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-600/30 hover:scale-105">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center text-lg">
                  Start Your Project
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>

                {/* Particles Effect */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%273%27 cy=%273%27 r=%273%27/%3E%3C/g%3E%3C/svg%3E')] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              </button>

              <button className="group relative w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/40 hover:scale-105 backdrop-blur-sm">
                <span className="relative z-10 flex items-center justify-center text-lg">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            {/* Stats with Modern Design and Animation */}
            <div className="grid grid-cols-3 gap-8 sm:gap-16 mt-20 max-w-4xl mx-auto px-4">
              {[
                {
                  num: "500+",
                  label: "Projects Completed",
                  icon: Rocket,
                  color: "from-purple-500 to-pink-500",
                  suffix: "",
                },
                {
                  num: "200+",
                  label: "Happy Clients",
                  icon: Users,
                  color: "from-blue-500 to-cyan-500",
                  suffix: "",
                },
                {
                  num: "8",
                  label: "Years Experience",
                  icon: Award,
                  color: "from-green-500 to-emerald-500",
                  suffix: "+",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Background Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative text-center transform group-hover:scale-110 transition-all duration-500">
                      {/* Icon with Rotating Animation */}
                      <div className="relative mb-3">
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} rotate-0 group-hover:rotate-12 transition-transform duration-500`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        {/* Ring Effect */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-xl animate-ping opacity-0 group-hover:opacity-100" />
                      </div>

                      {/* Number with Gradient */}
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                        {stat.num}
                        <span className="text-sm align-top ml-1">
                          {stat.suffix}
                        </span>
                      </div>

                      {/* Label */}
                      <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Badges with Enhanced Design */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
              {[
                { text: "ISO 27001 Certified", icon: Shield },
                { text: "24/7 Premium Support", icon: Clock },
                { text: "100% Satisfaction", icon: CheckCircle },
                { text: "Award Winning Team", icon: Award },
                { text: "Global Presence", icon: Globe },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative cursor-default">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center space-x-2 text-gray-400 group-hover:text-white transition-all duration-300">
                      <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-purple-600/30 transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator with Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center space-y-3 group cursor-pointer">
            <span className="text-white/30 text-[10px] tracking-[0.3em] font-light group-hover:text-white/50 transition-colors duration-300">
              SCROLL
            </span>
            <div className="relative">
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 group-hover:border-white/40 transition-colors duration-300">
                <div className="w-1.5 h-2.5 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-scroll" />
              </div>
              {/* Pulse Effect */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
            </div>
            <ChevronDown className="w-4 h-4 text-white/20 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes width {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-width {
          animation: width 1s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(5px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
