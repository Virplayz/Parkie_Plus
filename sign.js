let btn = document.querySelector("#loggg");
btn.addEventListener("click",(handler) =>{
    let mainform = document.querySelector("#mainform")
    mainform.style. transform = "translate(50px,-550px)";
    document.querySelector("body").append(mainform);
})