gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-1',
        start: 'center bottom',
        end: 'top top',
        scrub: 2,
        pinSpacing: false,
    }
});

timeline
    .fromTo('.box', 
        { opacity: 1, x: 0, }, 
        { opacity: 0.6, x: 500, rotate: 180, scale: 2, stagger: 0.5 })
    .to('.box', { opacity: 0, x: 1000, rotate: 360, scale: 1, stagger: 0.5 });

    // todo: tambahkan animasi pin pada section-2
timeline
        .to('.box-2', { 
            x: 100,
            scrollTrigger: {
                trigger: '.section-2'
,                end: "center center",
                start: () => `+=${document.querySelector('.box-2').offsetHeight} bottom`,
                pin: '.box-2'
            }
         })