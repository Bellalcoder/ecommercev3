 
 
// window Scroll and show header 
window.onscroll = () => {
let headerShow = document.querySelector(".header");
headerShow.classList.toggle('sticky', window.scrollY > 0);
}

// hamvargar menu desing javascritp functional
var mysideVar= document.querySelector("#mySidenav");
var mobileIcon = document.querySelector("#mobile-icon");

mobileIcon.addEventListener('click',() =>{
    mysideVar.classList.toggle('left-set');
})

// mixitup setup funcsonal stem
var mixer = mixitup('.mixitup');

// click button and show ounderlin 

$('.nav').click(function(){
$('.nav').removeClass('active');
$(this).addClass('active')
})





// swiper slider use javascript in jquery libery 
$(document).ready(function(){
   
    $('.carousel-1').owlCarousel({
        loop:true,
        margin:30,
        autoplaySpeed:1000,
        navSpeed:1000,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        autoplay: true,
        responsive:{
        320:{
            items:1.5
        },
        428:{
            items:2
        },
        600:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        },
        1280:{
            items:4
        }
        }
    });

    $(".latest-product").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1000,
        navSpeed:1000,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    });
});

