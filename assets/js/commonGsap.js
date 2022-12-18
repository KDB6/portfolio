// 배경색 전환
gsap.utils.toArray(".backColor").forEach((elem) => {

let color = elem.getAttribute('data-color');

ScrollTrigger.create({
    trigger: elem,
    start: 'top 1%',
    end: 'bottom 1%',
    markers: false,
        onEnter: () => gsap.to('body', {
            backgroundColor: color,
            duration: 0.5
        }),
        onLeave: () => gsap.to('body', {
            backgroundColor: '#F4E8DB',
            duration: 0.5
        }),
        onLeaveBack: () => gsap.to('body', {
            backgroundColor: '#F4E8DB',
            duration: 0.5
        }),
        onEnterBack: () => gsap.to('body', {
            backgroundColor: color,
            duration: 0.5
        }),
    });
});



// 헤더색 전환
// header > div:nth-child(1)
gsap.utils.toArray(".headerColor").forEach((elem2) => {

let color = elem2.getAttribute('header-color');

ScrollTrigger.create({
    trigger: elem2,
    start: 'top 1%',
    end: 'bottom 1%',
    markers: false,
        onEnter: () => gsap.to('.header > div:nth-child(1) a', {
            color: color,
            duration: 1
        }),
        onLeave: () => gsap.to('.header > div:nth-child(1) a', {
            color: '#222125',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('.header > div:nth-child(1) a', {
            color: '#222125',
            duration: 1
        }),
        onEnterBack: () => gsap.to('.header > div:nth-child(1) a', {
            color: color,
            duration: 1
        }),
    });
});
// header ul li
gsap.utils.toArray(".headerColor").forEach((elem2) => {

let color = elem2.getAttribute('header-color');

ScrollTrigger.create({
    trigger: elem2,
    start: 'top 5%',
    end: 'bottom 5%',
    markers: false,
        onEnter: () => gsap.to('.header > div:nth-child(2) ul li > a', {
            color: color,
            duration: 1
        }),
        onLeave: () => gsap.to('.header > div:nth-child(2) ul li > a', {
            color: '#222125',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('.header > div:nth-child(2) ul li > a', {
            color: '#222125',
            duration: 1
        }),
        onEnterBack: () => gsap.to('.header > div:nth-child(2) ul li > a', {
            color: color,
            duration: 1
        }),
    });
});



// hedaer gsap
let h1 = gsap.timeline({delay: 1});

h1.from('#header', {
    y: -15,
    opacity: 0,
    ease: 'power4',
    duration: 2,
}, 0)



// rotate
gsap.utils.toArray(".rotateColor").forEach((elem3) => {

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
            fill: '#222125',
            stroke: '#222125',
            duration: 1
        }),
        onLeaveBack: () => gsap.to('.link__svg', {
            fill: '#222125',
            stroke: '#222125',
            duration: 1
        }),
        onEnterBack: () => gsap.to('.link__svg', {
            fill: fill,
            stroke: stroke,
            duration: 1
        }),
    });
});



// hedaer gsap
let r1 = gsap.timeline({delay: 1});

h1.from('.rotate', {
    opacity: 0,
    ease: 'power4',
    duration: 1,
}, 0)



// section delay
let s1 = gsap.timeline({delay: 1.5});
let s2 = gsap.timeline({delay: 2.5});