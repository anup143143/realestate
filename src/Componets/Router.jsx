import {createBrowserRouter, Form} from "react-router-dom";
import {Home} from "../Pages/Home.jsx";
import {About} from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import PropertyDetail from "../Pages/PropertyDetail.jsx";
import Properties from "../Pages/Propeties.jsx";
import Layout from "./Layout.jsx";
import PrivacyPolicy from "../Pages/Privacy.jsx";
import TermsOfService from "../Pages/Terms of service.jsx";
import Faq from "../Pages/Faq.jsx";   




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 

    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/properties", element: <Properties /> },
      { path: "/property/:id", element: <PropertyDetail /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/faqs", element: <Faq /> }

    ],
  },
  

   
   

])

export default router;