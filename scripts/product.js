//product.js
const related = document.querySelector('.related');
// console.log(roomSwiper);

for(let i=0; i<6; i++){
    const relatedSlide = document.createElement('div');
    relatedSlide.classList.add('swiper-slide');

    relatedSlide.innerHTML = `
        <div class="product_g">
            <a href="./product.html" class="product_wrap">
                <p class="product_img"><img src="${roomdb[i].product}" alt=""></img></p>
                <div class="title_price">
                    <h3>${roomdb[i].title}</h3>
                    <p class="price">${roomdb[i].price}</p>
                </div>
            </a>
            <button type="button" class="cart"><img src="./images/shopping.svg" alt="장바구니 담기"></button>
        </div>
    `

    related.children[0].appendChild(relatedSlide);
}

const related_swiper = new Swiper(related,{
    slidesPerView: 4,
    spaceBetween:29,
    navigation:{
        prevEl:'.related_prev',
        nextEl:'.related_next',
    },
    breakpoints:{
        0: { 
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        1560: { 
            slidesPerView: 4,
            spaceBetween: 29,
        },}
})

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

//색상 클릭 이벤트
const color = document.querySelectorAll('.color_g li');

for(let c of color){ 
    c.addEventListener('click', ()=>{
        for(let c of color){
            c.classList.remove('active');
        }
        c.classList.add('active');
    });
}

//상세페이지 더보기 버튼
const moreBtn = document.querySelector('.product_summary .more');