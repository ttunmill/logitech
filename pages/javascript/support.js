const search_bar = document.querySelector("#customer_search .search_bar input")
const submit = document.querySelector("#customer_search .search_bar button")

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(search_bar.value == false) {
        alert("입력을 해주세요.")
    }
})

const accordion_tit = document.querySelectorAll(".accordion_g h3");
const accordion_txt = document.querySelectorAll(".accordion_g .txt_area");
const accordion_plus = document.querySelectorAll(".accordion_g h3 span");

accordion_tit.forEach((title, index) => {
    title.addEventListener("click", () => {
        // 클릭한 아코디언의 p 요소 가져오기
        const content = accordion_txt[index];

        //초기화
        for(var i of accordion_plus) {i.style.transform = "rotate(0)"}
        for(var i of accordion_tit) {i.classList.remove("borderOn")}

        // 이미 열려 있는 아코디언인지 확인
        const isOpen = content.style.maxHeight;

        // 모든 아코디언 닫기
        closeAccordions();

        // 아코디언이 이미 열려 있는 경우 닫기
        if (isOpen) {
            content.style.maxHeight = null;
            return;
        }

        // 클릭한 아코디언 p 요소의 높이를 계산하여 열기 & style 추가
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.border = "1px solid #ddd"
        content.style.borderRadius = "0 0 20px 20px"
        content.style.borderTop = 0
        accordion_plus[index].style.transform = "rotate(45deg)"

        title.classList.add("borderOn")
    });
});

// 모든 아코디언 닫기 함수
function closeAccordions() {
    accordion_txt.forEach(txt => {
        txt.style.maxHeight = null;
        txt.style.border = 0;
    });
}