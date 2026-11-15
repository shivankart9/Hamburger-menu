document.querySelector('.hamburger-menu').onclick = function() {
    document.querySelector('nav').style.display = "flex"
    document.querySelector('.hamburger-menu').style.display = "none"
}

document.querySelector('.close-icon').onclick = function() {
    document.querySelector('nav').style.display = "none"
    document.querySelector('.hamburger-menu').style.display = "block"
}