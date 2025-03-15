document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("toggle-menu");
    const sidebar = document.getElementById("left_side");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const logo = document.getElementById("logo");

    // Otevření a zavření menu
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Přepnutí Dark Mode
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        sidebar.classList.toggle("dark-mode");

        let links = document.querySelectorAll(".nav-link");
        links.forEach(link => link.classList.toggle("dark-mode"));
    });
});
