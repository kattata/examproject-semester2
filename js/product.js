const photos = document.querySelector(".product-photos");
const logo = document.querySelector(".logo");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: photos,
    triggerHook: 0.05,
    duration: 800,
})
    .setPin(photos)
    .addTo(controller)
    .addIndicators();
