class Professor extends Person {

    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    classe() {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log("Grade: ", grade);
    }
}

const phyll = new Professor('Phyll', 'Eng Software');
phyll.introduceSelf(); 
phyll.classe();