// contact
s1.from('#contact__title', {
    scrollTrigger: {
        trigger: "#contact",
        start: "-10% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    ease: "power4",
}, 0)

let textWrapperCT1 = document.querySelector('.contact__info > div:nth-child(1)');
textWrapperCT1.innerHTML = textWrapperCT1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('.contact__info > div:nth-child(1) .letter', 1.5, {
    scrollTrigger: {
        trigger: "#contact",
        start: "-40% 00%",
        end: "10%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);

let textWrapperCT2 = document.querySelector('.contact__info > div:nth-child(2) a');
textWrapperCT2.innerHTML = textWrapperCT2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

s1 = new TimelineMax();
s1.staggerFrom('.contact__info > div:nth-child(2) a .letter', 1.5, {
    scrollTrigger: {
        trigger: "#contact",
        start: "-30% 00%",
        end: "0%",
        markers: false,
        scrub: 1,
    },
    opacity: 0,
    ease: Power4.easeInOut
}, 0.05, 0.2);