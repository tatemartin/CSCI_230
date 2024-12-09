const dbName = 'userDataDB';
let db;

const openRequest = indexedDB.open(dbName, 1);

openRequest.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains('userData')) {
        db.createObjectStore('userData', { keyPath: 'id', autoIncrement: true });
    }
};

openRequest.onsuccess = (event) => {
    db = event.target.result;
    console.log('Database opened successfully');
    loadData();
};

openRequest.onerror = (event) => {
    console.error('Database error: ', event.target.error);
};

document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value;
    const dogInput = document.getElementById('dogInput').checked;
    const radioButtons = document.getElementsByName('options');
    let selectedRadio = null;
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedRadio = radioButton.value;
            break;
        }
    }

    if (nameInput && selectedRadio) {
        const newData = {
            nameInput,
            dogInput,
            selectedRadio,
            timestamp: new Date().toISOString(),
        };

        const transaction = db.transaction(['userData'], 'readwrite');
        const objectStore = transaction.objectStore('userData');
        const request = objectStore.add(newData);

        request.onsuccess = () => {
            console.log('Data saved successfully');
            loadData();
        };

        request.onerror = (event) => {
            console.error('Error saving data: ', event.target.error);
        };
    } else {
        alert('Please fill in all the fields.');
    }
});

function loadData() {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = '';

    const transaction = db.transaction(['userData'], 'readonly');
    const objectStore = transaction.objectStore('userData');
    const request = objectStore.getAll();

    request.onsuccess = () => {
        const data = request.result;
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-item');
            listItem.innerHTML = `
                <strong>Name:</strong> ${item.nameInput} <br>
                <strong>Dog:</strong> ${item.dogInput ? 'Checked' : 'Unchecked'} <br>
                <strong>Language:</strong> ${item.selectedRadio} <br>
                <strong>Timestamp:</strong> ${item.timestamp} <br><br>
            `;
            dataList.appendChild(listItem);
        });
    };

    request.onerror = (event) => {
        console.error('Error loading data: ', event.target.error);
    };
}