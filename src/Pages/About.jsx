import { Agents } from "../Componets/Agents";
import Footer from "../Componets/Footer";
import Navbar from "../Componets/Navbar";
import AboutImage from "../assets/real Estate.jpg"


export const About =()=>{

    return(
    <>
    <Navbar/>
   
    <section className="about">
            <h1 className="head">About us</h1>
            <div className="about-text">
                <div className="text-left">
            <h1>Our journey to redefining  real <br /> estate innovation.</h1>
            </div>

            <div className="text-right">
            <p>At DesiHome, our journey began with a simple yet powerful vision: <br />
                to revolutionize the way people buy, sell, and rent properties. Founded <br /> in 2020 by a team of passionate real estate professionals and tech enthusiasts,
               .</p>
            </div>
            </div>
            <div className="about-image">
            <img src={AboutImage} alt="About Image" />
            </div>

            <div className="tursted">
                <h1 className="trusted-head">Trusted by Thousands of <br /> Happy Customers</h1>
                <p>We are committed to providing exceptional service and building <br /> lasting 
               relationships with our clients. Our dedication to transparency, integrity, 
               and customer <br /> satisfaction has earned us the trust of thousands of happy customers nationwide.</p>
            
            </div>

        <div className="journey">
            <div className="journey-content">

            <div className="content1">
            <p>07+</p>
            <h1> Year of Experience</h1>
            </div>

            <div className="content2">
            <p>20+</p>
            <h1>Creative team members</h1>
            </div>

             <div className="content3">
            <p>500+</p>
            <h1>Completed Projects</h1>
            
            </div>
           
             <div className="content4">
            <p>95%</p>
            <h1>Satisfied Customer</h1>
         
            </div>
           
            </div>
             
        </div>

        
<div className="core" >
<div className="core-values">
    <h3 className="core-head">Our Core Values</h3>
    <h1>Building Trust Through  Our <br />  Core Values</h1>
    <p>We are committed to excellence, trust, and innovation in every <br /> aspect of our real estate services, 
        ensuring client satisfaction <br /> and long-term success.</p>
</div>


    <div className="core-content">
        <div className="value1">
            <h1>Customer-Centric Approach</h1>
            <p>We prioritize our customers' needs and satisfaction above all else. <br /> 
                We listen to their feedback, understand their goals, and tailor our 
                services to exceed their expectations.</p>
        </div>
        <div className="value2">
            <h1>Innovation and Technology</h1>
            <p>We embrace innovation
           and leverage cutting-edge technology to enhance the real estate experience. <br />
           From virtual tours to AI-powered property recommendations, we continuously 
           seek ways to improve our services.</p>
        </div>
        <div className="value3">
            <h1>Integrity and Transparency</h1>
            <p>We conduct our business with the utmost integrity and transparency. <br />
                We believe in building trust with our clients through honest communication, 
                ethical practices, and delivering on our promises.</p>
        </div>
    </div>                  
    </div>     
    
    </section>

<Agents/>
<Footer/>
     
    </>

   
    )
}

export default About;