// Select service items and display elements
const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

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

// Function to update the displayed image and description with a delay
function updateContent(item) {
    const serviceKey = item.getAttribute('data-service');  // Get service identifier (boarding, daycare, etc.)
    const { image, description } = services[serviceKey];

    // Remove the text and show only the image briefly
    descriptionBar.style.opacity = '0';  // Hide description temporarily
    displayImage.classList.remove('fade-in');  // Remove fade effect from the image

    // Delay to display image first, then show description
    setTimeout(() => {
        displayImage.src = image;
        displayImage.classList.add('fade-in');  // Add fade effect to the image

        // After the image fades in, show the description with a slight delay
        setTimeout(() => {
            descriptionBar.textContent = description;
            descriptionBar.style.opacity = '1';  // Show description with fade-in effect
        }, 300); // Delay to allow image to fade in
    }, 100); // Delay for image loading

    // Reset the default image timer if a service is clicked
    clearTimeout(resetTimer);

    // Reset the default image after 4 seconds of inactivity
    resetTimer = setTimeout(resetToDefault, 8000);
}

// Function to reset back to default image and text
function resetToDefault() {
    displayImage.src = defaultImage;  // Set the image to the default one
    descriptionBar.textContent = defaultText;  // Set the default welcome text
    descriptionBar.style.opacity = '1';  // Ensure the default text is visible
}

// Initialize the page with the default content
function initialize() {
    displayImage.src = defaultImage;
    descriptionBar.textContent = defaultText;
    descriptionBar.style.opacity = '1';  // Ensure the description text is visible initially

    // Set up event listeners for each service item
    serviceItems.forEach(item => {
        item.addEventListener('click', () => updateContent(item));
    });
}

// Initialize when the page loads
initialize();

