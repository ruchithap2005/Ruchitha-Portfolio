// ========================================
// Portfolio JavaScript
// Ruchitha Portfolio
// ========================================

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Typing Animation

var typed = new Typed("#typing", {

    strings: [

        "Full Stack Web Developer",

        "MERN Stack Enthusiast",

        "Web Developer"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    loop: true

});

// Navbar Background on Scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#0d1117";

        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.background = "rgba(15,23,42,.85)";

        navbar.style.boxShadow = "none";

    }

});

// Scroll Progress Bar

window.onscroll = function () {

    let winScroll = document.body.scrollTop ||

        document.documentElement.scrollTop;

    let height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width =

        scrolled + "%";

};

// Loader

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.display = "none";

});

// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Mobile Menu Close

const navItems = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            new bootstrap.Collapse(menu).toggle();

        }

    });

});

console.log("Portfolio Loaded Successfully");