let sales: number = 123_456_789
let course: string = "Typescript"
let is_published: boolean = true;
let level;
level = "Hello";
level = 12;

function render(document: any){
    console.log(document);
}

// Arrays

let numbers: number[] = [1,2,3];
numbers.forEach(n=>n.toExponential)

// tuples
let user: [number, string] = [1, 'Mosh']

// enums
// list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {small=0, medium=1, large=2};