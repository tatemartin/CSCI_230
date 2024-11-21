class LandmarkCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const style = document.createElement('style');

        this.shadowRoot.append(style, card);
    }

    setData(landmark) {
        const card = this.shadowRoot.querySelector('.card');
        card.innerHTML = `
            <h2>${landmark.getName()}</h2>
            <p><strong>Location:</strong> ${landmark.getLocation()}</p>
            <p><strong>Height:</strong> ${landmark.getHeight()}</p>
            <p><strong>Year Built:</strong> ${landmark.getYearBuilt()}</p>
            <p><strong>Type:</strong> ${landmark.gettype()}</p>
            <p><strong>Visitors Per Year:</strong>${landmark.getvisitors_per_year()}</p>
        `;
    }
}

customElements.define('landmark-card', LandmarkCard);
