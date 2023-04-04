import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function About() {

    const navigate = useNavigate()
    const location = useLocation()


  return (
    <div>
      <p>hello About</p>
      <button onClick={() => navigate("/") }>click to Home</button><br />
      {location.state}
    </div>
  )
}

export default About
