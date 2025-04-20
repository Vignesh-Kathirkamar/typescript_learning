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