/* 
    제작 : 조현우
    갱신일 : 2024.07.08
*/
const body = document.querySelector("body")
const header = document.querySelector("header")
const header_clone = header.cloneNode(true)
const header_clone_area = document.querySelector("#header_clone_area")
const m_menu = document.querySelector(".m-menu_btn a")
const m_menu_close = document.querySelector(".close_btn")
const m_bg = document.querySelector(".m_bg")
const side_menu_btn = document.querySelectorAll(".side_menu li a")
const search_box = document.querySelector(".side_menu .search_box")
const search_box_close = document.querySelector(".search_box .txt .close_search")

header_clone_area.append(header_clone)


m_menu.addEventListener("click", (e) => {
    e.preventDefault();
    header_clone_area.style.right = 0
    header_clone_area.style.transform = "translateX(0)"
    m_bg.style.opacity = 1
    m_bg.style.visibility = "visible";
    body.style.overflow = "hidden"
})

m_menu_close.addEventListener("click", (e) => {
    e.preventDefault();
    header_clone_area.style.right = "-100px"
    header_clone_area.style.transform = "translateX(100%)" 
    m_bg.style.opacity = 0
    m_bg.style.visibility = "hidden";
    body.style.overflow = "auto"
})

side_menu_btn[1].addEventListener("click", (e) => {
    e.preventDefault();
    search_box.style.opacity = 1;
    search_box.style.visibility = "visible";
})

search_box_close.addEventListener("click", (e) => {
    e.preventDefault();
    search_box.style.opacity = 0;
    search_box.style.visibility = "hidden";
})

const clone_side_menu_btn = document.querySelectorAll("#header_clone_area header .side_menu li a")
const clone_search_box = document.querySelector("#header_clone_area header .side_menu .search_box")
const clone_search_box_close = document.querySelector("#header_clone_area header .search_box .txt .close_search")

clone_side_menu_btn[1].addEventListener("click", (e) => {
    e.preventDefault();
    clone_search_box.style.opacity = 1;
    clone_search_box.style.visibility = "visible";
})

clone_search_box_close.addEventListener("click", (e) => {
    e.preventDefault();
    clone_search_box.style.opacity = 0;
    clone_search_box.style.visibility = "hidden";
})