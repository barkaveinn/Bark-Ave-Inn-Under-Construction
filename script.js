// Select service items and display elements
const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage'); // Declare once
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

// Initial state (Default Image and Text)
const defaultImage = "images/pexels-olly-3771110.jpg";
const defaultText = "Welcome to The Bark Avenue Inn. Please click each of the service offerings for more details.";

// Service data
const services = {
    boarding: {
        image: "images/boarding.jpg",
        description: "Overnight Boarding: Comfortable and secure overnight stays for your furry friend."
    },
    daycare: {
        image: "images/daycare.jpg",
        description: "Doggie Daycare: Fun and safe daycare environment where your dog can play and socialize."
    },
    pickup: {
        image: "images/pexels-pickupdropoff.jpg",
        description: "Pickup/Drop-off: Safe and convenient transportation for your pet's comfort and your peace of mind."
    },
    wedding: {
        image: "images/wedding.jpg",
        description: "Wedding Concierge: Specialized service to include your dog in your big day!"
    },
    training: {
        image: "images/training.jpg",
        description: "Training: Professional training services to help your dog learn and grow."
    }
};

// Timer to reset back to default if no click occurs
let resetTimer;

// Function to preload images
function preloadImages() {
    Object.values(services).forEach(service => {
        const img = new Image();
        img.src = service.image;
    });
}

// Function to update the displayed image and description with a delay
function updateContent(item) {
    const serviceKey = item.getAttribute('data-service');
    const { image, description } = services[serviceKey];

    descriptionBar.style.opacity = '0';
    displayImage.classList.remove('fade-in');

    setTimeout(() => {
        displayImage.src = image;
        displayImage.classList.add('fade-in');
        descriptionBar.textContent = description;
        descriptionBar.style.opacity = '1';
    }, 300);

    clearTimeout(resetTimer);
    resetTimer = setTimeout(resetToDefault, 10000);
}

// Preload images and initialize page
preloadImages();

// Function to reset back to default image and text
function resetToDefault() {
    displayImage.src = defaultImage;
    descriptionBar.textContent = defaultText;
    descriptionBar.style.opacity = '1';
}

// Initialize the page with default content and set event listeners
function initialize() {
    displayImage.src = defaultImage;
    descriptionBar.textContent = defaultText;
    descriptionBar.style.opacity = '1';

    serviceItems.forEach(item => {
        item.addEventListener('click', () => updateContent(item));
    });
}

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    initialize();

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            const isExpanded = hamburger.classList.toggle("active");
            navLinks.classList.toggle("open", isExpanded);
            body.classList.toggle("nav-open", isExpanded);

            hamburger.setAttribute("aria-expanded", isExpanded);
        });
    } else {
        console.error("Element #hamburger-menu is missing in the HTML file.");
    }
});

// JavaScript to toggle accordion sections
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('open');
    });
});
