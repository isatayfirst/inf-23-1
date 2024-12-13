let carouselIndex = 0;

// Function to show the current image based on the index
function updateCarousel() {
    const carouselImages = document.querySelector(".carousel-images");
    const totalImages = document.querySelectorAll(".carousel-images img").length;

    // Smooth transition between images
    carouselImages.style.transform = `translateX(-${carouselIndex * 100}%)`;
}

// Add event listeners for buttons
document.querySelector(".prev").addEventListener("click", () => {
    const totalImages = document.querySelectorAll(".carousel-images img").length;
    carouselIndex = (carouselIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

document.querySelector(".next").addEventListener("click", () => {
    const totalImages = document.querySelectorAll(".carousel-images img").length;
    carouselIndex = (carouselIndex + 1) % totalImages;
    updateCarousel();
});

// Initialize the carousel on DOM load
document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
});
