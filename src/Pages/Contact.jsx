import React, { useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    // validation
    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill all fields!");
      return;
    }

    alert("Message Sent Successfully ✅");

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">
        <h1 className="contact-title">
          Let’s discuss your ideal dream home.
        </h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                id="subject"
                className="form-input"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              id="message"
              className="form-textarea"
              placeholder="Tell us about your dream home..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;