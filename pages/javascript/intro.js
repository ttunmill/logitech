// scrollTrigger plugin
//for문으로 대응
let ani = gsap.utils.toArray(".ani") 
for(let i of ani) {
    ScrollTrigger.create({
        trigger : i,
        start:"80% 100%",
        onEnter : () => {i.classList.add("move_ani")},
    })
}

gsap.to(".circle1", {
    scrollTrigger : ".circle1",
    x : 0,
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})
gsap.to(".circle2", {
    scrollTrigger : ".circle2",
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})
gsap.to(".circle3", {
    scrollTrigger : ".circle3",
    x : 0,
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})