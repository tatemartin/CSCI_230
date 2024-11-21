let book = {
    year_: 2017,
    edition : 1
};

Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_= newValue;
            this.edition += newValue - 2017;
        }
    }
});

book.year = 2018;
console.log(book.edition);
console.log(Object.getOwnPropertyDescriptors(book));

let book2 = {};
Object.defineProperties(book2, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

book2.year = 2018;
console.log(book2.edition);
console.log(Object.getOwnPropertyDescriptors(book2));


let book3 = {};
Object.defineProperties(book3, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this.year_;
        },
        set: function(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

book3.year = 2018;
console.log(book3.edition);

let descriptor = Object.getOwnPropertyDescriptor(book3, "year_");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

let descriptor2 = Object.getOwnPropertyDescriptor(book3, "year");
console.log(descriptor2.value);
console.log(descriptor2.configurable);
console.log(typeof descriptor2.get);

let dest, src, result;
dest = {};
src = {id: 'src'}
result = Object.assign(dest, src);

console.log(dest === result);
console.log(dest !== src);
console.log(result);
console.log(dest);

result = Object.assign(dest, {a: 'foo'}, {b: 'bar'});
console.log(result);

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
};

function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

// let anotherPerson = createAnother(person);
// anotherPerson.sayHi();

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

// inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

class Animal {}

class Person {
    constructor() {
        console.log('person ctor');
    }
}

class Vegetable {
    constructor() {
        this.color = 'orange';
    }
}

let a = new Animal();
let p = new Person(); 
v = new Vegetable();
console.log(v.color);

class Person2 {
    constructor(name) {
        console.log(arguments.length);
        this.name = name || null;
    }
}

let p1 = new Person2;
console.log(p1.name);
let p2 = new Person2();
console.log(p2.name);
let p3 = new Person2('Jake');
console.log(p3.name);

class Person3 {
    constructor(override) {
        this.foo = 'foo';
        if (override) {
            return {
                bar: 'bar'
            };
        }
    }
}

let p4 = new Person3(),
    p5 = new Person3(true);
    
console.log(p4);
console.log(p4 instanceof Person3);
console.log(p5);
console.log(p5 instanceof Person3);

function Person4() {}
class Animal2 {}

let p6 = Person4();
//let a2 = Animal2();

class Person5 {}

let p7 = new Person()
//p7.constructor();
//let p8 = new p8.constructor();

class Person6 {}

console.log(Person6);
console.log(typeof Person6);
console.log(Person6.prototype);
console.log(Person6 === Person6.prototype.constructor);

let p9 = new Person6();
console.log(p9 instanceof Person6);

class Person7 {}

let p10 = new Person7();
console.log(p10.constructor === Person7); 
console.log(p10 instanceof Person7);
console.log(p10 instanceof Person7.constructor);

let p11 = new Person7.constructor();
console.log(p11.constructor === Person7);
console.log(p11 instanceof Person7);
console.log(p11 instanceof Person7.constructor);

let classList = [
    class {
        constructor(id) {
            this.id_ = id;
            console.log('instance ${this.id_}');
        }
    }
];

function createInstance(classDefinition, id) {
    return new classDefinition(id);
}

let foo = createInstance(classList[0], 3141);

let p12 = new class Foo {
    constructor(x) {
        console.log(x);
    }
}('bar'); 

console.log(p12);