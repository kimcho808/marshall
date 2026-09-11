**"This is a portfolio project for educational purposes."**
* 이것은 교육(취업) 목적의 포트폴리오 프로젝트입니다.
# 09.07 / 파일 생성
* index.html 히어로, 1행 완성
## 수정해야할 것
* 유튜브 영상 다운로드 받아서 히어로 영상에 넣기
* 2행 애니메이션 부드럽게 움직일 수 있도록 수정하기
# 09.07
* 3행, 4행 제작
* 3행 swiper 가운데 정렬 'centeredSlides: true,'
## 수정해야할 것
* 3행 swiper 상품 가운데만 커지게 하기
# 09.08
* 4행 swiper 완성
    * swiper bar 만들 때 wrapper의 형제로 두기
    * swiper에 padding을 줘서 아래로 내려간 bar 보이게 하기
## 오류
* 2행 왼쪽 상자에 마우스를 올리면 글자가 나오면서 화면이 같이 움직임
    * div 안에 있는 자식들을 display가 아닌 position으로 자리를 잡았더니 해결됨
# 09.09
* 5행 완성
* 6행 레코드, 드럼 클릭 이벤트 진행 중
# 09.10
## 3행 상품 가운데만 커지게 하는 법
* CSS에서 `.swiper-slide.swiper-slide-active`쓰고 자식 이미지 잡아서 커지는 넓이 적기
* JS - swiper 플러그인 연결한 부분에 `slidesPerView: 'auto'`로 바꾸면 겹치지 않고 가운데 상품만 커짐
* 맞지 않는 부분은 position으로 위치 잡아주기
## 레코드, 드럼 6행처럼 아코디언 레이아웃 만드는 방법
* 레코드의 펼처진 부분과 접힌 부분을 만들어 div로 묶기 (드럼도 마찬가지)
* CSS로 디자인 주고 레코드와 드럼을 전체적으로 묶어주는 태그에 `width:max-content`, `display:flex`해서 전부 가로로 정렬하기
* JS에서 `const record = document.querySelectorAll('.marshall_g [class ^= record]');` 이렇게 레코드, 드럼 각각을 전부 잡아 변수로 만들기
* `for~of`로 드럼과 레코드 모두 안보이게 만든 다음`?[0]style.display`이런식으로 기존 디자인(레코드 내용, 드럼 닫아진 부분)만 보이게 만들기
* 클릭 이벤트를 만들어서 접힌 드럼을 누르면 어떤 것들이 숨겨지고 어떤 것이 나타나야하는지 적기
* 가로로 펼쳐지는 동작을 넣고 싶으면 기존에 솜겨져 있는 것을 display = 'none'이 아닌 `width ='0'`으로 숨겨 두고 `for~of`에서 숨긴 것을 `transition - 'width 0.5s'`이렇게 바꾸기
* 클릭 이벤트에 flex로 한것은 커지는 가로 넓이를 정확이 적어두기 `width:150px`
# 09.10
## swiper에서 loop를 걸지 않고 버튼 비활성화 막는 방법
* 버튼 태그에 `opacity: 1;`를 넣어 투명해 지는 것을 방지하기