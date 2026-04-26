import React, { useState } from "react";
import Footer from "../Componets/Footer";
import Navbar from "../Componets/Navbar";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all purchases. Items must be in original condition."
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days. Express delivery options are also available."
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we provide flexible EMI and financing plans for eligible customers."
    },
    {
      question: "How can I schedule a property viewing?",
      answer:
        "You can schedule a visit through our website or contact our support team directly."
    },
    {
      question: "Is my personal data  (safe)?",
      answer:
        "Yes, we use advanced encryption and security measures to keep your data safe."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="faq-container">

        {/* ===== Header ===== */}
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our services, policies, and features.
          </p>
        </div>

        {/* ===== FAQ Content ===== */}
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}
                <span className="icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Faq;