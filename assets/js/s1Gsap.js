s1.from('.about__main-text > div:nth-child(1)', {
    x: -120,
    opacity: 0,
    duration: 2,
    ease: 'power4',
}, 0)
s1.from('.about__main-text > div:nth-child(2)', {
    x: 100,
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)
s1.from('.about__main-text > div:nth-child(3)', {
    x: -80,
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0.5)
s2.from('.about__desc', {
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)
s1.from('.about__main-img', {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power4",
}, 0)