import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Intro from './Pages/Intro';
import Product from './Pages/Product';
import DetailKiring from './Pages/DetailKiring';
import Making from './Pages/Making';
import Res from './Pages/Res';
import DetailMsg from './Pages/DetailMsg';
import DetailLike from './Pages/DetailLike';
import DetailMap from './Pages/DetailMap';
import { useEffect } from 'react';

function App() {

    //사이트 접속시 마다 검사해서 selected 리스트가 없을때만 새롭게 생성
    //투표 번호를 담을 selected 배열 생성 
    useEffect(()=>{
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) == 'selected'){
          
        } else {
          localStorage.setItem('selected', JSON.stringify([]))
        }
      }
    }, [])


  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Intro/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/detailKiring' element={<DetailKiring/>}>
          <Route path='making' element={<Making/>}/>
          <Route path='res'element={<Res/>}/>
        </Route>
        <Route path='/detailMsg' element={<DetailMsg/>}></Route>
        <Route path='/detailLike' element={<DetailLike/>}></Route>
        <Route path='/detailMap' element={<DetailMap/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
