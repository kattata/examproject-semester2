//Toogle button for Shop page //

$('#open-close-toggle').on("click", function () {
    var $arrows = $(this).find("img");
    $('#toggle-section').slideToggle(function () {
        $arrows.toggle();
    });
});

//Burger Menu

const burger = document.querySelector(".burger");

function openMenu() {
    const nav = document.querySelector("nav");
    const newsletter = document.querySelector(".newsletter-btn");
    const search = document.querySelector(".search-icon");
    const searchSvg = document.querySelector(".search-svg");

    nav.classList.toggle("nav-mobile");
    nav.classList.toggle("nav");
    newsletter.classList.toggle("newsletter-btn-mobile");
    searchSvg.src = "../resources/icons/search-white.svg";
    search.classList.toggle("search-icon-mobile");
}

burger.addEventListener('click', openMenu);
