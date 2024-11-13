const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
let currentIndex = 0;
let autoCycle;


// Function to update the display image
function updateContent(item) {
    const imageSrc = item.getAttribute('data-image');
    const descriptionText = item.getAttribute('data-description');
    displayImage.src = imageSrc;
    descriptionBar.textContent = descriptionText; // Update description text
    
    serviceItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
}

serviceItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoCycle);
        updateContent(item);
    });
    item.addEventListener('mouseout', () => startAutoCycle());
});

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
    autoCycle = setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceItems.length;
        updateContent(serviceItems[currentIndex]);
    }, 8000);
}

// Start the automatic cycling
startAutoCycle();

