// ---------------------- BOUTON REMONTE ---------------------------
const menu = document.getElementById("header");
 window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        menu.style.backgroundColor = "#ffffff";
        menu.style.boxShadow = "0px 4px 15px 3px rgba(0,0,0,0.48)";
    }else {
        menu.style.backgroundColor = "transparent";
        menu.style.boxShadow = "none";
    }
 })

 const btnremonte = document.querySelector(".remonte");
 window.addEventListener("scroll", () => {
    if (window.scrollY < 1) {
        btnremonte.style.bottom = "-100px";
    }else {
        btnremonte.style.bottom = "0px";
    }
 })
// ---------------------- MENU RESPONSIVE ---------------------------
 const hamburgerToggler = document.querySelector(".hamburger")
 const navLinksContainer = document.querySelector(".nav-menu");
 
 const toggleNav = () => {
   hamburgerToggler.classList.toggle("open")
 
   const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
   hamburgerToggler.setAttribute("aria-expanded", ariaToggle)
 
   navLinksContainer.classList.toggle("open")
 }
 hamburgerToggler.addEventListener("click", toggleNav)
 
 new ResizeObserver(entries => {
   if(entries[0].contentRect.width <= 900){
     navLinksContainer.style.transition = "transform 0.3s ease-out"
   } else {
     navLinksContainer.style.transition = "none"
   }
 }).observe(document.body)
// ----------------------- ANIMATION SCROLL --------------------------

let ratio = 0.5
 let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }


  let handleIntersect = function (entries, observer) {
    entries.forEach(function (entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }

    });
  }
  
  let observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
    
  })



// ------------------- PAGE DE CHARGEMENT -------------------------

  const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})

// -------------- ANIMATION BARRE DE COMPETENCES -------------------

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');
  
    sections.forEach((section, index) => {
      if (index === 0) return;
      section.style.opacity = "0";
      section.style.transition = "all 1.6s";
    });
  
    skills.forEach((elem, index) => {
  
      elem.style.width = "0";
      elem.style.transition = "all 1.6s";
    });
  
    let sectionObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.opacity = 1;
        }
      });
    });
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  
    let skillsObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.width = elem.dataset.width + '%';
        }
      });
    });
  
    skills.forEach(skill => {
      skillsObserver.observe(skill);
    });
  }
  
  observerIntersectionAnimation();



//   ---------------------- MODAL ---------------------

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));
function toggleModal(){
  modalContainer.classList.toggle("active");
}

const modalContainer2 = document.querySelector(".modal-container2");
const modalTriggers2 = document.querySelectorAll(".modal-trigger2");
modalTriggers2.forEach(trigger2 => trigger2.addEventListener("click", toggleModal2));
function toggleModal2(){
  modalContainer2.classList.toggle("active2");
}

const modalContainer3 = document.querySelector(".modal-container3");
const modalTriggers3 = document.querySelectorAll(".modal-trigger3");
modalTriggers3.forEach(trigger3 => trigger3.addEventListener("click", toggleModal3));
function toggleModal3(){
  modalContainer3.classList.toggle("active3");
}

const modalContainer4 = document.querySelector(".modal-container4");
const modalTriggers4 = document.querySelectorAll(".modal-trigger4");
modalTriggers4.forEach(trigger4 => trigger4.addEventListener("click", toggleModal4));
function toggleModal4(){
  modalContainer4.classList.toggle("active4");
}

const modalContainer5 = document.querySelector(".modal-container5");
const modalTriggers5 = document.querySelectorAll(".modal-trigger5");
modalTriggers5.forEach(trigger5 => trigger5.addEventListener("click", toggleModal5));
function toggleModal5(){
  modalContainer5.classList.toggle("active5");
}

const modalContainer6 = document.querySelector(".modal-container6");
const modalTriggers6 = document.querySelectorAll(".modal-trigger6");
modalTriggers6.forEach(trigger6 => trigger6.addEventListener("click", toggleModal6));
function toggleModal6(){
  modalContainer6.classList.toggle("active6");
}





// -------------------- FILTRE PROJETS -----------------------------------


const buttontout = document.querySelector("button.tout");
const buttonhtml = document.querySelector("button.taghtml");
const buttoncss = document.querySelector("button.tagcss");
const buttonjs = document.querySelector("button.tagjs");
const buttonphp = document.querySelector("button.tagphp");

const projet1 = document.getElementById("projet1");
const projet2 = document.getElementById("projet2");
const projet3 = document.getElementById("projet3");
const projet4 = document.getElementById("projet4");
const projet5 = document.getElementById("projet5");
const projet6 = document.getElementById("projet6");
 

buttontout.addEventListener('click', () => {
  projet1.style.display= "flex";
  projet2.style.display= "flex";
  projet3.style.display= "flex";
  projet4.style.display= "flex";
  projet5.style.display= "flex";
  projet6.style.display= "flex";

});

buttonhtml.addEventListener('click', () => {
  projet1.style.display= "flex";
  projet2.style.display= "none";
  projet3.style.display= "flex";
  projet4.style.display= "flex";
  projet5.style.display= "flex";
  projet6.style.display= "flex";

});

buttoncss.addEventListener('click', () => {
  projet1.style.display= "flex";
  projet2.style.display= "none";
  projet3.style.display= "flex";
  projet4.style.display= "flex";
  projet5.style.display= "none";
  projet6.style.display= "flex";

});

buttonjs.addEventListener('click', () => {
  projet1.style.display= "none";
  projet2.style.display= "flex";
  projet3.style.display= "none";
  projet4.style.display= "none";
  projet5.style.display= "flex";
  projet6.style.display= "none";

});

buttonphp.addEventListener('click', () => {
  projet1.style.display= "none";
  projet2.style.display= "flex";
  projet3.style.display= "none";
  projet4.style.display= "none";
  projet5.style.display= "none";
  projet6.style.display= "none";

});





// ----------------- BOUTON CLOSE MESSAGE ENVOYE -------------------------
const closemessageetat = document.querySelector("div.close");
const messageetatcontact = document.querySelector("div.messageetatcontact");

closemessageetat.addEventListener('click', () => {
  messageetatcontact.style.display = "none";
});