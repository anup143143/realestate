export const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "Property Owner",
            rating: "★★★",
            text: "I was impressed with the professionalism and dedication of the real estate team. They helped me find the perfect property within my budget."
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Property Buyer",
            rating: "★★★★",
            text: "The team provided excellent service throughout the buying process. Their attention to detail and communication made everything smooth."
        },
        {
            id: 3,
            name: "Robert Johnson",
            role: "Property Investor",
            rating: "★★★★★★",
            text: "I've worked with several agents, but this team stands out for their expertise and market knowledge. Highly recommended!"
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "Property Seller",
            rating: "★★★★★",
            text: "The team helped me sell my property quickly and for a great price. Their marketing strategy was exceptional."
        },
        {
            id: 5,
            name: "Michael Brown",
            role: "First-time Homebuyer",
            rating: "★★★★",
            text: "As a first-time homebuyer, I was nervous about the process. The team guided me every step of the way and made it a positive experience."
        },
        {
            id: 6,
            name: "Sarah Wilson",
            role: "Luxury Property Client",
            rating: "★★★★★★",
            text: "The team provided top-notch service and helped me find a stunning luxury property. Their professionalism and attention to detail were impressive."
        }
    ];



  return (

    <>
    <div className="test">
        <h1 className="head">Reviews</h1>
      <h2 className="subhead">What Our Clients Say</h2>
      <p className="description">Discover what our satisfied clients have to say about
         their experience working with us.</p>
    </div>
   
    <div className="testimonial-section">

     
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <p className="text">"{testimonial.text}"</p>
          <p className="role">{testimonial.role}</p>
           <h3 className="name">{testimonial.name}</h3>
          <p className="rating">{testimonial.rating}</p>
          
        </div>
      ))}
      </div>
    </>
  )
}

export default Testimonial;
