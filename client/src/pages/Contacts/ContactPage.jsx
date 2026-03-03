import React, { useState } from "react";
import styled from "styled-components";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ChevronRight,
  CheckCircle,
  Calendar,
  HelpCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Sparkles,
  Zap,
  Shield,
  Users,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <StyledWrapper>
      <div className="contact-page">
        {/* Hero Section with Background Pattern */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-pattern"></div>
            <div className="hero-gradient"></div>
          </div>

          <div className="hero-content">
            <span className="hero-badge">
              <Sparkles size={16} />
              Let's Connect
            </span>
            <h1>
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="hero-description">
              Have a project in mind? We'd love to hear about it. Tell us your
              ideas and let's create something amazing together.
            </p>

            {/* Quick Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </div>

          <div className="hero-illustration">
            <img
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop"
              alt="Customer support illustration"
              className="hero-image"
            />
            <div className="floating-card card-1">
              <MessageCircle size={20} />
              <span>24/7 Support</span>
            </div>
            <div className="floating-card card-2">
              <Zap size={20} />
              <span>Fast Response</span>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contact-section">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>We'll get back to you within 24 hours</p>
          </div>

          <div className="contact-grid">
            {/* Left Side - Form */}
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "fullName" ? "focused" : ""}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "email" ? "focused" : ""}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "phone" ? "focused" : ""}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      className={
                        focusedField === "projectType" ? "focused" : ""
                      }
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="maintenance">Maintenance & Support</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range (Optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "budget" ? "focused" : ""}
                    >
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than ₹5,00,000</option>
                      <option value="10k-25k">₹5,00,000 - ₹15,00,000</option>
                      <option value="25k-50k">₹15,00,000 - ₹30,00,000</option>
                      <option value=">50k">More than ₹30,00,000</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={focusedField === "message" ? "focused" : ""}
                      rows="5"
                      required
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className={`submit-btn ${formStatus}`}
                    disabled={
                      formStatus === "submitting" || formStatus === "success"
                    }
                  >
                    {formStatus === "idle" && (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                    {formStatus === "submitting" && (
                      <>
                        Sending...
                        <div className="spinner"></div>
                      </>
                    )}
                    {formStatus === "success" && (
                      <>
                        Message Sent!
                        <CheckCircle size={16} />
                      </>
                    )}
                  </button>
                  <p className="privacy-note">
                    By submitting, you agree to our privacy policy. We'll never
                    share your information.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="info-card">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>We're here to help 24/7</p>
              </div>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href="mailto:hello@ratnakar.com">hello@ratnakar.com</a>
                    <a href="mailto:support@ratnakar.com">
                      support@ratnakar.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                    <a href="tel:+911234567890">+91 12345 67890</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed (Emergency support available)</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>123 Tech Park, Sector 62</p>
                    <p>Noida, Uttar Pradesh 201301</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
                <span className="whatsapp-badge">
                  Usually replies within 5 min
                </span>
              </a>

              {/* Social Media Icons */}
              <div className="social-links">
                <h4>Follow us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Team Image */}
              <div className="team-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our team"
                />
                <div className="team-overlay">
                  <span>Meet our team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section with Icons */}
        <section className="trust-section">
          <div className="section-header">
            <h2>Why work with us?</h2>
            <p>We deliver excellence through every project</p>
          </div>

          <div className="trust-grid">
            {[
              {
                icon: <MessageCircle size={24} />,
                title: "Fast Response",
                description:
                  "We reply within 24 hours, usually within 2-3 hours during business hours",
                color: "#3b82f6",
              },
              {
                icon: <Shield size={24} />,
                title: "Transparent Pricing",
                description:
                  "No hidden costs, clear quotes, and flexible payment options",
                color: "#10b981",
              },
              {
                icon: <Zap size={24} />,
                title: "Modern Tech",
                description:
                  "Latest technologies & frameworks for scalable solutions",
                color: "#f59e0b",
              },
              {
                icon: <Users size={24} />,
                title: "Dedicated Support",
                description:
                  "24/7 post-launch support with dedicated account manager",
                color: "#8b5cf6",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="trust-card"
                style={{ borderTop: `3px solid ${item.color}` }}
              >
                <div className="trust-icon" style={{ background: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Call Section with Image */}
        <section className="schedule-section">
          <div className="schedule-grid">
            <div className="schedule-content">
              <h2>Prefer to talk?</h2>
              <p>
                Schedule a free 30-minute consultation call with our experts. No
                obligation, just a chat about your project.
              </p>

              <div className="schedule-features">
                <div className="schedule-feature">
                  <CheckCircle size={18} />
                  <span>Free consultation</span>
                </div>
                <div className="schedule-feature">
                  <CheckCircle size={18} />
                  <span>Expert advice</span>
                </div>
                <div className="schedule-feature">
                  <CheckCircle size={18} />
                  <span>No commitment</span>
                </div>
              </div>

              <button className="schedule-btn">
                <Calendar size={18} />
                Book a Free Consultation
              </button>
            </div>

            <div className="schedule-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Consultation"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with us</p>
          </div>

          <div className="faq-grid">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What technologies do you use?",
                answer:
                  "We use modern technologies like React, Next.js, Node.js, Python, Flutter, and React Native. We choose the best tech stack based on your project requirements.",
              },
              {
                question: "Do you provide post-launch support?",
                answer:
                  "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and 24/7 monitoring.",
              },
              {
                question: "How much does a project cost?",
                answer:
                  "Costs vary based on requirements. We provide detailed quotes after understanding your project needs. Our pricing is transparent with no hidden costs.",
              },
              {
                question: "Do you work with startups?",
                answer:
                  "Absolutely! We love working with startups. We offer flexible engagement models and can work within your budget constraints.",
              },
              {
                question: "Can you sign an NDA?",
                answer:
                  "Yes, we're happy to sign NDAs to protect your ideas. We take confidentiality seriously.",
              },
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-icon">
                  <HelpCircle size={20} />
                </div>
                <div className="faq-content">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay in the loop</h2>
            <p>
              Subscribe to our newsletter for tech insights and project tips
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .contact-page {
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
    font-size: 2.2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .section-header p {
    color: #6b7280;
    font-size: 1.1rem;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4rem;
    padding: 3rem 0;
    overflow: hidden;
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

  .hero-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
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
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    color: #111827;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #6b7280;
  }

  .hero-illustration {
    position: relative;
    z-index: 1;
  }

  .hero-image {
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

  /* Contact Section */
  .contact-section {
    margin: 4rem 0;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  /* Form Card */
  .form-card {
    background: #ffffff;
    border-radius: 30px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #f0f0f0;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group.full-width {
    grid-column: span 2;
  }

  .form-group label {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 0.5rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #f0f0f0;
    border-radius: 16px;
    font-size: 0.95rem;
    color: #111827;
    transition: all 0.3s ease;
    background: #fafafa;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4f46e5;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
  }

  .form-group input.focused,
  .form-group select.focused,
  .form-group textarea.focused {
    border-color: #4f46e5;
    background: #ffffff;
  }

  .form-footer {
    margin-top: 2rem;
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem 2rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 16px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
  }

  .submit-btn:hover:not(:disabled) {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2);
  }

  .submit-btn.submitting {
    background: #9ca3af;
    cursor: not-allowed;
  }

  .submit-btn.success {
    background: #10b981;
    cursor: not-allowed;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .privacy-note {
    font-size: 0.8rem;
    color: #9ca3af;
    text-align: center;
  }

  /* Info Card */
  .info-card {
    background: #ffffff;
    border-radius: 30px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #f0f0f0;
  }

  .info-header {
    margin-bottom: 2rem;
  }

  .info-header h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .info-header p {
    color: #6b7280;
  }

  .info-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-item {
    display: flex;
    gap: 1rem;
  }

  .info-icon {
    width: 44px;
    height: 44px;
    background: #f3f4f6;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4f46e5;
  }

  .info-content h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .info-content a,
  .info-content p {
    display: block;
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.6;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .info-content a:hover {
    color: #4f46e5;
  }

  .whatsapp-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: #25d366;
    color: white;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    position: relative;
  }

  .whatsapp-badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: white;
    color: #25d366;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .whatsapp-btn:hover {
    background: #128c7e;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.2);
  }

  .social-links {
    margin-bottom: 2rem;
  }

  .social-links h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .social-icon {
    width: 44px;
    height: 44px;
    background: #f3f4f6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    background: #4f46e5;
    color: white;
    transform: translateY(-2px);
  }

  .team-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    height: 200px;
  }

  .team-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .team-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    text-align: center;
  }

  /* Trust Section */
  .trust-section {
    margin: 4rem 0;
  }

  .trust-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .trust-card {
    padding: 2rem;
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #f0f0f0;
    transition: all 0.3s ease;
    text-align: center;
  }

  .trust-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.1);
  }

  .trust-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0 auto 1rem;
  }

  .trust-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .trust-card p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* Schedule Section */
  .schedule-section {
    margin: 4rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 40px;
    padding: 3rem;
  }

  .schedule-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .schedule-content {
    color: white;
  }

  .schedule-content h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .schedule-content p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .schedule-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .schedule-feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .schedule-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: white;
    color: #4f46e5;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .schedule-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .schedule-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* FAQ Section */
  .faq-section {
    margin: 4rem 0;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .faq-item {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.1);
  }

  .faq-icon {
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

  .faq-content h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .faq-content p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  /* Newsletter Section */
  .newsletter-section {
    margin: 4rem 0;
    padding: 3rem;
    background: #f8f9fa;
    border-radius: 40px;
    text-align: center;
  }

  .newsletter-content h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .newsletter-content p {
    color: #6b7280;
    margin-bottom: 2rem;
  }

  .newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  .newsletter-form input {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 30px;
    font-size: 1rem;
  }

  .newsletter-form input:focus {
    outline: none;
    border-color: #4f46e5;
  }

  .newsletter-form button {
    padding: 0.75rem 2rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .newsletter-form button:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .hero-section,
    .contact-grid,
    .schedule-grid {
      grid-template-columns: 1fr;
    }

    .hero-illustration {
      order: -1;
    }

    .hero-image {
      height: 300px;
    }

    .floating-card {
      display: none;
    }

    .trust-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .faq-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-group.full-width {
      grid-column: span 1;
    }

    .trust-grid {
      grid-template-columns: 1fr;
    }

    .newsletter-form {
      flex-direction: column;
    }

    .schedule-image {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .contact-page {
      padding: 1rem;
    }

    .form-card,
    .info-card {
      padding: 1.5rem;
    }

    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-stats {
      flex-direction: column;
      gap: 1rem;
    }

    .schedule-section {
      padding: 2rem;
    }

    .schedule-content h2 {
      font-size: 1.8rem;
    }

    .faq-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export default ContactPage;
