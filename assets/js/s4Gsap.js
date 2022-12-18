// front__main
let textWrapperFE = document.querySelector('#front__main > div:nth-child(1)');
textWrapperFE.innerHTML = textWrapperFE.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('#front__main > div:nth-child(1) .letter', 1.5, {
    scrollTrigger: {
        trigger: "#front__main",
        start: "-20% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);

s1.from('#front__main > div:nth-child(2)', {
    scrollTrigger: {
        trigger: "#front__main",
        start: "-10% 00%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)



// react__site
s1.from('.react__site-title > div:nth-child(1)', {
    scrollTrigger: {
        trigger: ".react__site",
        start: "-40% 20%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.react__site-view', {
    scrollTrigger: {
        trigger: ".react__site",
        start: "-30% 20%",
        end: "20%",
        markers: false,
        scrub: 1,
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

s1.from('.react__site > div:nth-child(3)', {
    scrollTrigger: {
        trigger: ".react__site",
        start: "00% 20%",
        end: "30%",
        markers: false,
        scrub: 1,
    },
    x: -200,
    opacity: 0,
    duration: 5,
    ease: "power4",
}, 0)

s1.from('.react__site-img > div:nth-child(2) a img', {
    scrollTrigger: {
        trigger: ".react__site",
        start: "-50% 20%",
        end: "10% 20%",
        markers: false,
        scrub: 1,
    },
    x: 2000,
    duration: 1,
    ease: "power4.in",
}, 0)



// react__main
let textWrapperRM = document.querySelector('.react__main');
textWrapperRM.innerHTML = textWrapperRM.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('.react__main .letter', 1.5, {
    scrollTrigger: {
        trigger: ".react__main",
        start: "-1000% 00%",
        end: "00%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);



// react&vue pin
gsap.to(".react__api", {
    scrollTrigger: {
      trigger: ".react__api",
      start: "top top",
      pin: true,
      pinSpacing: false,
      refreshPriority: -1
    }
});

gsap.to(".react__youtube", {
    scrollTrigger: {
      trigger: ".react__youtube",
      start: "top top",
      pin: true,
      pinSpacing: false,
      refreshPriority: -1
    }
});

gsap.to(".vue__site", {
    scrollTrigger: {
      trigger: ".vue__site",
      start: "top top",
      pin: true,
      pinSpacing: false,
      refreshPriority: -1
    }
});

gsap.to(".vue__api", {
    scrollTrigger: {
      trigger: ".vue__api",
      start: "top top",
      refreshPriority: -1
    }
});