import React from "react";
import styled from "styled-components";
import {
  Code,
  Smartphone,
  Palette,
  Wrench,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code size={24} />,
      description:
        "Modern websites and web applications built with cutting-edge technology.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Responsive Design",
        "E-commerce Solutions",
        "API Integration",
        "SEO Optimized",
      ],
      stats: "50+ Projects",
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <Smartphone size={24} />,
      description:
        "Native and cross-platform mobile apps for iOS and Android devices.",
      features: [
        "React Native",
        "Flutter",
        "App Store Ready",
        "Push Notifications",
        "Offline Support",
        "Google Play Store",
      ],
      stats: "30+ Apps",
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      description:
        "Beautiful and intuitive designs that users love to interact with.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "User Testing",
        "Interactive Mockups",
      ],
      stats: "100+ Designs",
    },
    {
      id: 4,
      title: "Maintenance & Support",
      icon: <Wrench size={24} />,
      description:
        "24/7 technical support to keep your applications running smoothly.",
      features: [
        "Bug Fixes",
        "Security Updates",
        "Performance Tuning",
        "Backup & Recovery",
        "24/7 Monitoring",
        "Emergency Support",
      ],
      stats: "24/7 Support",
    },
  ];

  return (
    <StyledWrapper>
      <div className="services-section">
        {/* Header */}
        <div className="header">
          <span className="badge">✦ WHAT WE OFFER ✦</span>
          <h2>Our Services</h2>
          <p className="subtitle">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {services.map((service) => (
            <div key={service.id} className="card-wrapper">
              <div className="card">
                {/* Card Front */}
                <div className="card-front">
                  <div className="icon-wrapper">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="description">{service.description}</p>

                  <div className="stats-badge">
                    <Zap size={14} />
                    <span>{service.stats}</span>
                  </div>

                  <div className="hover-indicator">
                    <span>Hover to explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Card Back */}
                <div className="card-back">
                  <h4>Key Features</h4>
                  <div className="features-grid">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="learn-more">
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-item">
            <Shield size={18} />
            <span>ISO Certified</span>
          </div>
          <div className="trust-item">
            <Clock size={18} />
            <span>24/7 Support</span>
          </div>
          <div className="trust-item">
            <Users size={18} />
            <span>50+ Experts</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Let's discuss how we can help you achieve your goals.</p>
            <button className="cta-button">
              Get Free Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .services-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 2rem;
    background: #ffffff;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  /* Header Styles */
  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .badge {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background: #f8f9fa;
    color: #4f46e5;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    border-radius: 30px;
    margin-bottom: 1.5rem;
    border: 1px solid #e0e7ff;
  }

  .header h2 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Cards Grid */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .card-wrapper {
    width: 100%;
  }

  .card {
    position: relative;
    width: 100%;
    height: 400px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
    border: 1px solid #f0f0f0;
    transition: all 0.4s ease;
    cursor: pointer;
    transform-style: preserve-3d;
    perspective: 1500px;
  }

  .card:hover {
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.08);
    border-color: #e0e7ff;
  }

  /* Card Front */
  .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2rem 1.5rem;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    backface-visibility: hidden;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotateY(0deg);
  }

  .card:hover .card-front {
    transform: rotateY(180deg);
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
    background: #f8f9fa;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #4f46e5;
    transition: all 0.3s ease;
    border: 1px solid #e0e7ff;
  }

  .card:hover .icon-wrapper {
    background: #4f46e5;
    color: #ffffff;
    border-color: #4f46e5;
  }

  .card-front h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.75rem;
  }

  .description {
    font-size: 0.9rem;
    color: #6b7280;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .stats-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    background: #f8f9fa;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #4f46e5;
    margin-bottom: 1.5rem;
    width: fit-content;
  }

  .hover-indicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f0f0f0;
    padding-top: 1.2rem;
    font-size: 0.8rem;
    color: #9ca3af;
  }

  .hover-indicator svg {
    color: #4f46e5;
    transition: transform 0.3s ease;
  }

  .card:hover .hover-indicator svg {
    transform: translateX(5px);
  }

  /* Card Back */
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2rem 1.5rem;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    backface-visibility: hidden;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotateY(-180deg);
    border: 1px solid #e0e7ff;
  }

  .card:hover .card-back {
    transform: rotateY(0deg);
  }

  .card-back h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1.2rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .features-grid {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.85rem;
    color: #4b5563;
  }

  .feature-item svg {
    color: #4f46e5;
    flex-shrink: 0;
  }

  .learn-more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem;
    background: #4f46e5;
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
  }

  .learn-more:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }

  /* Trust Badges */
  .trust-badges {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 4rem 0;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 60px;
    flex-wrap: wrap;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4b5563;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .trust-item svg {
    color: #4f46e5;
  }

  /* CTA Section */
  .cta-section {
    margin-top: 4rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #f0f3ff 100%);
    border-radius: 40px;
    padding: 3rem;
    border: 1px solid #e0e7ff;
  }

  .cta-content {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .cta-content h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.1rem;
    color: #6b7280;
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
  }

  .cta-button:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.3);
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .services-section {
      padding: 3rem 1.5rem;
    }

    .header h2 {
      font-size: 2.2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .cards-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 2rem auto;
    }

    .card {
      height: 380px;
    }

    .trust-badges {
      gap: 1.5rem;
      padding: 1.2rem;
      border-radius: 30px;
    }

    .trust-item {
      font-size: 0.8rem;
    }

    .cta-section {
      padding: 2rem;
    }

    .cta-content h3 {
      font-size: 1.6rem;
    }

    .cta-content p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .header h2 {
      font-size: 1.8rem;
    }

    .badge {
      font-size: 0.7rem;
      padding: 0.4rem 1rem;
    }

    .card {
      height: 360px;
    }

    .card-front,
    .card-back {
      padding: 1.5rem;
    }

    .icon-wrapper {
      width: 50px;
      height: 50px;
    }

    .card-front h3 {
      font-size: 1.2rem;
    }

    .trust-badges {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .cta-button {
      padding: 0.8rem 2rem;
      font-size: 0.9rem;
    }
  }
`;

export default ServicesSection;
