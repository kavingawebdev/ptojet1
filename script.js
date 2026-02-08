// JavaScript Function - Add to Cart with Alert
function addToCart(itemName) {
    alert('🎉 ' + itemName + ' has been added to your cart!\n\nThank you for choosing Restaurant Galaxy!');
    console.log('Item added to cart: ' + itemName);
    
    // Show success message in console
    console.log('Order Details:');
    console.log('- Item: ' + itemName);
    console.log('- Time: ' + new Date().toLocaleString());
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('✅ Thank you for subscribing!\n\nWe will send updates to: ' + email);
            this.reset();
        });
    }
    
    // Log when page is loaded
    console.log('🌟 Restaurant Galaxy website loaded successfully!');
    console.log('Current Date: ' + new Date().toLocaleDateString());
});

// Add active class to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});