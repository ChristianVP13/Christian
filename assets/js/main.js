const dynamicText = document.getElementById("dynamic-text");
const text = "CHRISTIAN";
let index = 0;
let typingSpeed = 150; // Base typing speed (in ms)
let erasingSpeed = 100; // Base erasing speed (in ms)

// Typing effect
function typeEffect() {
    if (index < text.length) {
        dynamicText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed - Math.random() * 50); // Slight speed variation
    } else {
        setTimeout(eraseEffect, 1500); // Pause after typing
    }
}

// Erasing effect
function eraseEffect() {
    if (index > 0) {
        dynamicText.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(eraseEffect, erasingSpeed - Math.random() * 50); // Slight speed variation
    } else {
        setTimeout(typeEffect, 1000); // Pause before re-typing
    }
}
// Waving Hand Effect
lottie.loadAnimation({
            container: document.getElementById('waving-hand'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/lottie.json'
        });

window.onload = typeEffect;

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== LoGo =====*/
const logoElement = document.querySelector('a.nav__logo'); // Select the logo element

logoElement.innerHTML = logoElement.textContent.replace(/\./g, '<span class="dot">.</span>'); // Wrap dots in spans