import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Shield,
  Zap,
  Users,
  Briefcase,
  ArrowRight,
  Globe,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* 1. Heading / Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Tell us about
            your ideas and let's bring them to life together.
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2 text-purple-500" />
            <span>We usually respond within 24 hours</span>
          </div>
        </div>

        {/* 2. Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Left Column - Contact Form */}
          <div className="relative">
            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-slideDown">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-700 text-sm">
                    Thank you for reaching out! We'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <label
                    htmlFor="fullName"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "fullName" || formData.fullName
                        ? "-top-2 text-xs bg-white px-2 text-purple-600"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "-top-2 text-xs bg-white px-2 text-purple-600"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "phone" || formData.phone
                        ? "-top-2 text-xs bg-white px-2 text-purple-600"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white"
                  />
                </div>

                {/* Project Type Dropdown */}
                <div className="relative">
                  <label
                    htmlFor="projectType"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "projectType" || formData.projectType
                        ? "-top-2 text-xs bg-white px-2 text-purple-600"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("projectType")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled></option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? "-top-2 text-xs bg-white px-2 text-purple-600"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white resize-none"
                  ></textarea>
                </div>

                {/* Privacy Note */}
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span>
                    Your information is safe with us. We'll never share your
                    details.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -right-4 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      100% Privacy
                    </p>
                    <p className="text-xs text-gray-500">GDPR Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Information Cards */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:hello@ratnakar.digital"
                      className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                    >
                      hello@ratnakar.digital
                    </a>
                    <p className="text-xs text-gray-400 mt-1">
                      We reply within 24h
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-xs text-gray-400 mt-1">
                      Mon-Fri, 9am-6pm IST
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Office</p>
                    <p className="text-lg font-semibold text-gray-900">
                      123 Tech Park, Whitefield
                    </p>
                    <p className="text-gray-600">Bangalore, Karnataka 560066</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Monday - Friday
                    </p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="#"
                className="mt-8 block w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Media & Illustration */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-xl p-6 sm:p-8 text-white overflow-hidden relative">
              {/* Abstract background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                ></div>
              </div>

              <div className="relative">
                <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
                <p className="text-white/80 mb-6">
                  Follow us on social media for the latest updates and tech
                  insights.
                </p>

                {/* Social Media Icons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "#",
                      label: "LinkedIn",
                      color: "hover:bg-blue-700",
                    },
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      href: "#",
                      label: "Twitter",
                      color: "hover:bg-blue-400",
                    },
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      href: "#",
                      label: "Facebook",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "#",
                      label: "Instagram",
                      color: "hover:bg-pink-600",
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "#",
                      label: "GitHub",
                      color: "hover:bg-gray-800",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Illustration/Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-xs font-bold"
                      >
                        {i === 4 ? "5k+" : ""}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-white/80">
                    <span className="font-bold">5,000+</span> followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Quick Stats / Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20">
          {[
            {
              icon: <Briefcase className="w-6 h-6" />,
              number: "500+",
              label: "Projects Completed",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: <Users className="w-6 h-6" />,
              number: "200+",
              label: "Clients Served",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              number: "50+",
              label: "Technologies",
              color: "from-yellow-500 to-yellow-600",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              number: "8+",
              label: "Years Experience",
              color: "from-green-500 to-green-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <div
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 4. Bottom Call to Action */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=300&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative px-8 py-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to discuss your project?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's turn your ideas into reality. Get a free consultation and
              quote today.
            </p>
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-600/30 transition-all duration-300 inline-flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Free Consultation
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                No Obligation
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                100% Confidential
              </span>
            </div>
          </div>
        </div>

        {/* Floating Help Button */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
          <button className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
