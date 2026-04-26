import AgentImage from '../assets/agent.jpg';
import AgentImage2 from '../assets/The closer.jpg';
import AgentImage3 from '../assets/rosi.jpg';
import AgentImage4 from '../assets/Michael O Connor.jpg';
import AgentImage5 from '../assets/Elena Vance.jpg';
import AgentImage6 from '../assets/Dr. Patricia Hayes.jpg';

export const Agents =()=>{

    const agents = [
        {
            id: 1,
            name: "The closer Chen",
            expertise: "Luxury Home Specialist / Negotiator",
            image: AgentImage
        },
         {
            id: 1,
            name: "Michael O'Connor",
            expertise: "Commercial & Investment Property Broker",
            image: AgentImage2
        },
         {
            id: 1,
            name: " Giovanni Gio Rossi",
            expertise: "Historic Home Restoration Expert",
            image: AgentImage3
        },
         {
            id: 1,
            name: "Dr. Patricia Hayes",
            expertise: "Expert in residential properties",
            image: AgentImage4
        },
         {
            id: 1,
            name: " Marcus Webb",
            expertise: "First-Time Home Buyer Coach",
            image: AgentImage6
        },
         {
            id: 1,
            name: "Elena Vance",
            expertise: "New Development & Pre-Construction Specialist",
            image: AgentImage5
        },
        


       

    ]




    return(

        <>
        <div className="agents-section">
        <h1 className='head'>Your Trusted Agents</h1>
        <p>Personalized property recommended, expert advice, throughout the buying or renting process.</p>
         <div className="agent-container">
            <div className="agent-cards">
                {agents.map((agent)=>(
                    <div className="agent-card" key={agent.id}>
                        <img src={agent.image} alt={agent.name} />
                        <h1 className='head-agent'>{agent.name}</h1>
                        <p>{agent.expertise}</p>
                    </div>
                ))}


               
            </div>
        

         </div>
        </div>
        
        
        
        
        
        
        
        
        </>
    )
}