const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

let currentIndex = 0;
let autoCycle;


// Function to update the display image


// Mouse hover event
serviceItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoCycle);
        updateContent(item);
    });
    item.addEventListener('mouseout', () => startAutoCycle());
});

// Automatic cycling through items
function startAutoCycle() {
    clearInterval(autoCycle); // Ensure no overlapping intervals
    autoCycle = setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceItems.length;
        updateContent(serviceItems[currentIndex]);
    }, 8000); // Adjust interval as needed
}



function updateContent(item) {
    // Temporarily hide the current image for fade-out effect
    serviceImageContainer.classList.remove('show');

    setTimeout(() => {
        displayImage.src = item.getAttribute('data-image');
        descriptionBar.textContent = item.getAttribute('data-description');

        // Add the .show class back to fade in the new image
        serviceImageContainer.classList.add('show');
    }, 500); // Matches CSS fade-out duration
}

// Start the automatic cycling
startAutoCycle();

