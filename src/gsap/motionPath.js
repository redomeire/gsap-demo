gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const animation = gsap.fromTo(".paper-plane", { rotate: 180 } ,{
    duration: 10,
    motionPath: {
        path: ".motion-path",
        align: ".motion-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
    }
})