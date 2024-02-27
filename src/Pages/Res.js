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
import homeBtn from '../asset/homeBtn.svg';
import { useNavigate } from 'react-router-dom';
import g1p1_static from '../asset/g1p1_static.png';
import g2p1_static from '../asset/g2p1_static.png';
import g3p1_static from '../asset/g3p1_static.png';
import g1p2_static from '../asset/g1p2_static.png';
import g2p2_static from '../asset/g2p2_static.png';
import g3p2_static from '../asset/g3p2_static.png';
import g1p3_static from '../asset/g1p3_static.png';
import g2p3_static from '../asset/g2p3_static.png';
import g3p3_static from '../asset/g3p3_static.png';

function Res({ selectedGuitar, selectedPeak }) {

  const navigate = useNavigate();

  let imagePath;
  let pngPath;
  if (selectedGuitar.id === 1 && selectedPeak.id === 1) {
    imagePath = p1g1;
    pngPath = g1p1_static;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 1) {
    imagePath = p1g2;
    pngPath = g2p1_static;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 1) {
    imagePath = p1g3;
    pngPath = g3p1_static;
  } else if (selectedGuitar.id === 1 && selectedPeak.id === 2) {
    imagePath = p2g1;
    pngPath = g1p2_static;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 2) {
    imagePath = p2g2;
    pngPath = g2p2_static;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 2) {
    imagePath = p2g3;
    pngPath = g3p2_static;
  } else if (selectedGuitar.id === 1 && selectedPeak.id === 3) {
    imagePath = p3g1;
    pngPath = g1p3_static;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 3) {
    imagePath = p3g2;
    pngPath = g2p3_static;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 3) {
    imagePath = p3g3;
    pngPath = g3p3_static;
  } else {
    imagePath = null;
  }

  const handleDownload = () => {
    if (!pngPath) {
      alert('이미지 경로가 없습니다.');
      return;
    }

    fetch(pngPath)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'image.png');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => {
      alert('이미지 다운로드에 실패했습니다.', error);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.ResFrame}>
        <div className={styles.resTitle}>HAPPY <br></br> WONBINDAY</div>
        {imagePath && <img className={styles.Resimg} src={imagePath} alt="no gif" />}
        <div className={styles.downImg} onClick={handleDownload}>Download image</div>
      </div>
      <div className={styles.homeBtn} onClick={()=>{navigate('/product')}}>
        <img src={homeBtn} alt="no homeBtn img" />
      </div>
    </div>
  );
}

export default Res;