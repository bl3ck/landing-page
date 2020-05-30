window.addEventListener('load', function () {
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

    let navSections = sections.filter((section) => {
        if (section.dataset.nav) {
            return section;
        }
    }
    );
    console.log('Section with Nav', navSections);

    function scrollTo(target) {
        target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    // Get all section ID's and Names for menu
    setSectionNameAndHash = (navSections) => {
        let section_IDs = [];

        navSections.forEach(section => {
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

    const sectionsObject = setSectionNameAndHash(navSections);
    console.log('Sections Object', sectionsObject);

    setNavMenuLis = (sectionsObject) => {

        let nav_menu_lis = []

        sectionsObject.forEach((section) => {
            const nav_item = document.createElement('li');
            nav_item.innerHTML = `<a class="menu__link" data-id="${section.hash}" href="#${section.hash}">${section.name}</a>`;
            nav_menu_lis.push(nav_item);
            document.getElementById("navbar__list").appendChild(nav_item);
            nav_item.onclick = (e) => {
                e.preventDefault();
                const elementToScrollTo = document.getElementById(`${section.hash}`)
                elementToScrollTo.scrollIntoView({ block: 'center', behavior: 'smooth' })

                // scrollTo((`#${section.hash}`));
            };
        });

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
    var observer = new IntersectionObserver((entries) => {
        // since there is a single target to be observed, there will be only one entry
        let section = entries[0].target;
        // console.log('Section list', section);

        const navListElement = document.querySelector(`.menu__link[data-id='${section.id}']`);
        const section_h = document.getElementById(section.hash)

        // get_links
        if (entries[0]['isIntersecting'] === true) {

            if (entries[0]['intersectionRatio'] > 0.8) {
                console.log('Intersecting');
                // let current_section = document.getElementById(`${section.hash}`);
                section.classList.toggle('your-active-class');
                // console.log('class list', section.classList);
                navListElement.classList.add('active__link')
            }
            else if (navListElement.classList.contains('active__link')) {
                navListElement.classList.remove('active__link')
            }
        }
        else {
            section.classList.toggle('your-active-class');
            console.log('Not Intersecting');
        }

    }, { threshold: [0, 0.8] });

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



});