const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    const box = container.querySelector('.box');
    const counter = container.querySelector('.counter');

    box.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    box.addEventListener('drop', (event) => {
        const draggedElementId = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedElementId);
        const items = box.children.length;

        if (items < 10) {
            box.appendChild(draggedElement);
            updateCounter(container, items + 1);
        } else {
            alert("Big mistake, this container is full");
        }
    });
});

document.querySelectorAll('.box div, .box img').forEach(item => {
    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    item.addEventListener('dragend', () => {
        const parentBox = item.parentElement;
        const items = parentBox.children.length;
        updateCounter(parentBox.parentElement, items - 1);
    });
});

function updateCounter(container, count) {
    const counter = container.querySelector('.counter');
    counter.textContent = count;
}
