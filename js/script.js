var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Graphic Designer", "Engineer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// Select all navigation links
const navLinks = document.querySelectorAll('.nav li a');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add the 'active' class to the clicked link
        link.classList.add('active');
    });
});