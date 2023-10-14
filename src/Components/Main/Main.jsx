import React from "react";
import './main.css';
import img from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'
import img7 from '../../assets/img (7).jpg'
import img8 from '../../assets/img (8).jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaStar} from 'react-icons/fa'

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Restaurant 1',
        location: 'Boston',
        description: 'Specialist of Seafood',
        rating: '5',
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Restaurant 2',
        location: 'Libia',
        description: 'Specialist of couple date',
        rating: '5',
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Restaurant 3',
        location: 'Berlin',
        description: 'Soft Dinner',
        rating: '5',
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'Restaurant 4',
        location: 'Libia',
        description: 'Beautiful Place',
        rating: '5',
    },
    {
        id:5,
        imgSrc: img5,
        destTitle: 'Restaurant 5',
        location: 'Libia',
        description: 'Modern Place',
        rating: '5',
    },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'Restaurant 6',
        location: 'Italy',
        description: 'Comfort food of Italy',
        rating: '5',
    },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'Restaurant 7',
        location: 'US',
        description: 'Specialist of Tequila',
        rating: '5',
    },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'Restaurant 8',
        location: 'Libia',
        description: 'Specialist of Steak',
        rating: '5',
    },
]

const Main = () => {
    return (
        <section className="main container section">


            <div className="secTitle">
                <h3 className="title">All Restaurant</h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id, imgSrc, destTitle, location,
                        rating, fees, description})=>{
                        return(
                            <div key={id}
                            className="singleRestaurant">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='iconx'/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                        </div>
                                        <div className="open">
                                            <span>Open Now</span>
                                        </div>
                                    </div>
                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                        <button className="btn flex">
                                            Learn More
                                        </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )
}

export default Main