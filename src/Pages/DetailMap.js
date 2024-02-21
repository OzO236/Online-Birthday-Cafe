import React from 'react'
import styles from '../style/detailMap.module.css'
import riizebarcode from '../asset/riizebarcode.png'

function DetailMap() {
  return (
    <div>
      <div className={styles.total}>
        <div className={styles.container}> 
          <span className={`${styles.star} ${styles.star1}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>        
          <div className={styles.title}>Wonbin's birthday <br/> cafe map </div>
          <span className={`${styles.star} ${styles.star2}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
          <div className={styles.rectangle}></div>
          <span className={`${styles.star} ${styles.star3}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
          <div className={styles.textcontainer}>
            <div className={styles.flexcontainer}>
              <span className={styles.text}>국내에 있는 원빈 생일 카페 한정으로 지도에 표시됩니다.</span>
              <span className={styles.text}>지도 외에 다른 카페가 있다면 다음의 메일로 알려주시면 감사하겠습니다.</span>
              <span className={styles.text}>yeonju9623@naver.com</span>
            </div>
          </div>
          <img className={styles.barcode} src={riizebarcode} alt="barcode"/>
        </div>
      </div>
    </div>
  );
}


export default DetailMap