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

// 글씨 gsap
gsap.registerPlugin(ScrollTrigger);

// thumbnail
let svg1 = document.querySelector(".artMainLine" + 1);
let tl = new TimelineMax({ repeat: -1, yoyo: true });

//create a timeline with 2 tweens that draw 2 separate strokes
tl.add(createLineTween(svg1));

//this function creates a single tween that animates the stroke of an svg
function createLineTween(svg) {
  var pathObject = { length: 0, pathLength: svg.getTotalLength() };
  var tween = TweenLite.to(pathObject, 2, {
    length: pathObject.pathLength,
    onUpdate: drawLine,
    onUpdateParams: [pathObject, svg],
    immediateRender: true
  });
  return tween;
}
//update stroke
function drawLine(obj, svg) {
  svg.style.strokeDasharray = [obj.length, obj.pathLength].join(" ");
}

let t2 = gsap.timeline({delay: 0.8});
let t3 = gsap.timeline({delay: 2});

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

// webStandard
let wSt1 = gsap.timeline({delay: 2});

wSt1.from('.webStandardH1', {
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
wSt1.from('.webStandardImg', {
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
wSt1.from('.webStandard__descP', {
    scrollTrigger: {
        trigger: ".webStandard__img",
        start: "40% 100%",
        end: "100%",
        markers: true,
        scrub: 1,
    },
    opacity: 0,
    duration: 2,
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
        revealAnim.from(img, 2, {
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


// 글씨 호버시 이미지 나오게
let menuItem = document.querySelectorAll(".view");
let menuImage = document.querySelectorAll(".menu__item-image");

// adding eventListeners to all the menuItems.
for (let i = 0; i < 6; i++) {
//   image reveal animation
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