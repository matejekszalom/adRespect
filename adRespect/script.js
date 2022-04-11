const swiper = new Swiper('.swiper', {
  // Optional parameters
  zoom: true,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  },


  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const normalPrice = document.getElementById("normal-price");
const premiumPrice = document.getElementById("premium-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `<h6><span style="font-size: 3rem">320 PLN</span><span class="period"><br><br>miesięcznie</span></h6>`;
        normalPrice.innerHTML = `<h6><span style="font-size: 3rem">450 PLN</span><span class="period"><br><br>miesięcznie</span></h6>`;
        premiumPrice.innerHTML = `<h6><span style="font-size: 3rem">650 PLN</span><span class="period"><br><br>miesięcznie</span></h6>`;
    }else{
        starterPrice.innerHTML = `<h6><span style="font-size: 3rem">3200 PLN</span><span class="period"><br><br>rocznie</span></h6>`;
        normalPrice.innerHTML = `<h6><span style="font-size: 3rem">4500 PLN</span><span class="period"><br><br>rocznie</span></h6>`;
        premiumPrice.innerHTML = `<h6><span style="font-size: 3rem">6500 PLN</span><span class="period"><br><br>rocznie</span></h6>`;
    }
})

