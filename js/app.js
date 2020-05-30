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

// Get all section ID's and Names for menu
setSectionNameAndHash = (sections) => {
    let section_IDs = [];

    sections.forEach(section => {
        const section_name = section.dataset.nav;
        const section_hash = section.id
        section_IDs.push({
            name: section_name,
            hash: section_hash
        });
    });

    return section_IDs;
}

// 

const SectionsObject = setSectionNameAndHash(sections);
console.log('Sections Object', SectionsObject);

setNavMenuLis = (SectionsObject) => {

    let nav_menu_lis = []

    SectionsObject.forEach((section) => {
        const nav_item = document.createElement('li');
        nav_item.innerHTML = `<a class="menu__link" href="#${section.hash}">${section.name}</a>`;
        nav_menu_lis.push(nav_item);
        document.getElementById("navbar__list").appendChild(nav_item);
    });

    // SectionsObject.forEach((section) => {
    //     let li_node = document.createElement("li");
    //     let data = 'fish';
    //     nav_menu_lis.push(li_node);
    // });

    return nav_menu_lis;
}

console.log('Menu Lis', setNavMenuLis(SectionsObject));

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


