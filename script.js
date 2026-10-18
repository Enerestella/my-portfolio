let menuButton = document.getElementById("menu-btn")
let navLinks = document.getElementById("nav-links")
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButtont.textContent = isOpen ? "X": "=";
    menuButton.setAttribute("aria-expanded", isOpen)
})

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click",function(){navLinks.classList.remove("active");
        menuButton.textContent = "=";

        menuButton.setAttribute("aria-explained","false");
    })
})
document.getElementById("year").textContent = new Date().getFullYear();