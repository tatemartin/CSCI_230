const shapes = [
    { id: 'circle', color: '#C9F2C7', scale: 1.2, rotate: 45},
    { id: 'square', color: '#ACECA1', scale: 1.2, rotate: 45},
    { id: 'rectangle', color: '#96BE8C', scale: 1.2, rotate: 45},
    //needs more work on triangle backgroud color changing//
    { id: 'triangle', color: '#629460', scale: 1.2, rotate: 45},
    { id: 'oval', color: '#243119', scale: 1.2, rotate: 45},
];

function changeShape(shapeId) {
    const shapeElement = document.getElementById(shapeId);
    setTimeout(() => {
        const shapeData = shapes.find(shape => shape.id === shapeId);
        shapeElement.style.backgroundColor = shapeData.color;
        shapeElement.style.transform = `scale(${shapeData.scale})`
        //rotate does not work quite yet//
        shapeElement.style.transform = `rotate(${shapeData.rotate})`;
    }, 1000);
}

function dispatchEvent(shapeId) {
    const event = new Event('shapeClicked');
    document.getElementById(shapeId).dispatchEvent(event);
}

shapes.forEach(shape => {
    const shapeElement = document.getElementById(shape.id);
    shapeElement.addEventListener('click', () => {
        changeShape(shape.id);
        shapes.forEach(s => {
            if (s.id !== shape.id) {
                dispatchEvent(s.id);
            }
        });
    });

    shapeElement.addEventListener('shapeClicked', () => {
        changeShape(shape.id);
    });
});