// Generics
// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
// that is, being able to create a component that can work over a variety of types rather than a single one.This allows
// users to consume these components and use their own types.

// Hello World of Generics #

// Without generic
function identity(arg: number): number {
    return arg;
}

// or
// BUT
// We are losing the information about what that type was when the function returns.
// If we passed in a number, the only information we have is that any type could be returned.
function identity2(arg: any): any {
    return arg;
}

// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote
// what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.
function identity3<T>(arg: T): T {
    return arg;
}

let output = identity3<string>("myString"); // type of output will be 'string'
let output2 = identity3("myString"); // type of output will be 'string'

let output3 = identity2("myString"); // type of output will be 'any'

// Generic types #
type serverResponse<T> = {
    status: number;
    response: T;
};

type User = {
    email: string;
    name: string;
}

const response: serverResponse<User> = // fetching to server