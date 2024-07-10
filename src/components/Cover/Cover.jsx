import React from "react";
import './cover.css';

function Cover(){
  
  return (
    <div className="_cover_wrapper">
      <img className="_cover_header_image" src="https://www.intract.io/assets/intract-academy-background-5547a705.png" alt="intract-academy-bg"/>

      <div className="_cover_info">
        <div className="_header_logo_container">
          <img className="_header_logo" src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif" alt="intract-academy-logo"/>
        </div>
        <div className="_cover_text">
          <p><span>Intract users</span> have together made more than <span> $100 million</span> in web3.<br/> 
  Join them and <span>learn how to earn crypto!</span> 
          </p>
          
          <div className="mt-5">
            <div className="_primary_button_container">
              <div className="_primary_button"><span>Get Started</span>
                <img src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg" alt="Angle Top Icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Cover;