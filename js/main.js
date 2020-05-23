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
const newsletter = document.querySelector(".newsletter-btn");
const search = document.querySelector(".search-icon");
const searchBlack = document.querySelector(".search-black");
const searchWhite = document.querySelector(".search-white");
const burger = document.querySelector(".burger");


function openMenu() {

    nav.classList.toggle("nav-mobile");
    nav.classList.toggle("nav");
    burger.classList.toggle("active-burger");
    newsletter.classList.add("newsletter-btn-mobile");
    searchBlack.classList.toggle("search-inactive");
    searchWhite.classList.add("search-active");
}

burgerBtn.addEventListener('click', openMenu, {passive: true});
