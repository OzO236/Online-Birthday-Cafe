// import React, { useEffect, useState } from 'react';
// import styles from '../style/detailMsg.module.css';
// import Modal from './Modal';
// import homeBtnMsg from '../asset/homeBtnMsg.svg';
// import { useNavigate } from 'react-router-dom';
// import paperImg from '../asset/paperMsg.png';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// function DetailMsg() {

//   const navigate = useNavigate();

//   let [messages, setMessages] = useState([]);
//   let [showModal, setShowModal] = useState(false);

//   // firebase 사용 초기 설정
//   useEffect(() => {
//     firebase.initializeApp({
//       apiKey: "YOUR_API_KEY",
//       authDomain: "YOUR_AUTH_DOMAIN",
//       projectId: "YOUR_PROJECT_ID"
//     });
//     fetchData(); // 초기 데이터 가져오기
//   }, []);

//   // firebase에서 데이터 가져오기
//   const fetchData = () => {
//     firebase.firestore().collection("messages")
//     .doc("messageData")
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         const data = doc.data();
//         setMessages(data.messages);
//       } else {
//         console.log("일치하는 document가 없습니다!");
//       }
//     })
//     .catch((error) => {
//       console.log("에러: ", error);
//     });
//   };

//   // firebase에 데이터 추가하기
//   const addMessage = (newMessage) => {
//     const updateMessages = [...messages, newMessage];
//     firebase.firestore().collection("messages")
//     .doc("messageData")
//     .set({ messages: updateMessages })
//     .then(() => {
//       console.log("성공적으로 데이터가 추가되었습니다!");
//       fetchData();  // 추가 후 새로고침
//     })
//     .catch((error) => {
//       console.log("에러: ", error);
//     });
//   };

//   return(
//     <div className={styles.container}>
//       <div className={styles.frame}>
//         <div className={styles.paper}>
//           <div className={styles.paperImg}>
//             <img src={paperImg} alt="no paperImg" />

//             <div className={styles.to}>
//               <span className={styles.toText}>To.</span>
//               <span className={styles.toName}>원빈</span>
//             </div>
    
//             <div className={styles.msgBox}>
//               <Box messages={messages} addMessage={addMessage} setShowModal={setShowModal} />
//             </div>
    
//             <div className={styles.from}>
//               <span className={styles.toText}>From.</span>
//               <span className={styles.toName}>희주</span>
//             </div>

//             <div className={styles.homeBtnMsg} onClick={()=>{navigate('/product')}}>
//               <img src={homeBtnMsg} alt="no homeBtnMsg img" />
//             </div>
//           </div>
  
  
//         </div>
        
//       </div>
//       {/* showModal이 true이면 <Modal />을 렌더링합니다.
//         showModal이 false이면 <Modal />을 렌더링하지 않습니다. */}
//       {showModal && <Modal addMessage={addMessage} onClose={() => setShowModal(false)} />}
//     </div>
//   )
// };

// function Box({ messages, setShowModal }) {
//   return (
//     <>
//       {messages.map((message, index) => (
//         <div key={index} className={styles.rect}>
//           <div className={styles.txt}>{message}</div>
//         </div>
//       ))}
//       <div className={styles.rect} onClick={()=>setShowModal(true)}>
//         <div className={styles.txt}>+</div>
//       </div>
//     </>
//   )
// }

// export default DetailMsg