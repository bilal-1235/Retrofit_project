import "./CTABanner.css";
import avatar1 from '../assets/CTA/avatar1.png';
import avatar2 from '../assets/CTA/avatar2.png';
import avatar3 from '../assets/CTA/avatar3.png';
import avatar4 from '../assets/CTA/avatar4.png';
import photo1 from '../assets/CTA/CTAImage1.png';
import photo2 from '../assets/CTA/CTAImage2.png';
import photo3 from '../assets/CTA/CTAImage3.png';
import photo4 from '../assets/CTA/CTAImage4.png';

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <div className="cta-avatars">
          <img src={avatar1} alt="Homeowner" className="cta-avatar" />
          <img src={avatar2} alt="Homeowner" className="cta-avatar" />
          <img src={avatar3} alt="Homeowner" className="cta-avatar" />
          <img src={avatar4} alt="Homeowner" className="cta-avatar" />
        </div>
        <h2 className="cta-heading">Start Your Retrofit Project Today</h2>
        <p className="cta-description">
          Join 500+ homeowners this month who secured funding and compliant designs through the Retrofit Portal.
        </p>
        <button className="cta-button">
          Get Started
          <span className="cta-button-arrow">→</span>
        </button>
      </div>

      <div className="cta-collage">
        <div className="cta-ring"></div>
        <img src={photo1} alt="Retrofit project" className="cta-photo cta-photo-1" />
        <img src={photo2} alt="Retrofit project" className="cta-photo cta-photo-2" />
        <img src={photo3} alt="Retrofit project" className="cta-photo cta-photo-3" />
        <img src={photo4} alt="Retrofit project" className="cta-photo cta-photo-4" />
      </div>
    </section>
  );
}
export default CTABanner;