const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
let currentIndex = 0;
let autoCycle;

// Function to update the display image
function updateImage(item) {
    const imageSrc = item.getAttribute('data-image');
    displayImage.src = imageSrc;
    // Highlight the active item
    serviceItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
}

// Mouse hover event
serviceItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoCycle);
        updateImage(item);
    });
    item.addEventListener('mouseout', () => startAutoCycle());
});

// Automatic cycling through items
function startAutoCycle() {
    autoCycle = setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceItems.length;
        updateImage(serviceItems[currentIndex]);
    }, 5000); // Adjust time as needed
}

// Start the automatic cycling
startAutoCycle();

