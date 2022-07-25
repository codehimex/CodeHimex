let up = document.querySelector(".up");
let nav = document.getElementById("nav");
let closee = document.getElementById("close");
let toggle = document.querySelector(".toggle");

window.onscroll = function(){
    if (this.scrollY >= 500) {
        up.classList.add("show")
    }
    else{
        up.classList.remove("show")
    }
};
up.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

nav.addEventListener("click", (eo) => {
    toggle.style.transform = "translateX(0vw)";    
});
closee.addEventListener("click", (eo) => {
    toggle.style.transform = "translateX(160vw)";
})