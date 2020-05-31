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
    let sections = Array.from(document.getElementsByTagName('section'));
    let navSections = sections.filter((section) => {
        if (section.dataset.nav) {
            return section;
        }
    });

    /**
     * End Global Variables
     * Start Helper Functions
     * 
    */

    /**
    * @description Get all section ID's and Names for menu
    * @param {Array} navSections
    * @returns {Array} List withSection IDs
    */
    setSectionNameAndHash = (navSections) => {
        let sectionIDs = [];

        navSections.forEach(section => {
            const section_name = section.dataset.nav;
            const section_hash = section.id
            sectionIDs.push({
                name: section_name,
                hash: section_hash
            });
        });

        return sectionIDs;
    }

    const sectionsObject = setSectionNameAndHash(navSections);

    setNavMenuLis = (sectionsObject) => {

        let navMenuLis = []

        sectionsObject.forEach((section) => {
            const navItem = document.createElement('li');
            navItem.innerHTML = `<a class="menu__link" data-id="${section.hash}" href="#${section.hash}">${section.name}</a>`;
            navMenuLis.push(navItem);
            document.getElementById("navbar__list").appendChild(navItem);
            navItem.onclick = (e) => {
                e.preventDefault();
                const elementToScrollTo = document.getElementById(`${section.hash}`)
                elementToScrollTo.scrollIntoView({ block: 'center', behavior: 'smooth' })
            };
        });

        return navMenuLis;
    }

    /**
     * End Helper Functions
     * Begin Main Functions
     *
    */

    // build the nav
    setNavMenuLis(sectionsObject);


    // root is the browser viewport / screen
    var observer = new IntersectionObserver((entries) => {
        // since there is a single target to be observed, there will be only one entry
        let section = entries[0].target;

        let navListElement = document.querySelector(`.menu__link[data-id='${section.id}']`);

        // get_links
        if (entries[0]['isIntersecting'] === true) {

            if (entries[0]['intersectionRatio'] > 0.8) {
                console.log('Intersecting');
                // let current_section = document.getElementById(`${section.hash}`);
                section.classList.toggle('active__section');
                // console.log('class list', section.classList);
                navListElement.classList.add('active__link')
            } else if (navListElement.classList.contains('active__link')) {
                navListElement.classList.toggle('active__link')
            }
        } else {
            if (section.classList.contains('active__section')) {
                section.classList.remove('active__section');
            }
        }

    }, { threshold: [0, 0.8] });

    sectionsObject.forEach(section => {
        observer.observe(document.querySelector(`#${section.hash}`));
    });
});