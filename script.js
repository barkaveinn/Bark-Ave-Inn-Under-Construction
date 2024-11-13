const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

let currentIndex = 0;
let autoCycle;

// Function to update the displayed image and description
function updateContent(item) {
    const imageSrc = item.getAttribute('data-image');
    const descriptionText = item.getAttribute('data-description');

    // Temporarily hide image for fade-out effect
    displayImage.classList.remove('fade-in');
    
    setTimeout(() => {
        displayImage.src = imageSrc;
        descriptionBar.textContent = descriptionText;
        displayImage.classList.add('fade-in');
    }, 300); // Matches CSS fade-out duration

    // Update active class for the selected item
    serviceItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
}

// Function to start automatic cycling through items
function startAutoCycle() {
    clearInterval(autoCycle); // Clear any existing intervals to avoid overlap
    autoCycle = setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceItems.length;
        updateContent(serviceItems[currentIndex]);
    }, 8000); // Adjust the time as needed
}

// Mouse hover event listeners for manual control
serviceItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoCycle); // Pause auto-cycling on hover
        updateContent(item);
    });

    item.addEventListener('mouseout', () => {
        currentIndex = index; // Update currentIndex to resume correctly
        startAutoCycle(); // Resume auto-cycling on mouse out
    });
});

// Initial call to start the automatic cycling
startAutoCycle();
