// ==========================
// Typing Animation
// ==========================

new Typed(".typing", {
    strings: [
        "Data Analyst",
        "Power BI Developer",
        "SQL Analyst",
        "Python Programmer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// ==========================
// Scroll Reveal Animation
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ==========================
// Dark / Light Theme Toggle
// ==========================

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon = toggleBtn.querySelector("i");

        if (document.body.classList.contains("light-mode")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("theme", "light");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("theme", "dark");

        }

    });

}

// Load Saved Theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const icon = document.querySelector("#theme-toggle i");

    if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

}

// ==========================
// Achievement Counter
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

const startCounter = () => {

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(targetText);

        if (isNaN(target)) return;

        let count = 0;

        const updateCounter = () => {

            const increment = target / 50;

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count) +
                    (targetText.includes("+") ? "+" : "");

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = targetText;

            }

        };

        updateCounter();

    });

};

startCounter();

// ==========================
// Smooth Scroll Navigation
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});