/* 
    제작 : 조현우
    갱신일 : 2024.07.06
*/
const body = document.querySelector("body")
const header = document.querySelector("header")
const header_clone = header.cloneNode(true)
const header_clone_area = document.querySelector("#header_clone_area")
const m_menu = document.querySelector(".m-menu_btn a")
const m_menu_close = document.querySelector(".close_btn")
const m_bg = document.querySelector(".m_bg")

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