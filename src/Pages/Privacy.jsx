import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

export const Privacy = () => {
  return (
    <>
      <Navbar />

      <div className="privacy-container">

        {/* ===== Header Section ===== */}
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. Learn how we collect, use, and
            protect your data while using our platform.
          </p>
        </div>

        {/* ===== Content Section ===== */}
        <div className="privacy-content">

          <section>
            <h2>1. Introduction</h2>
            <p>
              We are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you visit our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways,
              including:
            </p>
            <ul>
              <li>Personal identification information (name, email, phone number)</li>
              <li>Property preferences and inquiries</li>
              <li>Browsing activity and usage data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries</li>
              <li>Send marketing communications</li>
              <li>Process property listings and transactions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information at any time by contacting us.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
              <br />
              <strong>privacy@realstate.com</strong>
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;