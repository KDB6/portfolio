// 배경색 전환
gsap.utils.toArray(".backColor").forEach((elem) => {

let color = elem.getAttribute('data-color');

ScrollTrigger.create({
    trigger: elem,
    start: 'top 5%',
    end: 'bottom 5%',
    markers: false,
        onEnter: () => gsap.to('main', {
            backgroundColor: color,
            duration: 1
        }),
        onLeave: () => gsap.to('main', {
            backgroundColor: '#eee',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('main', {
            backgroundColor: '#eee',
            duration: 1
        }),
        onEnterBack: () => gsap.to('main', {
            backgroundColor: color,
            duration: 1
        }),
    });
});

// rotate
gsap.utils.toArray(".rotate").forEach((elem2) => {

let fill = elem2.getAttribute('data-fill');
let stroke = elem2.getAttribute('data-stroke');

ScrollTrigger.create({
    trigger: elem2,
    start: 'top 5%',
    end: 'bottom 5%',
    markers: false,
        onEnter: () => gsap.to('.link__svg', {
            fill: fill,
            stroke: stroke,
            duration: 1
        }),
        onLeave: () => gsap.to('.link__svg', {
            fill: '#121212',
            stroke: '#121212',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('.link__svg', {
            fill: '#eee',
            stroke: '#eee',
            duration: 1
        }),
        onEnterBack: () => gsap.to('.link__svg', {
            fill: fill,
            stroke: stroke,
            duration: 1
        }),
    });
});

// header KDB6
gsap.utils.toArray(".hedaerColor").forEach((elem3) => {

let color = elem3.getAttribute('data-color2');

ScrollTrigger.create({
    trigger: elem3,
    start: 'top 5%',
    end: 'bottom 5%',
    markers: false,
        onEnter: () => gsap.to('.KDB6 > a', {
            color: color,
            duration: 1
        }),
        onLeave: () => gsap.to('.KDB6 > a', {
            color: '#121212',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('.KDB6 > a', {
            color: '#eee',
            duration: 1
        }),
        onEnterBack: () => gsap.to('.KDB6 > a', {
            color: color,
            duration: 1
        }),
    });
});

// header ul li a
gsap.utils.toArray(".hedaerColor").forEach((elem3) => {

let color = elem3.getAttribute('data-color2');

ScrollTrigger.create({
    trigger: elem3,
    start: 'top 5%',
    end: 'bottom 5%',
    markers: false,
        onEnter: () => gsap.to('.list__inner ul li > a', {
            color: color,
            duration: 1
        }),
        onLeave: () => gsap.to('.list__inner ul li > a', {
            color: '#121212',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('.list__inner ul li > a', {
            color: '#eee',
            duration: 1
        }),
        onEnterBack: () => gsap.to('.list__inner ul li > a', {
            color: color,
            duration: 1
        }),
    });
});



// 글씨 gsap
gsap.registerPlugin(ScrollTrigger);

// thumbnail
let t1 = gsap.timeline({delay: 1});
let t2 = gsap.timeline({delay: 1.5});
let t3 = gsap.timeline({delay: 1.8});
let t4 = gsap.timeline({delay: 4});

t1.from('.header__inner', {
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)
t1.from('.tum__inner > h2', {
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)
t2.from('.tum__inner__top', {
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)
t3.from('.tum__inner__bot', {
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)
t4.from('.link', {
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)



// about
let a1 = gsap.timeline({delay: 0.5});

a1.from('.Passion', {
    scrollTrigger: {
        trigger: "#about",
        start: "10% 60%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    x: -100,
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)
a1.from('.Creative', {
    scrollTrigger: {
        trigger: "#about",
        start: "20% 60%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    x: 80,
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)
a1.from('.Shining', {
    scrollTrigger: {
        trigger: "#about",
        start: "40% 60%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    x: -80,
    opacity: 0,
    duration: 10,
    ease: "power4",
}, 0.5)
// a1.from('.about__desc::before', {
//     scrollTrigger: {
//         trigger: "#about",
//         start: "80% 90%",
//         end: "100%",
//         markers: false,
//         scrub: 1,
//     },
//     width: "0%",
//     duration: 2,
//     ease: "power4",
// }, 0)
a1.from('.about__desc > p', {
    scrollTrigger: {
        trigger: "#about",
        start: "80% 90%",
        end: "100%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)
a1.from('.about__img > img', {
    scrollTrigger: {
        trigger: "#about",
        start: "30% 80%",
        end: "100%",
        markers: false,
        scrub: 1,
    },
    y: -50,
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)



// webStart
let wS1 = gsap.timeline({delay: 2});

wS1.from('.webStartH2', {
    scrollTrigger: {
        trigger: "#webStart",
        start: "30% 80%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0.5,
    duration: 1,
    ease: "power4",
}, 0)
wS1.from('.webStartH3', {
    scrollTrigger: {
        trigger: ".webStartH2",
        start: "50% 80%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wS1.from('.webStartP', {
    scrollTrigger: {
        trigger: ".webStartH2",
        start: "50% 80%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// webStandard & responsive
let wR1 = gsap.timeline({delay: 1.5});

wR1.from('.webStandardH2', {
    scrollTrigger: {
        trigger: "#webStandard",
        start: "-100% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    textShadow: 0,
    color: "#121212",
    opacity: 1,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.webStandardImg', {
    scrollTrigger: {
        trigger: "#webStandard",
        start: "-50% 20%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.webStandard__descH3', {
    scrollTrigger: {
        trigger: ".webStandard__img",
        start: "30% 20%",
        end: "40%",
        markers: false,
        scrub: 1,
    },
    textShadow: "-1px 0 #121212, 0 1px #121212, 1px 0 #121212, 0 -1px #121212",
    color: "#eee",
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.webStandard__descP', {
    scrollTrigger: {
        trigger: ".webStandard__img",
        start: "40% 20%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};
// webStandard img
let revealCallback = (entries, self) => {
entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector("img");

    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
        revealAnim.set(container, {
            visibility: "visible"
    });
        revealAnim.fromTo(
            container,
            {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1,
                ease: easeInOut
            }
        );
        revealAnim.from(img, 1, {
            scale: 1.7,
            ease: easeInOut,
            delay: -1
        });
            self.unobserve(entry.target);
        }
    });
};
let revealObserver = new IntersectionObserver(revealCallback, options);

document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
});

wR1.from('.responsiveH2', {
    scrollTrigger: {
        trigger: ".webStandard__desc",
        start: "100% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    textShadow: 0,
    color: "#121212",
    opacity: 1,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.responsive__descH3', {
    scrollTrigger: {
        trigger: ".responsiveH2",
        start: "20% 20%",
        end: "100%",
        markers: false,
        scrub: 1,
    },
    textShadow: "-1px 0 #121212, 0 1px #121212, 1px 0 #121212, 0 -1px #121212",
    color: "#eee",
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.responsive__descP', {
    scrollTrigger: {
        trigger: ".responsiveH2",
        start: "30% 20%",
        end: "100%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.responsiveImg', {
    scrollTrigger: {
        trigger: ".responsiveH2",
        start: "40% 20%",
        end: "80%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
const options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};
// responsive img
let revealCallback2 = (entries, self) => {
entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector("img");

    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
        revealAnim.set(container, {
            visibility: "visible"
    });
        revealAnim.fromTo(
            container,
            {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1,
                ease: easeInOut
            }
        );
        revealAnim.from(img, 1, {
            scale: 1.7,
            ease: easeInOut,
            delay: -1
        });
            self.unobserve(entry.target);
        }
    });
};
let revealObserver2 = new IntersectionObserver(revealCallback2, options2);

document.querySelectorAll(".reveal2").forEach((reveal) => {
    revealObserver.observe(reveal);
});



// 글씨 호버시 이미지 나오게
let menuItem = document.querySelectorAll(".view");
let menuImage = document.querySelectorAll(".menu__item-image");

// adding eventListeners to all the menuItems.
for (let i = 0; i < 6; i++) {
// image reveal animation
const animation = gsap.to(menuImage[i], {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    ease: "ease-in-out"
});

menuItem[i].addEventListener("mouseenter", () => animation.play());
menuItem[i].addEventListener("mouseleave", () => animation.reverse());

//   initialization
animation.reverse();
}

//   to move image along with cursor
function moveText(e) {
    gsap.to([...menuImage], {
        css: {
            left: e.pageX + 50,
            top: e.pageY,
        },
        duration: 0.3,
    });
}

menuItem.forEach((el) => {
el.addEventListener("mousemove", moveText);
});