class Person {
    constructor(public name: string, private age: number){

    }

    incrementAge(){
        this.age +=1;
    }

    greeting(this: Person){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`)
    }
}
let person2: Person;
const quill = new Person('quill', 38);
quill.incrementAge();
quill.greeting();

// const anotherQuill = {
//     name: 'ore',
//     greeting(){},
//     anotherGreeting: quill.greeting
// }
// anotherQuill.anotherGreeting();

