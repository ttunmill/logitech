const body = document.querySelector("body")
const header = document.querySelector("header")
const header_clone = header.cloneNode(true)
const header_clone_area = document.querySelector("#header_clone_area")
const m_menu = document.querySelector(".m-menu_btn a")
const m_menu_close = document.querySelector(".close_btn")

m_menu.addEventListener("click", (e) => {
    e.preventDefault();
    header_clone_area.style.right = "0"
    header_clone_area.style.transform = "translateX(0)" 
})

header_clone_area.append(header_clone)

m_menu_close.addEventListener("click", (e) => {
    e.preventDefault();
    header_clone_area.style.right = "-100px"
    header_clone_area.style.transform = "translateX(100%)" 
})