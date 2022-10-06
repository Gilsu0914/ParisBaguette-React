import './App.css';
import {useState, useEffect} from 'react'; 
import {Routes, Route} from 'react-router-dom';

import data from './data';
import chiefdata from './chiefdata';

import Nav from './component/Nav';
import Slider from './component/Slider';

import MainShowCase from './component/MainShowCase';
import Detail from './component/Detail';
import Cart from './component/Cart';

import Parallels from './component/Parallels';
import Announce from './component/Announce';
import Footer from './component/Footer';
import Quick from './component/Quick';


function App() {


  //데이터들
  const [pang, setPang] = useState(data);
  const [chief,setChief] = useState(chiefdata);

  //페이지전환시 스크롤초기화
  const scrollToTop = ()=>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })}

  //sessionStorage window.onload되자마자 해주는 것이 안전
  let storage = JSON.parse(sessionStorage.getItem('watched'))
  useEffect(()=>{
    //sessionStorage
    if(storage == null){
      sessionStorage.setItem('watched', JSON.stringify([ ]))
    }
  },[]);
  

  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<div><Slider/><MainShowCase storage={storage} pang={pang} chiefdata={chiefdata} scrollToTop={scrollToTop} /></div>}/>
        <Route path="/detail/:id" element={<div><Detail pang={pang} setPang={setPang} chief={chief}/></div>}/>
        <Route path="/cart" element={<div><Cart /></div>}/>
        <Route path="*" element={<div className="page404"><h3>해당 페이지를 찾을 수 없습니다.</h3></div>}/>
      </Routes>

      <Announce/>
      <Footer/>
      <Quick scrollToTop={scrollToTop}/>
    </>
  );
}
export default App;


