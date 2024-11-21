import Landmark from './Landmark.js';
import { data } from './data.js';
import './LandcardCard.js';

const landmarks = data.map(item => new Landmark(
    item.name,
    item.location,
    item.height,
    item.year_built,
    item.type,
    item.visitors_per_year
));

function displayLandmarks() {
    const container = document.getElementById('landmark-container');

    landmarks.forEach(landmark => {
        const card = document.createElement('landmark-card');
        card.setData(landmark);
        container.appendChild(card);
    });
}

displayLandmarks();

