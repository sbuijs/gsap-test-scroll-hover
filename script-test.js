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
//Desktop: for ech card image create an event lisener for mouseover and mouseout
const arrayCardImg = document.querySelectorAll(".card__img");
arrayCardImg.forEach(element => {
    element.addEventListener("mouseover", mOver, false);
    element.addEventListener("mouseout", mOut, false);

    function mOver() {
        if (!screenSize.matches) {
            element.classList.remove("unflash");
            element.classList.add("show-image-two");
            element.classList.add("flash");
        }
    }
    function mOut() {
        if (!screenSize.matches) {
            element.classList.remove("show-image-two");
            element.classList.remove("flash");
            element.classList.add("unflash");
        }
    }

});


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
