import React from 'react'
import '../style/detailLike.css'
import sirenwb from '../asset/sirenwb.png'
import memorieswb from '../asset/memorieswb.png'
import getaguitarwb from '../asset/getaguitarwb.png'
import talksaxywb from '../asset/talksaxywb.png'
import love119wb from '../asset/love119wb.png'
import staricon from '../asset/staricon.png'

function DetailLike() {
  return(
    <div>
      <div className='total_detaillke'>
        <div className="container_detaillke">
          <div className="title_detaillke">Which Wonbin do you like <br/> the most?</div>
          <div className='p1'><p>최애 원빈이의 컨셉 하나를 선택해주세요.</p></div>
          <div className='p2'><p>※하나만 선택 가능하며 한 번 누르면 다시 되돌릴 수 없습니다.</p></div>

          <div className='cardbox'>
            <div className='box box1'>
              <span>siren</span>
              <img className='sirenimg' src={sirenwb} alt="sirenimg"/>
            </div>
            <div className='box box2'>
              <span>memories</span>
              <img className='memoriesimg' src={memorieswb} alt="memoriesimg"/>
            </div>
            <div className='box box3'>
              <span>get a guitar</span>
              <img className='getaguitarimg' src={getaguitarwb} alt="getaguitarimg"/>
            </div>
            <div className='box box4'>
              <span>talk saxy</span>
              <img className='talksaxyimg' src={talksaxywb} alt="talksaxyimg"/>
            </div>
            <div className='box box5'>
              <span>love 119</span>
              <img className='love119img' src={love119wb} alt="love119img"/>
            </div>
            <div className='box box6'>
              <img className='staricon' src={staricon} alt="staricon"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default DetailLike