class Person {
    constructor(name, hairColor) {
        this.name = name,
        this.hairColor = hairColor 
    }
    greet() {
        console.log("WAGWAN, my name is " + this.name + ", and my hair colour is " + this.hairColor + ".");
    }
}

export default Person;  // This sets out what gets exported from this file - es6 notation
