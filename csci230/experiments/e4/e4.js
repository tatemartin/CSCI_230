const images = document.querySelectorAll('.image');
let index = 0;

function changeOpacity() {
    images.forEach((img, idx) => {
        img.style.opacity = (idx === index) ? '1' : '0.5';
    });
    index = (index + 1) % images.length;
}

setInterval(changeOpacity, 2000);
changeOpacity();