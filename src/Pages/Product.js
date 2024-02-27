import React from 'react';
import styles from '../style/product.module.css';
import video from '../asset/productVedio.mp4';
import riizeImg from '../asset/total_new.svg';
import { useNavigate } from 'react-router-dom';

function Product() {

  const navigate = useNavigate();

  return(
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.notice}>인덱스 4개 중 1개를 선택해 주세요.</div>
        <video className={styles.video} width="100%" height="auto" muted autoPlay>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.riizeImg}>
          <img src={riizeImg} alt="no riizeImg img" />
        </div>
        <div className={styles.btnBox}>
          <div className={styles.btn} onClick={()=>{navigate('/DetailKiring')}}></div>
          <div className={styles.btn1} onClick={()=>{navigate('/DetailMsg')}}></div>
          <div className={styles.btn2} onClick={()=>{navigate('/DetailLike')}}></div>
          <div className={styles.btn3} onClick={()=>{navigate('/DetailMap')}}></div>
        </div>
      </div>
    </div>
  )
};

export default Product