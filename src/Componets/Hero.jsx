import { Link } from "react-router-dom"
import HeroImage from "../assets/Hero image.jpg"
import Properties from "../Pages/Propeties.jsx";



export const Hero = () => {
    return (
        <>
            <div className="Hero-section">
                <div className="Hero-text">
                    <h1>
                        Find Your Perfect House <br /> With DesiHome
                    </h1>
                    <p>Discover a wide range of properties that match your lifestyle and budget.</p>
                </div>
                <div className="btn-sec">   
                    <Link to="/properties">
                        <button className="btn">Explore All</button>
                    </Link>
                </div>
            </div>

            <div className="HeroImage">
                <img src={HeroImage} alt="Hero-Image" />
            </div>
        </>
    )
}

export default Hero