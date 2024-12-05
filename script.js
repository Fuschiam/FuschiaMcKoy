document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-buttons button');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the section that corresponds to the clicked button
            const sectionId = button.getAttribute('data-target');
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});

