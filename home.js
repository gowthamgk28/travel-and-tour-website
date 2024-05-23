import { useEffect } from "react"
import React  from 'react'
import "./home.css"
import video from "./seavideo.mp4"
import 'aos/dist/aos.css'
import Aos from "aos"

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <div className='home'>
        {/* <div className='overlay'></div> */}
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='homecontent-container'></div>
        <div className='textdiv'></div>

        <span data-aos="fade-up" className='smalltext'>our Packages </span>

        <h1 data-aos="fade-up" className='hometitle'>Search your holiday </h1>
       
       <div data-aos="fade-up" className='carddiv grid'>
        <div className='destinationinput'>
            <label htmlFor='city'>Search your distination:</label>
            <div className='input flex'>
                <input type='text' placeholder='Enter name here...' />
            </div>
        </div>

        <div className='dateinput'>
            <label htmlFor='date'>select your date:</label>
            <div className='input flex'>
                <input type='date'/>
            </div>
        </div>

        
        <div className='priceinput'>
        <div className='label_total flex'>
            <label htmlFor='price'>max price:</label>
            
            <h3 className='total'>$5000</h3>
            </div> 
            <div className='input flex'>
                <input type='range' max="5000" min="1000" />
            </div>

         

            <div className='Searchoption flex'>
                <span>More filter</span>
            </div>
       </div>
       <div data-aos="fade-up"  className='homefooter'>
       <div className='righticons'>  

       

       </div>
       </div>
      
    </div>
    </div>
  )
}

export default Home
