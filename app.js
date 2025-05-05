document.addEventListener("DOMContentLoaded", function(){
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabcontent =document.querySelectorAll(".tab-content")

    tabButtons.forEach(btn => {
        btn.addEventListener("click", ()=>{
            tabButtons.forEach(b =>(b.classList.remove("active")))

            tabcontent.forEach(c =>(c.classList.remove("active")))

            btn.classList.add("active")
            const target = btn.getAttribute("data-tab")
            document.getElementById(target).classList.add("active")
        })
    })
})