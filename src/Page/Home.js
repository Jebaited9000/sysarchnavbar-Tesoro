import React from 'react'

function Home() {
  return (
    
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src="workk.mp4" type="video/mp4"></source>
      </video>
      <center>
      <img className='bg' src="./job.png"/>
      <a href="/registration">
      <button className='butt'>Find a Job</button> 
      </a>
      </center>
    </div>  
  )
}

export default Home