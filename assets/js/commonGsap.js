// loading
function loading() {
    console.log("loading");
    let progress = $(".progress"),
        progressText = progress.find(".progress-text"),
        imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 1000 / 80);
    imgLoad.on("progress", function () {
        imgLoaded++;
    });
    function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;
        imgCurrent += (target - imgCurrent) * 0.1;
        progressText.text(Math.floor(imgCurrent) + "%");
        if (imgCurrent >= 100) {
            clearInterval(progressTimer);
            progress.delay(1000).animate(
            {
                opacity: 0,
                zIndex: -100,
            },
            400
            );
        $("body").addClass("show");

        let tl = gsap.timeline();
        tl.to(".tit3 span", {
            delay: 1,
            duration: 1,
            stagger: 0.03,
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power4.easeInOut,
        });
        tl.to(".tit6 span", {
            // delay: 1.2,
            duration: 0.8,
            stagger: 0.03,
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power4.easeInOut,
        });
        tl.to("#canvas", { duration: 1, opacity: 1, delay: 1 }, "b");
        tl.to(
            ".tit3",
            { duration: 0.8, paddingTop: "1vw", ease: Power1.easeInOut },
            "b"
        );
        tl.to(
            ".tit6",
            { duration: 0.8, y: 0, ease: Power1.easeInOut },
            "b"
        );
        tl.to(
            ".tit4",
            {
                duration: 1,
                opacity: 1,
                marginLeft: "-40vw",
                ease: Power4.easeInOut,
            },
            "a"
        );
        tl.to(
            ".tit5",
            {
                duration: 1,
                opacity: 1,
                marginLeft: "40vw",
                ease: Power4.easeInOut,
            },
            "a"
        );
        tl.to(
            ".tit1",
            {
                duration: 1,
                opacity: 1,
                marginLeft: "-20vw",
                ease: Power4.easeInOut,
            },
            "a"
        );
        tl.to(
            ".tit2",
            {
                duration: 1,
                opacity: 1,
                marginLeft: "40vw",
                ease: Power4.easeInOut,
            },
            "a"
        );
            tl.to("#header", { duration: 0, top: 0, ease: Power4.easeInOut });
        }
        if (imgCurrent > 99) {
            imgCurrent = 100;
      }
    }
  }
  loading();



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
let h1 = gsap.timeline({delay: 3});

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
let r1 = gsap.timeline({delay: 3.5});

h1.from('.rotate', {
    opacity: 0,
    ease: 'power4',
    duration: 1,
}, 0)



// section delay
let a1 = gsap.timeline({delay: 3.5});
let a2 = gsap.timeline({delay: 4.5});
let s1 = gsap.timeline({delay: 1.5});
let s2 = gsap.timeline({delay: 2.5});