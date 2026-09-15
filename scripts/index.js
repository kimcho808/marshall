// index.js
/**
    * GitHub Repository Phishing Alert Appeal & Project Verification
    이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
    * PROJECT: Portfolio Prototype
    * WARNING: This script does not process real transactions or user credentials.
    * All functions are for demonstration purposes only.
*/
// 언어 클릭 이벤트
const Language = document.querySelector('.Language');
const Language_sub = document.querySelector('.Language_sub');
const LanguageA = document.querySelectorAll('.Language_sub li button');

LanguageA.forEach((o) => {
    o.addEventListener('click', (e) => {
        e.preventDefault();
        for (let reset of LanguageA) {
            reset.classList.remove('active');
        }
        o.classList.add('active');
    });
});

Language.addEventListener('click',()=>{
    if(Language_sub.style.display == 'none'){
        Language_sub.style.display = 'flex';
    } else {Language_sub.style.display = 'none';}
})



// best item swiper 만들기
const bestSwiper = document.querySelector('.best_swiper');
// console.log(bestSwiper);

for(let i=0; i<10; i++){
    const bestSlide = document.createElement('div');
    bestSlide.classList.add('swiper-slide');

    bestSlide.innerHTML = `
        <div class="product_g">
            <a href="#" class="product_wrap">
                <p class="product_img"><img src="${bestdb[i].product}" alt=""></img></p>
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
    spaceBetween:30,
    centeredSlides: true,
    loop: true,
    centeredSlidesBounds: true,
    autoplay: {
        delay:3500,
        disableOnInteraction: false,
    },
    navigation:{
        prevEl:'.best_prev',
        nextEl:'.best_next',
    },

    breakpoints: {
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
        402: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
    },
})

// 클릭이벤트 막기
const best_nav = document.querySelectorAll('.best_nav a')

for (let i of best_nav) {
    i.addEventListener('click', (e) => {
        e.preventDefault();

        for (let j of best_nav) {
            j.classList.remove('active');
        }

        i.classList.add('active');
    });
}

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
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween:29,
        },
        402: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
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
const record = document.querySelector('.record_history');
const drums = document.querySelector('.drums');
const history_none = document.querySelector('.history_none');
const historyH = document.querySelector('.history_none h3');
const drums_content = document.querySelector('.drums .marshall_content');
const record_content = document.querySelector('.record_history .marshall_content');
const record_arrow = document.querySelector('.record_arrow');
const drums_arrow = document.querySelector('.drums_arrow');


drums.style.width = '0';

history_none.addEventListener('click', () => {
    record.style.transition = 'width 0.5s ease';
    drums.style.transition = 'width 0.5s ease';

    if (record.style.width === '1408px' && drums.style.width === '0px') {
        record.style.width = '0';
        drums.style.width = '1408px';
        drums_content.style.display = 'block';
        record_content.style.display = 'none';
        drums_arrow.style.display = 'block';
        record_arrow.style.display = 'none';
        historyH.textContent = 'MARSHALL RECORDS';
    } else {
        // 거짓(아니면) 원래대로 복구
        record.style.width = '1408px';
        drums.style.width = '0';
        drums_content.style.display = 'none';
        record_content.style.display = 'block';
        drums_arrow.style.display = 'none';
        record_arrow.style.display = 'block';
        historyH.textContent = 'NATAL DRUMS';
    }
});


// 7행 swiper
const guide_swiper = document.querySelector('.guide_swiper');
// console.log(guide_swiper);

for(let i=0; i<4; i++){
    const guideSlide = document.createElement('div');
    guideSlide.classList.add('swiper-slide');

    guideSlide.innerHTML = `
        <div class="swiper-slide">
            <a href="#" class="guide_g">
                <p class="guide_img"><img src="${guidedb[i].guideImg}" alt=""></p>
                <h3>${guidedb[i].title}</h3>
            </a>
        </div>`

    guide_swiper.children[0].appendChild(guideSlide);
}

const guideSwiper = new Swiper(guide_swiper,{
    slidesPerView: 3,
    spaceBetween: 30,
    navigation:{
        prevEl:'.guide_prev',
        nextEl:'.guide_next',
    },
})

// header 스크롤 내리면 배경 색상 만들기
const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    if(window.scrollY >= 800){
        header.classList.add('active');
    } else { header.classList.remove('active'); }
})

//태블릿 메뉴 누르면 나오기
const menuBtn = document.querySelector('.all_menu');
const menu = document.querySelector('.menu');
console.log(menuBtn, menu);

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


//태블릿 서브메뉴
const tMenu = document.querySelector('.menu_g .menu button');
const tList = document.querySelector('.menu_g .menu ul')

tMenu.addEventListener('click',()=>{
    tList.classList.toggle('active');
})