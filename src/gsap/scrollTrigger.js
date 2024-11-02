gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-1',
        start: 'center bottom',
        end: 'top top',
        scrub: 2,
        pinSpacing: false,
        // markers: true
    }
});

timeline
    .fromTo('.box', 
        { opacity: 1, x: 0, }, 
        { opacity: 0.6, x: 500, rotate: 180, scale: 2, stagger: 0.5 })
    .to('.box', { opacity: 0, x: 1000, rotate: 360, scale: 1, stagger: 0.5 });