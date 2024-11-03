gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// todo: tambahkan animasi motionPath
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: 'svg',
        start: "top 30%",
        markers: true,
        scrub: 5,
    }
});
timeline.fromTo(
  ".paper-plane",
  { x: 0 },
  {
    duration: 10,
    x: 1000,
    motionPath: {
      path: ".motion-path",
      align: ".motion-path",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
  }
);
