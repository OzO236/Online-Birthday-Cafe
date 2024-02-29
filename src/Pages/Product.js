import React, { useEffect, useState } from 'react';
import styles from '../style/product.module.css';
import video from '../asset/512.gif';
import riizeImg from '../asset/total_new.png';
import { useNavigate } from 'react-router-dom';
import staticProduct from '../asset/0180.png';

function Product() {

  const navigate = useNavigate();
  let [showGif, setShowGif] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(()=>{
      setShowGif(false);
    }, 6000);

    // cleanup 함수를 반환하여 컴포넌트가 언마운트 될 때 타이머를 클리어
    return () => clearTimeout(timer);
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.notice}>인덱스 4개 중 1개를 선택해 주세요.</div>
        <div className={styles.video}>
          {showGif ? (
            <img src={video} alt="no product gif" />
          ) : (
            <img src={staticProduct} alt="no staticProduct img" />
          )}
        </div>
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