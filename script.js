 // Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
    }
}

function changeImage(thumb, newSrc) {
    // Update of main image
    document.querySelector('.main-screenshot').src = newSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(tn => tn.classList.remove('active'));
    thumb.classList.add('active');
}

// Handle scroll events to update active section
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;
    
    // Update active section in nav
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
        }
    });
});