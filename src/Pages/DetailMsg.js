import React, { useEffect, useState } from 'react';
import styles from '../style/detailMsg.module.css';
import Modal from './Modal';
import homeBtnMsg from '../asset/homeBtnMsg.svg';
import { useNavigate } from 'react-router-dom';
import paperImg from '../asset/paperMsg.png';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
import { db } from "../firebase"; //우리 DB임
// firestore의 메서드 import 이런식으로 필요한거 쓰면됨
import { doc, getDoc, setDoc } from 'firebase/firestore'; 

function DetailMsg() {

  const navigate = useNavigate();

  let [messages, setMessages] = useState([]);
  let [showModal, setShowModal] = useState(false);

  // 최초 마운트 시에 getTest import
  useEffect(() => {
    fetchData();
  }, []);


  // firebase에서 데이터 가져오기
  const fetchData = async () => {
    try {
      const docRef = doc(db, "messages", "messageData");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const messages = data.messages || []; // 데이터가 없는 경우 빈 배열로 설정
        setMessages(messages.map((message, index) => ({ index: index + 1, text: message })));
      } else {
        console.log("일치하는 document가 없습니다!");
      }
    } catch (error) {
      console.log("에러: ", error);
    }
  };

  // firebase에 데이터 추가하기
  const addMessage = async (newMessage) => {
    try {
      const docRef = doc(db, "messages", "messageData");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const updateMessages = [...(data.messages || []), newMessage]; // 데이터가 없는 경우 빈 배열로 시작
        await setDoc(docRef, { messages: updateMessages });
        console.log("성공적으로 데이터가 추가되었습니다!");
        fetchData(); // 추가 후 새로고침
      } else {
        console.log("일치하는 document가 없습니다!");
      }
    } catch (error) {
      console.log("에러: ", error);
    }
  };

  return(
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.paper}>
          <div className={styles.paperImg}>
            <img src={paperImg} alt="no paperImg" />

            <div className={styles.to}>
              <span className={styles.toText}>To.</span>
              <span className={styles.toName}>원빈</span>
            </div>
    
            <div className={styles.msgBox}>
              <Box messages={messages} addMessage={addMessage} setShowModal={setShowModal} />
            </div>
    
            <div className={styles.from}>
              <span className={styles.toText}>From.</span>
              <span className={styles.toName}>희주</span>
            </div>

            <div className={styles.homeBtnMsg} onClick={()=>{navigate('/product')}}>
              <img src={homeBtnMsg} alt="no homeBtnMsg img" />
            </div>
          </div>
  
  
        </div>
        
      </div>
      {/* showModal이 true이면 <Modal />을 렌더링합니다.
        showModal이 false이면 <Modal />을 렌더링하지 않습니다. */}
      {showModal && <Modal addMessage={addMessage} onClose={() => setShowModal(false)} />}
    </div>
  )
};

function Box({ messages, addMessage, setShowModal }) {
  return (
    <>
      {messages.map((message) => (
        <div key={message.index} className={styles.rect}>
          <div className={styles.txt}>{message.text}</div>
        </div>
      ))}
      <div className={styles.rect} onClick={() => setShowModal(true)}>
        <div className={styles.txt}>+</div>
      </div>
    </>
  );
}

export default DetailMsg