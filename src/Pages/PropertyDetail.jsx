import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../Componets/Propertydata";

import LuxryImage from "../assets/Luxury Apartment .jpg";
import LuxryImage2 from "../assets/Luxury Apartment 2.jpg";
import LuxryImage3 from "../assets/Luxury Apartment 3.jpg";

import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = getPropertyById(id);

  // ✅ Image loading states
  const [loadedMain, setLoadedMain] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="property-detail-container">
          <div className="property-not-found">
            <h1>Property Not Found</h1>
            <p>The property you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="property-detail-container">

        {/* Header */}
        <div className="property-top">
          <h1>{property.title}</h1>
          <p className="property-location">📍 {property.location}</p>
        </div>

        {/* Image Gallery */}
        <div className="property-image-gallery">

          {/* Main Image */}
          <img
            src={LuxryImage}
            alt=""
            loading="lazy"
            onLoad={() => setLoadedMain(true)}
            className={`main-img ${loadedMain ? "loaded" : "loading"}`}
          />

          {/* Right Images */}
          <div className="right-images">
            <img
              src={LuxryImage2}
              alt=""
              loading="lazy"
              onLoad={() => setLoaded2(true)}
              className={loaded2 ? "loaded" : "loading"}
            />
            <img
              src={LuxryImage3}
              alt=""
              loading="lazy"
              onLoad={() => setLoaded3(true)}
              className={loaded3 ? "loaded" : "loading"}
            />
          </div>

        </div>

        {/* Info */}
        <div className="property-info">

          {/* Price */}
          <div className="property-price-section">
            <span className="property-price">${property.price}</span>
            <span className="property-type">{property.propertyType}</span>
            <span className="property-status">{property.forRent}</span>
          </div>

          {/* Specs */}
          <div className="property-specs">
            <div>🛏️ {property.bedrooms} Beds</div>
            <div>🚿 {property.bathrooms} Baths</div>
            <div>🚗 {property.garages} Garage</div>
            <div>📏 {property.area} sqft</div>
          </div>

          {/* Description */}
          <div className="property-section">
            <h3>Description</h3>
            <p>{property.description}</p>
          </div>

          {/* Features */}
          <div className="property-section">
            <h3>Features</h3>
            <ul className="features-list">
              {property.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="property-section property-details">
            <div><strong>Year Built:</strong> {property.yearBuilt}</div>
            <div><strong>Furnished:</strong> {property.furnished}</div>
            <div><strong>Availability:</strong> {property.availability}</div>
            <div><strong>Property ID:</strong> {property.propertyId}</div>
          </div>

          {/* Agent */}
          <div className="agent-info">
            <h3>Agent Information</h3>
            <p><strong>Name:</strong> {property.agent}</p>
            <p><strong>Contact:</strong> {property.agentContact}</p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PropertyDetail;