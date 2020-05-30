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
 * Define Global Variables
 * 
*/
const nav_bar = document.querySelector('.navbar__menu');
const sections = Array.from(document.getElementsByTagName('section'));

console.log('Navs', nav_bar);
console.log('Sections', sections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

getSectionIDs = (sections) => {
    let section_IDs = [];

    sections.forEach( section => {
        section_IDs.push(section.dataset.nav);
    });

    return section_IDs;
}

console.log('Section IDS', getSectionIDs(sections));

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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


