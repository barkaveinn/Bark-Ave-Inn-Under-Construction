const serviceItems = document.querySelectorAll('.service-list li');
const displayImage = document.getElementById('displayImage');
const descriptionBar = document.getElementById('descriptionBar');
const serviceImageContainer = document.querySelector('.service-image-container');

// Function to update the displayed image and description with a delay
function updateContent(item) {
    const imageSrc = item.getAttribute('data-image');
    const descriptionText = item.getAttribute('data-description');

    // Remove the text and show only the image briefly
    descriptionBar.style.opacity = '0';  // Hide description temporarily
    displayImage.classList.remove('fade-in');

    // Delay to display image first, then show description
    setTimeout(() => {
        displayImage.src = imageSrc;
        displayImage.classList.add('fade-in');

        // After the image fades in, show the description with a slight delay
        setTimeout(() => {
            descriptionBar.textContent = descriptionText;
            descriptionBar.style.opacity = '1';  // Show description with transparency
        }, 300); // Delay to allow image to fade in
    }, 100); // Delay for image loading
}

// Click event listeners for manual control
serviceItems.forEach(item => {
    item.addEventListener('click', () => updateContent(item));
});
