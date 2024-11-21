const imageUrls = [
    'https://tse1.mm.bing.net/th?id=OIP.k8B9aSEHBPFn8A_U5_d7uwHaFF&pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th?id=OIP.vTLgxWzw-zZfPHwBtWXrWQHaJg&pid=Api&P=0&h=220',
    'https://tse2.mm.bing.net/th?id=OIP.QwaiZhFwmTXgwrvsmO12nQHaMB&pid=Api&P=0&h=220',
    'https://tse2.mm.bing.net/th?id=OIP.6gSIZobR3ULzDzTQiriGxQHaHa&pid=Api&P=0&h=220',
    'https://tse3.mm.bing.net/th?id=OIP.EneN0t6nrDWXLZ8bl08agAHaGT&pid=Api&P=0&h=220'
];

const carousel = document.getElementById('carousel');
const images = [];
let currentIndex = 0;

async function load() {
    for (const url of imageUrls) {
        const resp = await fetch(url);
        const blob = await resp.blob();
        const img = URL.createObjectURL(blob);
        images.push(img);
    }
    startCarousel();
}

function startCarousel() {
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        if (index === 0) img.classList.add('active');
        carousel.appendChild(img);
    });

    setInterval(() => {
        const currentImg = carousel.querySelector('img.active');
        currentImg.classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        const nextImg = carousel.querySelectorAll('img')[currentIndex];
        nextImg.classList.add('active');
    }, 2500);
}

load();