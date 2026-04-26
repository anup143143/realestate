import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />

      <div className="terms-container">

        {/* ===== Header ===== */}
        <div className="terms-header">
          <h1>Terms of Service</h1>
          <p>
            Please read these terms carefully before using our platform. By accessing
            our services, you agree to these conditions.
          </p>
        </div>

        {/* ===== Content ===== */}
        <div className="terms-content">

          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to our Real Estate platform. These Terms of Service govern your use
              of our website and services. By accessing and using this platform, you agree
              to be bound by these terms.
            </p>
          </section>

          <section>
            <h2>2. User Responsibilities</h2>
            <p>Users agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Use the platform lawfully and ethically</li>
              <li>Not engage in fraudulent or harmful activities</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2>3. Disclaimer of Warranties</h2>
            <p>
              Our platform is provided "as is" without warranties. We do not guarantee
              the accuracy, completeness, or reliability of any content or listings.
            </p>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall our company be liable for indirect, incidental, or
              consequential damages arising from your use of this platform.
            </p>
          </section>

          <section>
            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use
              of the platform constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>
              For any questions regarding these terms, contact us at:
              <br />
              <strong>support@realestate.com</strong>
            </p>
          </section>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;