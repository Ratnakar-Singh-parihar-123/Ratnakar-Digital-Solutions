import React, { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Users,
  Award,
  Briefcase,
  Clock,
  Heart,
  Zap,
  ChevronRight,
  Play,
  Star,
  Rocket,
  Globe,
  Shield,
  MessageCircle,
  Coffee,
  Layers,
  TrendingUp,
  Code,
  Smartphone,
  Palette,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
} from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll("[data-observe]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Rajesh Ratnakar",
      role: "Founder & CEO",
      tagline: "Visionary leader with 15+ years in tech",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      tagline: "Full-stack architect, AI enthusiast",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Amit Kumar",
      role: "Lead Designer",
      tagline: "Creating beautiful, intuitive experiences",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Neha Gupta",
      role: "Project Manager",
      tagline: "Delivering excellence, on time & budget",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      description:
        "Pushing boundaries with cutting-edge technology and creative solutions.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to exceeding expectations.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Spirit",
      description:
        "Working together, we achieve more. Partnership is at our core.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity & Trust",
      description: "Honest, transparent, and ethical in everything we do.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      event: "Company founded in Pune",
      icon: <Rocket className="w-4 h-4" />,
    },
    {
      year: "2017",
      event: "First 50 projects delivered",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      year: "2019",
      event: "Expanded to mobile development",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      year: "2021",
      event: "Opened Bangalore office",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      year: "2023",
      event: "AI/ML practice launched",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* 1. Hero / Intro Section */}
        <div
          data-observe="hero"
          id="hero"
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 transform ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Welcome to Ratnakar Digital Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crafting Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}
              Excellence{" "}
            </span>
            Since 2015
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're a passionate team of developers, designers, and strategists
            dedicated to transforming businesses through innovative technology
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center">
              Join Our Team
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
          </div>
        </div>

        {/* 2. Company Story with Timeline */}
        <div
          data-observe="story"
          id="story"
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 sm:mb-24 transition-all duration-1000 delay-200 transform ${
            isVisible.story
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Journey of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Innovation{" "}
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2015 by Rajesh Ratnakar, our company started with a
              simple mission: to make cutting-edge technology accessible to
              businesses of all sizes. What began as a two-person team has grown
              into a dynamic force of 50+ experts, delivering innovative
              solutions to clients across India and beyond.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute top-10 left-5 w-0.5 h-12 bg-gradient-to-b from-purple-200 to-blue-200"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="font-bold text-purple-600">{item.year}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Mission & Vision */}
        <div
          data-observe="mission"
          id="mission"
          className={`grid md:grid-cols-2 gap-8 mb-20 sm:mb-24 transition-all duration-1000 delay-400 transform ${
            isVisible.mission
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, efficiency, and success. We strive to make
                technology accessible, intuitive, and impactful for every client
                we serve.
              </p>
              <div className="mt-6 flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted digital transformation partner,
                recognized for excellence, innovation, and the positive impact
                we create for our clients and communities.
              </p>
              <div className="mt-6 flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Core Values */}
        <div
          data-observe="values"
          id="values"
          className={`mb-20 sm:mb-24 transition-all duration-1000 delay-600 transform ${
            isVisible.values
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Values That Drive Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core principles shape everything we do, from how we work to
              how we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-purple-600 group-hover:text-purple-700">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Team Section */}
        <div
          data-observe="team"
          id="team"
          className={`mb-20 sm:mb-24 transition-all duration-1000 delay-800 transform ${
            isVisible.team
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the Minds Behind the Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social links overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{member.tagline}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 group">
              View Full Team
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6. Stats / Achievements */}
        <div
          data-observe="stats"
          id="stats"
          className={`mb-20 sm:mb-24 transition-all duration-1000 delay-1000 transform ${
            isVisible.stats
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative px-8 py-12 sm:py-16">
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

              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  {
                    number: "500+",
                    label: "Projects Completed",
                    icon: <Briefcase className="w-6 h-6" />,
                  },
                  {
                    number: "200+",
                    label: "Happy Clients",
                    icon: <Users className="w-6 h-6" />,
                  },
                  {
                    number: "50+",
                    label: "Tech Experts",
                    icon: <Code className="w-6 h-6" />,
                  },
                  {
                    number: "8+",
                    label: "Years of Excellence",
                    icon: <Award className="w-6 h-6" />,
                  },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 7. Call to Action */}
        <div
          data-observe="cta"
          id="cta"
          className={`relative bg-gray-900 rounded-3xl overflow-hidden transition-all duration-1000 delay-1200 transform ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Background with tech pattern */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop"
              alt="Tech background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative px-8 py-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}
                Amazing{" "}
              </span>
              Together
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Ready to transform your idea into reality? Let's collaborate and
              create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                24/7 Support
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                100% Client Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Floating contact card */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-2">
                  We're here to help 24/7
                </p>
                <button className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                  Talk to us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
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

export default AboutSection;
