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


// If we use "const" enum, the complier will generate more optimized code
enum Size {small=0, medium=1, large=2};

// Functions
function calculateTax(income: number, taxYear:number = 2022) {
    if (taxYear < 2022)
        return income*1.2;
    return income*1.3;
}

calculateTax(10000)

// objects
let employee:{
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { id: 1, 
    name: '',
    retire:(date: Date)=>{ 
        console.log(date);
    }
};
employee.name = 'Vignesh'