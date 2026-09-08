// index.js
/**
    * GitHub Repository Phishing Alert Appeal & Project Verification
    이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
    * PROJECT: Portfolio Prototype
    * WARNING: This script does not process real transactions or user credentials.
    * All functions are for demonstration purposes only.
*/
// best item swiper 만들기
const bestSwiper = document.querySelector('.best_swiper');
// console.log(bestSwiper);

for(let i=0; i<10; i++){
    const bestSlide = document.createElement('div');
    bestSlide.classList.add('swiper-slide');

    bestSlide.innerHTML = `
        <div class="product_g">
            <a href="#" class="product_wrap">
                <p class="product" style="background-image: url(${bestdb[i].product});"></p>
                <h3>${bestdb[i].title}</h3>
            </a>
            <button type="button" class="cart"><img src="./images/shopping.svg" alt="장바구니 담기"></button>
            <a href="#" class="find">판매처 찾기 <img src="./images/img_arrow.svg" alt=""></a>
        </div>
    `;

    bestSwiper.children[0].appendChild(bestSlide);
}

const best_swiper = new Swiper(bestSwiper,{
    slidesPerView: 4.5,
    spaceBetween:80,
    loop: true,
    centeredSlides: true,
    navigation:{
        prevEl:'.best_prev',
        nextEl:'.best_next',
	},
}); // 플러그인 연결

// room swiper
const roomSwiper = document.querySelector('.room_swiper');
// console.log(roomSwiper);

for(let i=0; i<6; i++){
    const roomSlide = document.createElement('div');
    roomSlide.classList.add('swiper-slide');

    roomSlide.innerHTML = `
        <div class="product_g">
            <a href="#" class="product_wrap">
                <p class="product_img"><img src="${roomdb[i].product}" alt=""></img></p>
                <div class="title_price">
                    <h3>${roomdb[i].title}</h3>
                    <p class="price">${roomdb[i].price}</p>
                </div>
            </a>
            <button type="button" class="cart"><img src="./images/shopping.svg" alt="장바구니 담기"></button>
            <a href="#" class="find">판매처 찾기 <img src="./images/img_arrow.svg" alt=""></a>
        </div>
    `

    roomSwiper.children[0].appendChild(roomSlide);
}

const room_swiper = new Swiper(roomSwiper,{
    slidesPerView: 4,
    spaceBetween:29,
})