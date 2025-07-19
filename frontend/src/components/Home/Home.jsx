import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero fade-in">
        <h1 className="slide-up">Welcome to PulsePoint</h1>
        <p className="fade-in-up">Your Trusted Platform to Book Appointments with Nearby Doctors.</p>
        <div className="hero-buttons fade-in-up delay-1">
          <Link to="/find-doctor" className="btn pop-in">Find a Doctor</Link>
          <Link to="/login" className="btn btn-secondary pop-in delay-2">Login</Link>
        </div>
      </header>

      <section className="features">
        <h2 className="slide-up">What We Offer</h2>
        <div className="feature-grid">
          <div className="feature-card scale-in">
            <h3>Book Appointments</h3>
            <p>Find doctors and book appointments instantly online.</p>
          </div>
          <div className="feature-card scale-in delay-1">
            <h3>Doctor Panel</h3>
            <p>Doctors can manage patients, prescriptions, and availability.</p>
          </div>
          <div className="feature-card scale-in delay-2">
            <h3>Online Prescriptions</h3>
            <p>Get your prescriptions uploaded and accessible online.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="slide-up">How It Works</h2>
        <div className="steps">
          <div className="step fade-in-up">
            <span>1</span>
            <h4>Search for a Doctor</h4>
            <p>Use filters and ratings to find the right doctor for your needs.</p>
          </div>
          <div className="step fade-in-up delay-1">
            <span>2</span>
            <h4>Book Appointment</h4>
            <p>Select your preferred date and time and confirm instantly.</p>
          </div>
          <div className="step fade-in-up delay-2">
            <span>3</span>
            <h4>Get Treated</h4>
            <p>Meet your doctor online or in person and receive care.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="slide-up">What Our Patients Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial fade-in">
            <p>"PulsePoint helped me book a doctor within minutes. So smooth!"</p>
            <h5>- Priya M., Mumbai</h5>
          </div>
          <div className="testimonial fade-in delay-1">
            <p>"The online prescription feature is super useful. Thank you!"</p>
            <h5>- Rahul S., Pune</h5>
          </div>
          <div className="testimonial fade-in delay-2">
            <p>"Managing appointments is so easy for both patients and doctors."</p>
            <h5>- Dr. Aditi, Delhi</h5>
          </div>
        </div>
      </section>

      <section className="faqs">
        <h2 className="slide-up">Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item fade-in-up">
            <h4>How do I book an appointment?</h4>
            <p>Click on "Find Doctor", choose a doctor, and pick a time slot.</p>
          </div>
          <div className="faq-item fade-in-up delay-1">
            <h4>Is this platform free?</h4>
            <p>Yes, booking an appointment through PulsePoint is free.</p>
          </div>
          <div className="faq-item fade-in-up delay-2">
            <h4>How can I get a prescription?</h4>
            <p>Your doctor will upload the prescription to your dashboard after the visit.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="slide-up">Need Help? Contact Us</h2>
        <form className="contact-form fade-in">
          <input type="text" placeholder="Your Name" required className="fade-in-up" />
          <input type="email" placeholder="Email Address" required className="fade-in-up delay-1" />
          <textarea placeholder="Your Message" rows="5" required className="fade-in-up delay-2"></textarea>
          <button type="submit" className="btn pop-in delay-3">Send Message</button>
        </form>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About PulsePoint</h3>
            <p>Your trusted platform for seamless doctor appointments and healthcare management.</p>
          </div>
          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Health Ave, Nagpur, India</p>
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> info@pulsepoint.com</p>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/your-pulsepoint-page" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
<a href="https://twitter.com/your-pulsepoint-handle" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
<a href="https://www.linkedin.com/company/your-pulsepoint-page" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
<a href="https://www.instagram.com/your-pulsepoint-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section map-section">
            <h3>Find Us on Map</h3>
            <div id="map" style={{ width: '100%', height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px' }}>
              {/* This is a placeholder for the Google Map. */}
              {/* To integrate Google Maps: */}
              {/* 1. Load the Google Maps JavaScript API script in your public/index.html with your API key. */}
              {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script> */}
              {/* 2. Create an `initMap` function in your main JavaScript file (e.g., App.js or a separate map utility file) */}
              {/* that initializes the map on this #map div. */}
              {/* Example: */}
              {/* function initMap() { */}
              {/* const location = { lat: 21.1458, lng: 79.0882 }; // Coordinates for Nagpur */}
              {/* const map = new google.maps.Map(document.getElementById("map"), { */}
              {/* zoom: 12, */}
              {/* center: location, */}
              {/* }); */}
              {/* new google.maps.Marker({ */}
              {/* position: location, */}
              {/* map: map, */}
              {/* title: "PulsePoint Office, Nagpur", */}
              {/* }); */}
              {/* } */}
              {/* 3. Ensure `initMap` is globally accessible or called after the component mounts if using React's useEffect. */}
              <p style={{ textAlign: 'center', paddingTop: '80px', color: '#666' }}>
                Map coming soon! (Google Maps integration requires API key)
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 PulsePoint. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;