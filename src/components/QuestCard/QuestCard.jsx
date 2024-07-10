import React from "react";
import './questcard.css';

function QuestCard(props){
  return (
    <div className="_narrative_container_1uq5j_1">
      <div className="_narrative_header_1uq5j_13">
        <div className="_collapse_action_1uq5j_31 _collapsed_1uq5j_40"><i className="bi bi-caret-up-fill"></i></div>
        <div className="_narrative_header_image_1uq5j_43">
          <img src={props.image} alt=""/>
          <div className="_quest_count_1uq5j_205">{props.quests}</div>
        </div>
        <div className="_narrative_header_info_1uq5j_58">
          <div className="_narrative_header_title_1uq5j_62">{props.heading}</div>
          <div className="_narrative_header_sub_1uq5j_69">{props.data}</div>
          <hr className="_custom_hr_1c8vj_1"/>
          <div className="_narrative_header_rewards_1uq5j_81">
            <div className="_reward_count_1uq5j_169">
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