document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');

    modeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', modeToggle.checked);
    });

    // Check the user's preference from local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    modeToggle.checked = isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
});
// Save the user's preference to local storage
window.addEventListener('beforeunload', function () {
    const modeToggle = document.getElementById('modeToggle');
    localStorage.setItem('darkMode', modeToggle.checked);
});



    
document.addEventListener('DOMContentLoaded', function () {
    // Get the "Skills" link
    var skillsLink = document.getElementById('skills');
    var contactUs = document.getElementById('contact-us');
    var achievements = document.getElementById('achievements');
    var blog = document.getElementById('blog');
    var workExperiences = document.getElementById('work-experiences');
    var about = document.getElementById('about');

    // Add a click event listener to the "Skills" link
    skillsLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        console.log('hello');
        // Get the target element's id
        var targetId = 'Skills-main1';

        // Find the target element by its id
        var targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            anime({
                targets: document.documentElement,
                scrollTop: targetElement.offsetTop,
                duration: 550,
                easing: 'easeInOutQuad' // Use your preferred easing function
            });
        }
    });
    workExperiences.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        console.log('hello');
        // Get the target element's id
        var targetId = 'experience-heading';

        // Find the target element by its id
        var targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            anime({
                targets: document.documentElement,
                scrollTop: targetElement.offsetTop,
                duration: 550,
                easing: 'easeInOutQuad' // Use your preferred easing function
            });
        }
    });
    contactUs.addEventListener('click', function (event) {
        // Prevent the default behavior of the linkcontact
        event.preventDefault();
        console.log('hello');
        // Get the target element's id
        var targetId = 'contact';

        // Find the target element by its id
        var targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            anime({
                targets: document.documentElement,
                scrollTop: targetElement.offsetTop,
                duration: 550,
                easing: 'easeInOutQuad' // Use your preferred easing function
            });
        }
    });
    achievements.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        // Get the target element's id
        var targetId = 'AchievementsMain';

        // Find the target element by its id
        var targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            anime({
                targets: document.documentElement,
                scrollTop: targetElement.offsetTop,
                duration: 550,
                easing: 'easeInOutQuad' // Use your preferred easing function
            });
        }
    });
    blog.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        console.log('hello');
        // Get the target element's id
        var targetId = 'blogs';

        // Find the target element by its id
        var targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            anime({
                targets: document.documentElement,
                scrollTop: targetElement.offsetTop,
                duration: 550,
                easing: 'easeInOutQuad' // Use your preferred easing function
            });
        }
    });
    about.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        console.log('hello');
        // Get the target element's id
        var targetId = 'blogs';

        // Find the target element by its id
        var targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            anime({
                targets: document.documentElement,
                scrollTop: targetElement.offsetTop,
                duration: 550,
                easing: 'easeInOutQuad' // Use your preferred easing function
            });
        }
    });
});

// When the user clicks on the button, scroll to the top of the document with a duration of 600ms
topButton.onclick = function() {
    // For modern browsers
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 500
            
        });
};





