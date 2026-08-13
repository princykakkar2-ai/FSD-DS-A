import React from 'react'
import './Services.css'
import HotelImg from '../assets/Hotel.jpeg'
import BarImg from '../assets/Bar.jpeg'
import ClubImg from '../assets/Club.jpeg'
import ReceptionImg from '../assets/Reception.jpeg'
import PlaceholderImg from '../assets/logo.png'

const services = [
  {
    id:1,
    title:"HOTEL: THE ROOMS,",
    description:"From  micro-boudoirs to velvet suites.Check-in and crash out.",
    image: HotelImg,
    buttontxt:"Discover Sleep"
  },
  {
    id:2,
    title:"BAR: CONFESSIONS",
    description:"Tell our bartenders everything. Our signature cocktails hear it all.",
    image: BarImg,
    buttontxt:"Peruse Potions"
  },{
    id:3,
    title:"CLUB: UNFORGETTABLE NIGHTS",
    description:"Deep bass, blurred memories, and the city's finest DJs. Leave it all on the floor.",
    image: ClubImg,
    buttontxt: "VIEW EVENT LINEUP",
  },{
    id:4,
    title:"RECEPTION: THE KEY",
    description:"Need an alibi or a booking? We're here 24/7.",
    image: ReceptionImg,
    buttontxt:"Inquire/Reserve"
  }
]

const Services = () => {
  return (
    <>
    <div className="services-container">
      <div className="quote">
        <p className='first'>Hotel for crashing, bar for confessing, club for forgetting</p>
        <p className='second'>Step right in--your morning after regret is already on the menu.</p>
      </div>
      <div className="divider-wrapper">
        <span className="divider-line"></span>
        <span className="divider-diamond">◆</span>
        <span className="divider-line"></span>
      </div>
      <div className="cards-grid">
        {
          services.map((item) => (
            <div key={item.id} className="service-card">
              <div className="image-wrapper">
                <img
                  src={item.image || PlaceholderImg}
                  alt={item.title || 'service'}
                  className='card-image'
                  onError={(e) => { e.currentTarget.src = PlaceholderImg }}
                />
              </div>
              <div className="content-wrapper">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description || 'Details coming soon.'}</p>
                <button className="card-button">{item.buttontxt || 'Learn more'}</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Services