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
const book: [string, number, boolean] = ['business', 1500, false];

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

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything.hello = 'fsdaf';
let banana = anything;
banana = anything;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [10, 'hello'];

const apple = 'apple'
let bool: true = true;
let clothSize: 'small' | 'medium' | 'large' = 'large'
// enumの場合
const cloth: {
    size: 'small' | 'medium' | 'large'
} = {
    size: 'small'
}

type ClothSize = 'small' | 'medium' | 'large';
let newClothSize: ClothSize = 'large'

function add(num1: number, num2: number): number{
    return num1 + num2;
}

function sayHell(): void{
    console.log('sayHello')
}

const anotherAdd: (n1: number, n2: number) => number = add;
const theOtherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number{
    return num1 + num2;
};//無名関数

const doubleNumber = (number: number):number => number * 2;//アロー関数
const doubleNumber2: (num: number) => number = number => number * 2;//アロー関数