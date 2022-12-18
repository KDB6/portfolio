// javascript__main
s1.from('.javascript__main-text > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#javascript__main",
        start: "-40% 00%",
        end: "15%",
        markers: false,
        scrub: 1,
    },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.javascript__main-text > div:nth-child(2)', {
    scrollTrigger: {
        trigger: "#javascript__main",
        start: "-30% 0%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.javascript__main-text > div:nth-child(3)', {
    scrollTrigger: {
        trigger: "#javascript__main",
        start: "-20% 0%",
        end: "25%",
        markers: false,
        scrub: 1,
    },
    x: -40,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.javascript__main-back > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#javascript__main",
        start: "-50% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    opacity: 0.8,
    duration: 1,
    ease: "power4",
}, 0)



// javascript-GM__main
let textWrapperGM = document.querySelector('.GM__title');
textWrapperGM.innerHTML = textWrapperGM.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('.GM__title .letter', 1.5, {
    scrollTrigger: {
        trigger: "#javascript-GM__main",
        start: "-40% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);

s1.from('.GM__desc', {
    scrollTrigger: {
        trigger: "#javascript-GM__main",
        start: "-10% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

// game__main
const options3 = {
    root: null,
    rootMargin: "500px",
    threshold: 0.9,
};
let revealCallback3 = (entries, self) => {
    entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector(".game__img > img");

    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
        revealAnim.set(container, {
            visibility: "visible"
    });
        revealAnim.fromTo(
            container,
            {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: easeInOut
            }
        );
        revealAnim.from(img, 1.5, {
            scale: 1.6,
            ease: easeInOut,
            delay: -1.5,
        });
            self.unobserve(entry.target);
        }
    });
};
let revealObserver3 = new IntersectionObserver(revealCallback3, options3);
document.querySelectorAll(".reveal2").forEach((reveal) => {
    revealObserver3.observe(reveal);
});
s1.from('.game__img > img', {
    scrollTrigger: {
        trigger: ".game__main",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.game__main > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".game__main",
        start: "-60% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// game__list
s1.from('.list__left', {
    scrollTrigger: {
        trigger: ".game__list",
        start: "-40% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.list__right', {
    scrollTrigger: {
        trigger: ".game__list",
        start: "-40% 00%",
        end: "40%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.music', {
    scrollTrigger: {
        trigger: ".list__right",
        start: "-40% 10%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.game-search', {
    scrollTrigger: {
        trigger: ".list__right",
        start: "00% 10%",
        end: "40%",
        markers: false,
        scrub: 1,
    },
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.card', {
    scrollTrigger: {
        trigger: ".list__right",
        start: "20% 10%",
        end: "60%",
        markers: false,
        scrub: 1,
    },
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.tetris', {
    scrollTrigger: {
        trigger: ".list__right",
        start: "40% 10%",
        end: "80%",
        markers: false,
        scrub: 1,
    },
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// mouse
s1.from('.mouse__left > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".mouse",
        start: "20% 00%",
        end: "60%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.mouse__left > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".mouse",
        start: "25% 00%",
        end: "60%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.mouse__view', {
    scrollTrigger: {
        trigger: ".mouse",
        start: "30% 00%",
        end: "60%",
        markers: false,
        scrub: 1,
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.mouse__right > div:nth-child(1) a', {
    scrollTrigger: {
        trigger: ".mouse",
        start: "-60% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    y: -150,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

const options4 = {
    root: null,
    rootMargin: "500px",
    threshold: 0.9,
};
let revealCallback4 = (entries, self) => {
    entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector(".mouse__img1 > img");

    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
        revealAnim.set(container, {
            visibility: "visible"
    });
        revealAnim.fromTo(
            container,
            {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: easeInOut
            }
        );
        revealAnim.from(img, 1.5, {
            ease: easeInOut,
            delay: -1.5,
        });
            self.unobserve(entry.target);
        }
    });
};
let revealObserver4 = new IntersectionObserver(revealCallback4, options4);
document.querySelectorAll(".reveal2").forEach((reveal) => {
    revealObserver4.observe(reveal);
});
s1.from('.mouse__img1 > img', {
    scrollTrigger: {
        trigger: ".mouse",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.mouse__img2 > img', {
    scrollTrigger: {
        trigger: ".mouse",
        start: "00% 00%",
        end: "60%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// javascript-SS__main
let textWrapperSS = document.querySelector('.SS__title');
textWrapperSS.innerHTML = textWrapperSS.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('.SS__title .letter', 1.5, {
    scrollTrigger: {
        trigger: "#javascript-SS__main",
        start: "-40% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);

s1.from('.SS__desc', {
    scrollTrigger: {
        trigger: "#javascript-SS__main",
        start: "-10% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// search
s1.from('.search > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".search",
        start: "-80% 00%",
        end: "-30%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.search__desc1 > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".search",
        start: "-50% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0.5vw",
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.search__desc1 > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".search",
        start: "-50% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0.3vw",
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.search__img', {
    scrollTrigger: {
        trigger: ".search",
        start: "-60% 00%",
        end: "-5%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.search__desc2', {
    scrollTrigger: {
        trigger: ".search",
        start: "-30% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// slider
s1.from('.slider > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".slider",
        start: "-80% 00%",
        end: "-30%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.slider__desc1 > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".slider",
        start: "-50% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0.5vw",
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.slider__desc1 > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".slider",
        start: "-50% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0.3vw",
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.slider__img', {
    scrollTrigger: {
        trigger: ".slider",
        start: "-60% 00%",
        end: "-5%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.slider__desc2', {
    scrollTrigger: {
        trigger: ".slider",
        start: "-30% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// javascript-QP__main
let textWrapperQP = document.querySelector('.QP__title');
textWrapperQP.innerHTML = textWrapperQP.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('.QP__title .letter', 1.5, {
    scrollTrigger: {
        trigger: "#javascript-QP__main",
        start: "-40% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);

s1.from('.QP__desc', {
    scrollTrigger: {
        trigger: "#javascript-QP__main",
        start: "-10% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// quiz
s1.from('.quiz__img > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-100% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    x: -180,
    duration: 1,
    ease: "power4.in",
}, 0)

s1.from('.quiz__img > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-90% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    x: 120,
    duration: 1,
    ease: "power4.in",
}, 0)

s1.from('.quiz__img > div:nth-child(3)', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-80% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    x: -80,
    duration: 1,
    ease: "power4.in",
}, 0)

s1.from('.quiz__img > div:nth-child(4)', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-70% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    x: 80,
    duration: 1,
    ease: "power4.in",
}, 0)

s1.from('.quiz__img > div:nth-child(5)', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-60% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    x: -200,
    duration: 1,
    ease: "power4.in",
}, 0)

s1.from('.quiz__view', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-50% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    y: -150,
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)

s1.from('.quiz__desc > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-30% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    y: -150,
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)



// parallax
s1.from('.parallax__img > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-60% 30%",
        end: "-40%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.out",
}, 0)

s1.from('.parallax__img > div:nth-child(2)', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-40% 30%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
}, 0)

s1.from('.parallax__img > div:nth-child(3)', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-20% 30%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
}, 0)

s1.from('.parallax__desc > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "0% 30%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
}, 0)

s1.from('.parallax__view', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "1% 30%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    y: -140,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
}, 0)