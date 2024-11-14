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
        console.log(index);
        
        navLinks.forEach(link => {
            console.log(link);
            // Ensure navLinks[index] exists before accessing classList
            link.classList.remove("active");    
        });
        /* remove active state from other section and corresponding Nav link.
           by add active class to the current section's link
        */
       // Ensure navLinks[index] exists before accessing classList
       if (navLinks[index]) {
        navLinks[index].classList.add("active");
        console.log(navLinks[index].classList);
        console.log(index);
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
    navLink.textContent = section.getAttribute("data-nav");
    navLink.href = `#${section.id}`;
    navLink.classList.add("menu__link");

    // create an item list then add to page navbar
    const navItem = document.createElement("li");
    
    // attach to navbar
    navList.appendChild(navItem);
    navItem.appendChild(navLink); 

    /* ---------- Scroll to anchor ID using scrollTO event ----------- */
    navLink.addEventListener("click", () => {        
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

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


