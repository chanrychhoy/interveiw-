function navSticky(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
}
window.addEventListener("scroll", navSticky)