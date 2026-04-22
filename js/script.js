let menuIcon = document.getElementById("menuIcon");
let navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("menuMobile");
});