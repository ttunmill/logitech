const search_bar = document.querySelector("#customer_search .search_bar input")
const submit = document.querySelector("#customer_search .search_bar button")

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(search_bar.value == false) {
        alert("입력을 해주세요.")
    }
})