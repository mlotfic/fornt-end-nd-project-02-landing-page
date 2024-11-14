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
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(section => {     
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
  });

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


