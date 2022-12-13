// 배경색 전환
gsap.utils.toArray(".backColor").forEach((elem) => {

let color = elem.getAttribute('data-color');

ScrollTrigger.create({
    trigger: elem,
    start: 'top 1%',
    end: 'bottom 1%',
    markers: false,
        onEnter: () => gsap.to('main', {
            backgroundColor: color,
            duration: 1
        }),
        onLeave: () => gsap.to('main', {
            backgroundColor: '#F8F4ED',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('main', {
            backgroundColor: '#F8F4ED',
            duration: 1
        }),
        onEnterBack: () => gsap.to('main', {
            backgroundColor: color,
            duration: 1
        }),
    });
});



// header KDB6
gsap.utils.toArray(".heaederColor").forEach((elem2) => {

let color = elem2.getAttribute('data-color2');

ScrollTrigger.create({
    trigger: elem2,
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
gsap.utils.toArray(".hedaerColor").forEach((elem2) => {

let color = elem2.getAttribute('data-color2');

ScrollTrigger.create({
    trigger: elem2,
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



// rotate
gsap.utils.toArray(".rotate").forEach((elem3) => {

let fill = elem3.getAttribute('data-fill');
let stroke = elem3.getAttribute('data-stroke');

ScrollTrigger.create({
    trigger: elem3,
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



// 글씨 gsap

// header
let h1 = gsap.timeline({delay: 1});

h1.from('.header__inner', {
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)



// thumbnail
let t1 = gsap.timeline({delay: 1});

// gsap.fromTo('.tum__inner__title span', {
//     x: 50,
//     opacity: 0,
// },
// {
//     delay: 1,
//     duration: 1,
//     x: 0,
//     opacity: 1,
//     ease: 'power2.easeOut',
//     stagger: {
//         from: 'start',
//         amount: 0.5,
//     },
// })
t1.from('.tum__inner__title', {
    opacity: 0,
    ease: 'power4',
    duration: 2,
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
a1.from('.about__desc', {
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
    y: 100,
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
// webStandard
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
    opacity: 0.7,
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
        start: "50% 20%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.view', {
    scrollTrigger: {
        trigger: ".webStandard__img",
        start: "60% 20%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
// webStandard img
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
};
let revealCallback = (entries, self) => {
    entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector(".webStandardImg");

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
        revealAnim.from(img, 4, {
            scale: 1.6,
            ease: easeInOut,
            delay: -1.5,
        });
            self.unobserve(entry.target);
        }
    });
};
let revealObserver = new IntersectionObserver(revealCallback, options);
document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
});
// responsive
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
    opacity: 0.7,
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
        start: "60% 20%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
wR1.from('.viewR', {
    scrollTrigger: {
        trigger: ".responsiveH2",
        start: "60% 20%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
// responsive img
const options2 = {
    root: null,
    rootMargin: "500px",
    threshold: 0.9,
};
let revealCallback2 = (entries, self) => {
    entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector(".responsiveImg", ".gameImgGsap");

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
        revealAnim.from(img, 4, {
            scale: 1.6,
            ease: easeInOut,
            delay: -1.5,
        });
            self.unobserve(entry.target);
        }
    });
};
let revealObserver2 = new IntersectionObserver(revealCallback2, options2);
document.querySelectorAll(".reveal2").forEach((reveal) => {
    revealObserver2.observe(reveal);
});



// javascriptStart
let jS1 = gsap.timeline({delay: 1.5});

jS1.from('#javascriptStart > h2', {
    scrollTrigger: {
        trigger: ".responsiveImg",
        start: "100% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0.7,
    duration: 1,
    ease: "power4",
}, 0)
jS1.from('#javascriptStart > h3', {
    scrollTrigger: {
        trigger: "#javascriptStart > h2",
        start: "10% 20%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
jS1.from('#javascriptStart > h4', {
    scrollTrigger: {
        trigger: "#javascriptStart > h2",
        start: "0% 20%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
jS1.from('#javascriptStart > p', {
    scrollTrigger: {
        trigger: "#javascriptStart > h2",
        start: "20% 20%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 5)



// javascriptBasic
let jB1 = gsap.timeline({delay: 1.5});

jB1.from('#method__change', {
    scrollTrigger: {
        trigger: "#javascriptBasic",
        start: "10% 20%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
jB1.from('.javascriptBasic__desc', {
    scrollTrigger: {
        trigger: "#javascriptBasic",
        start: "10% 20%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// gameMouseTum
let gMT1 = gsap.timeline({delay: 1.5});

gMT1.from('#gameMouseTum', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "110% 20%",
        end: "126%",
        markers: false,
        scrub: 1,
    },
    width: 0,
    duration: 1,
    ease: "power4",
}, 0)
gMT1.from('.gameMouseTumH2', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "120% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gMT1.from('.gameMouseTum__list', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "100% 20%",
        end: "130%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gMT1.from('.gameMouseTumP', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "120% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gMT1.from('.gameTumImg', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "120% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gMT1.from('.mouseImg1', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "120% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gMT1.from('.mouseImg2', {
    scrollTrigger: {
        trigger: ".javascriptBasic__right",
        start: "120% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// gameTum
let gT1 = gsap.timeline({delay: 1.5});

gT1.from('.gameImgGsap', {
    scrollTrigger: {
        trigger: "#gameMouseTum",
        start: "70% 20%",
        end: "150%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gT1.from('.gameTumH2', {
    scrollTrigger: {
        trigger: ".gameImg",
        start: "-30% 20%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    y: -300,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// gameList
let gL1 = gsap.timeline({delay: 1.5});
let gL2 = gsap.timeline({delay: 0.5});

gL1.from('.gameList__left', {
    scrollTrigger: {
        trigger: "#gameList",
        start: "-30% 20%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gL2.from('.music', {
    scrollTrigger: {
        trigger: "#gameList",
        start: "0% 60%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gL2.from('.search', {
    scrollTrigger: {
        trigger: "#gameList",
        start: "26% 60%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gL2.from('.card', {
    scrollTrigger: {
        trigger: "#gameList",
        start: "51% 60%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
gL2.from('.tetris', {
    scrollTrigger: {
        trigger: "#gameList",
        start: "77% 60%",
        end: "70%",
        markers: false,
        scrub: 1,
    },
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// mouse
let m1 = gsap.timeline({delay: 1.5});

m1.from('.mouseH2', {
    scrollTrigger: {
        trigger: "#mouse",
        start: "-20% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
m1.from('.mouse__desc__h2', {
    scrollTrigger: {
        trigger: "#mouse",
        start: "20% 0%",
        end: "40%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
m1.from('.mouse__desc__p', {
    scrollTrigger: {
        trigger: "#mouse",
        start: "20% 0%",
        end: "40%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
m1.from('.mouse__desc__view', {
    scrollTrigger: {
        trigger: "#mouse",
        start: "20% 0%",
        end: "40%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
m1.from('.mouseBg', {
    scrollTrigger: {
        trigger: "#mouse",
        start: "-10% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
m1.from('.mouseCircle', {
    scrollTrigger: {
        trigger: "#mouse",
        start: "-10% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// searchSliderTum
let sST1 = gsap.timeline({delay: 1.5});

gsap.fromTo('.searchSliderTumH2 span', {
        x: 50,
        opacity: 0,
    },
    {
        scrollTrigger: {
            trigger: "#searchSliderTum",
            start: "-250% 00%",
            end: "-100%",
            markers: false,
            scrub: 1,
        },
        delay: 1,
        duration: 1,
        x: 0,
        opacity: 1,
        ease: 'power2.easeOut',
        stagger: {
            from: 'start',
            amount: 0.5,
    },
})
sST1.from('.searchSliderTumP', {
    scrollTrigger: {
        trigger: "#searchSliderTum",
        start: "-250% 00%",
        end: "-200%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// search
let se1 = gsap.timeline({delay: 1.5});

// se1.from('#search', {
//     scrollTrigger: {
//         trigger: "#search",
//         start: "-13% 00%",
//         end: "+=1000",
//         markers: false,
//         scrub: 1,
//         pin: true,
//     },
//     duration: 1,
//     ease: "power4",
// }, 0)
se1.from('.searchH2', {
    scrollTrigger: {
        trigger: "#search",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: 0,
    duration: 1,
    ease: "power4",
}, 0)
se1.from('.search__top__div', {
    scrollTrigger: {
        trigger: "#search",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0.5vw",
    duration: 1,
    ease: "power4",
}, 0)
se1.from('.searchImg', {
    scrollTrigger: {
        trigger: "#search",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
se1.from('.search__bot__div', {
    scrollTrigger: {
        trigger: "#search",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// slider
let sL1 = gsap.timeline({delay: 1.5});

// sL1.from('#slider', {
//     scrollTrigger: {
//         trigger: "#slider",
//         start: "-13% 00%",
//         end: "+=000",
//         markers: false,
//         scrub: 1,
//         pin: true,
//     },
//     duration: 1,
//     ease: "power4",
// }, 0)
sL1.from('.sliderH2', {
    scrollTrigger: {
        trigger: "#slider",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0",
    duration: 1,
    ease: "power4",
}, 0)
sL1.from('.slider__top__div', {
    scrollTrigger: {
        trigger: "#slider",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    letterSpacing: "0.5vw",
    duration: 1,
    ease: "power4",
}, 0)
sL1.from('.sliderImg', {
    scrollTrigger: {
        trigger: "#slider",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
sL1.from('.slider__bot__div', {
    scrollTrigger: {
        trigger: "#slider",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// quizParallax
let textWrapper = document.querySelector('.quizParallax__tum__first');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

tl = new TimelineMax();
tl.staggerFrom('.quizParallax__tum__first .letter', 1.5, {
    scrollTrigger: {
        trigger: ".quizParallax__tum",
        start: "-40% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);

let qP1 = gsap.timeline({delay: 1.5});

qP1.from('.quizParallax__tum__second', {
    scrollTrigger: {
        trigger: ".quizParallax__tum",
        start: "-40% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    x: 400,
    duration: 1,
    ease: "power4",
}, 0)
qP1.from('.quizParallax__tum__third', {
    scrollTrigger: {
        trigger: ".quizParallax__tum",
        start: "-40% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    x: -200,
    duration: 1,
    ease: "power4",
}, 0)
qP1.from('.quizParallax__tum__four', {
    scrollTrigger: {
        trigger: ".quizParallax__tum",
        start: "-20% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)
qP1.from('.quiz1', {
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
qP1.from('.quiz2', {
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
qP1.from('.quiz3', {
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
qP1.from('.quiz4', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-70% 00%",
        end: "-20%",
        markers: false,
        scrub: 1,
    },
    x: 100,
    duration: 1,
    ease: "power4.in",
}, 0)
qP1.from('.quiz5', {
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
qP1.from('.quiz__desc__h2', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-30% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
qP1.from('.quizView', {
    scrollTrigger: {
        trigger: ".quiz",
        start: "-20% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
qP1.from('.parallax1', {
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
qP1.from('.parallax2', {
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
qP1.from('.parallax3', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-20% 30%",
        end: "-0%",
        markers: false,
        scrub: 1,
    },
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
}, 0)
qP1.from('.parallax__desc__h2', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-10% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
qP1.from('.parallax__desc__p', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-10% 00%",
        end: "15%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
qP1.from('.parallaxView', {
    scrollTrigger: {
        trigger: ".parallax",
        start: "-10% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)



// front
gsap.fromTo('.front__title__h2 span', {
    x: 50,
    opacity: 0,
},
{
    scrollTrigger: {
        trigger: "#frontStart",
        start: "-10% 00%",
        end: "12%",
        markers: false,
        scrub: 1,
    },
        delay: 1,
        duration: 1,
        x: 0,
        opacity: 1,
        ease: 'power2.easeOut',
        stagger: {
            from: 'start',
            amount: 0.5,
    },
})

// reactView
let r1 = gsap.timeline({delay: 1.5});

// qP1.from('.front__title__h3', {
//     scrollTrigger: {
//         trigger: "#frontStart",
//         start: "-50% 00%",
//         end: "00%",
//         markers: false,
//         scrub: 1,
//     },
//     opacity: 0,
//     duration: 1,
//     ease: "power4.in",
// }, 0)
r1.from('.reactSite__desc__h2', {
    scrollTrigger: {
        trigger: "#reactSite",
        start: "-50% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
r1.from('.reactSite__desc__ul', {
    scrollTrigger: {
        trigger: "#reactSite",
        start: "-50% 00%",
        end: "-10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
r1.from('.reactSite2', {
    scrollTrigger: {
        trigger: "#reactSite",
        start: "-50% 20%",
        end: "20% 20%",
        markers: false,
        scrub: 1,
    },
    x: 2000,
    duration: 1,
    ease: "power4.in",
}, 0)
r1.from('.reactSite__side', {
    scrollTrigger: {
        trigger: "#reactSite",
        start: "-50% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
r1.from('.front__desc__p', {
    scrollTrigger: {
        trigger: "#frontStart",
        start: "-50% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
ScrollTrigger.create({
    trigger: ".react__api",
    pin: ".react__api",
    markers: false,
    start: "top top",
    end: "bottom top",
  });
ScrollTrigger.create({
    trigger: ".react__api",
    pin: ".react__youtube",
    markers: false,
    start: "top top",
    end: "bottom top+=100%",
});

// reactApi
let rA1 = gsap.timeline({delay: 1.5});

rA1.from('.react__api__desc__one', {
    scrollTrigger: {
        trigger: "#reactView",
        start: "-50% 00%",
        end: "00% 50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
rA1.from('.react__api__desc__h2', {
    scrollTrigger: {
        trigger: "#reactView",
        start: "-40% 00%",
        end: "10% 50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
rA1.from('.react__api__desc__view', {
    scrollTrigger: {
        trigger: "#reactView",
        start: "-30% 00%",
        end: "20% 50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
rA1.from('.react__api__desc__p', {
    scrollTrigger: {
        trigger: "#reactView",
        start: "-20% 00%",
        end: "10% 30%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
rA1.from('.react__api__img__img', {
    scrollTrigger: {
        trigger: "#reactView",
        start: "-50% 00%",
        end: "00% 50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)

// vueView
let v1 = gsap.timeline({delay: 1.5});

gsap.fromTo('.vueView__h2 span', {
    x: 50,
    opacity: 0,
},
{
    scrollTrigger: {
        trigger: "#vueView",
        start: "-70% 00%",
        end: "-40%",
        markers: false,
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    x: 0,
    opacity: 1,
    ease: 'power2.easeOut',
    stagger: {
        from: 'start',
        amount: 0.5,
    },
})
ScrollTrigger.create({
    trigger: ".vueSite",
    pin: ".vueSite",
    markers: false,
    start: "top top",
    end: "bottom top",  
  });
ScrollTrigger.create({
    trigger: ".vueSite",
    pin: ".vueApi",
    markers: false,
    start: "top top",
    end: "bottom top+=100%",
});



// php
let pH1 = gsap.timeline({delay: 1});

// phpstart
pH1.from('#phpStart', {
    scrollTrigger: {
        trigger: "#phpStart",
        start: "0% 00%",
        end: "+=1000",
        markers: false,
        pin: true,
        scrub: 1,
    },
    duration: 1,
    ease: "power4.in",
}, 0)
pH1.from('.phpStart__left__middle__frist', {
    scrollTrigger: {
        trigger: "#phpStart",
        start: "-20% 10%",
        end: "30%",
        markers: true,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
pH1.from('.phpStart__left__middle__second', {
    scrollTrigger: {
        trigger: "#phpStart",
        start: "-20% 10%",
        end: "30%",
        markers: true,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)
pH1.from('.phpStart__left__middle__third', {
    scrollTrigger: {
        trigger: "#phpStart",
        start: "-20% 10%",
        end: "30%",
        markers: true,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4.in",
}, 0)