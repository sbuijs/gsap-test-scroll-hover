//Check if the screen size is smaller than x
let screenSize = window.matchMedia("(max-width: 700px)");

//on hover state show/hide image two
//Desktop: for ech card image create an event lisener for mouseover and mouseout
const arrayCardImg = document.querySelectorAll(".card__images");
arrayCardImg.forEach(element => {
    element.addEventListener("mouseover", toggleReveal, false);
    element.addEventListener("mouseout", toggleReveal, false);

    function toggleReveal() {
        if (!screenSize.matches) {
            element.classList.toggle("reveal");
        }
    }
});

//info about gsap
//https://greensock.com/docs/v3/Plugins/ScrollTrigger/
const cardImageArray = gsap.utils.toArray('.card__images');
//for each card create an animation
cardImageArray.forEach(cardimage => {
    if (screenSize.matches) {
        gsap.to(cardimage, {
            scrollTrigger: {
                trigger: cardimage,
                //start the animation when the element is in the center of the screen
                start: "top 40%",
                end: "top 30%",
                scrub: true,
                //restart the animation ever time it enters the viewport
                toggleActions: "restart none reverse reset",
                markers: false,
            },
            className: "+=card__images d-block reveal",
        });
    };
});