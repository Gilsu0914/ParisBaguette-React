import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from './Card.js';

const MainShowCase = ({storage, pang, scrollToTop})=>{

  let [count, setCount] = useState(0);
  let [more, setMore] = useState(12);
  let [tab,setTab] = useState(0);
  let [moreNum, setMoreNum] = useState(1);


  return (
    <div className="MainShowCase">
      <div className="pangMenu">
        <h2>OUR PRODUCTS</h2>
        <p>
          상세페이지에서 제품별 영양성분/알레르기 정보를 확인하실 수 있습니다.
        </p>
        <ul>
          <li
            onClick={() => {
              setTab(0);
            }}
          >
            ALL
          </li>
          <li
            onClick={() => {
              setTab(1);
            }}
          >
            BREAD
          </li>
          <li
            onClick={() => {
              setTab(2);
            }}
          >
            CAKE
          </li>
          <li
            onClick={() => {
              setTab(3);
            }}
          >
            DESERT
          </li>
          <li
            onClick={() => {
              setTab(4);
            }}
          >
            SALAD
          </li>
        </ul>
      </div>
      {tab == 0 ? ( //전체상품
        <div>
          <div className="cardContainer">
            {pang.map((data, i) => {
              if (i < more) {
                return (
                  <Link to={`/detail/${i}`} key={i}>
                    <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                  </Link>
                );
              }
            })}
          </div>
          <div className="moreBtnContainer">
            <button
              className="moreBtn"
              onClick={() => {
                {
                  /* 더보기버튼 */
                }
                setCount(++count);
                if (count == 1) {
                  setMore(24);
                  setMoreNum(2);
                } else if (count == 2) {
                  setMore(36);
                  setMoreNum(3);
                } else if (count == 3) {
                  setMore(40);
                  setMoreNum(4);
                } else {
                  alert("더이상 상품이 없습니다.");
                }
              }}
            >
              MORE {moreNum} / 4
            </button>
          </div>
        </div>
      ) : null}
      {tab == 1 ? ( //빵 샌드위치
        <div>
          <div className="cardContainer">
            {pang.map((data, i) => {
              if (data.sort == "bread") {
                return (
                  <Link to={`/detail/${i}`} key={i}>
                    <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      ) : null}
      {tab == 2 ? ( //케이크
        <div>
          <div className="cardContainer">
            {pang.map((data, i) => {
              if (data.sort == "cake") {
                return (
                  <Link to={`/detail/${i}`} key={i}>
                    <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      ) : null}
      {tab == 3 ? ( //디저트
        <div>
          <div className="cardContainer">
            {pang.map((data, i) => {
              if (data.sort == "desert") {
                return (
                  <Link to={`/detail/${i}`} key={i}>
                    <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      ) : null}
      {tab == 4 ? ( //샐러드
        <div>
          <div className="cardContainer">
            {pang.map((data, i) => {
              if (data.sort == "salad") {
                return (
                  <Link to={`/detail/${i}`} key={i}>
                    <Card pang={pang[i]} scrollToTop={scrollToTop}></Card>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      ) : null}
      <div className="recentView">
        <h2>RECENTLY VIEWED ITEMS</h2>
        <div>
          {
            //최근 본 상품
            storage == null ?
            <p> 최근 보신 상품이 아직 없습니다.</p>
            : (
              storage.map((a, i) => {
                if (i < 4) {
                  return (
                    <Link to={`/detail/${storage[i]}`} key={i}>
                      <img
                        src={process.env.PUBLIC_URL + pang[storage[i]].image}
                        onClick={() => {
                          scrollToTop();
                        }}
                      />
                    </Link>
                  );
                }
              })
            )
          }
        </div>
      </div>
    </div>
  );
}
export default MainShowCase;