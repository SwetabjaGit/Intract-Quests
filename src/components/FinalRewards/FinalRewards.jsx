import React from "react";
import './finalrewards.css';

function FinalRewards(){
  return (
    <div className="_final_reward_container">
      <div className="_reward_won_wrapper"></div>
      <div className="_timer_container_outer">
        <div className="_timer_container_content">
          <div>
            <div><i className="bi bi-clock-history"></i></div>
            Reward unlocks in
          </div>
          <hr/>
          <div>
            <img src="https://www.intract.io/assets/dotBg-149528a0.png" alt="dot background"/>
            <div>
              <h3>00</h3>
              <p>Days</p>
            </div>
            <div>
              <h3>14</h3>
              <p>Hrs</p>
            </div>
            <div>
              <h3>35</h3>
              <p>Mins</p>
            </div>
            <div>
              <h3>59</h3>
              <p>Sec</p>
            </div>
          </div>
        </div>
        <div className="_final_reward_content">
          <img src="https://www.intract.io/assets/kol-reward-12e6ae06.gif" alt="" className="_final_reward_image"/>
          <div className="_final_reward_type">Lucky Draw</div>
          <div className="_final_reward_info">
            <div>Exclusive Community</div>
            <span>
              <img src="https://www.intract.io/assets/discord-50baa5cf.svg" alt="discord-icon"/>
              <p>Earndrop</p>
            </span>
          </div>
          <hr className="_final_reward_hr_divider"/>
          <div className="_final_reward_steps">
            <div>Complete all Essential quests</div>
            <div className="_quest_complete_tick_icon"><i className="bi bi-check2"></i></div>
          </div>
          <div className="_final_reward_steps">
            <div>Complete at least 1 Alpha Hub quest today</div>
            <div className="_quest_complete_tick_icon"><i className="bi bi-check2"></i></div>
          </div>
          <div className="_final_reward_claim_button">
            <div>Claim Now</div>
            <img src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg" alt="Angle Top Icon"/>
          </div>
          <img src="https://www.intract.io/assets/reward-info-path-571d6141.svg" alt="" className="_final_reward_info_path"/>
          <div className="_reward_details_container">
            <div className="_reward_details_header">Reward info<i className="bi bi-info-circle ml-1"></i></div>
            <div className="_reward_details_body">
              <p><span>Free access to paid KOL (crypto earning) communities!</span></p>
              <br/>
              <p>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
              <br/>
              <p>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalRewards;