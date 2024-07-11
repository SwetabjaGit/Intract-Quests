import React from "react";
import './dropdowncard.css';

function DropdownCard(props){
  return (
    <div className="_dropcard_container">
      <div className="_dropcard_image">
        <img src={props.dropcardImage} alt=""/>
      </div>
      <div className="_dropcard_content">
        <div className="_dropcard_name">{props.dropcardTitle}</div>
        <hr className="_dropcard_hr_divider"/>
        <div className="_dropcard_info">
          <div className="_dropcard_tasks">{props.dropcardTasks}</div>
          <div className="_progress_bar_wrapper">
            <div className="_progress_bar_container">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="_dropcard_complete_tick">
        <i className="bi bi-check2"></i>
      </div>
    </div>
  )
}

export default DropdownCard;