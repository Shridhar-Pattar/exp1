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

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-btn');

    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'https://github.com/Shridhar-Pattar/Portfolio-website/raw/main/Resume_Shridhar_Pattar.pdf';
        link.download = 'Resume.pdf';  // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
