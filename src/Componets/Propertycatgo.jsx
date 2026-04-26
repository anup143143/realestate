import React from 'react';
import { Link } from 'react-router-dom';
import { propertiesData } from "../Componets/Propertydata";
import Properties from "../Pages/Propeties.jsx";


export const Propertycatgo = () => {
  return (
    <>
    
    <div className="propertycatgo-container">
      {/* Hero Section */}
      <div className="hero-section2">
        <h1 className="hero-title">Featured Properties</h1>
        <p className="hero-subtitle">Explore Houses On Havenly</p>
      </div>

      <div className="property-cards">
        {propertiesData.map((property) => (
          <div className="property-card" key={property.id}>
            <div className="property-image-wrapper">
              <img 
                src={property.Image} 
                alt={property.title} 
                className="property-image"
              />
              
              <span className={`property-badge ${property.forRent === 'For Sale' ? 'badge-sale' : 'badge-rent'}`}>
                {property.forRent}
              </span>
            </div>
            
            <div className="property-details">
              <h3 className="property-title">{property.title}</h3>
              <p className="property-location">
                <span className="location-icon">📍</span> 
                {property.location}
              </p>
              
              <div className="property-price-section">
                <span className="property-price">${property.price}</span>
                <span className="property-type">{property.propertyType}</span>
              </div>
              
              <div className="property-specs">
                <div className="spec-item">
                  <span className="spec-icon">🛏️</span>
                  <span className="spec-value">{property.bedrooms}</span>
                  <span className="spec-label">Beds</span>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🚿</span>
                  <span className="spec-value">{property.bathrooms}</span>
                  <span className="spec-label">Baths</span>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🚗</span>
                  <span className="spec-value">{property.garages}</span>
                  <span className="spec-label">Garages</span>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">📏</span>
                  <span className="spec-value">{property.area}</span>
                  <span className="spec-label">sqft</span>
                </div>
              </div>

              <div className="card-footer">
                <div className="agent-info-mini">
                  <span className="agent-avatar">👤</span>
                  <span className="agent-name">{property.agent}</span>
                </div>
                <Link 
                  to={`/property/${property.id}`} 
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-section">
        <Link to="/properties">
                <button className="load-more-btn">View All Properties</button>

        
        </Link>
      </div>
    </div>
    </>
  );
};

export default Propertycatgo;