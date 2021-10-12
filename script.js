//Check if the screen size is smaller than x
let screenSize = window.matchMedia("(max-width: 700px)");

function checkScreeSize(screenSize) {
    if (screenSize.matches) {
        gsapAnimate();
    } else {
        return;
    }
}
checkScreeSize(screenSize);


//on hover state show/hide image two
const cardImg = document.querySelector(".card__img");
cardImg.addEventListener("mouseover", mOver, false);
cardImg.addEventListener("mouseout", mOut, false);

function mOver() {
    if (!screenSize.matches) {
        cardImg.classList.remove("unflash");
        cardImg.classList.add("show-image-two");
        cardImg.classList.add("flash");
    }
}

function mOut() {
    if (!screenSize.matches) {
        cardImg.classList.remove("show-image-two");
        cardImg.classList.remove("flash");
        cardImg.classList.add("unflash");
    }
}



//info about gsap
//https://greensock.com/docs/v3/Plugins/ScrollTrigger/


// animate the image
function gsapAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".card__img", {
        scrollTrigger: {
            trigger: ".card__img",
            //start the animation when the element is in the center of the screen
            start: "top 40%",
            end: "top 30%",
            scrub: true,
            //restart the animation ever time it enters the viewport
            toggleActions: "restart none reverse reset",
            markers: false,
        },
        className: "+=card__img d-block show-image-two flash",
    });
};
