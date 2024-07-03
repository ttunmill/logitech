// fullpage nav 반응
const nav_logo = document.querySelector("h1 a img")
const nav = document.querySelectorAll("header nav a")

const side_menu = document.querySelectorAll("header .side_menu li a img")
const nav_after = nav[0].style;
const nav_after1 = window.getComputedStyle(nav[0], "::after")

// fullpage
$("#fullPage_wrap").fullpage({
    scrollBar : true, 
    scrollingSpeed : 500,
    showActiveTooltip : true,
    menu : "nav",
    // anchors : ["intro","special","project","contact"],
    
    onLeave : function(index, nextIndex, direction) {
        console.log(index, nextIndex, direction)
        if(index == 1 || index == 3) {
            sec02_ani_on()
            nav_color_white()
        } else {
            sec02_ani_off()
        }

        if(index == 2 && direction == "up") {
            nav_color_black()
        }

        // 2번째부터 >>>>
        function sec02_ani_on() {
            $(".sec02 .txt span").addClass("sec02_text_impect")
            $(".sec02 .txt p").addClass("sec02_text_impect")
            $(".sec02 .images img:first-child").addClass("key_cap_ani01")
            $(".sec02 .images img:nth-child(2)").addClass("key_cap_ani02")
            $(".sec02 .images img:last-child").addClass("keyboard_ani")
        }

        // 첫번째 페이지일때
        function sec02_ani_off() {
            $(".sec02 .txt span").removeClass("sec02_text_impect")
            $(".sec02 .txt p").removeClass("sec02_text_impect")
            $(".sec02 .images img:first-child").removeClass("key_cap_ani01")
            $(".sec02 .images img:nth-child(2)").removeClass("key_cap_ani02")
            $(".sec02 .images img:last-child").removeClass("keyboard_ani")
        }

        // 네비게이션 두번째 페이지일때 부터
        function nav_color_white() {
            nav_logo.src = "./images/Logitech_logo _white.png";
            m_menu.style.filter = "invert(1)"
            for(var i of nav) {
                i.style.color = "#fff";
                i.classList.add("white")
            }
            for(var j of side_menu) {j.style.filter = "invert(1)"}
        }
        // 첫번째 페이지일때
        function nav_color_black() {
            nav_logo.src = "./images/Logitech_logo_black.png"
            m_menu.style.filter = "invert(0)"
            for(var i of nav) {
                i.style.color = "#000"
                i.classList.remove("white")
            }
            for(var j of side_menu) {j.style.filter = "invert(0)"}
        }
    },
})

// swiper
const swiperSlides = document.querySelectorAll('.images_list');
swiperSlides.forEach(function (element, index) {
    element.classList.add("swiper-" + index);
    let swiper = new Swiper(".swiper-" + index, {
    autoplay: {
            delay: 1,
            desableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    slidesPerView: "3",
    freemode: true
    });
});

// sec04 마우스 이벤트
const big_img = document.querySelector(".sec04_contents .images img")
const sec04_li = document.querySelectorAll(".sec04_contents .sec04_g li")
const sec04_btn = document.querySelectorAll(".sec04_contents .sec04_g li .sec04_btn")

// 윈도우 사이즈 계산
window.onload = () => {
    let screen = window.innerWidth;
    if(screen > 1024) {
        sec04_img01()
        sec04_li[0].addEventListener("mouseover", () => {
            sec04_img01()
        })
    
        sec04_li[1].addEventListener("mouseover", () => {
            sec04_img02()
        })
    } else {
        big_img.src = "./images/cork-office-building.jpg"
        sec04_li[1].style.opacity = 1;
        sec04_li[0].style.opacity = 1;
        sec04_btn[0].style.opacity = 1;
        sec04_btn[0].style.visibility = "visible";
        sec04_btn[1].style.opacity = 1;
        sec04_btn[1].style.visibility = "visible";
    }
}

window.onresize = function(event){
    let innerWidth = window.innerWidth;
    if(innerWidth > 1024) {
        sec04_img01()
        sec04_li[0].addEventListener("mouseover", () => {
            sec04_img01()
        })
    
        sec04_li[1].addEventListener("mouseover", () => {
            sec04_img02()
        })
    } else {
        big_img.src = "./images/cork-office-building.webp"
        sec04_li[1].style.opacity = 1;
        sec04_li[0].style.opacity = 1;
        sec04_btn[0].style.opacity = 1;
        sec04_btn[0].style.visibility = "visible";
        sec04_btn[1].style.opacity = 1;
        sec04_btn[1].style.visibility = "visible";
    }
}

function sec04_img01() {
    big_img.src = "./images/cork-office-building.webp"
    sec04_li[1].style.opacity = 0.6;
    sec04_li[0].style.opacity = 1;
    sec04_btn[0].style.opacity = 1;
    sec04_btn[0].style.visibility = "visible";
    sec04_btn[1].style.opacity = 0;
    sec04_btn[1].style.visibility = "hidden";
}

function sec04_img02() {
    big_img.src = "./images/consulting01.png"
    sec04_li[0].style.opacity = 0.6
    sec04_li[1].style.opacity = 1
    sec04_btn[1].style.opacity = 1;
    sec04_btn[1].style.visibility = "visible";
    sec04_btn[0].style.opacity = 0;
    sec04_btn[0].style.visibility = "hidden";
}