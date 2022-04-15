var burgerMenu = document.querySelector(".burgerMenu");
var NavList = document.querySelector(".NavList");



burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    NavList.classList.toggle("active");

})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => 
{
    burgerMenu.classList.remove("active");
    NavList.classList.remove("active");

}))
