import React from 'react';
import '../style/intro.css';
import Profile from '../asset/intro_profile_img.svg';
import ChatOne from '../asset/chat1_background.svg';
import ChatTwo from '../asset/chat2_background.svg';
import ChatThree from '../asset/chat3_background.svg';
import ChatFour from '../asset/chat4_background.svg';
import ChatFive from '../asset/chat5_background.svg';
import Member from '../asset/group_member.svg';

function Intro() {
  return(
    <div className='total'>
      <div className='frame'>
        <div className="img-wb"></div>
        <div className="container">
          <div className="nav-top">
            <div className="title">삔사모♥♡</div>
            <div className="close">X</div>
          </div>
          <div className="nav-bottom">
            <div className="prev">←</div>
            <div className="next">→</div>
          </div>
          <div className="chat">
            <div className="chat-box1">
              <img src={ChatOne} alt="ChatOne" />
            </div>
            <div className="chat-box2">
            <img src={ChatTwo} alt="ChatTwo" />
            </div>
            <div className="chat-box3">
            <img src={ChatThree} alt="ChatThree" />
            </div>
            <div className="chat-box4">
            <img src={ChatFour} alt="ChatFour" />
            </div>
            <div className="chat-box5">
            <img src={ChatFive} alt="ChatFive" />
            </div>
            <div className="img-riize">
              <img src="" alt="" />
            </div>
          </div>
          <div className="profile">
            <img src={Profile} alt="np profile img" />
          </div>
          <div className="member">
            <div className="img-member">
              <img src={Member} alt="Member" />
            </div>
          </div>
          <div className="btn">GO</div>
        </div>
      </div>
    </div>
  )
};

export default Intro