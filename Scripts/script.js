// Smooth Scroll
const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//Bard scroll

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement, {
        offset: 1,
      });
    }
  });
});



//PreLoader
/*
const loader = document.querySelector('.loader');
const circle = document.querySelector('.circle');

window.addEventListener('load', () => {
  circle.style.animationName = "l";

  gsap.to(".circle", {
    duration: 1,
    scale: 100,
    ease: "power.in",
    delay: 1,
  })
  
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
})
*/
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const body = document.querySelector('body');

  setTimeout(() => {
    body.classList.add('scale');
  }, 1000);

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 2500);

});



// Menu
const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const list = document.querySelector('.list');


menu.addEventListener('click', () => {
  list.style.transform  = "translateX(0)";
});

cross.addEventListener('click', () => {
  list.style.transform  = "translateX(100vw)";
});


// Back to top when reloads

window.addEventListener('load', () => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});


// Gsap Animations
window.addEventListener('load', () => {
  gsap.from("nav",{
    duration: 0.25,
    opacity:0,
    ease: "power.in",
    delay: 3.25,
  })

  gsap.from('.locate',{
    duration: 0.25,
    x: "-400px",
    delay: 3.5,
  })

  gsap.fromTo('.web-design h1',{
    y: 100,
    x: 100,
  },{
    duration: 0.5,
    y: 0,
    x: 0,
    delay: 3.75,
  })

  gsap.from('.web-develop h1',{
    duration: 0.5,
    y: 100,
    x: 100,
    delay: 4.25,
  })
} )


//Scroll triggers
const TL = gsap.timeline({
  scrollTrigger:{
    trigger : '.hero',
    start: "6% top",
    end: "bottom center",
    scrub: true,
    toggleActions:" play pause reverse play",
  }
})
// ToggleAction:" onEnter onLeave onEnterBack onLeaveBack",
TL.to(".web-design",{
  x: 100,
  opacity: 0,
  ease: "power.in"
})
TL.to(".web-develop",{
  x: -100,
  opacity: 0,
  ease: "power.in"
}, 0);


// Portfolio reavel on Scroll

const portTL = gsap.timeline({
  scrollTrigger:{
    trigger : '.portfolio',
    start: "top center",
    end: "8% center",
    scrub: true,
    toggleActions:" play pause reverse play",
  }
})

portTL.from('.portfolio', {
  opacity:0,
  y: "120px",
})

// work reavel on scroll

document.querySelectorAll('.work').forEach((work) => {
  const workTL = gsap.timeline({
    scrollTrigger: {
      trigger: work,
      start: "-90% top",
      end: "-70% top",
      scrub: true,
      toggleActions: "play pause reverse play",
    }
  });

  workTL.from(work, {
    y: "12rem",
    opacity: 0,
  });
});


// About Reavel on Scroll

const aboutTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "-50% top",
    end: "-20% top",
    scrub: true,
    markers: false,
    toggleActions: "play pause reverse play",
  }
})

aboutTL.from('.about > *',{
  duration: 1,
  y: "12rem",
  opacity: 0,
})

// Animating The floating boy 
const boyTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".img-float",
    start: "-20% top",
    end: "10% top",
    scrub: true,
    toggleActions: "play pause reverse play",
  }
})

boyTL.from('.boy',{
  scale: 0,
  rotate: "60deg",
  ease: "elastic.out",
})

// Last one for this page the contact section

const contactTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".contact",
    start: "-10% top",
    end: "10% top",
    scrub: true,
    toggleActions: "play pause reverse play",
  }
})

contactTL.from('.arrow',{
  x: "100px",
})