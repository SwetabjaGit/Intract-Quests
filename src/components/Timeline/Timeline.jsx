import React from "react";
import './timeline.css';
import QuestCard from "../QuestCard/QuestCard";
import SectionPath1 from '../SectionPaths/SectionPath1';
import SectionPath2 from '../SectionPaths/SectionPath2';
import NFTCard from '../NFTCard/NFTCard';
import NFTCard2 from '../NFTCard/NFTCard2';
import FinalRewards from '../FinalRewards/FinalRewards';

function Timeline(){
  return (
    <div className="_essentials_section_1a7tp_1 container">
      <section className="_maxWidthSectionContainer_s2uo3_1">
        <div className="_essentials_section_1_h19yc_2">
          <QuestCard
            image="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
            quests="6 Quests"
            heading="Basics of Crypto"
            data="The safest and easiest place to start your crypto journey!"
            xps="1490 XPs"
          />
          <SectionPath1 />
          <NFTCard />
        </div>
      </section>
      <section className="_maxWidthSectionContainer_s2uo3_1">
        <div className="_essentials_section_3_conatiner_e4jua_2">
          <div className="_essentials_section_3_e4jua_2">
            <QuestCard
              image="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
              quests="4 Quests"
              heading="Introduction to Airdrops"
              data="Your best bet to make it big in crypto!"
              xps="1040 XPs"
            />
            <SectionPath2 />
          </div>
        </div>
        <NFTCard2 />
      </section>
      <FinalRewards />
    </div>
  )
}

export default Timeline;