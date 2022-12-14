DEMO: 
https://gilsu0914.github.io/ <-url새로 갱신하기 


제작완성:
2022년 월 일

제작기간:
한 달


프로젝트설명:
리액트 프레임워크의 첫 발을 딛고 만든 작품입니다. 저는 처음에 리액트가 두려웠습니다. 자바스크립트도 잘 하지 못하는 내가 리액트를 배울 수 있을까? 하는 걱정이 있었습니다. 그러면서도 바닐라 자바스크립트와 일반적인 html로 만드는 쇼핑몰보다 훨씬 더 효율적이라는 리뷰를 듣고 리액트가 가진 장점이 궁금했습니다. 

궁금함으로 시작된 이 사이트제작으로 얻은 느낀점은 2가지 입니다. 
첫번 째는 지금도 미숙하지만 부족했던 자바스크립트의 기초를 더 다지게 해주는 계기가 되었습니다. 기초가 부족하니 수도코드조차 하지 못한 저에게 기초다지기에 많은 도움을 주었습니다.
두번 째는 '이것저것 배웠으니 예쁜 사이트를 만들 수 있겠다.' 의 생각방식에서 '오류가 났는데 어떻게 해결하면 될까?, '이것보다 더 나은 코드는 없을까?, '어떻게 코드를 작성해야 내가 생각하는 동작이 구현될까?', '모르면 정말 시간이 걸리더라도 계속 찾아보자'로 바뀌는 정말정말 큰 계기가 되었습니다.
 

쇼핑몰을 제작할 때 사용한 리액트의 기술은 다음과 같습니다.
state의 재사용성
component로 반복되는 부분을 정리
router,Link 등 SPA로 업데이트가 필요한 부분만 지정해주기
렌더링으로 조절하는 useEffect
렌더링 예외와 DOM에 쉽게 접근하게 도와주는 useRef
redux-toolkit으로 장바구니에 상품담기로 쇼핑몰사이트를 구현해 보았습니다.



사용기술:
HTML
CSS
MEDIAQUERY
JAVASCRIPT
REACT



Feature:
    * 왜 이 기술을 사용하게 되었는가?
    * 이 기술은 어떠한 장점이 있는가?
    * 이 기술을 사용해서 어떤 문제를 해결할 수 있었는가?


reactRouter, useEffect, localStorage 등을 이용.


1.redux-toolkit을 이용하여 장바구니에 담긴 상품의 수량변경, 삭제 기능구현을 했습니다.
2.최근본 상품 기능구현
2.라이브러리가 아닌 리액트만으로 캐로셀을 구현했습니다. 이 캐로셀이 제작기간 내 가장 어려웠습니다. 편한 라이브러리를 놔두고 직접 만들어 보고 싶은 욕심이 발현되어 도전했습니다. 초당 움직임을 구현하는데 필요한 useEffect로 조절을 해주었고, 움직여질 각각의 해당요소들을 품어주고 있는 container요소에 translate값을 변경해주고 싶어 useRef를 부여해 주었습니다.
3.진짜로 우편번호 기능을 넣어보고 싶었습니다. 다음우편번호 서비스가 무료인 것을 이용하여 Modal을 띄워 주소지를 최종선택하면 그대로 인풋에 넣어주었습니다.



아쉬운 점:
1. 장바구니에 담긴 상품들은 redux에서 제어를 해주는 상태입니다. 웹브라우저 새로고침 과정에서 발생하는 렌더링초기화로 인해 담긴 상품이 전부 삭제되는 문제점을 해결하지 못했습니다. 이 때 서버에서 주고받는 상황이었다면 어떻게 했을까라는 생각을 했습니다. 서버와 협업을 통한 구현을 이루어 본 적이 없어 고민이 많이 되는 시점이었습니다.

2. 제품상세 페이지에서 이미 장바구니에 담은 상품들은 또 추가하기 위해 버튼을 누를 시 이미 상품이 담겨있다고 alert가 실행됩니다. 그러나 장바구니에 물건을 담고 장바구니 페이지로 넘어갔다가 다시 뒤로가기를 하여 제품상세페이지로 돌아와 버튼을 누른다면, 장바구니 안에 기존 동일상품이 담겨 있음에도 배열에 새로운 오브젝트로 추가가 됩니다. 단순히 함수를 주문하기를 눌렀을 때 count의 증가에 따라 다르게 작성한 if문으로 발생된 문제라고 생각합니다. 따라서 동일한 상품이 리스트에 따로 담기게 되는 문제점이 발생합니다.

3. 움직이는 캐로셀이 메인페이지에서는 정상적으로 작동하지만 제품상세페이지로 넘어가는 순간에도 계속 렌더링이 멈추지 않은채 console창에 property of null 을 경고로 띄웁니다. 

4. 분명 실무에서는 브랜치파일도 많이 만들것입니다. html 시멘틱마크업을 준수하게 적는 것, 또한 css의 일관성있는 코딩작성이 굉장히 중요하다는 것을 너무 뒤늦게 알았습니다. 프로젝트를 만들기에 급급한 나머지 신경쓰지 않던 부분이었습니다.

5. 컴포넌트를 더 많이 활용해 지금보다 한참 더 보기 쉽고 깔끔하게 만들 수가 있었다! 였습니다. 사실 이 점 또한 프로젝트를 만들고 난 뒤 리액트를 더 복습하며 알게 된 사실입니다. 정리된 컴포넌트들은 그렇지 않은 경우보다 더욱 가시성이 좋고 코드를 읽기 좋은 환경을 유지해준 다는 점을 너무 안일하게 생각했습니다.