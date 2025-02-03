document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".animated-image");

    images.forEach(image => {
        image.style.opacity = 0;
        image.style.transition = "opacity 1s";

        image.addEventListener("mouseover", () => {
            image.style.opacity = 1;
        });

        image.addEventListener("mouseout", () => {
            image.style.opacity = 0;
        });
    });
});
