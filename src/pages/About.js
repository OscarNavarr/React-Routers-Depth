import { useState } from "react"
import { Navigate } from "react-router-dom";

export const About = () => {
    const [user, setUser] = useState('mario');

    if(!user){
      return <Navigate to="/" replace={true}/>
    }
    return (
      <div className="about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Rerum dolor assumeda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum</p>
          <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Rerum dolor assumeda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum</p>
          <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Rerum dolor assumeda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum</p>

          <button onClick={() => setUser(null)}>Logout</button>
      </div>
    )
  }
  