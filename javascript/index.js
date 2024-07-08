/* 
    제작 : 조현우
    갱신일 : 2024.07.08
*/
// fullpage nav 반응
const nav_logo = document.querySelector("h1 a img")
const nav = document.querySelectorAll("header nav a")

const side_menu = document.querySelectorAll("header .side_menu li a img")
const nav_after = nav[0].style;

for(var i of nav) {i.classList.add("white")}
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
        } else {
            sec02_ani_off()
        }
        /* if(index == 4 && direction == "down" || index == 5 && direction == "down" || index == 6 && direction == "up") {
            nav_color_black()
        } else {
            nav_color_white()
        } */

        // 애니메이션 리로드 하기위해 작성
        // 2번째 페이지 애니메이션 재생
        function sec02_ani_on() {
            $(".sec02 .txt span").addClass("sec02_text_impect")
            $(".sec02 .txt p").addClass("sec02_text_impect")
            $(".sec02 .images img:first-child").addClass("key_cap_ani01")
            $(".sec02 .images img:nth-child(2)").addClass("key_cap_ani02")
            $(".sec02 .images img:nth-child(3)").addClass("key_cap_ani03")
            $(".sec02 .images img:last-child").addClass("keyboard_ani")
            // $(".sec02 .images img:first-child").addClass("keycap_all_ani")
            // $(".sec02 .images img:nth-child(2)").addClass("keycap_all_ani")
        }

        // 2번째 페이지 애니메이션 제거
        function sec02_ani_off() {
            $(".sec02 .txt span").removeClass("sec02_text_impect")
            $(".sec02 .txt p").removeClass("sec02_text_impect")
            $(".sec02 .images img:first-child").removeClass("key_cap_ani01")
            $(".sec02 .images img:nth-child(2)").removeClass("key_cap_ani02")
            $(".sec02 .images img:nth-child(3)").removeClass("key_cap_ani03")
            $(".sec02 .images img:last-child").removeClass("keyboard_ani")
        }
    },
})

// 네비게이션 로고 및 텍스트 white로 변환
/* function nav_color_white() {
    nav_logo.src = "./images/Logitech_logo_white.png";
    m_menu.style.filter = "invert(0)"
    for(var i of nav) {
        i.style.color = "#fff";
        i.classList.add("white")
    }
    for(var j of side_menu) {j.style.filter = "invert(1)"}
} */
// 네비게이션 로고 및 텍스트 black으로 변환
/* function nav_color_black() {
    nav_logo.src = "./images/Logitech_logo_black.png"
    m_menu.style.filter = "invert(1)"
    for(var i of nav) {
        i.style.color = "#000"
        i.classList.remove("white")
    }
    for(var j of side_menu) {j.style.filter = "invert(0)"}
} */


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
/* window.onload = () => {
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
 */
/* function sec04_img01() {
    big_img.src = "./images/cork-office-building.jpg"
    sec04_li[1].style.opacity = 0.6;
    sec04_li[0].style.opacity = 1;
    sec04_btn[0].style.opacity = 1;
    sec04_btn[0].style.visibility = "visible";
    sec04_btn[1].style.opacity = 0;
    sec04_btn[1].style.visibility = "hidden";
}

function sec04_img02() {
    big_img.src = "./images/bic-lift-design.webp"
    sec04_li[0].style.opacity = 0.6
    sec04_li[1].style.opacity = 1
    sec04_btn[1].style.opacity = 1;
    sec04_btn[1].style.visibility = "visible";
    sec04_btn[0].style.opacity = 0;
    sec04_btn[0].style.visibility = "hidden";
} */