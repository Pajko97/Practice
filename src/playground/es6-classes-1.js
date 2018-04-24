class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor) {
            description += ` Their major is ${this.major}`;

            return description;
        }
    }
}
const pavle = new Student('Ranko Janjusevic', '55', 'Computer Science');

console.log(pavle.getDescription());

