document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const load = document.getElementById('load');
    const totalElem = document.getElementById('total');
    const imgCountElem = document.getElementById('imgCount');

    function createNewBox() {
        const box = document.createElement('div');
        box.classList.add('box');

        if (Math.random() < 0.3) {
            const image = document.createElement('img');
            image.src = 'http://pngimg.com/uploads/dog/dog_PNG50304.png';
            image.alt = 'Image';
            image.style.width = '40px';
            image.style.height = '40px';
            box.appendChild(image);
        } else {
            box.textContent = 'Box';
        }

        return box;
    }

    function addNewBoxes() {
        for (let i = 0; i < 3; i++) {
            const newBox = createNewBox();
            container.insertBefore(newBox, load);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addNewBoxes();
            }
        });
    }, {
        root: container,
        threshold: 1.0
    });

    observer.observe(load);

    const mutationObserver = new MutationObserver(() => {
        updatenum();
    });

    mutationObserver.observe(container, {
        childList: true,
        subtree: true
    });

    function updatenum() {
        const allBoxes = container.querySelectorAll('.box');
        const imageBoxes = Array.from(allBoxes).filter(box => box.querySelector('img'));
        const total = allBoxes.length;
        const totalImages = imageBoxes.length;

        totalElem.textContent = total;
        imgCountElem.textContent = totalImages;
    }

    updatenum();
});
