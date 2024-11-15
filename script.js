// Select service items and display elements
const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceList = document.querySelector('.service-list');

// Initial state (Default Image and Text)
const defaultImage = "images/pexels-olly-3771110.jpg"; // Path to the default image
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

// Function to update the displayed image and description
function updateContent(serviceKey) {
    const service = services[serviceKey];
    if (!service) {
        console.warn(`Service '${serviceKey}' not found.`);
        return;
    }

    // Hide description temporarily
    descriptionBar.style.opacity = '0';
    displayImage.classList.remove('fade-in');

    // Display image and description with a delay
    setTimeout(() => {
        displayImage.src = service.image;
        displayImage.classList.add('fade-in');
        setTimeout(() => {
            descriptionBar.textContent = service.description;
            descriptionBar.style.opacity = '1';
        }, 300); // Wait for image to fade in
    }, 100); // Brief delay for image load animation

    // Schedule default reset
    scheduleReset();
}

// Function to reset back to default image and text
function resetToDefault() {
    displayImage.src = defaultImage;
    descriptionBar.textContent = defaultText;
    descriptionBar.style.opacity = '1';
    displayImage.classList.add('fade-in');
}

// Schedule reset to default after inactivity
function scheduleReset() {
    clearTimeout(resetTimer);
    resetTimer = setTimeout(resetToDefault, 10000);
}

// Initialize the page with the default content
function initialize() {
    // Set default image and text
    resetToDefault();

    // Add event delegation for service items
    if (serviceList) {
        serviceList.addEventListener('click', (e) => {
            const item = e.target.closest('li[data-service]');
            if (item) {
                const serviceKey = item.getAttribute('data-service');
                updateContent(serviceKey);
            }
        });
    }
}

// Initialize when the page loads
initialize();

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links ul");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Ensure smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';
