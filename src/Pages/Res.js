import React from 'react';
import styles from '../style/detailKiring.module.css';
import p1g1 from '../asset/p1_g1.gif';
import p1g2 from '../asset/p1_g2.gif';
import p1g3 from '../asset/p1_g3.gif';
import p2g1 from '../asset/p2_g1.gif';
import p2g2 from '../asset/p2_g2.gif';
import p2g3 from '../asset/p2_g3.gif';
import p3g1 from '../asset/p3_g1.gif';
import p3g2 from '../asset/p3_g2.gif';
import p3g3 from '../asset/p3_g3.gif';

function Res({ selectedGuitar, selectedPeak }) {

  let imagePath;
  if (selectedGuitar.id === 1 && selectedPeak.id === 1) {
    imagePath = p1g1;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 1) {
    imagePath = p1g2;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 1) {
    imagePath = p1g3;
  } else if (selectedGuitar.id === 1 && selectedPeak.id === 2) {
    imagePath = p2g1;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 2) {
    imagePath = p2g2;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 2) {
    imagePath = p2g3;
  } else if (selectedGuitar.id === 1 && selectedPeak.id === 3) {
    imagePath = p3g1;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 3) {
    imagePath = p3g2;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 3) {
    imagePath = p3g3;
  } else {
    imagePath = null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.ResFrame}>
        {imagePath && <img className={styles.Resimg} src={imagePath} alt="no gif" />}
      </div>
    </div>
  );
}

export default Res;