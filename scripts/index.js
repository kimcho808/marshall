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

for(let i=0; i<9; i++){
    const bestSlide = document.createElement('div');
    bestSlide.classList.add('swiper-slide');

    bestSlide.innerHTML = `
        <div class="product_g">
            <a href="#" class="product_wrap">
                <p class="product" style="background-image: url(${bestDB[i].product});"></p>
                <h3>${bestDB[i].title}</h3>
            </a>
            <button type="button" class="cart"><img src="./images/shopping.svg" alt=""></button>
            <a href="#" class="find">판매처 찾기 <img src="./images/img_arrow.svg" alt=""></a>
        </div>
    `;

    bestSwiper.children[0].appendChild(bestSlide);
}

const best_swiper = new Swiper(bestSwiper,{
    slidesPerView: 'auto',
    spaceBetween:80,
    loop: true,
    centeredSlides: false,
    navigation:{
        prevEl:'.best_prev',
        nextEl:'.best_next',
	},
}); // 플러그인 연결