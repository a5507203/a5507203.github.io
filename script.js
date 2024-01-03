function toggleMenu() {
    var menu = document.getElementById("menuBar");
    if (menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}

function refreshUI(event) {
    if (window.innerWidth >= 1001) {
        document.getElementById("menuBar").style.width = "280px";
        document.getElementById("menuBar").style.display = "block";
    }
    if (window.innerWidth <= 600) {
        document.getElementById("menuBar").style.width = "0";
        document.getElementById("hamburgerIcon").style.display = "block";
        document.getElementById("menuBar").style.overflow="hidden";
 
    }
    if (window.innerWidth >= 601 && window.innerWidth <= 1000) {
        document.getElementById("menuBar").style.width = "100px";

 
    }

};

window.onresize = refreshUI


function changeMenu(id) {

    var pubWrapper =  document.getElementById("pubWrapper");
    var activities =  document.getElementById("activities");
    var supervise =  document.getElementById("supervise");
    var awards =  document.getElementById("awards");
    var teaching =  document.getElementById("teaching");

    let l = [supervise,pubWrapper,activities,teaching,awards]
    

        for ( e of l){
      
            e.style.display = "none";

        }
        l[id-1].style.display = "block";

        refreshUI()

}