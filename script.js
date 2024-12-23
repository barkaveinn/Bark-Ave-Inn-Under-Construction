// Select service items and display elements
const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

// Initial state (Default Image and Text)
const defaultImage = "images/pexels-olly-3771110.jpg"; // Path to the default image
const defaultText = "Please click each of the service offerings for more details.";

// Service data
const services = {
    boarding: {
        image: "images/pexels-barnabas-davoti-31615494-12503322.jpg",
        description: "A premium overnight stay, unlike traditional boarding facilities with our truly cage-free environment fosters exploration, socialization, and relaxation. Our overnight guests, enjoy communal or pack-like sleeping arrangements in large open areas, creating a more natural, stress-reducing environment for well-socialized dogs.."
    },
    daycare: {
        image: "images/pexels-daycare.jpg",
        description: "A fun, safe, and engaging environment where your dog can socialize, play, and relax. Plenty of TLC to keep your pup happy and entertained all day."
    },
    training: {
        image: "images/pexels-karolina-grabowska-5705624.jpg",
        description: "Build a stronger bond with your dog through positive, highly experienced-led training. Tailored sessions address basic obedience and behavioral challenges for a well-behaved, happy companion."
    },
    wedding: {
        image: "images/pexels-weddingdog.jpg",
        description: "Make your special day truly unforgettable with our Premium Wedding Dog Concierge Service. From elegant pickup to a perfectly timed walk down the aisle, we ensure your furry family member joins your celebration in style."
    },
    "In-Home Drop-in Visit": {
        image: "images/pexels-monica-3987557.jpg",
        description: "Reliable, personalized check-ins for your pet, providing feeding, walking, playtime, and companionship. Perfect for pets who prefer their home environment while you're at work or away."
    },
    "Pickup and Drop-Off Service": {
        image: "images/pexels-pickupdropoff.jpg",
        description: "Safe and convenient transportation for your pet's comfort and your peace of mind."
    },
    Walking: {
        image: "images/pexels-walking.jpg",
        description: "Enjoy peace of mind knowing your dog is getting the exercise and stimulation they need with our reliable dog walking service. Each walk is tailored to your dog’s pace and preferences, giving them a healthy outing they’ll look forward to every time."
    },
    "In-Home Premium Cat Care": {
        image: "images/pexels-arina-krasnikova-7725622.jpg",
        description: "Professional, loving care for your cat right in the comfort of home. From feeding and playtime to litter box maintenance, we ensure your cat feels safe and happy while you're away."
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
    const serviceKey = item.getAttribute('data-service');  // Get service identifier (boarding, daycare, etc.)
    const { image, description } = services[serviceKey];

    // Remove the text and show only the image briefly
    descriptionBar.style.opacity = '0';  // Hide description temporarily
    displayImage.classList.remove('fade-in');  // Remove fade effect from the image

    // Clear previous animation
    displayImage.classList.remove('fade-in');
    descriptionBar.style.opacity = '0';

    // Update content after delay
    setTimeout(() => {
        displayImage.src = image;
        displayImage.classList.add('fade-in');
        descriptionBar.textContent = description;
        descriptionBar.style.opacity = '1';
    }, 300);

    // Reset the default image timer if a service is clicked
    clearTimeout(resetTimer);

    // Reset the default image after 10 seconds of inactivity
    resetTimer = setTimeout(resetToDefault, 10000);
}

// Preload images and initialize page
preloadImages();


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



// JavaScript to toggle accordion sections
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('open'); // Toggle accordion content visibility
    });
});
