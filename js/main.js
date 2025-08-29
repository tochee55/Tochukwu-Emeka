/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLists = document.querySelectorAll(".nav__list");
const backDrop = document.querySelector('.backdrop');

const fadeOut = (element, duration = 400) => {
    element.style.opacity = element.style.opacity || 1;
    
    const startTime = Date.now();
    const animate = () => {
        const elapsed = Date.now() - startTime;
        const opacity = 1 - Math.min(elapsed / duration, 1)
        element.style.opacity = opacity;
        
        elapsed < duration ? requestAnimationFrame(animate) : element.style.display = "none";
    };
    animate();
};

// Your original code with fadeOut added using arrow functions
window.addEventListener("load", () => {
    fadeOut(document.querySelector(".loader"));
    
    setTimeout(() => {
        fadeOut(document.querySelector("#preloader"), 600);
    }, 400);
});


navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
    navLists.forEach(link => {
        link.classList.toggle('close-menu')
    })
    navToggle.classList.toggle('toggle');
})

function backDropClicker(){
    backDrop.style.display = 'none';
    navMenu.classList.remove('show-menu');
    navToggle.classList.toggle('toggle');
}

function menuClicker(){
    backDrop.style.display = 'block';
    navMenu.classList.add('show-menu');
}
backDrop.addEventListener('click', backDropClicker);
navToggle.addEventListener('click', menuClicker);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200){
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== FREELANCE SECTION ===============*/

const stacks = [
    "Business Websites",
    "Portfolio Websites",
    "Web Applications", 
    "E-commerce Solutions",
    "Landing Pages",
    "Corporate Websites"
]

let index = 0
let stack = 0
let currentText = ""
let letter = ""


const myStack = () =>{
    if(stack === stacks.length){
        stack = 0
    }
    currentText = stacks[stack]
    letter = currentText.slice(0, ++index)
    document.querySelector(".freelance__subtitle").textContent = letter
    if (letter.length === currentText.length){
        stack++
        index = 0
    }
    setTimeout(myStack, 100)
}
myStack()


/*===== PORTFOLIO =====*/
$('.portfolio__slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin : 30,
	autoplay: true,
	navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
	responsive : {
		0 : {
			items: 1,
		},
		480 : {
			items: 1,
		},
		768 : {
			items: 2,
		},
		1200 : {
			items: 3,
		}
	}
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    // reset: true,
})


sr.reveal(`.home__data`,{
    origin: 'top'
})

sr.reveal(`.services__data,
            .contact__form`,{
    origin: 'right'
})

sr.reveal(`.experience__list`,{
    origin: 'bottom'
})

sr.reveal(` .section__header,
            .contact__content,
            .contact__title`,{
    origin: 'left'
})










