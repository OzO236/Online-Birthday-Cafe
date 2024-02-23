import React from 'react';
import styles from '../style/intro.module.css';
import Profile from '../asset/intro_profile_img.svg';
import ChatOne from '../asset/chat1_background.svg';
import ChatTwo from '../asset/chat2_background.svg';
import ChatThree from '../asset/chat3_background.svg';
import ChatFour from '../asset/chat4_background.svg';
import ChatFive from '../asset/chat5_background.svg';
import Member from '../asset/group_member.svg';
import Riize from '../asset/riize.png';
import BinCat from '../asset/intro_wb2.png';
import { useNavigate } from 'react-router-dom';

function Intro() {

  let navigate = useNavigate();

  return(
    <div className={styles.total}>
      <div className={styles.frame}>
        <div className={styles.imgWb}>
          <img src={BinCat} alt="no BinCar img" />
        </div>
        <div className={styles.container}>
          <div className={styles.navTop}>
            <div className={styles.title}>삔사모♥♡</div>
            <div className={styles.close}>X</div>
          </div>
          <div className={styles.navBottom}>
            <div className={styles.prev}>←</div>
            <div className={styles.next}>→</div>
          </div>
          <div className={styles.chat}>
            <div className={styles.chatBox1}>
              <img src={ChatOne} alt="ChatOne" />
            </div>
            <div className={styles.chatBox2}>
            <img src={ChatTwo} alt="ChatTwo" />
            </div>
            <div className={styles.chatBox3}>
            <img src={ChatThree} alt="ChatThree" />
            </div>
            <div className={styles.chatBox4}>
            <img src={ChatFour} alt="ChatFour" />
            </div>
            <div className={styles.chatBox5}>
            <img src={ChatFive} alt="ChatFive" />
            </div>
            <div className={styles.imgRiize}>
              <img src={Riize} alt="no Riize img" />
            </div>
          </div>
          <div className={styles.profile}>
            <img src={Profile} alt="np profile img" />
          </div>
          <div className={styles.member}>
            <div className={styles.imgMember}>
              <img src={Member} alt="Member" />
            </div>
          </div>
          <div className={styles.btn} onClick={()=>{navigate('/Product')}}>GO</div>
        </div>
      </div>
    </div>
  )
};

export default Intro