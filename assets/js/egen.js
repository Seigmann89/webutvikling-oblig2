window.onload = start;

function start() {
    document.getElementById("menuBtn").addEventListener("click", toggleNav);
}

function navOpen() {
    document.getElementById('minSidenav').style.width = "200px";
    document.getElementById('main').style.marginLeft = "200px";
    document.getElementById('menuBtn').innerHTML = '<a href=\"#\"><span id=\"closeBtn\" class=\"fa fa-times fa-lg\"></span></a>';
}

function navClose() {
    document.getElementById('minSidenav').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
    document.getElementById('menuBtn').innerHTML = '<a href="#"><span id="openBtn" class="fa fa-bars fa-lg"></span></a>';
}

function toggleNav() {
    var navSize = document.getElementById("minSidenav").style.width;
    if (navSize === "200px") {
        return navClose();
    } else {
        return navOpen();
    }
}
