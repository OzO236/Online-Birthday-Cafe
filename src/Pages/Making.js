import React, { useState } from 'react';
import styles from '../style/detailKiring.module.css';
import frame from '../asset/frame.png';
import grayGuitar from '../asset/1_g1.png';
import blackGuitar from '../asset/2_g1.png';
import brownGuitar from '../asset/3_g1.png';
import binPeak from '../asset/p1.png';
import heartPeak from '../asset/p2.png';
import starPeak from '../asset/p3.png';
import g1Frame from '../asset/frame._g1.png';
import g2Frame from '../asset/frame._g2.png';
import g3Frame from '../asset/frame._g3.png';
import { useNavigate } from 'react-router-dom';
import g1p1 from '../asset/g1_p1.png';
import g1p2 from '../asset/g1_p2.png';
import g1p3 from '../asset/g1_p3.png';
import g2p1 from '../asset/g2_p1.png';
import g2p2 from '../asset/g2_p2.png';
import g2p3 from '../asset/g2_p3.png';
import g3p1 from '../asset/g3_p1.png';
import g3p2 from '../asset/g3_p2.png';
import g3p3 from '../asset/g3_p3.png';
import makeitBtn from '../asset/makeitBtn.svg';

const guitars = [
  { id: 1, name: 'grayGuitar', imageUrl: grayGuitar, frameImageUrl: g1Frame },
  { id: 2, name: 'blackGuitar', imageUrl: blackGuitar, frameImageUrl: g2Frame },
  { id: 3, name: 'brownGuitar', imageUrl: brownGuitar, frameImageUrl: g3Frame }
];

const peaks = [
  { id: 1, name: 'binPeak', imageUrl: binPeak },
  { id: 2, name: 'heartPeak', imageUrl: heartPeak },
  { id: 3, name: 'starPeak', imageUrl: starPeak }
];

function Making() {

  const [selectedGuitar, setSelectedGuitar] = useState(null);
  const [selectedPeak, setSelectedPeak] = useState(null);
  const navigate = useNavigate();

  const handleGuitarSelect = (guitar) => {
    setSelectedGuitar(guitar);
  }

  const handlePeakSelect = (peak) => {
    setSelectedPeak(peak);
  }

  const handleComplete = () => {
    if (selectedGuitar && selectedPeak) {
      navigate('/res', { state: { selectedGuitar, selectedPeak } });
    } else {
      alert('기타와 피크를 선택해주세요.');
    }
  };

  return (
    <div className={styles.container}>
      {!selectedGuitar ? (
        <PickGuitar guitars={guitars} handleGuitarSelect={handleGuitarSelect} />
      ) : !selectedPeak ? (
        <PickPeak peaks={peaks} selectedGuitar={selectedGuitar} handlePeakSelect={handlePeakSelect} />
      ) : (
        <PickRes selectedGuitar={selectedGuitar} selectedPeak={selectedPeak} handleComplete={handleComplete} />
      )}
    </div>
  );
};

function PickGuitar({ guitars, handleGuitarSelect }) {
  return (
    <div className={styles.frame}>
      <div className={styles.flexBox}>
        <div className={styles.frameBox}>
          <img src={frame} alt="no frame img" />
        </div>
        <div className={styles.guitarGroup}>
          {guitars.map(guitar => (
            <img key={guitar.id} src={guitar.imageUrl} alt={guitar.name} onClick={() => handleGuitarSelect(guitar)} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PickPeak({ peaks, selectedGuitar, handlePeakSelect }) {

  let currentGuitarId = selectedGuitar ? selectedGuitar.id : null;
  let currentGuitarFrameImageUrl = currentGuitarId ? selectedGuitar.frameImageUrl : null;

  return (
    <div className={styles.frame}>
      <div className={styles.flexBox}>
        <div className={styles.frameBox}>
          {currentGuitarFrameImageUrl && <img src={currentGuitarFrameImageUrl} alt='no frame img' />}
        </div>
        <div className={styles.guitarGroup}>
          {
            peaks.map(peak => (
              <img key={peak.id} src={peak.imageUrl} alt={peak.name} onClick={() => handlePeakSelect(peak)} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

function PickRes({ selectedGuitar, selectedPeak, handleComplete }) {
  let imagePath;
  if (selectedGuitar.id === 1 && selectedPeak.id === 1) {
    imagePath = g1p1;
  } else if (selectedGuitar.id === 1 && selectedPeak.id === 2) {
    imagePath = g1p2;
  } else if (selectedGuitar.id === 1 && selectedPeak.id === 3) {
    imagePath = g1p3;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 1) {
    imagePath = g2p1;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 2) {
    imagePath = g2p2;
  } else if (selectedGuitar.id === 2 && selectedPeak.id === 3) {
    imagePath = g2p3;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 1) {
    imagePath = g3p1;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 2) {
    imagePath = g3p2;
  } else if (selectedGuitar.id === 3 && selectedPeak.id === 3) {
    imagePath = g3p3;
  }

  return (
      <div className={styles.frame}>
        <div className={styles.flexBox}>
          <div className={styles.frameBox}>
            <img src={imagePath} alt="no frame img" />
          </div>
          <div className={styles.ResBtn} onClick={handleComplete}>
            <img src={makeitBtn} alt="no makeitBtn img" />
          </div>
        </div>
      </div>
  )
}


export default Making;