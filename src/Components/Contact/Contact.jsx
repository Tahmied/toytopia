import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contactpage-wrapper">
      {/* Hero Section */}
      <div className="contactpage-hero-section">
        <div className="contactpage-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out to us through any of the channels below</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contactpage-main-content">
        {/* Contact Cards */}
        <div className="contactpage-cards-grid">
          {/* Email Card */}
          <div className="contactpage-contact-card">
            <div className="contactpage-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>For general inquiries and support</p>
            <a href="mailto:support@toytopia.com">support@toytopia.com</a>
          </div>

          {/* Phone Card */}
          <div className="contactpage-contact-card">
            <div className="contactpage-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>Mon-Fri from 9am to 6pm</p>
            <a href="tel:+1234567890">+8801927216841</a>
          </div>

          {/* Location Card */}
          <div className="contactpage-contact-card">
            <div className="contactpage-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Come say hello at our office</p>
            <address>Molla Para Mor, Dhaka Road, Jashore, Khulna, Bangladesh</address>
          </div>
        </div>

      </div>
    </div>
  );
}

