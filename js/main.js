//Toogle button for Shop page //

$('#open-close-toggle').on("click", function () {
    var $arrows = $(this).find("img");
    $('#toggle-section').slideToggle(function () {
        $arrows.toggle();
    });
});

//Burger Menu
const burgerBtn = document.querySelector("#burger-btn");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const newsletter = document.querySelector(".newsletter-btn");
const search = document.querySelector(".search-icon");
const searchImg = document.querySelector(".search");


function openMenu() {

    nav.classList.toggle("nav-mobile");
    nav.classList.toggle("nav");
    burger.classList.toggle("active-burger");
    newsletter.classList.toggle("newsletter-btn-mobile");
    search.classList.toggle("search-icon-mobile");

}

burgerBtn.addEventListener('click', openMenu);
