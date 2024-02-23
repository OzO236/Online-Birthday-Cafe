import React, { useState } from 'react';
import styles from '../style/detailMsg.module.css';

function DetailMsg() {
  return(
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.paper}>
  
          <div className={styles.to}>
            <span className={styles.toText}>To.</span>
            <span className={styles.toName}>원빈</span>
          </div>
  
          <div className={styles.msgBox}>
            <Box />
          </div>
  
          <div className={styles.from}>
            <span className={styles.toText}>From.</span>
            <span className={styles.toName}>희주</span>
          </div>
  
        </div>
      </div>
    </div>
  )
};

function Box() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.rect}>
        <div className={styles.txt}>원빈아 생일 축하해 아프지말고 우리 오래보자악</div>
      </div><div className={styles.rect}>
        <div className={styles.txt}>원빈아 생일 축하해 아프지말고 우리 오래보자악</div>
      </div>
      <div className={styles.rect} onClick={()=>setShowModal(true)}>
        <div className={styles.txt}>+</div>
      </div>
      {/* showModal이 true이면 <Modal />을 렌더링합니다.
        showModal이 false이면 <Modal />을 렌더링하지 않습니다. */}
      {showModal && <Modal show={showModal} onHide={() => setShowModal(false)} />}
    </>
  )
}

function Modal({show,onHide}) {
  return (
    <div style={{ display: {show} ? "block" : "none"}}>
      <div className={styles.modalBox}>
        <div className={styles.box}>
          <div className={styles.closeBoxBox} onClick={onHide}><div className={styles.closeBox}><p>X</p></div></div>
          <div className={styles.boxBox}>
            <div className={styles.title}><p>원빈이에게 하고 싶은 말을 써주세요!</p></div>
            <div className={styles.txtBox}>
              <input className={styles.txt} type="text" placeholder='최대 25자까지만 입력 가능합니다. (공백 포함)' />
            </div>
          </div>
          <div className={styles.submitBoxBox}><div className={styles.submitBox}><p>SUBMIT</p></div></div>
        </div>
      </div>
    </div>
  )
}

export default DetailMsg