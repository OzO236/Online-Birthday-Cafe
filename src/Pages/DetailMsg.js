import React, { useEffect, useState } from 'react';
import styles from '../style/detailMsg.module.css';
import Modal from './Modal';
import homeBtnMsg from '../asset/homeBtnMsg.svg';
import { useNavigate } from 'react-router-dom';

function DetailMsg() {

  const navigate = useNavigate();

  let [messages, setMessages] = useState([]);
  let [showModal, setShowModal] = useState(false);

  // LocalStorage에서 데이터 가져오기
  useEffect(()=>{
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  // 새로운 메시지를 추가
  const addMessage = (newMessage) => {
    let updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  return(
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.paper}>
  
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
  
        </div>
        
        <div className={styles.homeBtnMsg} onClick={()=>{navigate('/product')}}>
          <img src={homeBtnMsg} alt="no homeBtnMsg img" />
        </div>
      </div>
      {/* showModal이 true이면 <Modal />을 렌더링합니다.
        showModal이 false이면 <Modal />을 렌더링하지 않습니다. */}
      {showModal && <Modal addMessage={addMessage} onClose={() => setShowModal(false)} />}
    </div>
  )
};

function Box({ messages, setShowModal }) {


  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={styles.rect}>
          <div className={styles.txt}>{message}</div>
        </div>
      ))}
      <div className={styles.rect} onClick={()=>setShowModal(true)}>
        <div className={styles.txt}>+</div>
      </div>
    </>
  )
}

export default DetailMsg