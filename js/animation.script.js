document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline({
        defaults: {
        ease: "power3.out",
    duration: 0.9
        }
    });

    // Logo
    tl.from("#nav-logo", {
        x: -40,
    opacity: 0
    })

    // Nav Links stagger
    .from(".nav-item", {
        y: -20,
    opacity: 0,
    stagger: 0.1
    }, "-=0.6")

    // CTA button
    .from("#nav-cta", {
        x: 30,
    opacity: 0,
    scale: 0.95
    }, "-=0.6")

    // Theme toggle
    .from("#theme-toggle", {
        rotate: -15,
    opacity: 0,
    scale: 0.8
    }, "-=0.7");

});
