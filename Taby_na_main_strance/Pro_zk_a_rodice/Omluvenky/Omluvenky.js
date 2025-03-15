document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("toggle-menu");
    const sidebar = document.getElementById("left_side"); 

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        sidebar.classList.toggle("dark-mode");

        let links = document.querySelectorAll(".nav-link");
        links.forEach(link => link.classList.toggle("dark-mode"));
    });
});
