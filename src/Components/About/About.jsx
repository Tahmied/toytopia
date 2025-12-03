import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="aboutpage-wrapper">
      {/* Hero Section */}
      <div className="aboutpage-hero-section">
        <div className="aboutpage-hero-content">
          <h1>About Us</h1>
          <p>Bringing joy to children through quality toys and memorable experiences</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="aboutpage-main-content">
        {/* Our Story */}
        <section className="aboutpage-story-section">
          <h2>Our Story</h2>
          <p>
            Welcome to our toy marketplace, where imagination meets quality. We started with a simple 
            mission: to connect families with the best toys that inspire creativity, learning, and fun. 
            Our curated selection features trusted sellers and beloved brands that parents can rely on.
          </p>
        </section>

        {/* Features Grid */}
        <section className="aboutpage-features-section">
          <div className="aboutpage-feature-card">
            <div className="aboutpage-feature-icon">✓</div>
            <h3>Quality Products</h3>
            <p>Every toy is carefully selected to meet safety standards and quality expectations.</p>
          </div>

          <div className="aboutpage-feature-card">
            <div className="aboutpage-feature-icon">👥</div>
            <h3>Trusted Sellers</h3>
            <p>We partner with verified sellers who share our commitment to customer satisfaction.</p>
          </div>

          <div className="aboutpage-feature-card">
            <div className="aboutpage-feature-icon">😊</div>
            <h3>Happy Kids</h3>
            <p>Our goal is to bring smiles and create lasting memories for families everywhere.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="aboutpage-cta-section">
          <h2>Ready to Explore?</h2>
          <p>Browse our collection and find the perfect toy for your little ones today.</p>
          <button className="aboutpage-cta-button">Shop Now</button>
        </section>
      </div>
    </div>
  );
}