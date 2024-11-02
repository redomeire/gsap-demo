/**
 * atur default value
 * anda bisa mengatur semua properti bawaan tween
 */
// gsap.defaults({ duration: 2 });

// gsap tween 
/**
 * to()
 */
// gsap.to('img', { x: 300, y: 300, scale: 2, duration: 1 });

/**
 * from()
 */
// gsap.from('img', { x: 300, y: 300, scale: 2, duration: 1 });

/**
 * fromTo()
 */
// gsap.fromTo('img', 
//     { x: 300, y: 300, scale: 2 }, { x: 0, y: 0, scale: 1, duration: 1 }
// );

/**
 * delay
 */
// gsap.to('img', { x: 300, y: 300, scale: 2, duration: 1, delay: 2 });

/**
 * repeat
 */
// gsap.to('img', { x: 300, y: 300, scale: 2, duration: 1, repeat: 3 });

/**
 * yoyo
 */
// gsap.to('img', { x: 300, y: 300, scale: 2, duration: 1, repeat: 2, yoyo: true });

/**
 * repeatDelay
 */
// gsap.to('img', { x: 300, y: 300, scale: 2, duration: 1, repeat: 2, repeatDelay: 2 });

/**
 * ease
 */
// gsap.to('img', { x: 300, y: 300, scale: 2, duration: 2.5, ease: 'back.out(1.7)' });

/**
 * stagger
 */
// gsap.to('img', { y: 200, duration: 0.5, stagger: 0.5, ease: 'bounce' });

/**
 * timeline()
 * 
 * example: without timeline
 */ 
/*
 * 
 * todo: with timeline
*/
const tl = gsap.timeline({ yoyo: true, repeat: -1 });
tl.to('.container img', { x: 100, duration: 1 });
tl.to('.container img', { y: 100, duration: 1 });
tl.to('.container img', { x: 200, duration: 1 }, "+=2");



