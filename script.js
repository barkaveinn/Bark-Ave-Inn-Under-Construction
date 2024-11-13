const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

let currentIndex = 0;
let autoCycle;

function updateContent(item) {
    // Temporarily hide the current image for fade-out effect
    serviceImageContainer.classList.remove('show');

    setTimeout(() => {
        displayImage.src = item.getAttribute('data-image');
        descriptionBar.textContent = item.getAttribute('data-description');

        // Add the .show class back to fade in the new image
        serviceImageContainer.classList.add('show');
    }, 500); // Matches CSS fade-out duration

    // Update active class for the selected item
    serviceItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
}

// Hover event listeners for manual control
serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoCycle);
        updateContent(item);
    });
    item.addEventListener('mouseout', () => startAutoCycle());
});

// Automatic cycling through items
function startAutoCycle() {
    clearInterval(autoCycle); // Prevent overlapping intervals
    autoCycle = setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceItems.length;
        updateContent(serviceItems[currentIndex]);
    }, 8000); // Adjust interval to control time between cycles
}

// Start the automatic cycling
startAutoCycle();

