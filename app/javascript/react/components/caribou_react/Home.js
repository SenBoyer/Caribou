import React from 'react'
import {Link} from 'react-router-dom'
import tiger from '../images/tiger.jpg'
import '../../../../assets/stylesheets/index.css'

const Home = () => {
    return (
        <div>
          <h1 className="home-text">Welcome to Caribou!</h1>
          <div className="left-links-bar">
             <div className="left-links"><Link to='/trip' className="button">Plan A Trip</Link></div>
             <div className="left-links"><Link to='/friends' className="button">Your Friends!</Link></div>
             <div className="left-links"><Link to='/map' className="button">Third link</Link></div>
          </div>

          <div className="image-section">   
            <img src={tiger} alt='animal' />
          </div>
        </div>
    )
}

export default Home
