// todo: animasi tween
// gsap.to('.container img', { x: 300, duration: 1, yoyo: true, repeat: 1 });
// gsap.to('.container img', { y: 300, duration: 1, delay: 2 });
// gsap.to('.container img', { x: 700, duration: 1, delay: 4 })

const timeline = gsap.timeline();

timeline.to('.container img', { x: 300, duration: 1 });
timeline.to('.container img', { y: 300, duration: 1 });
timeline.to('.container img', { x: 500, duration: 2 }, "-=1");