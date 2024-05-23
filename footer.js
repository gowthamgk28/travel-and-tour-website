import React, {useEffect} from 'react'
import video from "./seavideo.mp4"
import './footer.css'
import 'aos/dist/aos.css'
import Aos from "aos"
const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[]) 
  return (
    <section className='footer'>
    <div className='videodiv'>
        <video src={video} loop autoplay muted typeof='video/mp4'></video>
      
    </div>

    <div className='seccontent container'>
        <div className='contactdiv flex'>
            <div data-aos="fade-up" className='text'>
                <small className='first'>KEEP IN TOUCH</small>
                <h2>travel with us</h2>
            </div>

            <div className='inputdiv flex'>
                <input data-aos="fade-up" type='text' placeholder='Enteer Email address'></input>
                <button className='btn-flex' data-aos="fade-up" type='submit'>SEND</button>
            </div>
        </div>

        <div className='footercard flex'>
            <div className='footerintro flex'>
            <div className='logodiv'>
                <a href='#' className='logo-flex'>Travel</a>
            </div>

            <div className='footerpara' data-aos="fade-up">
            Brihadisvara Temple. One of the most beautiful and popular tourist
             attractions <br></br> in Tamil Nadu is the Brihadisvara Temple
             attractions in Tamil Nadu <br></br> is the Brihadisvara Temple
             attractions in Tamil Nadu is the Brihadisvara Temple
             
             

            
                
            </div>
            </div>
        <div className='footerlinks grid'>
          <div data-aos="fade-up" data-aos-duration="3000" className='linkgroup'>
          <span className='grouptitle'>OUR AGENCY</span>  
            

            <li className='footerlist flex'> services </li>
            <li className='footerlist flex'> insurance </li>
            <li className='footerlist flex'>Agency  </li>
            <li className='footerlist flex'>  Tourism</li>
            <li className='footerlist flex'> payment </li>
            
            </div>  
         

             <div data-aos="fade-up" data-aos-duration="4000"  className='linkgroup'>
          <span className='grouptitle'>PARTNER</span>  

            <li className='footerlist flex'> Booking </li>
            <li className='footerlist flex'> Rentcars </li>
            <li className='footerlist flex'> Hostelworld </li>
            <li className='footerlist flex'> Trivago</li>
            <li className='footerlist flex'> TripAdvisor </li>
            
            </div>    


            <div data-aos="fade-up" data-aos-duration="5000"  className='linkgroup'>
          <span className='grouptitle'>LAST MINUTE </span>  

            <li className='footerlist flex'> London </li>
            <li className='footerlist flex'> California </li>
            <li className='footerlist flex'> Indonesia </li>
            <li className='footerlist flex'> europe </li>
            <li className='footerlist flex'>Oceania </li>
            
            </div>   
         
         
        </div>

        <div className='footerdiv flex'>
          <small className='last'>BEST TRAVEL WEBSITE THEME</small>    
          <small>COPYRIGHTS RESERVED-2024</small>    
        </div>   
        </div>
    </div>
    </section>
  )

}

export default Footer
