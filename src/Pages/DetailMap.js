import React from 'react'
import '../style/detailMap.css'
import riizebarcode from '../asset/riizebarcode.png'

function DetailMap() {
  return(
    <div>
      <div className='total_detailmap'>
        <div className="container_detailmap"> 
          <span className="star star1">★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>        
          <div className='title_detailmap'>Wonbin's birthday <br/> cafe map </div>
          <span className="star star2">★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
          <div className='rectangle'/>
          <span className="star star3">★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆ - - ★ - - ☆</span>
          <div className='textcontainer'>
            <div className='flexcontainer'>
              <span className='text'>국내에 있는 원빈 생일 카페 한정으로 지도에 표시됩니다.</span>
              <span className='text'>지도 외에 다른 카페가 있다면 다음의 메일로 알려주시면 감사하겠습니다.</span>
              <span className='text'>yeonju9623@naver.com</span>
            </div>
          </div>
          <img className='barcode' src={riizebarcode} alt="barcode"/>
        </div>

      </div>
    </div>
  )
};

export default DetailMap