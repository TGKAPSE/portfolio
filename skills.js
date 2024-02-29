document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Fill progress bars based on data-value attribute
    const progressBarItems = document.querySelectorAll('.progress-bar');
    progressBarItems.forEach((item) => {
        const progressValue = item.getAttribute('data-value');
        item.style.width = `${progressValue}%`;
    });
});