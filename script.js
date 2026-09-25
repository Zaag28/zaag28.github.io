document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       NAVBAR
    ========================================= */

    const navbar = document.getElementById("navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                navbar.style.background = "rgba(8, 8, 12, 0.90)";

            } else {

                navbar.style.background = "rgba(8, 8, 12, 0.45)";

            }

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const elements = document.querySelectorAll(
        ".project-card, .skill-card, .timeline-item, .about-card"
    );

    elements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        observer.observe(element);

    });

});
