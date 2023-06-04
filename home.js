/* Nav Toggle */

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(s){
    s.name = s.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}
/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});
/* Scroll Reveal WHy Choose You */
ScrollReveal().reveal('.quote-one', { delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.quote-two', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.info-box', { delay: 300, origin: 'right'});

/* Testimonial Scroll in */
ScrollReveal().reveal('.consultation', { delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.variety', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.dedicated', { delay: 400, origin: 'bottom'});


