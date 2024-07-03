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