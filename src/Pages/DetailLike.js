import React, { useEffect, useState } from 'react'
import styles from '../style/detailLike.module.css'
import sirenwb from '../asset/sirenwb.png'
import memorieswb from '../asset/memorieswb.png'
import getaguitarwb from '../asset/getaguitarwb.png'
import talksaxywb from '../asset/talksaxywb.png'
import love119wb from '../asset/love119wb.png'
import staricon from '../asset/staricon.png'
import homeBtnMsg from '../asset/homeBtnMsg.svg';
import { useNavigate } from 'react-router-dom'
import paper from '../asset/paperLike.png';

function DetailLike() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const navigate = useNavigate();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState([0,0,0,0,0,0]);
  const [isBoxClicked, setIsBoxClicked] = useState(false); // 클릭 여부 상태값 추가

  useEffect(() => {
    // 페이지가 처음 로드될 때만 실행되도록 함
    if (!localStorage.getItem('selected')) {
      localStorage.setItem('selected', JSON.stringify([]));
    }
  }, []);

   // 클릭 이벤트 핸들러 함수
  const handleBoxClick = (boxNumber) => {
    if (!isBoxClicked) {
    // 상자가 선택되었음을 표시
    setIsOverlayVisible(true);

    // 선택된 상자 번호를 localStorage에 저장
    let selected = localStorage.getItem('selected') || [];
    selected = JSON.parse(selected)
    selected.push(boxNumber)
    localStorage.setItem('selected', JSON.stringify(selected));

    // 백분율 계산
    const totalCount = selected.length;
    const updatedRatio = [...selectedRatio]; // 이전 selectedRatio 배열을 복제하여 새로운 배열 생성
    updatedRatio.forEach((ratio, index) => {
      const countOfBox = selected.filter(item => item === index).length; 
      updatedRatio[index] = Math.round((countOfBox / totalCount) * 100); // 해당 인덱스의 백분율을 계산하여 업데이트
    });
    setSelectedRatio(updatedRatio);
    // 상자 클릭 여부 업데이트
    setIsBoxClicked(true); }
  };

  //비동기 처리 확인용
  useEffect(() => {
    console.log(selectedRatio);
  }, [selectedRatio]);


  return(
    <div>
      <div className={styles.total}>
        <div className={styles.container}>
          <div className={styles.paper}>
            <img src={paper} alt="no paper img" />
            <div className={styles.bigBox}>
              <div className={styles.title}>Which Wonbin do you like the most?</div>
              <div className={styles.p1}><p>최애 원빈이의 컨셉 하나를 선택해주세요.</p></div>
              <div className={styles.p2}><p>※하나만 선택 가능하며 한 번 누르면 다시 되돌릴 수 없습니다.</p></div>
    
              <div className={styles.cardbox}>
                <div className={`${styles.box} ${styles.box1}`} onClick={() => handleBoxClick(1)}>
                  <span>siren</span>
                  <img className={styles.sirenimg} src={sirenwb} alt="sirenimg"/>
                  {/* 클릭시 overlayBox와 텍스트를 표시 */}
                  {isOverlayVisible && (
                    <div className={`${styles.overlayBox}`} style={{ 
                      height: `${145*(selectedRatio[1]/100)}px`, // 높이를 선택된 비율을 145로 나눈 값으로 설정
                      marginTop: `${145 - 145*(selectedRatio[1]/100)}px` // marginTop을 120px에서 선택된 비율을 145로 나눈 값으로 설정
                      }}>
                      {selectedRatio[1]}%
                    </div>
                  )}
                </div>
    
                <div className={`${styles.box} ${styles.box2}`} onClick={() => handleBoxClick(2)}>
                  <span>memories</span>
                  <img className={styles.memoriesimg} src={memorieswb} alt="memoriesimg"/>
                  {isOverlayVisible && (
                    <div className={`${styles.overlayBox}`} style={{ 
                      height: `${145*(selectedRatio[2]/100)}px`, // 높이를 선택된 비율을 145로 나눈 값으로 설정
                      marginTop: `${145 - 145*(selectedRatio[2]/100)}px` // marginTop을 120px에서 선택된 비율을 145로 나눈 값으로 설정
                      }}>
                      {selectedRatio[2]}%
                    </div>
                  )}
                </div>
                <div className={`${styles.box} ${styles.box3}`} onClick={() => handleBoxClick(3)}>
                  <span>get a guitar</span>
                  <img className={styles.getaguitarimg} src={getaguitarwb} alt="getaguitarimg"/>
                  {isOverlayVisible && (
                    <div className={`${styles.overlayBox}`} style={{ 
                      height: `${145*(selectedRatio[3]/100)}px`, // 높이를 선택된 비율을 145로 나눈 값으로 설정
                      marginTop: `${145 - 145*(selectedRatio[3]/100)}px` // marginTop을 120px에서 선택된 비율을 145로 나눈 값으로 설정
                      }}>
                      {selectedRatio[3]}%
                    </div>
                  )}
                </div>
                <div className={`${styles.box} ${styles.box4}`} onClick={() => handleBoxClick(4)}>
                  <span>talk saxy</span>
                  <img className={styles.talksaxyimg} src={talksaxywb} alt="talksaxyimg"/>
                  {isOverlayVisible && (
                    <div className={`${styles.overlayBox}`} style={{ 
                      height: `${145*(selectedRatio[4]/100)}px`, // 높이를 선택된 비율을 145로 나눈 값으로 설정
                      marginTop: `${145 - 145*(selectedRatio[4]/100)}px` // marginTop을 120px에서 선택된 비율을 145로 나눈 값으로 설정
                      }}>
                      {selectedRatio[4]}%
                    </div>
                  )}
                </div>
                <div className={`${styles.box} ${styles.box5 }`} onClick={() => handleBoxClick(5)}>
                  <span>love 119</span>
                  <img className={styles.love119img} src={love119wb} alt="love119img"/>
                  {isOverlayVisible && (
                    <div className={`${styles.overlayBox}`} style={{ 
                      height: `${145*(selectedRatio[5]/100)}px`, // 높이를 선택된 비율을 145로 나눈 값으로 설정
                      marginTop: `${145 - 145*(selectedRatio[5]/100)}px` // marginTop을 120px에서 선택된 비율을 145로 나눈 값으로 설정
                      }}>
                      {selectedRatio[5]}%
                    </div>
                  )}
                </div>
                <div className={`${styles.box} ${styles.box6}`}>
                  <img className={styles.staricon} src={staricon} alt="staricon"/>
                </div>
              </div>
    
              <div className={styles.homeBtnMsg} onClick={()=>{navigate('/product')}}>
                <img src={homeBtnMsg} alt="no homeBtnMsg img" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default DetailLike