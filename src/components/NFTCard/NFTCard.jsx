import React from "react";
import './nftcard.css';

function NFTCard(props){
  return (
    <div className="_nftcard_container">
      <div className="_timeline_nft_tick_icon"><i className="bi bi-check2"></i></div>
      <div className="_timeline_section_2_outer">
        <div className="_timeline_section_2_image">
          <img src={props.image} alt="" className="_timeline_nft_reward_image"/>
        </div>
        <div className="_timeline_nft_lock_image">
          <img src="https://www.intract.io/assets/lock-icon-2019798d.svg" alt=""/>
        </div>
      </div>
      <div className="_timeline_nft_name">{props.name}</div>
      <div className="_timeline_nft_description">{props.desc1}<br/>{props.desc2}</div>
      <button className="_timeline_nft_claim_btn" disabled="">
        <div>Claim</div>
      </button>
    </div>
  )
}

export default NFTCard;