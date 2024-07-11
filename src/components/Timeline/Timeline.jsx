import React, { useState } from "react";
import './timeline.css';
import QuestCard from '../QuestCard/QuestCard';
import NFTCard from '../NFTCard/NFTCard';
import FinalRewards from '../FinalRewards/FinalRewards';
import DropdownCard from '../DropdownCard/DropdownCard';
import SectionPath1 from '../SectionPaths/SectionPath1';
import SectionPath3 from '../SectionPaths/SectionPath3';
import SectionPath4 from '../SectionPaths/SectionPath4';
import SectionPath5 from '../SectionPaths/SectionPath5';

function Timeline(){
  const [topCardOpen, setTopCardOpen] = useState(false);
  const [bottomCardOpen, setBottomCardOpen] = useState(false);

  function toggleTopCardOpen() {
    setTopCardOpen((topCardOpen) => !topCardOpen)
  }

  function toggleBottomCardOpen() {
    setBottomCardOpen((bottomCardOpen) => !bottomCardOpen)
  }

  return (
    <div className="_timeline_wrapper container">
      <section className="_timeline_section">
        <div className="_timeline_section_1_container">
          <div className="_questcard_container" >
            <div onClick={toggleTopCardOpen}>
              <QuestCard
                image="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
                quests="6 Quests"
                heading="Basics of Crypto"
                data="The safest and easiest place to start your crypto journey!"
                xps="1490 XPs"
              />
            </div>
            {topCardOpen && <div className="_questcard_body">
              <DropdownCard
                dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png"
                dropcardTitle="#1: But what is crypto and web3?"
                dropcardTasks="11 Tasks"
              />
              <DropdownCard
                dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg"
                dropcardTitle="#2: Setting up your own web3 wallet!"
                dropcardTasks="8 Tasks"
              />
              <DropdownCard
                dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg"
                dropcardTitle="#3: What the heck is a blockchain?"
                dropcardTasks="8 Tasks"
              />
              <DropdownCard
                dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg"
                dropcardTitle="#4: Swapping and bridging? What’s that?"
                dropcardTasks="10 Tasks"
              />
              <DropdownCard
                dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg"
                dropcardTitle="#5: NFTs and why they’re cool ;)"
                dropcardTasks="6 Tasks"
              />
              <DropdownCard
                dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg"
                dropcardTitle="#6: Doing quests and winning rewards!"
                dropcardTasks="8 Tasks"
              />
            </div>}
          </div>
          <SectionPath1 />
          <SectionPath3 />          
        </div>
        <div className="_timeline_section_2_container">
          <NFTCard
            image="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
            name="Intract Certified: Learner NFT"
            desc1="Your crypto black-belt "
            desc2="certificate"
          />
        </div>
      </section>
      <section className="_timeline_section">
        <div className="_timeline_section_3_container">
          <div className="_timeline_section_3_content">
            <div className="_questcard_container">
              <div onClick={toggleBottomCardOpen}>
                <QuestCard
                  image="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
                  quests="4 Quests"
                  heading="Introduction to Airdrops"
                  data="Your best bet to make it big in crypto!"
                  xps="1040 XPs"
                />
              </div>
              {bottomCardOpen && <div className="_questcard_body">
                <DropdownCard
                  dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg"
                  dropcardTitle="#1: What are airdrops, and how can they change your life?"
                  dropcardTasks="7 Tasks"
                />
                <DropdownCard
                  dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg"
                  dropcardTitle="#2: Types of airdrops"
                  dropcardTasks="10 Tasks"
                />
                <DropdownCard
                  dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png"
                  dropcardTitle="#3: How to earn huge $$$ from airdrops?"
                  dropcardTasks="11 Tasks"
                />
                <DropdownCard
                  dropcardImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg"
                  dropcardTitle="#4: Things to keep in mind!"
                  dropcardTasks="7 Tasks"
                />
              </div>}
            </div>
            <SectionPath4 />
          </div>
        </div>
        <div className="_timeline_section_4_container">
          <NFTCard
            image="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
            name="Intract Certified: Earner NFT"
            desc1="Your proof of "
            desc2="airdrop expertise"
          />
          <SectionPath5 />
        </div>
      </section>
      <FinalRewards />
    </div>
  )
}

export default Timeline;