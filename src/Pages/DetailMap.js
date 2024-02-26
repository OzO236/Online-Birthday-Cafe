import React from 'react'
import { Map, MarkerClusterer, CustomOverlayMap } from 'react-kakao-maps-sdk';

import styles from '../style/detailMap.module.css'
import riizebarcode from '../asset/riizebarcode.png'

function DetailMap() {
    
  
    const positions = [
      {
        title: "카카오",
        latlng: { lat: 33.450705, lng: 126.570677 },
      },
      {
        title: "생태연못",
        latlng: { lat: 33.450936, lng: 126.569477 },
      },
      {
        title: "텃밭",
        latlng: { lat: 33.450879, lng: 126.56994 },
      },
      {
        title: "근린공원",
        latlng: { lat: 33.451393, lng: 126.570738 },
      },
    ]

  return (
    <div>
      <div className={styles.total}>
        <div className={styles.container}> 
          <span className={`${styles.star} ${styles.star1}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>        
          <div className={styles.title}>Wonbin's birthday <br/> cafe map </div>
          <span className={`${styles.star} ${styles.star2}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
          <div className={styles.rectangle}>
            <Map 
              // 지도의 중심좌표
              center={{
                lat: 33.450701,
                lng: 126.570667,
              }}
              // 지도의 크기
              style={{
                width: "100%",
                height: "395px",
                borderRadius: '7px'
              }}
              // 지도의 확대 레벨(기존3)
              level={12}
            >
        
            <MarkerClusterer
                    averageCenter={true}
                    minLevel={10}
              >
                
              {positions.map((position, index) => (
                <CustomOverlayMap
                key={index}
                position={position.latlng}
              >
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'-3px'}}>
                  <div style={{border:'1px solid', backgroundColor:'#fff', borderRadius:'4px', padding: '0 5px', marginBottom:'3px', fontSize:'16px'}}>
                    <span>{position.title}</span>
                  </div>
                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" alt="이미지" style={{width: '20px', height:'auto'}}/>
                </div>
              </CustomOverlayMap>
                
              ))}
              </MarkerClusterer>
            </Map>
          </div>
          <span className={`${styles.star} ${styles.star3}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
          <div className={styles.textcontainer}>
            <div className={styles.flexcontainer}>
              <span className={styles.text}>국내에 있는 원빈 생일 카페 한정으로 지도에 표시됩니다.</span>
              <span className={styles.text}>지도 외에 다른 카페가 있다면 다음의 메일로 알려주시면 감사하겠습니다.</span>
              <span className={styles.text}>yeonju9623@naver.com</span>
            </div>
          </div>
          <img className={styles.barcode} src={riizebarcode} alt="barcode"/>
        </div>
      </div>
    </div>
  );
}


export default DetailMap