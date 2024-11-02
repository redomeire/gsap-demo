gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const animation = gsap.fromTo(".paper-plane", { rotate: 180 } ,{
    duration: 10,
    scrollTrigger: {
        trigger: ".section-1",
        start: "80% 80%",
        end: "center start",
        scrub: 3,
        markers: true,
    },
    motionPath: {
        path: ".motion-path",
        align: ".motion-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
    }
})