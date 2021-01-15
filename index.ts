let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
let hello: string;
hello = 'hello';

//object
const person: {
    name: string;
    age: number;
} = {
    name: 'jack',
    age: 21
}

//array
const fruits: string[] = ['apple', 'banana', 'grape'];

//tuple
const book: [string, number, boolean] = ['business', 1500, false]

//enum
enum coffeeSize {
    short = 'short',
    tall = 'tall',
    grande = 'grande',
    venti = 'venti'
}


const coffee = {
    hot: true,
    size: 'Short'
}