import React, { useState } from "react";
import styled from "styled-components";
import {
  Code,
  Users,
  Award,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Globe,
  Zap,
  ChevronRight,
  ArrowRight,
  Filter,
  Search,
  CheckCircle,
  Star,
  Camera,
  Video,
  MessageCircle,
  Rocket,
  Target,
  TrendingUp,
  Smile,
  BookOpen,
  Laptop,
  Calendar,
  Download,
  Send,
  Play,
} from "lucide-react";

const CareerPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const openPositions = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Noida, India",
      type: "Full Time",
      remote: "Remote Friendly",
      description:
        "Build scalable web applications using React, Next.js, and modern frontend technologies.",
      requirements: ["5+ years experience", "React expert", "Team player"],
    },
    {
      id: 2,
      title: "Flutter Developer",
      department: "Mobile",
      location: "Noida, India",
      type: "Full Time",
      remote: "On-site",
      description:
        "Develop cross-platform mobile apps for iOS and Android using Flutter.",
      requirements: ["3+ years Flutter", "Dart expertise", "UI/UX sense"],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full Time",
      remote: "Fully Remote",
      description:
        "Create beautiful and intuitive user experiences for web and mobile apps.",
      requirements: ["4+ years experience", "Figma expert", "Portfolio"],
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      department: "Engineering",
      location: "Noida, India",
      type: "Internship",
      remote: "Hybrid",
      description:
        "Learn and work on Node.js, Python, and database technologies.",
      requirements: [
        "Final year student",
        "Basic programming",
        "Eager to learn",
      ],
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full Time",
      remote: "Fully Remote",
      description: "Manage cloud infrastructure and CI/CD pipelines.",
      requirements: ["AWS/Azure", "Kubernetes", "CI/CD tools"],
    },
    {
      id: 6,
      title: "Frontend Developer Intern",
      department: "Engineering",
      location: "Noida, India",
      type: "Internship",
      remote: "On-site",
      description: "Learn modern frontend development with React and Next.js.",
      requirements: ["HTML/CSS/JS", "React basics", "Portfolio"],
    },
  ];

  const cultureCards = [
    {
      icon: <Users size={24} />,
      title: "Collaborative Culture",
      description:
        "Work together, learn together, grow together. We believe in teamwork and shared success.",
    },
    {
      icon: <Zap size={24} />,
      title: "Innovation First",
      description:
        "Stay ahead with cutting-edge technologies and creative problem-solving approaches.",
    },
    {
      icon: <Heart size={24} />,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote options, and a supportive environment for personal growth.",
    },
    {
      icon: <Award size={24} />,
      title: "Growth Mindset",
      description:
        "Continuous learning, mentorship programs, and career advancement opportunities.",
    },
  ];

  const hiringSteps = [
    {
      icon: <Search size={24} />,
      title: "Application Review",
      description:
        "Submit your application and our team reviews your profile and portfolio.",
    },
    // {
    //   icon: <Phone size={24} />,
    //   title: "Initial Chat",
    //   description:
    //     "30-minute call to discuss your experience and career goals.",
    // },
    {
      icon: <Code size={24} />,
      title: "Technical Assessment",
      description: "Practical test or coding challenge relevant to the role.",
    },
    {
      icon: <Users size={24} />,
      title: "Team Interview",
      description:
        "Meet the team and discuss collaboration and company culture.",
    },
    {
      icon: <Award size={24} />,
      title: "Offer & Onboarding",
      description: "Receive your offer and begin your journey with us.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Developer",
      quote:
        "Best place to grow as a developer. The mentorship and project exposure are unmatched.",
      image:
        "https://images.unsplash.com/photo-1494790108755-27193f486e5b?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Rahul Verma",
      role: "UI/UX Designer",
      quote:
        "Creative freedom and supportive team. Every day brings new challenges and learning.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Anjali Gupta",
      role: "Project Manager",
      quote:
        "Amazing culture and growth opportunities. Proud to be part of this innovative team.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
  ];

  const benefits = [
    {
      icon: <Rocket size={20} />,
      title: "Growth Opportunities",
      description: "Fast-track your career with real projects",
    },
    {
      icon: <Users size={20} />,
      title: "Real Client Projects",
      description: "Work on production applications",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Mentorship Program",
      description: "Learn from industry experts",
    },
    {
      icon: <Zap size={20} />,
      title: "Modern Technologies",
      description: "Work with cutting-edge tools",
    },
    {
      icon: <Coffee size={20} />,
      title: "Flexible Culture",
      description: "Remote work & flexible hours",
    },
    {
      icon: <Heart size={20} />,
      title: "Health Benefits",
      description: "Comprehensive medical coverage",
    },
  ];

  return (
    <StyledWrapper>
      <div className="career-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-pattern"></div>
            <div className="hero-gradient"></div>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">
                <Rocket size={16} />
                Join Our Growing Team
              </span>
              <h1>
                Build The <span className="gradient-text">Future</span> With Us
              </h1>
              <p className="hero-description">
                At Ratnakar Digital Solutions, we're creating innovative digital
                products that impact millions. Join our team of passionate
                developers, designers, and creators.
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Open Positions</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">Employee Rating</span>
                </div>
              </div>

              <div className="hero-buttons">
                <button className="primary-btn">
                  View Open Positions
                  <ArrowRight size={16} />
                </button>
                <button className="secondary-btn">
                  <Play size={16} />
                  Join Our Team
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
              />
              <div className="floating-card card-1">
                <Users size={18} />
                <span>Great Team Culture</span>
              </div>
              <div className="floating-card card-2">
                <Zap size={18} />
                <span>Modern Tech Stack</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="why-join-section">
          <div className="section-header">
            <h2>Why Join Ratnakar Digital?</h2>
            <p>
              Build your career with India's fastest growing digital solutions
              company
            </p>
          </div>

          <div className="why-join-grid">
            <div className="why-join-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Developers working together"
              />
              <div className="image-overlay">
                <span>50+ Happy Employees</span>
              </div>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="culture-section">
          <div className="section-header">
            <h2>Our Culture</h2>
            <p>What makes Ratnakar Digital a great place to work</p>
          </div>

          <div className="culture-grid">
            {cultureCards.map((card, index) => (
              <div key={index} className="culture-card">
                <div className="culture-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="positions-section">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>Find your perfect role and join our team</p>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-buttons">
              <button
                className={selectedFilter === "all" ? "active" : ""}
                onClick={() => setSelectedFilter("all")}
              >
                All
              </button>
              <button
                className={selectedFilter === "fulltime" ? "active" : ""}
                onClick={() => setSelectedFilter("fulltime")}
              >
                Full Time
              </button>
              <button
                className={selectedFilter === "internship" ? "active" : ""}
                onClick={() => setSelectedFilter("internship")}
              >
                Internship
              </button>
              <button
                className={selectedFilter === "remote" ? "active" : ""}
                onClick={() => setSelectedFilter("remote")}
              >
                Remote
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="jobs-grid">
            {openPositions.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>

                <div className="job-details">
                  <div className="detail-item">
                    <Briefcase size={14} />
                    <span>{job.department}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div className="detail-item">
                    <Globe size={14} />
                    <span>{job.remote}</span>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  {job.requirements.map((req, idx) => (
                    <span key={idx} className="requirement-tag">
                      {req}
                    </span>
                  ))}
                </div>

                <button className="apply-btn">
                  Apply Now
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Hiring Process Section */}
        <section className="hiring-process">
          <div className="section-header">
            <h2>Our Hiring Process</h2>
            <p>Simple, transparent, and candidate-friendly</p>
          </div>

          <div className="process-timeline">
            {hiringSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < hiringSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Life at Ratnakar Digital */}
        <section className="gallery-section">
          <div className="section-header">
            <h2>Life at Ratnakar Digital</h2>
            <p>Peek into our workspace and culture</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <Camera size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Testimonials */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2>What Our Team Says</h2>
            <p>Real stories from real employees</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <MessageCircle size={20} />
                  </div>
                  <p className="quote">"{testimonial.quote}"</p>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Program */}
        <section className="internship-section">
          <div className="internship-content">
            <div className="internship-text">
              <span className="internship-badge">
                <GraduationCap size={18} />
                Internship Program
              </span>
              <h2>Start Your Career With Us</h2>
              <p>
                Get hands-on experience, work on real projects, and learn from
                industry experts.
              </p>

              <div className="internship-benefits">
                {[
                  "Hands-on Experience",
                  "Real Client Projects",
                  "Mentorship Program",
                  "Certificate of Completion",
                  "Stipend Available",
                  "Full-time Opportunity",
                ].map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <CheckCircle size={16} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="internship-btn">
                Apply for Internship
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="internship-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Interns working"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-content">
            <h2>Ready to Shape the Future?</h2>
            <p>Join us and build innovative solutions that make a difference</p>
            <button className="cta-btn">
              Apply Now
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .career-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }

  .section-header p {
    font-size: 1.1rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    padding: 4rem 0;
    margin-bottom: 4rem;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .hero-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(#4f46e5 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.1;
  }

  .hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(79, 70, 229, 0.05) 0%,
      transparent 50%
    );
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #f3f4f6;
    border-radius: 30px;
    font-size: 0.9rem;
    color: #4f46e5;
    margin-bottom: 1.5rem;
  }

  .hero-text h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .gradient-text {
    background: linear-gradient(135deg, #4f46e5, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-description {
    font-size: 1.1rem;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .stat-item {
    text-align: left;
  }

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #6b7280;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
  }

  .primary-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .primary-btn:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2);
  }

  .secondary-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: transparent;
    color: #4f46e5;
    border: 2px solid #4f46e5;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .secondary-btn:hover {
    background: #4f46e5;
    color: white;
    transform: translateY(-2px);
  }

  .hero-image {
    position: relative;
  }

  .hero-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .floating-card {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: white;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
    font-weight: 500;
    color: #111827;
  }

  .card-1 {
    top: 20%;
    right: -20px;
    animation: float 3s ease-in-out infinite;
  }

  .card-2 {
    bottom: 20%;
    left: -20px;
    animation: float 3s ease-in-out infinite 1.5s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Why Join Section */
  .why-join-section {
    margin: 4rem 0;
  }

  .why-join-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .why-join-image {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
  }

  .why-join-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .why-join-image:hover img {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .benefit-card {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.1);
  }

  .benefit-icon {
    width: 44px;
    height: 44px;
    background: #4f46e5;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  .benefit-content h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
  }

  .benefit-content p {
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.4;
  }

  /* Culture Section */
  .culture-section {
    margin: 4rem 0;
  }

  .culture-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .culture-card {
    padding: 2rem;
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #f0f0f0;
    transition: all 0.3s ease;
    text-align: center;
  }

  .culture-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.1);
    border-color: #4f46e5;
  }

  .culture-icon {
    width: 60px;
    height: 60px;
    background: #f3f4f6;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4f46e5;
    margin: 0 auto 1.5rem;
    transition: all 0.3s ease;
  }

  .culture-card:hover .culture-icon {
    background: #4f46e5;
    color: white;
  }

  .culture-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }

  .culture-card p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  /* Positions Section */
  .positions-section {
    margin: 4rem 0;
  }

  .filters-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .search-box {
    flex: 1;
    max-width: 300px;
    position: relative;
  }

  .search-box svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
  }

  .search-box input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    border: 2px solid #f0f0f0;
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .search-box input:focus {
    outline: none;
    border-color: #4f46e5;
  }

  .filter-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .filter-buttons button {
    padding: 0.5rem 1.25rem;
    background: #f3f4f6;
    border: none;
    border-radius: 30px;
    font-size: 0.9rem;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-buttons button.active {
    background: #4f46e5;
    color: white;
  }

  .filter-buttons button:hover {
    background: #4f46e5;
    color: white;
  }

  .jobs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .job-card {
    padding: 2rem;
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #f0f0f0;
    transition: all 0.3s ease;
  }

  .job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.1);
    border-color: #4f46e5;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .job-header h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #111827;
  }

  .job-type {
    padding: 0.25rem 0.75rem;
    background: #f3f4f6;
    border-radius: 20px;
    font-size: 0.75rem;
    color: #4f46e5;
    font-weight: 500;
  }

  .job-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.8rem;
    color: #6b7280;
  }

  .job-description {
    font-size: 0.9rem;
    color: #6b7280;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .job-requirements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .requirement-tag {
    padding: 0.25rem 0.75rem;
    background: #f3f4f6;
    border-radius: 20px;
    font-size: 0.7rem;
    color: #6b7280;
  }

  .apply-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 1rem;
    background: #f8f9fa;
    border: none;
    border-radius: 12px;
    color: #4f46e5;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .apply-btn:hover {
    background: #4f46e5;
    color: white;
  }

  /* Hiring Process */
  .hiring-process {
    margin: 4rem 0;
    padding: 3rem;
    background: #f8f9fa;
    border-radius: 40px;
  }

  .process-timeline {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    position: relative;
  }

  .process-step {
    text-align: center;
    position: relative;
  }

  .step-number {
    width: 30px;
    height: 30px;
    background: #4f46e5;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 auto 1rem;
  }

  .step-icon {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4f46e5;
    margin: 0 auto 1rem;
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.1);
  }

  .process-step h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .process-step p {
    font-size: 0.8rem;
    color: #6b7280;
    line-height: 1.4;
  }

  .step-connector {
    position: absolute;
    top: 45px;
    right: -50%;
    width: 100%;
    height: 2px;
    background: #e5e7eb;
    z-index: 0;
  }

  /* Gallery Section */
  .gallery-section {
    margin: 4rem 0;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .gallery-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    height: 250px;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.1);
  }

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(79, 70, 229, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  /* Testimonials Section */
  .testimonials-section {
    margin: 4rem 0;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .testimonial-card {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 30px;
    transition: all 0.3s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.1);
  }

  .testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .testimonial-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .testimonial-content {
    flex: 1;
  }

  .quote-icon {
    color: #4f46e5;
    margin-bottom: 1rem;
  }

  .quote {
    font-size: 0.95rem;
    color: #111827;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-style: italic;
  }

  .testimonial-content h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
  }

  .testimonial-content span {
    font-size: 0.85rem;
    color: #6b7280;
  }

  /* Internship Section */
  .internship-section {
    margin: 4rem 0;
  }

  .internship-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
    border-radius: 40px;
    padding: 3rem;
    color: white;
  }

  .internship-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .internship-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .internship-text p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .internship-benefits {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .benefit-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .internship-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: white;
    color: #4f46e5;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .internship-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .internship-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* Final CTA */
  .final-cta {
    margin: 4rem 0;
    text-align: center;
  }

  .cta-content {
    padding: 4rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e0e7ff 100%);
    border-radius: 40px;
  }

  .cta-content h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.2rem;
    color: #6b7280;
    margin-bottom: 2rem;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .cta-btn:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2);
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .hero-content,
    .why-join-grid,
    .internship-content {
      grid-template-columns: 1fr;
    }

    .hero-image {
      order: -1;
    }

    .hero-image img {
      height: 300px;
    }

    .floating-card {
      display: none;
    }

    .culture-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .jobs-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .process-timeline {
      grid-template-columns: repeat(3, 1fr);
    }

    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .hero-text h1 {
      font-size: 2.5rem;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .culture-grid,
    .jobs-grid,
    .process-timeline,
    .gallery-grid,
    .testimonials-grid {
      grid-template-columns: 1fr;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .internship-benefits {
      grid-template-columns: 1fr;
    }

    .filters-section {
      flex-direction: column;
      align-items: stretch;
    }

    .search-box {
      max-width: 100%;
    }

    .filter-buttons {
      justify-content: center;
    }

    .process-timeline {
      gap: 2rem;
    }

    .step-connector {
      display: none;
    }

    .cta-content {
      padding: 2rem;
    }

    .cta-content h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .career-page {
      padding: 1rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .hero-text h1 {
      font-size: 2rem;
    }

    .hero-stats {
      flex-direction: column;
      gap: 1rem;
    }

    .culture-card,
    .job-card,
    .testimonial-card {
      padding: 1.5rem;
    }

    .internship-content {
      padding: 2rem;
    }

    .internship-text h2 {
      font-size: 2rem;
    }

    .cta-content h2 {
      font-size: 1.8rem;
    }
  }
`;

export default CareerPage;
