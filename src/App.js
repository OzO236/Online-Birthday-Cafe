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

function App() {
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
