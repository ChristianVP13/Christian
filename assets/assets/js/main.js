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
// Select all sections with an ID attribute
const sections = document.querySelectorAll('section[id]');

// Throttle function to improve performance during scrolling
const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Function to activate the correct menu link based on scroll position
const scrollActive = () => {
  const scrollDown = window.scrollY; // Get current scroll position

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // Offset for sticky header or padding
    const sectionId = current.getAttribute('id');

    // Select the corresponding nav link
    const sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // Add active class when section is in the viewport
      sectionsClass?.classList.add('active-link');
    } else {
      // Remove active class when section is out of the viewport
      sectionsClass?.classList.remove('active-link');
    }
  });
};

// Add a throttled scroll event listener for better performance
window.addEventListener('scroll', throttle(scrollActive, 100));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 50,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


/*===== About Me Button =====*/
document.getElementById("learn__button1").addEventListener("click", function(event) {
    });