import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>Hello Home</p>
      <Link to="/about" state={"Data From Home"}>Back to About</Link> 
    </div>
  )
}

export default Home
