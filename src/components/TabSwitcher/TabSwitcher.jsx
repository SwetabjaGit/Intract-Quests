import React from "react";
import './tabswitcher.css';

function TabSwitcher(){
  return (
    <div className="_tab_switcher_wrapper">
      <div className="_tab_switcher_container">
        <div className="_tab_switcher_item _active_tab">Essentials</div>
        <div className="relative">
          <div className="_tab_switcher_item">Alpha Hub</div>
        </div>
        <div className="_tab_switcher_item_active"></div>
      </div>
    </div>
  )
}

export default TabSwitcher;