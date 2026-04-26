import Navbar from "../Componets/Navbar";
import Hero from "../Componets/Hero";
import { Propertycatgo } from "../Componets/Propertycatgo";
import { Agents } from "../Componets/Agents";
import Testimonial from "../Componets/Testimonial";
import Service from "../Componets/Service";
import Footer from "../Componets/Footer";


export const Home =()=>{

    return(
    <>
  <Navbar/>
  <Hero/>
  <Propertycatgo/>
  <Service/>
  <Agents/>
  <Testimonial/>
  <Footer/>
    
    
   
    
    
    
    </>
    )
}

export default Home;