// Select service items and display elements
const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');

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
    if (!service) return;

    descriptionBar.style.opacity = '0';
    displayImage.classList.remove('fade-in');

    setTimeout(() => {
        displayImage.src = service.image;
        displayImage.classList.add('fade-in');
        setTimeout(() => {
            descriptionBar.textContent = service.description;
            descriptionBar.style.opacity = '1';
        }, 300);
    }, 100);

    clearTimeout(resetTimer);
    resetTimer = setTimeout(resetToDefault, 10000);
}

// Function to reset back to default image and text
function resetToDefault() {
    displayImage.src = defaultImage;
    descriptionBar.textContent = defaultText;
    descriptionBar.style.opacity = '1';
    displayImage.classList.add('fade-in');
}

// Initialize the page with the default content
function initialize() {
    resetToDefault();

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceKey = item.getAttribute('data-service');
            updateContent(serviceKey);
        });
    });
}

initialize();
