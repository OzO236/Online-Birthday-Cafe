// import React, { useState } from "react";
// import styles from '../style/detailMsg.module.css';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// function Modal({ addMessage, onClose }) {

//   let [inputValue, setInputValue] = useState('');

//   const handleSubmit = () => {
//     if (inputValue.trim() !== '') {
//       addMessage(inputValue);
//       setInputValue('');
//       onClose();
//     }
//   }

//   return (
//     <div>
//       <div className={styles.modalBox}>
//         <div className={styles.box}>
//           <div className={styles.closeBoxBox} onClick={onClose}>
//             <div className={styles.closeBox}>
//               <p>X</p>
//             </div>
//           </div>
//           <div className={styles.boxBox}>
//             <div className={styles.title}>
//               <p>원빈이에게 하고 싶은 말을 써주세요!</p>
//             </div>
//             <div className={styles.txtBox}>
//               <input 
//                 className={styles.txt} 
//                 type="text" 
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder='최대 25자까지만 입력 가능합니다. (공백 포함)'
//                 maxLength={25}
//               />
//             </div>
//           </div>
//           <div className={styles.submitBoxBox}>
//             <div className={styles.submitBox} onClick={handleSubmit}>
//               <p>SUBMIT</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal;