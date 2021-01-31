var sideMenu = document.querySelector('.side-trigger');

sideMenu.addEventListener("click", function () {
    var sideM = document.querySelector('.side-menu');
    sideM.classList.toggle("active");
});



var bookClicked = document.querySelector('.book-card');

bookClicked.addEventListener("click", function() {
    var popUpFun = document.querySelector(".books-page-popup");
    popUpFun.classList.toggle("active");
});

