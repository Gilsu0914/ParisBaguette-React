import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'; 
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import data from './data';
import data2 from './data2';
import chiefdata from './chiefdata';

import Slider from './component/Slider';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Announce from './component/Announce';
import Footer from './component/Footer';
import Quick from './component/Quick';



function App() {

  //sessionStorage
  let storage = JSON.parse(sessionStorage.getItem('watched'))
  useEffect(()=>{
    //sessionStorage
    if(storage == null){
      sessionStorage.setItem('watched', JSON.stringify([ ]))
    }
  },[]);

  //캐로셀
  let slideRef = useRef();
  let [slideCount, setSlideCount] = useState(1)
  const handleSlider = slideCount =>{
    if(slideCount === 4){
      slideRef.current.style.transform = 'translateX(0)';
    }else{
      slideRef.current.style.transform = `translateX( -${25 * slideCount}%)`;
    }
  };
  useEffect(()=>{
    //캐로셀 4초마다 동작
    const interval = setTimeout(()=>{
      setSlideCount(()=>{
        if(slideCount < dataSlider.length){
          setSlideCount(slideCount + 1);
        }else{
          setSlideCount(1);
        }
      });
      handleSlider(slideCount); 
    }, 4000);
    //클리어
    return()=> {
      clearTimeout(interval);
    } 
  },[slideCount]);

  //페이지전환시 스크롤초기화
  const scrollToTop = ()=>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })}

  //데이터
  let [pang, setPang] = useState(data);
  let [dataSlider, setDataSlider] = useState(data2);
  let [chief,setChief] = useState(chiefdata);

  let [count, setCount] = useState(0);
  let [more, setMore] = useState(12);
  let [tab,setTab] = useState(0);
  let [moreNum, setMoreNum] = useState(1);

  let navigate = useNavigate();
  


  return (
    <div>
      <div className="navContainer">
        <div className="innerNav">
          <p className="home" onClick={() => { navigate("/")}}>
            Un Bouquet De Lavande
          </p>
          <ul>
            <li>로그인</li>
            <Link className="menuList" to="/cart"><li>장바구니</li></Link>
          </ul>
          <div className="iconArea">
            <img className="logIn" src={process.env.PUBLIC_URL + "/avatar.png"}/>
            <Link to="/cart"><img className="cartIcon" src={process.env.PUBLIC_URL + "/cart.png"}/></Link>
          </div>
        </div>
      </div>
      <div className="main-bg"></div>
      <Routes>
        <Route path="/" element={
            <div className="MainShowCase">
              <Slider dataSlider={dataSlider} slideRef={slideRef} slideCount={slideCount} setSlideCount={setSlideCount}z   handleSlider={handleSlider}/>
              <div className="pangMenu">
                <h2>OUR PRODUCTS</h2>
                <ul>
                  <li onClick={() => { setTab(0) }}>ALL</li>
                  <li onClick={() => { setTab(1) }}>BREAD</li>
                  <li onClick={() => { setTab(2) }}>CAKE</li>
                  <li onClick={() => { setTab(3) }}>DESERT</li>
                  <li onClick={() => { setTab(4) }}>SALAD</li>
                </ul>
              </div>
              {
                tab == 0 ? //전체상품
                <div>
                  <div className="cardContainer">
                    {
                      pang.map((data, i) => {
                        if(i < more){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                          </Link>
                        )
                        }
                    })}
                  </div>
                  <div className="moreBtnContainer">
                    <button
                      className="moreBtn"
                      onClick={() => { {/* 더보기버튼 */}
                        setCount(++count);
                        if (count == 1) {
                          setMore(24)
                          setMoreNum(2)
                        } else if (count == 2) {
                          setMore(36)
                          setMoreNum(3)
                        } else if (count == 3) {
                          setMore(40)
                          setMoreNum(4)
                        } else {
                          alert("더이상 상품이 없습니다.");
                        }
                      }}
                    >MORE {moreNum} / 4</button>
                  </div>
                </div>
                : null
              }
              {
                tab == 1 ? //빵 샌드위치
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'bread'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              {
                tab == 2 ? //케이크
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'cake'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              {
                tab == 3 ? //디저트
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'desert'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              {
                tab == 4 ? //샐러드
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'salad'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              <div className='recentView'>
                <h2>RECENTLY VIEWED ITEMS</h2>
                <div>
                { //최근 본 상품
                  storage !== null ?
                  storage.map((a,i)=>{
                    if(i < 4){
                    return (
                      <Link to={`/detail/${storage[i]}`} key={i}>
                        <img src={process.env.PUBLIC_URL + pang[storage[i]].image} onClick={()=>{scrollToTop()}} />
                      </Link>
                    )}
                  })
                  :<p>최근 본 상품이 없습니다.</p>
                }
                </div>
              </div>
            </div>
        }/>
        <Route path="/detail/:id" element={<div><Detail pang={pang} setPang={setPang} chief={chief}/></div>}/>
        <Route path="/cart" element={<div><Cart /></div>}/>
        <Route path="*" element={<div className="page404"><h3>해당 페이지를 찾을 수 없습니다.</h3></div>}/>
      </Routes>

      <Announce/>
      <Footer/>
      <Quick scrollToTop={scrollToTop}/>
    </div>
  );
}

function Card({pang, scrollToTop}){
  return (
    <div className="eachCard Product" onClick={()=>{scrollToTop();}}>
      <div className="photo">
        <img src={process.env.PUBLIC_URL + pang.image} />
      </div>
      <p className='minidesc'>{pang.title}</p>
      <p className='minidesc'>{pang.price.toLocaleString('ko-KR')}원</p>
    </div>
  )
};


export default App;