import React, { useEffect } from 'react';
import './main.css';
import 'aos/dist/aos.css'
import Aos from "aos"
import img1 from './hallstatt-3609863_640.jpg';
import img2 from './img16.jpg';
import img3 from './img10.jpg';
import img4 from './img11.jpg';
import img5 from  './img15.jpg';
import img6 from  './koh-toa-snorkelling-1024x561.jpg';
import img7 from './nature-water-sea-travel-wallpaper-preview.jpg';
import img8 from './image5.avif';
import img9 from './0e13423cd11c1ce60c364e9a2bb34556.jpg';

const data = [
    {
        id: 1,
        imgsrc: img1, // Use the imported image variable here
        desttitle: 'bora bora',
        location: 'new zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Discover, the glorious island paradise of Bora Bora in French Polynesia. A dream destination famous for its turquoise lagoon and superb white sandy beaches, which make it the perfect setting for watersports, relaxation and romance.'
    },

    {
        id: 2,
        imgsrc: img2, // Use the imported image variable here
        desttitle: 'Kashmir',
        location: 'INDIA',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Dal Lake. Covering an area of around 18 square kilometres, Dal Lake is one of the most visited tourist sites in Kashmir. It is a massive lake known for offering some of the best scenic visuals in the city.'
        },
    {
        id: 3,
        imgsrc: img3, // Use the imported image variable here
        desttitle: 'Ban gioc waterfalls',
        location: 'CHINA',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Discover, the glorious island paradise of Bora Bora in French Polynesia. A dream destination famous for its turquoise lagoon and superb white sandy beaches, which make it the perfect setting for watersports, relaxation and romance.'
    },
    {
        id: 4,
        imgsrc: img4, // Use the imported image variable here
        desttitle: 'Caribbean sea',
        location: 'AMERICA',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Göreme is the most popular town in Cappadocia and a great base for exploring the region. Its home to many restaurants, cafes, and shops, making it an ideal location for those who want to be close to the action Its home to many restaurants, cafes, and shops, making it an ideal location for those who want to be close.'
    },
    {
        id: 5,
        imgsrc: img5, // Use the imported image variable here
        desttitle: 'cappadocia',
        location: 'TURKEY',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Göreme is the most popular town in Cappadocia and a great base for exploring the region. Its home to many restaurants, cafes, and shops, making it an ideal location for those who want to be close to the action Its home to many restaurants, cafes, and shops, making it an ideal location for those who want to be close.'

        },
    {
        id: 6,
        imgsrc: img6, // Use the imported image variable here
        desttitle: 'Angkor wat',
        location: 'CAMBODIA',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'If you want to make the most of all the things to do in Angkor Wat, its usually worth it to join a guided tour. Some tours offer transportation only, but others include a knowledgeable guide so you can learn more about the Khmer architecture seen all over Angkor Archaeological Park'
    },
    {
        id: 7,
        imgsrc: img7, // Use the imported image variable here
        desttitle: 'Bondi beach',
        location: 'AUSTRALIA',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'recommend Discover Sydney, Rock and Reef as you can explore the Sydney Harbour, Uluru and Great Barrier Reef all in one spectacular trip. Featuring some of the best places to visit in Australia for the first time, including an awe-inspiring tour of Kata Tjuta, it has everything you need for a wonderful adventure'
    },
    {
        id: 8,
        imgsrc: img8, // Use the imported image variable here
        desttitle: 'Guanajuato',
        location: 'MEXICO',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Best known for its Festival Cervantino, an arts festival that draws attendance from around the world, Guanajuato is also a UNESCO World Heritage Site. Its old town dates back to the 16th century, and you can visit many of Mexicos important religious and artistic sites.'
    },
    {
        id: 9,
        imgsrc: img9, // Use the imported image variable here
        desttitle: 'Cinque Terre',
        location: 'ITALY',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Vernazza, the most beautiful village to visit in Cinque Terre. Vernazza is without question one of the brightest gems of Cinque Terre, a coastal village that enthralls visitors with its undeniable charm. a coastal village that enthralls visitors with its undeniable charm'
    }
    
];

const Main = () => {

    
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]) 

    return (
        <div className='main-container'>

            <div className='sectitle' >
                <h3 data-aos="fade-right" className='title'>More visited destination </h3>
            </div><br></br>
            <div className='setcontent grid'></div>

            {data.map(({ id, imgsrc, desttitle, location, grade, fees, description }) => {
                return (
                
                    <div key={id} data-aos="fade-up" className='singledestination'>
                        <div className='imagediv'>
                            <img src={imgsrc} alt={desttitle} />
                        </div>
                        <div className='cardinfo'>
                            <h4 className='desttitle'>{desttitle}</h4>
                            <span className='continent-flex'>{location}</span>
                        </div>
                           <div className='fees flex'>
                            <div className='grade'>
                                <span>{grade}<small>+1</small></span>
                            </div>
                            
                            <div className='price'>
                                <h5>{fees}</h5>
                            </div>
                        </div>
                        <div className='desc'>
                        <p>{description}</p>
                        </div>

                        <button className='btn-flex'> details</button>
                    </div>
                    

                    
                );
            })}
        </div>
        
    );
};

export default Main;
