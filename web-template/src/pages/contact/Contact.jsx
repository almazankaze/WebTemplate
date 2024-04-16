import { useState } from "react";
import SectionHeader from "../../components/section-header/SectionHeader";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSave = (event) => {
    const { name, value } = event.target;

    let data = { ...formData };
    data[name] = value;
    setFormData(data);
  };

  const clearState = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearState();
  };

  return (
    <div className="container page-container">
      <SectionHeader title="Contact Us" />

      <div className="contact">
        <div className="contact-form">
          <form autoComplete="off" noValidate>
            <>
              <div className="contact-input">
                <input
                  type="text"
                  name="name"
                  onChange={handleSave}
                  value={formData.name}
                  required
                />
                <span></span>
                <label>Name</label>
              </div>
              <div className="contact-error">"must enter your name"</div>
              <div className="contact-input">
                <input
                  type="text"
                  name="email"
                  onChange={handleSave}
                  value={formData.email}
                  required
                />
                <span></span>
                <label>Email</label>
              </div>

              <div className="contact-error">
                "must enter valid email format"
              </div>

              <textarea
                className="contact-message"
                name="message"
                placeholder="Type message here..."
                value={formData.message}
                onChange={handleSave}
              ></textarea>

              <div className="contact-error">
                "Comment Box is not allowed to be empty"
              </div>
            </>

            <Button type="button" className="full-btn" onClick={handleSubmit}>
              Send
            </Button>
          </form>
        </div>

        <div className="contact-info-container">
          <div className="contact-info">
            <h2 className="contact-title">ChatCord</h2>
          </div>
          <div className="contact-info">
            <EmailIcon />
            <h4 className="contact-info-text">MyWeb@example.com</h4>
          </div>
          <div className="contact-info">
            <PhoneIcon />
            <h4 className="contact-info-text">(555) 555-0101</h4>
          </div>
          <div className="contact-info">
            <LocationOnIcon />
            <h4 className="contact-info-text">123 fake st, Nowhere</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
