import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/detailKiring.module.css';
import ExplainImg from '../asset/explainpaper.svg';

function DetailKiring() {
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.imgFrame}>
          <img className={styles.ExplainImg} src={ExplainImg} alt="no ExplainImg" />
          <div className={styles.btnCon}><div className={styles.exBtn} onClick={() => { navigate('/making') }}></div></div>
          </div>
      </div>
    </div>
  )
};

export default DetailKiring;