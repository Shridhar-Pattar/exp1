document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor behavior

            const targetId = this.getAttribute('href'); // Get the href value (e.g., #about)
            const targetElement = document.querySelector(targetId); // Find the target element

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Scroll smoothly to the target element
                });
            }
        });
    });
});
