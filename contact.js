document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to a server)
        alert('Form submitted!');
        // You can replace the alert with your own logic, such as sending data using fetch or XMLHttpRequest.
    });
});
