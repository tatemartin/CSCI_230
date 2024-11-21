class Landmark {
    #name;
    #location;
    #height;
    #yearBuilt;
    #type;
    #visitorsPerYear;

    constructor(name, location, height, yearBuilt, type, visitorsPerYear) {
        this.#name = name;
        this.#location = location;
        this.#height = height;
        this.#yearBuilt = yearBuilt;
        this.#type = type;
        this.#visitorsPerYear = visitorsPerYear;
    }

    getName() {
        return this.#name;
    }

    getLocation() {
        return this.#location;
    }

    getHeight() {
        return this.#height;
    }

    getYearBuilt() {
        return this.#yearBuilt;
    }

    getType() {
        return this.#type;
    }

    getVisitorsPerYear() {
        return this.#visitorsPerYear;
    }
}

export default Landmark;