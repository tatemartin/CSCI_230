const buffer = new SharedArrayBuffer(10);  

const arr = new Uint8Array(buffer);

const worker = new Worker('dedicated.js');

worker.addEventListener('message', function (event) {
    const list = document.getElementById('factorial-list');

    const listItem = document.createElement('li');
    listItem.textContent = `Factorial of ${event.data.index}: ${event.data.value}`;
    list.appendChild(listItem);
});

worker.postMessage(buffer);

worker.onerror = function (e) {
    console.error('Worker error: ', e);
};

