/* Toggle Icon Navbar */


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}


/* Scroll Section Active Link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >=offset && top < offset + height){
            navLinks.forEach( links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
        };
    });


    /* Sticky Navbar*/

    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


    /*Scroll Reveal JS*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
})

ScrollReveal().reveal('.home-content, .heading, .header', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img,  .portfolio-box, .certificate-img', {origin: 'left'});
ScrollReveal().reveal('home-content p, .about-content, .certification-content', {origin: 'right'});

    /*Typed JS*/

const typed = new Typed('#animated-text', {
    strings: [' Frontend Developer', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});