import React from "react";
import './nftcard.css';

function NFTCard(){
  return (
    <div className="_essentials_section_2_conatiner_h19yc_20">
      <div>
        <div className="_essentials_nft_tick_1a7tp_55"><i className="bi bi-check2"></i></div>
        <div className="_essentials_section_2_outer_h19yc_27">
          <div className="_essentials_section_2_h19yc_20">
            <img src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png" alt="" className="_essentials_nft_reward_image_1a7tp_47"/>
          </div>
          <div className="_essentials_nft_lock_1a7tp_75">
            <img src="https://www.intract.io/assets/lock-icon-2019798d.svg" alt=""/>
          </div>
        </div>
        <div className="_essentials_nft_name_1a7tp_9">Intract Certified: Learner NFT</div>
        <div className="_essentials_nft_desc_1a7tp_18">Your crypto black-belt <br/>certificate</div>
        <button className="_essentials_nft_claim_btn_1a7tp_26" disabled="">
          <div>Claim</div>
        </button>
      </div>
      <div className="_essentials_section_path_3_h19yc_79">
        <svg width="778" height="329" viewBox="0 0 778 329" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1016_21647)">
            <path d="M386.615 8C455.063 12.0917 620.356 28.8358 544.235 94.4422C457.798 168.94 638.298 187.8 747.615 190" stroke="white" strokeOpacity="0.4" strokeLinecap="round" strokeDasharray="8 8"></path>
            <path d="M747.5 190C726.099 225.723 543.202 363.742 389 278.5C149.5 146.106 1.23354 246.726 15.3849 305.717" stroke="white" strokeOpacity="0.4" strokeLinecap="round" strokeDasharray="8 8"></path>
          </g>
          <defs>
            <clipPath id="clip0_1016_21647">
              <rect width="778" height="329" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default NFTCard;