


// PINDOWN

let width = window.outerWidth;

if (width >= 900) {

    const photos = document.querySelector(".product-photos");
    const logo = document.querySelector(".logo");

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: photos,
        triggerHook: 0.05,
        duration: "121%",
    })
        .setPin(photos)
        .addTo(controller);
}

// CHANGE PICTURES ON CLICK

const smallPictures = document.querySelectorAll(".product-img-small");
const bigPicture = document.querySelector(".product-img-big");

function changePicture(e) {
    const item = e.target;

    if (item.classList[0] === "first-img") {
        bigPicture.src = "../resources/images/2.3.jpg";
    } else if (item.classList[0] === "second-img") {
        bigPicture.src = "../resources/images/2.3.2.jpg";
    } else {
        bigPicture.src = "../resources/images/2.3.3.jpg";
    }
}

smallPictures.forEach(pic => pic.addEventListener('click', changePicture));