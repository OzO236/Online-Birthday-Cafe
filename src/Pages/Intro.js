import React from 'react';
import '../style/intro.css';

function Intro() {
  return(
    <div className='total'>
      <div className="img-wb"></div>
      <div className="container">
        <div className="nav-top">
          <div className="title"></div>
          <div className="close"></div>
        </div>
        <div className="nav-bottom">
          <div className="prev"></div>
          <div className="next"></div>
        </div>
        <div className="chat">
          <div className="chat-box1">
            <img className='propfile-small' src="" alt="" />
            <img className='chat-backgound' src="" alt="" />
            <p>희쥬들 삐니 생일 파티 가요?</p>
          </div>
          <div className="chat-box2">
            <img className='propfile-small' src="" alt="" />
            <img className='chat-backgound' src="" alt="" />
            <p>네! 가요~</p>
          </div>
          <div className="chat-box3">
            <img className='propfile-small' src="" alt="" />
            <img className='chat-backgound' src="" alt="" />
            <p>가죠가죠!</p>
          </div>
          <div className="chat-box4">
            <img className='propfile-small' src="" alt="" />
            <img className='chat-backgound' src="" alt="" />
            <p>삐니한테 키링 선물 주는 거 어때요?</p>
          </div>
          <div className="chat-box5">
            <img className='propfile-small' src="" alt="" />
            <img className='chat-backgound' src="" alt="" />
            <p>좋아요~!!</p>
          </div>
          <div className="img-riize">
            <img src="" alt="" />
          </div>
        </div>
        <div className="profile">
          <img src="src/asset/intro_profile_img.png" alt="" />
        </div>
        <div className="member">
          <div className="img-member">
            <img src="" alt="" />
          </div>
        </div>
        <div className="btn">GO</div>
      </div>
    </div>
  )
};

export default Intro