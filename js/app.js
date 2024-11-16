/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Select all sections and the navigation list container
const sections = document.querySelectorAll("section");
console.log(sections);

// Select Page navbar empty list by id:`navbar__list`
const navList  = document.getElementById("navbar__list");
console.log(navList);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
* @description Function to check which section is currently in view and Add active state class to section in navbar when it is near top of viewport
* @param {number} sections
* @param {number} navLinks
*/
// 
function makeActive(sections, navLinks) {
    sections.forEach((section, index) => {
      const box = section.getBoundingClientRect();    
      // Check if the section is in the viewport
      if (box.top <= window.innerHeight / 2 && box.bottom >= window.innerHeight / 2) {
        /* apply active state on the current section and the corresponding Nav link.
           by removing active class from all links */
        // console.log(index);        
        navLinks.forEach(link => {
            // console.log(link);
            // Ensure navLinks[index] exists before accessing classList
            link.classList.remove("active");    
        });
        /* remove active state from other section and corresponding Nav link.
           by add active class to the current section's link
        */
       // Ensure navLinks[index] exists before accessing classList
       if (navLinks[index]) {
            navLinks[index].classList.add("active");
            // console.log(navLinks[index].classList);
            // console.log(index);
        }
      }
    });
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
sections.forEach(section => {  
    /* ------------------------- build the nav ------------------------ */   
    /* create Anchor element.
       setting attribute:
       - textContent:section-data-nav
       - href: section-id
       - classlist:"menu__link"    
    */
    const navLink = document.createElement("a");  
    // navLink.textContent = section.getAttribute("data-nav");
    navLink.innerHTML = section.getAttribute("data-nav");

    navLink.href = `#${section.id}`;
    navLink.classList.add("menu__link");

    // create an item list then add to page navbar
    const navItem = document.createElement("li");
    
    // attach to navbar
    navList.appendChild(navItem);
    navItem.append(navLink); 

    /* ---------- Scroll to anchor ID using scrollTO event ----------- */
    navLink.addEventListener("click", (event) => { 
        // fix smooth transition  
        event.preventDefault()    
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
          });
      });

  });

/* --- The active section in the Navbar should be highlighted. --- */

// Select all anchors inside navigation
const navLinks = document.querySelectorAll(".menu__link");
// console.log(navLinks);

// Navbar section viewed active
document.addEventListener("scroll", () => {
    makeActive(sections, navLinks);
});

/* --- Add class 'active' to section when near top of viewport --- */
/* Creating an intersection observer 
    https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/

// observer options
const options = {
    root      : null,  // Uses the viewport as the root
    rootMargin: "0px", // allowing intersections to be triggered sooner or later
    threshold : 0.7,   // Trigger when 60% of the section is visible
  };

// observer callback
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'main__active_section' class to the current section
        entry.target.classList.add("main__active_section");
        // updating the link hash to match the id of the visible section
        history.replaceState(null, null, `#${entry.target.id}`);
      } else {
        // Remove 'main__active_section' class when section is out of view
        entry.target.classList.remove("main__active_section");
      }
    });
  }, options);

// activate section view observer
sections.forEach(section => {
    observer.observe(section);
});

/**
 * End Main Functions
 * 
*/

