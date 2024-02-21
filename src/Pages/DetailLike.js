import React from 'react'
import styles from '../style/detailLike.module.css'
import sirenwb from '../asset/sirenwb.png'
import memorieswb from '../asset/memorieswb.png'
import getaguitarwb from '../asset/getaguitarwb.png'
import talksaxywb from '../asset/talksaxywb.png'
import love119wb from '../asset/love119wb.png'
import staricon from '../asset/staricon.png'

function DetailLike() {
  return(
    <div>
      <div className={styles.total}>
        <div className={styles.container}>
          <div className={styles.title}>Which Wonbin do you like <br/> the most?</div>
          <div className={styles.p1}><p>최애 원빈이의 컨셉 하나를 선택해주세요.</p></div>
          <div className={styles.p2}><p>※하나만 선택 가능하며 한 번 누르면 다시 되돌릴 수 없습니다.</p></div>

          <div className={styles.cardbox}>
            <div className={`${styles.box} ${styles.box1}`}>
              <span>siren</span>
              <img className={styles.sirenimg} src={sirenwb} alt="sirenimg"/>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <span>memories</span>
              <img className={styles.memoriesimg} src={memorieswb} alt="memoriesimg"/>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
              <span>get a guitar</span>
              <img className={styles.getaguitarimg} src={getaguitarwb} alt="getaguitarimg"/>
            </div>
            <div className={`${styles.box} ${styles.box4}`}>
              <span>talk saxy</span>
              <img className={styles.talksaxyimg} src={talksaxywb} alt="talksaxyimg"/>
            </div>
            <div className={`${styles.box} ${styles.box5}`}>
              <span>love 119</span>
              <img className={styles.love119img} src={love119wb} alt="love119img"/>
            </div>
            <div className={`${styles.box} ${styles.box6}`}>
              <img className={styles.staricon} src={staricon} alt="staricon"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default DetailLike