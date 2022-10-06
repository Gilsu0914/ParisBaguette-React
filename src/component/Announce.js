import react from 'react';

function Announce(){
  return (
    <>
      <div className="main-bg"></div>
      <div className='announContainer'>
        <div className="announcement">
          <h2>NOTICE</h2>
          <ul>
            <li>
              <p>네이버페이 제휴 포인트 적립서비스 안내</p>
              <span>2022–09-25</span>
            </li>
            <li>
              <p>KTX특송 배송제한으로 인한 배송불가지역 안내</p>
              <span>2022–09-02</span>
            </li>
            <li>
              <p>코레일 수화물센터 파업으로 인한 긴급안내</p>
              <span>2022-09-23</span>
            </li>
            <li>
              <p>순우유케이크 가격 인상안내</p> <span>2022-08-28</span>
            </li>
            <li>
              <p>상반기 배송 이벤트 당첨자 발표</p>
              <span>2022-08-25</span>
            </li>
            <li>
              <p>용인 수화물센터 운영종료 및 갱신</p>
              <span>2022-07-14</span>
            </li>
            <li>
              <p>KTX특송 이용 및 수화물센터 운영종료 및 갱신</p>
              <span>2022-06-10</span>
            </li>
            <li>
              <p>배송시간 변경안내 및 추가 배송불가지역 안내</p>
              <span>2022-06-08</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Announce;