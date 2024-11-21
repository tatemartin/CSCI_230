import Landmark from './Landmark.js';
import data from './data.js';

const landmarks = data.map(item => {
    return new Landmark(
        item.name,
        item.location,
        item.height,
        item.year_built,
        item.type,
        item.visitors_per_year
    );
});

function displayLandmarks() {
    const container = document.getElementById('landmark-container');

    landmarks.forEach(landmark => {
        const div = document.createElement('div');
        div.classList.add('landmark');

        div.innerHTML = `
            <h2>${landmark.getName()}</h2>
            <p><strong>Location:</strong> ${landmark.getLocation()}</p>
            <p><strong>Height:</strong> ${landmark.getHeight()}</p>
            <p><strong>Year Built:</strong> ${landmark.getYearBuilt()}</p>
            <p><strong>Type:</strong> ${landmark.getType()}</p>
            <p><strong>Visitors per Year:</strong> ${landmark.getVisitorsPerYear()}</p>
            <hr>
        `;

        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', displayLandmarks);
