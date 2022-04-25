const xMark = document.querySelector("#nav-ul");
let a = 0;

function changeDisplayBurger() {
    if(a === 0) {
        xMark.style.display = "block";
        a = 1;
    }else if(a === 1){
        xMark.style.display = "none";
        a = 0;
    }
}