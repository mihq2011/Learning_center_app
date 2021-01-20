var sideMenu = document.querySelector('.side-trigger');

sideMenu.addEventListener("click", function () {
    var sideM = document.querySelector('.side-menu');
    sideM.classList.toggle("active");
});