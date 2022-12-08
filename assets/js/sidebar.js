const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
toggle2 = body.querySelector(".toggle2");


toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
})

toggle2.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
})