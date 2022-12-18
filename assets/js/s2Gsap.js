// web__main
s1.from('.web__main-text > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#web__main",
        start: "-40% 00%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.web__main-text > div:nth-child(2)', {
    scrollTrigger: {
        trigger: "#web__main",
        start: "-20% 0%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.web__main-back > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#web__main",
        start: "-50% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    opacity: 0.8,
    duration: 1,
    ease: "power4",
}, 0)



// web__standard
s1.from('#web__standard > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#web__standard",
        start: "-100% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    textShadow: 0,
    color: "#222125",
    opacity: 0.7,
    duration: 1,
    ease: "power4",
}, 0)

const options = {
    root: null,
    rootMargin: "500px",
    threshold: 0.9,
};
let revealCallback = (entries, self) => {
    entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector(".standard__img > a img");

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
let revealObserver = new IntersectionObserver(revealCallback, options);
document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
});
s1.from('.standard__img', {
    scrollTrigger: {
        trigger: "#web__standard",
        start: "-50% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.standard__desc > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#web__standard",
        start: "10% 00%",
        end: "50%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.standard__desc > div:nth-child(2)', {
    scrollTrigger: {
        trigger: "#web__standard",
        start: "20% 00%",
        end: "60%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.standard__view', {
    scrollTrigger: {
        trigger: "#web__standard",
        start: "20% 00%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    x: 30,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// web__responsive
s1.from('#web__responsive > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#web__responsive",
        start: "-100% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    textShadow: 0,
    color: "#222125",
    opacity: 0.7,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.responsive__desc > div:nth-child(1)', {
    scrollTrigger: {
        trigger: "#web__responsive",
        start: "-40% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.responsive__desc > div:nth-child(2)', {
    scrollTrigger: {
        trigger: "#web__responsive",
        start: "-30% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.responsive__view', {
    scrollTrigger: {
        trigger: "#web__responsive",
        start: "-25% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    x: 30,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

const options2 = {
    root: null,
    rootMargin: "500px",
    threshold: 0.9,
};
let revealCallback2 = (entries, self) => {
    entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector(".responsive__img > a img");

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
let revealObserver2 = new IntersectionObserver(revealCallback2, options2);
document.querySelectorAll(".reveal2").forEach((reveal) => {
    revealObserver2.observe(reveal);
});
s1.from('.responsive__img', {
    scrollTrigger: {
        trigger: "#web__responsive",
        start: "-50% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)