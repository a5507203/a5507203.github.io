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


function changeMenu(id) {

    var pubWrapper = document.getElementById("pubWrapper");
    var activities = document.getElementById("activities");
    var supervise = document.getElementById("supervise");
    var awards = document.getElementById("awards");
    var teaching = document.getElementById("teaching");
    var news = document.getElementById("news");
    var goal = document.getElementById("goal");

    let l = [goal, news, supervise, pubWrapper, activities, teaching, awards]



    for (e of l) {

        e.style.display = "none";

    }
    l[id].style.display = "block";
    if (id == 2) {
        l[1].style.display = "block";
        l[0].style.display = "block";
    }



    refreshUI();

}

function openURL() {
    // URL to open
    var url = "https://calendly.com/yu_yao/meeting";

    // Open the URL in a new browser tab
    window.open(url, '_blank').focus();
}