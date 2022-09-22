import react, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import store, { addItem } from './../store';



function Detail({pang, chief}){
  
  useEffect(()=>{
    let storage = JSON.parse(sessionStorage.getItem('watched'));
    storage.unshift(pang[id].id);
    storage = new Set(storage); //배열의 중복을 제거
    storage = Array.from(storage); //다시 배열화. 근데 이거 윗줄에서 작성할 때 애초에 [...new Set(storage)] 이렇게 하면 안되나?...
    sessionStorage.setItem('watched', JSON.stringify(storage));

    let timer = setTimeout(()=>{ setNotice(false) },10000); 
    return ()=>{//useEffect보다 먼저 실행
      clearTimeout(timer);
    }
  },[]);

  let {id} = useParams();//유저가 url파라미터에 입력한 것을 가져오려면 useParams()
  let idSynchro = pang.find((pang)=>{
    return pang.id == id
  });
  let [notice,setNotice] = useState(true);
  let [countNum, setCountNum] = useState(1);
  let [totalPrice, setTotalPrice] = useState(idSynchro.price);
  let [index, setIndex] = useState(0);
  
  let dispatch = useDispatch();

  return (
    <div className="Detail">
      <h2 className='componentHead'>제품상세</h2>
      <div className="upDetail">
        <div className="imgContainer">
          <img className="detailImage" src={process.env.PUBLIC_URL + pang[id].image}/>
        </div>
        <div className="description">
          <h1>{idSynchro.title}</h1>
          <h4>{idSynchro.content}</h4>
          <p>판매가격: {idSynchro.price.toLocaleString('ko-KR')}원</p>
          <p className="desLine desLine1"></p>
          <h4 className="allergy">알레르기 정보</h4>
          <p>본 제품은 {idSynchro.allergy} 함유 제품입니다.</p>
          <p className="desLine desLine2"></p>
          <button className='plusCount' onClick={()=>{ //올림버튼
            ++ countNum;
            setCountNum(countNum);
            let plusPrice = countNum * idSynchro.price;
            setTotalPrice(plusPrice);
          }}> ↑ </button> 
          <span className='count'>{countNum}개</span> {/*갯수*/}
          <button className='minusCount' onClick={()=>{ //내림버튼
            if(countNum > 1){
              let plusPrice = countNum * idSynchro.price;
              let minusPrice = plusPrice - idSynchro.price;
              setTotalPrice(minusPrice);
              -- countNum;
              setCountNum(countNum);
            }
            else if(countNum = 1){
              return 1;
            }
          }}> ↓ </button>
          <span className='totalPrice'>금액: {totalPrice.toLocaleString('ko-KR')}원</span> {/* 담은금액 */}
          <p>
            <button className="orderBtn" onClick={() => { //장바구니에 담기 버튼
              if(countNum >= 1){
                if(index == 1){
                return alert('기존상품이 이미 장바구니 안에 있습니다.')
                }
                else if(index == 0){
                dispatch(addItem( {id: `${idSynchro.id}`, title: `${idSynchro.title}`, count: countNum, price: `${idSynchro.price}`,totalPrice: totalPrice, image: `${idSynchro.image}`}));
                alert('상품이 장바구니에 담겼습니다.');
                setIndex(1);
                }
              }
            }}>장바구니</button>
          </p>
          {
            notice == true ?
            <p className="notice">🎁 곧 사라져요~! 지금 주문시 사은품포함 <span>배송!</span></p>
            : <p className="noticeOff">🎁 곧 사라져요~ 지금 주문시 사은품포함 <span>베송!</span></p>
          }
        </div>
      </div>
      <div className="underDetail">
        <div className="review">
          <h2>원산지 정보를 확인하세요.</h2>
          <p>{idSynchro.resource}</p>
        </div>
        <div className="nutrition">
          <table>
            <thead>
              <tr>
                <th className='leftNutriTitle'>1회 영양성분</th>
                <th className='rightNutriTitle'>100g당</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='leftNutri'>칼로리</th>
                <th className='rightNutri'>{idSynchro.kcal}kcal</th>
              </tr>
              <tr>
                <th className='leftNutri'>나트륨</th>
                <th className='rightNutri'>{idSynchro.sodium}mg</th>
              </tr>
              <tr>
                <th className='leftNutri'>당류</th>
                <th className='rightNutri'>{idSynchro.sugars}g</th>
              </tr>
              <tr>
                <th className='leftNutri'>포화지방</th>
                <th className='rightNutri'>{idSynchro.fat}g</th>
              </tr>
              <tr>
                <th className='leftNutri'>단백질</th>
                <th className='rightNutri'>{idSynchro.protein}g</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='heightLine'></div>
      <div className='recommend'>
        <h2>만드신 분들을 소개합니다.</h2>
        <div className="cardContainer">
          {
            chief.map((a, i) => {
              return(
                <Card chief={chief[i]}></Card>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

function Card({chief}){
  return (
    <div className="eachCard Chief">
      <img className='chiefImg' src={process.env.PUBLIC_URL + chief.image}/>
      <h4>{chief.name}</h4>
      <h5 className='state'>{chief.occupation}</h5>
      <p className='introduce'>{chief.introduction}</p>
    </div>
  )
};

export default Detail;