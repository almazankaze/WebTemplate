import { Link } from "react-router-dom";
import SocialIcon, { SOCIAL_TYPE_CLASSES } from "../social-icon/SocialIcon";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import "./footer.scss";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-info-container">
              <SportsEsportsIcon className="footer-logo" />
              <h2 className="footer-title">1UP Games</h2>
            </div>
            <div className="footer-info-container">
              <EmailIcon />
              <h4 className="footer-info-text">MyWeb@example.com</h4>
            </div>
            <div className="footer-info-container">
              <PhoneIcon />
              <h4 className="footer-info-text">(555) 555-0101</h4>
            </div>
            <div className="footer-info-container">
              <LocationOnIcon />
              <h4 className="footer-info-text">123 fake st, Nowhere</h4>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Useful Links</h4>
            <div className="footer-links">
              <div className="footer-link-container">
                <Link to="/" className="footer-link">
                  New Products
                </Link>
              </div>
              <div className="footer-link-container">
                <Link to="/" className="footer-link">
                  Services
                </Link>
              </div>
              <div className="footer-link-container">
                <Link to="/" className="footer-link">
                  Delivery
                </Link>
              </div>
              <div className="footer-link-container">
                <Link to="/" className="footer-link">
                  About us
                </Link>
              </div>
              <div className="footer-link-container">
                <Link to="/" className="footer-link">
                  Careers
                </Link>
              </div>
              <div className="footer-link-container">
                <Link to="/" className="footer-link">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Be the first to know it</h4>
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="footer-input"
                autoComplete="off"
                placeholder="Your email address"
                name="emailText"
                noValidate
                required
              />
              <SendIcon className="footer-form-icon" />
            </form>
            <div className="footer-social-icons">
              <SocialIcon iconType={SOCIAL_TYPE_CLASSES.facebook} />
              <SocialIcon iconType={SOCIAL_TYPE_CLASSES.youtube} />
              <SocialIcon iconType={SOCIAL_TYPE_CLASSES.twitter} />
              <SocialIcon iconType={SOCIAL_TYPE_CLASSES.instagram} />
            </div>
          </div>
        </div>
        <h5 className="footer-copyright">
          © 2024 Example. All rights reserved
        </h5>
      </div>
    </div>
  );
}

export default Footer;
