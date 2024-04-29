import React from 'react'
import Navbar from './components/Navbar'
import image1 from '../src/components/Home1.png'
export const Home = () => {
  return (
    <div>
      <Navbar/>
    <div>
              <img src={image1}  alt='show null' style={{backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed' ,backgroundSize:'cover',width:'100%',height:'750px'}} />
    </div>
    </div>
  )
}
