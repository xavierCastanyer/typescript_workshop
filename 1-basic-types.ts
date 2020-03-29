const boolType: boolean = true;

const numberType: number = 123;

const stringType: string = "string";

const arrType: number[] = [1, 2, 3]; // Array<number>

// Tuple #
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

// When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

// Enum #
// A helpful addition to the standard set of datatypes from JavaScript is the enum.
// As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

//  you can also go from a numeric value to the name of that value in the enum.
enum Color2 {
    Red = 1,
    Green,
    Blue
}
let colorName: string = Color2[2];

console.log(colorName); // Displays 'Green' as its value is 2 above

// Void #
// void is a little like the opposite of any: the absence of having any type at all.
// You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
    console.log("This is my warning message");
}

// Object #
function create(o: object | null): void {
    console.log(0);
}

create({ prop: 0, whatever: { foo: "bar" } }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

// Type assertions #
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
