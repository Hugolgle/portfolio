// ---------------------- BOUTON REMONTE ---------------------------
const menu = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    menu.style.backgroundColor = "#ffffff";
    menu.style.boxShadow = "0px 4px 15px 3px rgba(0,0,0,0.48)";
  } else {
    menu.style.backgroundColor = "transparent";
    menu.style.boxShadow = "none";
  }
})

const btnremonte = document.querySelector(".remonte");
window.addEventListener("scroll", () => {
  if (window.scrollY < 1) {
    btnremonte.style.bottom = "-100px";
  } else {
    btnremonte.style.bottom = "0px";
  }
})
// ---------------------- MENU RESPONSIVE ---------------------------
const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".nav-menu");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
  if (entries[0].contentRect.width <= 900) {
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
  entries.forEach(function (entry) {
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
function toggleModal() {
  modalContainer.classList.toggle("active");
}

const modalContainer2 = document.querySelector(".modal-container2");
const modalTriggers2 = document.querySelectorAll(".modal-trigger2");
modalTriggers2.forEach(trigger2 => trigger2.addEventListener("click", toggleModal2));
function toggleModal2() {
  modalContainer2.classList.toggle("active2");
}

const modalContainer3 = document.querySelector(".modal-container3");
const modalTriggers3 = document.querySelectorAll(".modal-trigger3");
modalTriggers3.forEach(trigger3 => trigger3.addEventListener("click", toggleModal3));
function toggleModal3() {
  modalContainer3.classList.toggle("active3");
}

const modalContainer4 = document.querySelector(".modal-container4");
const modalTriggers4 = document.querySelectorAll(".modal-trigger4");
modalTriggers4.forEach(trigger4 => trigger4.addEventListener("click", toggleModal4));
function toggleModal4() {
  modalContainer4.classList.toggle("active4");
}

const modalContainer5 = document.querySelector(".modal-container5");
const modalTriggers5 = document.querySelectorAll(".modal-trigger5");
modalTriggers5.forEach(trigger5 => trigger5.addEventListener("click", toggleModal5));
function toggleModal5() {
  modalContainer5.classList.toggle("active5");
}

const modalContainer6 = document.querySelector(".modal-container6");
const modalTriggers6 = document.querySelectorAll(".modal-trigger6");
modalTriggers6.forEach(trigger6 => trigger6.addEventListener("click", toggleModal6));
function toggleModal6() {
  modalContainer6.classList.toggle("active6");
}

const modalContainer7 = document.querySelector(".modal-container7");
const modalTriggers7 = document.querySelectorAll(".modal-trigger7");
modalTriggers7.forEach(trigger7 => trigger7.addEventListener("click", toggleModal7));
function toggleModal7() {
  modalContainer7.classList.toggle("active7");
}

const modalContainer8 = document.querySelector(".modal-container8");
const modalTriggers8 = document.querySelectorAll(".modal-trigger8");
modalTriggers8.forEach(trigger8 => trigger8.addEventListener("click", toggleModal8));
function toggleModal8() {
  modalContainer8.classList.toggle("active8");
}

const modalContainer9 = document.querySelector(".modal-container9");
const modalTriggers9 = document.querySelectorAll(".modal-trigger9");
modalTriggers9.forEach(trigger9 => trigger9.addEventListener("click", toggleModal9));
function toggleModal9() {
  modalContainer9.classList.toggle("active9");
}

const modalContainer10 = document.querySelector(".modal-container10");
const modalTriggers10 = document.querySelectorAll(".modal-trigger10");
modalTriggers10.forEach(trigger10 => trigger10.addEventListener("click", toggleModal10));
function toggleModal10() {
  modalContainer10.classList.toggle("active10");
}

const modalContainer11 = document.querySelector(".modal-container11");
const modalTriggers11 = document.querySelectorAll(".modal-trigger11");
modalTriggers11.forEach(trigger11 => trigger11.addEventListener("click", toggleModal11));
function toggleModal11() {
  modalContainer11.classList.toggle("active11");
}

const modalContainerstage1 = document.querySelector(".modal-containerstage1");
const modalTriggersstage1 = document.querySelectorAll(".modal-triggerstage1");
modalTriggersstage1.forEach(triggerstage1 => triggerstage1.addEventListener("click", toggleModalstage1));
function toggleModalstage1() {
  modalContainerstage1.classList.toggle("activestage1");
}

const modalContainerstage2 = document.querySelector(".modal-containerstage2");
const modalTriggersstage2 = document.querySelectorAll(".modal-triggerstage2");
modalTriggersstage2.forEach(triggerstage2 => triggerstage2.addEventListener("click", toggleModalstage2));
function toggleModalstage2() {
  modalContainerstage2.classList.toggle("activestage2");
}





// -------------------- FILTRE PROJETS -----------------------------------


const buttontout = document.querySelector("button.tout");
const buttonsem1 = document.querySelector("button.tagsem1");
const buttonsem2 = document.querySelector("button.tagsem2");
const buttonsem3 = document.querySelector("button.tagsem3");
const buttonsem4 = document.querySelector("button.tagsem4");

const projet1 = document.getElementById("projet1");
const projet2 = document.getElementById("projet2");
const projet3 = document.getElementById("projet3");
const projet4 = document.getElementById("projet4");
const projet5 = document.getElementById("projet5");
const projet6 = document.getElementById("projet6");
const projet7 = document.getElementById("projet7");
const projet8 = document.getElementById("projet8");
const projet9 = document.getElementById("projet9");


buttontout.addEventListener('click', () => {
  projet1.style.display = "flex";
  projet2.style.display = "flex";
  projet3.style.display = "flex";
  projet4.style.display = "flex";
  projet5.style.display = "flex";
  projet6.style.display = "flex";
  projet7.style.display = "flex";
  projet8.style.display = "flex";
  projet9.style.display = "flex";
});

buttonsem1.addEventListener('click', () => {
  projet1.style.display = "flex";
  projet2.style.display = "flex";
  projet3.style.display = "flex";
  projet4.style.display = "flex";
  projet5.style.display = "none";
  projet6.style.display = "none";
  projet7.style.display = "none";
  projet8.style.display = "none";
  projet9.style.display = "none";
});

buttonsem2.addEventListener('click', () => {
  projet1.style.display = "none";
  projet2.style.display = "none";
  projet3.style.display = "none";
  projet4.style.display = "none";
  projet5.style.display = "flex";
  projet6.style.display = "flex";
  projet7.style.display = "none";
  projet8.style.display = "none";
  projet9.style.display = "none";
});

buttonsem3.addEventListener('click', () => {
  projet1.style.display = "none";
  projet2.style.display = "none";
  projet3.style.display = "none";
  projet4.style.display = "none";
  projet5.style.display = "none";
  projet6.style.display = "none";
  projet7.style.display = "flex";
  projet8.style.display = "flex";
  projet9.style.display = "none";
});

buttonsem4.addEventListener('click', () => {
  projet1.style.display = "none";
  projet2.style.display = "none";
  projet3.style.display = "none";
  projet4.style.display = "none";
  projet5.style.display = "none";
  projet6.style.display = "none";
  projet7.style.display = "none";
  projet8.style.display = "none";
  projet9.style.display = "flex";
});

// ----------------- APPARITION PROJET -------------------------



// ----------------- BOUTON CLOSE MESSAGE ENVOYE -------------------------
const closemessageetat = document.querySelector("div.close");
const messageetatcontact = document.querySelector("div.messageetatcontact");

closemessageetat.addEventListener('click', () => {
  messageetatcontact.style.display = "none";
});