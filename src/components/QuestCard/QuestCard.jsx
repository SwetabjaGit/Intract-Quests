import React from "react";
import './questcard.css';

function QuestCard(props){
  return (
    <div className="_questcard_container">
      <div className="_questcard_header">
        <div className="_collapse_action _collapsed"><i className="bi bi-caret-up-fill"></i></div>
        <div className="_questcard_header_image">
          <img src={props.image} alt=""/>
          <div className="_quest_count">{props.quests}</div>
        </div>
        <div className="_questcard_header_info">
          <div className="_questcard_header_title">{props.heading}</div>
          <div className="_questcard_header_sub">{props.data}</div>
          <hr className="_hr_divider"/>
          <div className="_questcard_header_rewards">
            <div className="_reward_count">
              <img src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="" width="18" height="16"/>
              {props.xps}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestCard;