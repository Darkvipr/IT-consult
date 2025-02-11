document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const dropdowns = document.querySelectorAll(".dropdown > a");

    // Toggle the mobile menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Toggle dropdowns
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            this.nextElementSibling.classList.toggle("show");

            // Close other dropdowns
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.classList.remove("show");
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
        }
    });
});







