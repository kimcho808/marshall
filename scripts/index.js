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
        </div>
    `

    roomSwiper.children[0].appendChild(roomSlide);
}

const room_swiper = new Swiper(roomSwiper,{
    slidesPerView: 4,
    spaceBetween:29,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

// outdoors
const outdoorsList = document.querySelector('.outdoors_list');
// console.log(outdoorsList);

for(let i=0; i<8; i++){
    const outdoorsLi = document.createElement('li');

    outdoorsLi.innerHTML = `
        <a href="">
            <p class="product_img"><img src="${outdoorsdb[i].product}" alt=""></p>
            <div class="title_price">
                <h3>${outdoorsdb[i].title}</h3>
                <p class="price">${outdoorsdb[i].price}</p>
            </div>
        </a>
        <button type="button" class="cart"><img src="./images/shopping.svg" alt="장바구니 담기"></button>
    `

    outdoorsList.appendChild(outdoorsLi);
}

// 카트 클릭 이벤트
const cart = document.querySelectorAll('.cart');

cart.forEach((cart) => {
    cart.addEventListener('click', () => {
        const cartImg = cart.querySelector('img');
        
        // 만약 현재 이미지가 켜진(cart_on)
        if (cartImg.src.includes('cart_on.svg')) {
            // 다시 원래 아이콘으로 되돌리기
            cartImg.src = './images/shopping.svg';
        } else {
            // 아니면 켜진 아이콘으로 바꾸기
            cartImg.src = './images/cart_on.svg';
        }
    });
});

// 6행 이벤트
const marshallItems = document.querySelectorAll('.marshall_g li');

marshallItems.forEach(item => {
    item.addEventListener('click',()=>{
        marshallItems.forEach(el => {
            el.classList.remove('active');
        });

        this.classList.add('active');
    });
});