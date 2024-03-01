import React, { useEffect, useState } from 'react'
// firestore의 메서드 import
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase";
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
  const [arr, setArr] = useState();

  

  // async - await로 데이터 fetch 대기
  async function getTest() {
    // document에 대한 참조 생성
    const docRef = doc(db, "HBDWBDB", "wbdb321");
    // 참조에 대한 Snapshot 쿼리
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setArr(docSnap.data())
    }
  };
  
  // 최초 마운트 시에 getTest import
  useEffect(() => {
    getTest()
  }, [])

  //updateDoc(doc(db, "vote", "vote321"), { selected: [] }); //초기상태를 생성을 위한 코드
  
  //받아온 db객체 형식으로 출력하기
  console.log(arr)

  
  // 선택된 상자의 백분율을 계산하여 업데이트하는 함수
  const updateSelectedRatio = (selectedArray) => {
    const totalCount = selectedArray.length;
    const updatedRatio = Array(6).fill(0); // 0으로 초기화된 배열 생성

    // 선택된 상자 번호에 따라 백분율 계산
    selectedArray.forEach((boxNumber) => {
      updatedRatio[boxNumber] = Math.round((selectedArray.filter(item => item === boxNumber).length / totalCount) * 100);
    });

    setSelectedRatio(updatedRatio);
  };

  // 상자 클릭 이벤트 핸들러
  const handleBoxClick = async (boxNumber) => {
    // 한 번 클릭된 상자라면 클릭 이벤트를 무시
    if (isBoxClicked) return;

    setIsOverlayVisible(true); // 오버레이 표시

    // Firestore에서 선택된 배열 가져오기
    const selectedArray = arr.selected || [];
    
    // 선택된 상자 번호를 배열에 추가
    selectedArray.push(boxNumber);

    // Firestore에 선택된 배열 업데이트
    await updateDoc(doc(db, "HBDWBDB", "wbdb321"), { selected: selectedArray });

    // 선택된 상자의 백분율 계산하여 업데이트
    updateSelectedRatio(selectedArray);

     // 클릭 상태를 true로 설정하여 더 이상 클릭되지 않도록 함
     setIsBoxClicked(true);
  };

  //비동기 처리 확인용
  // useEffect(() => {
  //   console.log(selectedRatio);
  // }, [selectedRatio]);


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