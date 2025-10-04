import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero1 from '../../assets/cards/hero1.avif'
import hero_title from '../../assets/cards/hero_title.png'
import play_icon from '../../assets/cards/Play_icon.png'
import info_icon from '../../assets/cards/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'




const Home = () => {
  return (
    <div className= 'home'>
      <Navbar/>
      <div className="hero">
        <img src={hero1} alt="" className='banner-img'/>
        <div className="hero-caption">
          <h1>Behind her eyes</h1>
          {/* <img src={hero_title} alt="" className='caption-img'/> */}
          <p>A limited psychological thriller series on Netflix about a single mother who gets involved in a complicated love triangle with her boss and his mysterious wife, uncovering a dark web of manipulation, secrets, and supernatural elements.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
