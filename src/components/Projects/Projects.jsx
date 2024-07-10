import React from "react";
import './projects.css';

function Projects(){
  return (
    <div className="_projects_section container">
      <div className="_projects_center_heading">
        <div className="_projects_center_heading_main">Top Crypto Creators and Projects to Follow</div>
        <div className="_projects_center_heading_sub">Answers to your crypto doubts, straight from the experts</div>
      </div>
      <div className="_video_learning_container">
        <div className="_video_card_container">
          <div className="_hidden_video_section">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <span className="_reel_icon"><i className="bi bi-x"></i></span>
          </div>
          <div className="_visible_video_section">
            <div className="_reel_icon">
              <img src="https://www.intract.io/assets/reel-video-ee824737.svg" alt="reel-icon"/>
            </div>
            <span className="_play_video_icon"><i className="bi bi-play-fill mt-1 ml-1"></i></span>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png" alt="How to plan your retirement with crypto?" className="_thumbnail_image_top"/>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png" alt="How to plan your retirement with crypto?" className="_thumbnail_image_bottom"/>
            <div className="_video_card_title">How to plan your retirement with crypto?</div>
          </div>
        </div>
        <div className="_video_card_container">
          <div className="_hidden_video_section">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <span className="_reel_icon"><i className="bi bi-x"></i></span>
          </div>
          <div className="_visible_video_section">
            <div className="_reel_icon">
              <img src="https://www.intract.io/assets/reel-video-ee824737.svg" alt="reel-icon"/>
            </div>
            <span className="_play_video_icon">
              <i className="bi bi-play-fill mt-1 ml-1"></i>
            </span>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png" alt="Why are there limited Bitcoin?" className="_thumbnail_image_top"/>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png" alt="Why are there limited Bitcoin?" className="_thumbnail_image_bottom"/>
            <div className="_video_card_title">Why are there limited Bitcoin?</div>
          </div>
        </div>
        <div className="_video_card_container">
          <div className="_hidden_video_section">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9fyVLvY3P14?si=-02HNwqzZE3jXMz4?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <span className="_reel_icon"><i className="bi bi-x"></i></span></div>
          <div className="_visible_video_section">
            <div className="_reel_icon">
              <img src="https://www.intract.io/assets/reel-video-ee824737.svg" alt="reel-icon"/>
            </div>
            <span className="_play_video_icon">
              <i className="bi bi-play-fill mt-1 ml-1"></i>
            </span>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png" alt="How does Uniswap actually work?" className="_thumbnail_image_top"/>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png" alt="How does Uniswap actually work?" className="_thumbnail_image_bottom"/>
            <div className="_video_card_title">How does Uniswap actually work?</div>
          </div>
        </div>
        <div className="_video_card_container">
          <div className="_hidden_video_section">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <span className="_reel_icon"><i className="bi bi-x"></i></span>
          </div>
          <div className="_visible_video_section">
            <div className="_reel_icon">
              <img src="https://www.intract.io/assets/reel-video-ee824737.svg" alt="reel-icon"/>
            </div>
            <span className="_play_video_icon">
              <i className="bi bi-play-fill mt-1 ml-1"></i>
            </span>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png" alt="How to spot crypto projects to invest in?" className="_thumbnail_image_top"/>
            <img src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png" alt="How to spot crypto projects to invest in?" className="_thumbnail_image_bottom"/>
            <div className="_video_card_title">How to spot crypto projects to invest in?</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;