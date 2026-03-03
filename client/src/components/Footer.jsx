import styled from "styled-components";
import {
  Code,
  Smartphone,
  Palette,
  Wrench,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Send,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Award,
  Users,
  Zap,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <footer className="footer">
        {/* Top CTA Strip - Enhanced */}
        <div className="cta-strip">
          <div className="cta-content">
            <div className="cta-text">
              <Sparkles size={20} className="cta-icon" />
              <span className="cta-heading">
                Ready to bring your idea to life?
              </span>
              <span className="cta-badge">Limited slots available</span>
            </div>
            <div className="cta-actions">
              <button className="cta-button primary">
                Start Your Project
                <ArrowRight size={16} />
              </button>
              <button className="cta-button secondary">Schedule Call</button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="main-footer">
          <div className="footer-grid">
            {/* Column 1 - Company Info - Enhanced */}
            <div className="footer-col company-col">
              <div className="company-info">
                <div className="logo">
                  <div className="logo-icon">
                    <Code size={28} />
                  </div>
                  <div className="logo-text-wrapper">
                    <span className="logo-text">Ratnakar Digital</span>
                    <span className="logo-tagline">Solutions</span>
                  </div>
                </div>

                <p className="company-description">
                  We create innovative digital solutions that help businesses
                  grow and succeed in the modern world.
                </p>

                <div className="company-stats">
                  <div className="stat-item">
                    <Award size={16} />
                    <span>ISO Certified</span>
                  </div>
                  <div className="stat-item">
                    <Users size={16} />
                    <span>50+ Experts</span>
                  </div>
                  <div className="stat-item">
                    <Zap size={16} />
                    <span>24/7 Support</span>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="social-link">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - Services - Enhanced */}
            <div className="footer-col">
              <h3 className="col-title">
                <span>Services</span>
              </h3>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <Code size={14} /> Web Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Smartphone size={14} /> Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Palette size={14} /> UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Wrench size={14} /> Maintenance & Support
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Zap size={14} /> Custom Software
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Quick Links - Enhanced */}
            <div className="footer-col">
              <h3 className="col-title">
                <span>Quick Links</span>
              </h3>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="/career">Careers</a>{" "}
                  <span className="new-badge">Hiring</span>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Info - Enhanced */}
            <div className="footer-col">
              <h3 className="col-title">
                <span>Contact Us</span>
              </h3>
              <ul className="contact-info">
                <li>
                  <div className="info-icon">
                    <Mail size={16} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Email</span>
                    <a href="mailto:hello@ratnakar.com">hello@ratnakar.com</a>
                    <a href="mailto:support@ratnakar.com">
                      support@ratnakar.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="info-icon">
                    <Phone size={16} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Phone</span>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                    <a href="tel:+911234567890">+91 12345 67890</a>
                  </div>
                </li>
                <li>
                  <div className="info-icon">
                    <MapPin size={16} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Location</span>
                    <span>123 Tech Park, Sector 62</span>
                    <span>Noida, Uttar Pradesh 201301</span>
                  </div>
                </li>
                <li>
                  <div className="info-icon">
                    <Clock size={16} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Business Hours</span>
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    <span>Sat: 10:00 AM - 4:00 PM</span>
                  </div>
                </li>
              </ul>

              {/* WhatsApp Button - Enhanced */}
              <a href="https://wa.me/919876543210" className="whatsapp-link">
                <MessageCircle size={18} />
                <div className="whatsapp-content">
                  <span>Chat on WhatsApp</span>
                  <span className="whatsapp-time">
                    Typically replies within 5 min
                  </span>
                </div>
                <span className="whatsapp-badge">Live</span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Enhanced */}

        {/* Bottom Bar - Enhanced */}
        <div className="bottom-bar">
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} <strong>Ratnakar Digital Solutions</strong>. All
              rights reserved.
            </p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="payment-methods">
              <span>Payment Methods:</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                alt="Visa"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                alt="Mastercard"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196539.png"
                alt="PayPal"
              />
            </div>
          </div>
        </div>
      </footer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .footer {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: #ffffff;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    position: relative;
    overflow: hidden;
  }

  /* Background Pattern */
  .footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
      rgba(79, 70, 229, 0.1) 1px,
      transparent 1px
    );
    background-size: 30px 30px;
    pointer-events: none;
  }

  /* Top CTA Strip */
  .cta-strip {
    background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
    padding: 1.25rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .cta-strip::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .cta-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    position: relative;
    z-index: 1;
  }

  .cta-text {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-heading {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .cta-badge {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    padding: 0.35rem 1rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .cta-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .cta-button.primary {
    background: white;
    color: #4f46e5;
  }

  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cta-button:hover {
    transform: translateY(-2px);
  }

  .cta-button.primary:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  /* Main Footer */
  .main-footer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 3rem;
    position: relative;
    z-index: 1;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }

  /* Company Column */
  .company-col {
    grid-column: span 1;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #4f46e5, #8b5cf6);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
  }

  .logo-text-wrapper {
    display: flex;
    flex-direction: column;
  }

  .logo-text {
    font-size: 1.4rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #e0e7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  .logo-tagline {
    font-size: 0.8rem;
    color: #9ca3af;
    letter-spacing: 1px;
  }

  .company-description {
    color: #9ca3af;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .company-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.8rem;
    color: #9ca3af;
  }

  .stat-item svg {
    color: #4f46e5;
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
  }

  .social-link {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .social-link:hover {
    background: #4f46e5;
    color: white;
    transform: translateY(-3px);
    border-color: transparent;
  }

  /* Column Titles */
  .col-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.75rem;
  }

  .col-title span {
    position: relative;
    z-index: 1;
  }

  .col-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #4f46e5, #8b5cf6);
    border-radius: 3px;
  }

  /* Footer Links */
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: 0.75rem;
  }

  .footer-links a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .footer-links a:hover {
    color: #4f46e5;
    transform: translateX(5px);
  }

  .new-badge {
    background: #4f46e5;
    color: white;
    font-size: 0.6rem;
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    margin-left: 0.5rem;
  }

  /* Contact Info */
  .contact-info {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  .contact-info li {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .info-icon {
    width: 32px;
    height: 32px;
    background: rgba(79, 70, 229, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4f46e5;
    flex-shrink: 0;
  }

  .info-content {
    flex: 1;
  }

  .info-label {
    display: block;
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .info-content a,
  .info-content span {
    display: block;
    color: #9ca3af;
    font-size: 0.9rem;
    line-height: 1.5;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .info-content a:hover {
    color: #4f46e5;
  }

  .whatsapp-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    background: rgba(37, 211, 102, 0.1);
    border: 1px solid rgba(37, 211, 102, 0.3);
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }

  .whatsapp-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .whatsapp-content span:first-child {
    color: #25d366;
    font-weight: 500;
    font-size: 0.95rem;
  }

  .whatsapp-time {
    font-size: 0.7rem;
    color: #9ca3af;
  }

  .whatsapp-badge {
    background: #25d366;
    color: white;
    font-size: 0.6rem;
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    text-transform: uppercase;
  }

  .whatsapp-link:hover {
    background: rgba(37, 211, 102, 0.15);
    transform: translateY(-2px);
  }

  /* Newsletter Section */
  .newsletter-section {
    background: rgba(255, 255, 255, 0.02);
    padding: 4rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .newsletter-content {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .newsletter-header h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }

  .newsletter-header p {
    color: #9ca3af;
    margin-bottom: 2rem;
  }

  .newsletter-form {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .input-wrapper {
    flex: 1;
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
  }

  .newsletter-input {
    width: 100%;
    padding: 0.9rem 1rem 0.9rem 2.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    color: white;
    font-size: 0.95rem;
    transition: all 0.3s ease;
  }

  .newsletter-input:focus {
    outline: none;
    border-color: #4f46e5;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }

  .newsletter-input::placeholder {
    color: #6b7280;
  }

  .newsletter-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2rem;
    background: linear-gradient(135deg, #4f46e5, #8b5cf6);
    color: white;
    border: none;
    border-radius: 14px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 120px;
    justify-content: center;
  }

  .newsletter-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
  }

  .newsletter-button.submitting {
    background: #6b7280;
    cursor: not-allowed;
  }

  .newsletter-button.success {
    background: #10b981;
    cursor: not-allowed;
  }

  .spinner {
    width: 14px;
    height: 14px;
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

  .newsletter-note {
    font-size: 0.8rem;
    color: #6b7280;
  }

  /* Bottom Bar */
  .bottom-bar {
    padding: 1.5rem 2rem;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
  }

  .bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .copyright {
    color: #9ca3af;
    font-size: 0.9rem;
  }

  .copyright strong {
    color: white;
    font-weight: 600;
  }

  .legal-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .legal-links a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .legal-links a:hover {
    color: #4f46e5;
  }

  .separator {
    color: #4b5563;
  }

  .payment-methods {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .payment-methods span {
    color: #9ca3af;
    font-size: 0.85rem;
    margin-right: 0.5rem;
  }

  .payment-methods img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .payment-methods img:hover {
    opacity: 1;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }

    .company-col {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    .cta-content {
      flex-direction: column;
      text-align: center;
    }

    .cta-text {
      justify-content: center;
    }

    .cta-actions {
      width: 100%;
      justify-content: center;
    }

    .cta-button {
      flex: 1;
      justify-content: center;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .company-col {
      grid-column: span 1;
    }

    .col-title::after {
      left: 0;
      transform: none;
    }

    .footer-col {
      text-align: left;
    }

    .logo {
      justify-content: flex-start;
    }

    .social-links {
      justify-content: flex-start;
    }

    .company-stats {
      justify-content: flex-start;
    }

    .newsletter-form {
      flex-direction: column;
    }

    .newsletter-button {
      width: 100%;
    }

    .bottom-content {
      flex-direction: column;
      text-align: center;
    }

    .legal-links {
      justify-content: center;
    }

    .payment-methods {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .main-footer {
      padding: 3rem 1rem;
    }

    .cta-strip {
      padding: 1rem;
    }

    .cta-actions {
      flex-direction: column;
    }

    .cta-button {
      width: 100%;
    }

    .cta-text {
      flex-direction: column;
      gap: 0.5rem;
    }

    .newsletter-section {
      padding: 2rem 1rem;
    }

    .newsletter-header h3 {
      font-size: 1.5rem;
    }

    .whatsapp-link {
      flex-wrap: wrap;
    }

    .whatsapp-badge {
      position: absolute;
      top: -5px;
      right: -5px;
    }

    .contact-info li {
      flex-direction: column;
      gap: 0.5rem;
    }

    .info-icon {
      width: 28px;
      height: 28px;
    }

    .payment-methods {
      flex-wrap: wrap;
    }
  }
`;

export default Footer;
