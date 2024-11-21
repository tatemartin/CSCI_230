class Landmark {
    #name;
    #location;
    #height;
    #yearBuilt;
    #type;
    #visitors_per_year;

    constructor(name, location, height, yearBuilt, type, visitors_per_year) {
        this.#name = name;
        this.#location = location;
        this.#height = height;
        this.#yearBuilt = yearBuilt;
        this.#type = type;
        this.#visitors_per_year = visitors_per_year;
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

    gettype() {
        return this.#type;
    }

    getvisitors_per_year() {
        return this.#visitors_per_year;
    }
}

export default Landmark;
