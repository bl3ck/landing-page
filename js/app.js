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

const sectionsObject = setSectionNameAndHash(sections);
console.log('Sections Object', sectionsObject);

setNavMenuLis = (sectionsObject) => {

    let nav_menu_lis = []

    sectionsObject.forEach((section) => {
        const nav_item = document.createElement('li');
        nav_item.innerHTML = `<a class="menu__link" href="#${section.hash}">${section.name}</a>`;
        nav_menu_lis.push(nav_item);
        document.getElementById("navbar__list").appendChild(nav_item);
    });

    // sectionsObject.forEach((section) => {
    //     let li_node = document.createElement("li");
    //     let data = 'fish';
    //     nav_menu_lis.push(li_node);
    // });

    return nav_menu_lis;
}

console.log('Menu Lis', setNavMenuLis(sectionsObject));

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
// root is the browser viewport / screen
var observer = new IntersectionObserver(function (entries) {
    // since there is a single target to be observed, there will be only one entry
    let section = entries[0].target;
    if (entries[0]['isIntersecting'] === true) {
        if (entries[0]['intersectionRatio'] > 0.2) {
            // let current_section = document.getElementById(`${section.hash}`);
            section.classList.toggle('your-active-class');
            console.log('class list', section.classList);
        }
    }
    else {
        // section.classList.toggle('your-active-class');
        console.log('R & D class list', section.classList);
    }
}, { threshold: [0, 0.3] });

sectionsObject.forEach(section => {
    observer.observe(document.querySelector(`#${section.hash}`));
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


