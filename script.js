function toggleMenu() {
    var menu = document.getElementById("menuBar");
    if (menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}

function refreshUI(event) {
    if (window.innerWidth >= 1081) {
        document.getElementById("menuBar").style.width = "250px";
        document.getElementById("menuBar").style.display = "block";
    }
    if (window.innerWidth <= 600) {
        document.getElementById("menuBar").style.width = "0";
        document.getElementById("hamburgerIcon").style.display = "block";
        document.getElementById("menuBar").style.overflow = "hidden";

    }
    if (window.innerWidth >= 601 && window.innerWidth <= 1080) {
        document.getElementById("menuBar").style.width = "100px";


    }

};

window.onresize = refreshUI;


// Navigate to a specific menu section (using semantic names)
function changeMenu(menuId) {
    // Hide all sections first
    const allSections = SiteConfig.getAllSections();
    allSections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.style.display = "none";
        }
    });

    // Show sections for the selected menu
    const sectionsToShow = SiteConfig.getSectionsForMenu(menuId);
    sectionsToShow.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.style.display = "block";
        }
    });

    refreshUI();
}

