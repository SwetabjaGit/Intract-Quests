import React from "react";
import './dictionary.css';

function Dictionary(){
  return(
    <div className="dictionary_container">
      <div className="dictionary_section_container container">
        <div className="_dictionary_section_heading">
          <div className="_dictionary_section_heading_main">Crypto Dictionary</div>
          <div className="_dictionary_section_heading_sub">Your one-stop to catch up on all crypto terms</div>
        </div>
        <div className="_dictionary_content">
          <img 
            src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg" 
            alt="" 
            className="_dictionary_content_image_top"
          />
          <img 
            src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg" 
            alt="" 
            className="_dictionary_content_image_bottom"
          />
          <div className="_dictionary_bottom_section">
            <div className="_dictionary_bottom_left">
              <div className="_dictionary_bottom_heading_main">Web3 + Degen Glossary</div>
              <div className="_dictionary_bottom_heading_sub">Your own crypto dictionary</div>
            </div>
            <div className="_dictionary_bottom_right"><i className="bi bi-book"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dictionary;