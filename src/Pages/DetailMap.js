import React from 'react'
import { Map, MarkerClusterer, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styles from '../style/detailMap.module.css'
import riizebarcode from '../asset/riizebarcode.png'
import bgImg from '../asset/detailmap_bg.svg';
import homeBtnMsg from '../asset/homeBtnMsg.svg';
import { useNavigate } from 'react-router-dom';
import wbLocationImg from '../asset/wbLocationImg.png';

function DetailMap() {
    
  const navigate = useNavigate();
  
    const positions = [
      {
        title: "AC'SCENT",
        latlng: { lat: 37.5586293, lng: 126.9358752 }
      },
      {
        title: "미닝 더 갤러리",
        latlng: { lat: 37.5551787, lng: 126.9269313 }
      },
      {
        title: "폴링디저트",
        latlng: { lat: 37.5557262, lng: 126.9277707 }
      },
      {
        title: "카페 세화",
        latlng: { lat: 37.5634591, lng: 126.9222444 }
      },
      {
        title: "오디너리 아카이브",
        latlng: { lat: 37.5571714, lng: 126.9293432 }
      },
      {
        title: "카페 어싸이드",
        latlng: { lat: 37.5570267, lng: 126.9290549 }
      },
      {
        title: "러빈허 플라워카페",
        latlng: { lat: 37.5564146, lng: 126.9297939 }
      },
      {
        title: "하이디라오 홍대점",
        latlng: { lat: 37.5572099, lng: 126.9249716 }
      },
      {
        title: "다이버시티",
        latlng: { lat: 37.5554643, lng: 126.9245484 }
      },
      {
        title: "카페 이유",
        latlng: { lat: 37.5553563, lng: 126.9269105 }
      },
      {
        title: "카페몽글 핑크점",
        latlng: { lat: 37.5551903, lng: 126.9271989 }
      },
      {
        title: "카페니타",
        latlng: { lat: 37.5550479, lng: 126.9268168 }
      },
      {
        title: "카페몽글 하늘점",
        latlng: { lat: 37.554854, lng: 126.9269056 }
      },
      {
        title: "하이타운서울",
        latlng: { lat: 37.5550833, lng: 126.9276302 }
      },
      {
        title: "곰작",
        latlng: { lat: 37.5537671, lng: 126.929251 }
      },
      {
        title: "월페이퍼",
        latlng: { lat: 37.5541543, lng: 126.9161364 }
      },
      {
        title: "카페 소프",
        latlng: { lat: 37.5534774, lng: 126.9208631 }
      },
      {
        title: "카페 지금여기",
        latlng: { lat: 37.5527109, lng: 126.9212076 }
      },
      {
        title: "때때로꽃집",
        latlng: { lat: 37.5520483, lng: 126.9201152 }
      },
      {
        title: "하이럽",
        latlng: { lat: 37.5495618, lng: 126.9197207 }
      },
      {
        title: "모두다토끼",
        latlng: { lat: 37.5490127, lng: 126.9211896 }
      },
      {
        title: "100디그리",
        latlng: { lat: 37.5484664, lng: 126.922273 }
      },
      {
        title: "슈가허니",
        latlng: { lat: 37.548174, lng: 126.9214271 }
      },
      {
        title: "카페올가",
        latlng: { lat: 35.1472075, lng: 126.8535719 }
      },
      {
        title: "커피앤스토리",
        latlng: { lat: 35.2231413, lng: 128.7017895 }
      },
      {
        title: "카페벤",
        latlng: { lat: 35.0987545, lng: 129.0272987 }
      },
      {
        title: "베란다",
        latlng: { lat: 35.101786, lng: 129.0310661 }
      },
      {
        title: "스프링투썸머",
        latlng: { lat: 35.1563107, lng: 129.0640756 }
      },
      {
        title: "카페 비전문",
        latlng: { lat: 35.1543312, lng: 129.0637847 }
      },
      {
        title: "호야팡야",
        latlng: { lat: 35.151991, lng: 129.0663397 }
      },
      {
        title: "타임슬래시",
        latlng: { lat: 35.1485003, lng: 129.067241 }
      },
      {
        title: "베리얼즈",
        latlng: { lat: 35.5514215, lng: 129.2953337 }
      },
      {
        title: "카페 데이즈",
        latlng: { lat: 35.8720677, lng: 128.5955256 }
      },
      {
        title: "퐁당 명덕점",
        latlng: { lat: 35.8555098, lng: 128.5897864 }
      },
      {
        title: "세모네모",
        latlng: { lat: 36.3291389, lng: 127.425605 }
      },
      {
        title: "폴라스튜디오 서울압구정점",
        latlng: { lat: 37.5256897, lng: 127.0379998 }
      },
      {
        title: "카페라임 소품샵",
        latlng: { lat: 37.5376388, lng: 127.0665507 }
      },
      {
        title: "아이오쓰리 성수사거리점",
        latlng: { lat: 37.5416286, lng: 127.0631357 }
      },
      {
        title: "아이오쓰리 에이스하이엔드점",
        latlng: { lat: 37.5401282, lng: 127.0566729 }
      },
      {
        title: "Bermuda music salon",
        latlng: { lat: 37.5392698, lng: 127.0540652 }
      },
      {
        title: "오브유",
        latlng: { lat: 37.5429938, lng: 127.0454871 }
      },
      {
        title: "카페서울숲 언더스탠드에비뉴점",
        latlng: { lat: 37.5436067, lng: 127.0436433 }
      },
      {
        title: "카페 투스프링",
        latlng: { lat: 37.5468332, lng: 127.046838 }
      },
      {
        title: "마모아띠에",
        latlng: { lat: 37.5459008, lng: 127.0491401 }
      },
      {
        title: "웜히어",
        latlng: { lat: 37.5483745, lng: 127.0488786 }
      }
    ]

  return (
    <div>
      <div className={styles.total}>
        <div className={styles.container}> 
          <div className={styles.bgImg}>
            <img src={bgImg} alt="no bgImg" />
            
            <div className={styles.bigBox}>
              <span className={`${styles.star} ${styles.star1}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>        
              <div className={styles.title}>Wonbin's birthday <br/> cafe map </div>
              <span className={`${styles.star} ${styles.star2}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
              <div className={styles.rectangle}>
                <Map 
                  // 지도의 중심좌표
                  center={{
                    lat: 37.5642135,
                    lng: 127.0016985,
                  }}
                  // 지도의 크기
                  style={{
                    width: "100%",
                    height: "395px",
                    borderRadius: '7px'
                  }}
                  // 지도의 확대 레벨(기존3)
                  level={15}
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
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'-3px'}}>
                      <div className={styles.speech}>
                        <span style={{fontFamily: 'Suite-Light', fontSize: '10px', display: 'block', margin:'3px'}}>{position.title}</span>
                      </div>
                    <img src={wbLocationImg} alt="이미지" style={{width: '40px', height:'auto', marginTop:'3px'}}/>
                    </div>
                  </CustomOverlayMap>
                    
                  ))}
                  </MarkerClusterer>
                </Map>
              </div>
              <span className={`${styles.star} ${styles.star3}`}>★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
              <div className={styles.textcontainer}>
                <div className={styles.flexcontainer}>
                  <span className={styles.text}>29일까지 올라온 국내에 있는 원빈 생일 카페 한정으로 지도에 표시됩니다.</span>
                  <span className={styles.text}>자세한 이벤트 기간 및 안내사항은 해당 카페 참고 부탁드립니다.</span>
                  <span className={styles.text}>문의는 트위터 계정 @vvozo32로 부탁드립니다.</span>
                </div>
              </div>
              <div className={styles.barcodeImg}><img className={styles.barcode} src={riizebarcode} alt="barcode"/></div>
            </div>
          </div>
        </div>

        <div className={styles.homeBtnMsg} onClick={()=>{navigate('/product')}}>
          <img src={homeBtnMsg} alt="no homeBtnMsg" />
        </div>
      </div>
    </div>
  );
}


export default DetailMap