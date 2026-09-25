// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

window.addEventListener("scroll", function () {

    var navbar = document.getElementById("navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8, 8, 12, 0.90)";

    } else {

        navbar.style.background = "rgba(8, 8, 12, 0.45)";

    }

});


// =========================================
// SCROLL REVEAL
// =========================================

window.addEventListener("load", function () {

    var elements = document.querySelectorAll(
        ".project-card, .skill-card, .timeline-item, .about-card"
    );

    var observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });


    elements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });

});
