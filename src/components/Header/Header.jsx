import React from "react";
import './Header.css'

function Header(){

  return (
    <header className="_navbar_container">
      <section className="_maxWidthSectionContainer">
        <div className="_navbar_content_section">
            <a aria-label="home" href="/" className="_navbar_logo">
              <img src="https://www.intract.io/logo/intract_text.svg" alt="intract logo"/>
            </a>
            
          <div className="_navbar_options">  
              <div>Compass</div>
              <div>Explore</div>
              <div className="academy">
                Academy
                <div className="badge ms-2">New</div>
                <div className="selected"></div>
              </div>
              <div>NFTs</div>
              <div>For Projects</div>
          </div>

          <div className="_navbar_empty_space"></div>
          
          <div className="_searchbar_container">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search for ecosystems, trending quests, etc"/>
          </div>
          <div className="_navbar_button_container">
            <section className="_alpha_feed_icon_styles">
              <div>
                <img src="https://www.intract.io/assets/broadcast_or-04af786c.svg" alt="button-svg"/>
              </div>
            </section>
            <div className="navbar_button_holder">
              <span className="button navbar-button">Sign In</span>
            </div>
          </div>
          
        </div>
      </section>
    </header>
  )
    
}

export default Header;