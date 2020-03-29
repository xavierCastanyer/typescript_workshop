// Advanced Types

// Union Types #
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"
padLeft("Hello world", true); // passes at compile time, fails at runtime.

// Correct
// function padLeft2(value: string, padding: number | string) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
// }

// padLeft2("Hello world", true); // passes at compile time, fails at runtime.

// String Literal Types #
type Cards = "STANDART" | "YOU" | "METAL";

const foo = (typeCard: Cards) => {
    console.log(typeCard);
};

// Miss invoke function

// Mapped types #
// Partial

type Person = {
    name: string;
    age: number;
    address: string;
    email: string;
};

const setNameAndEmail = (data: Person): string => {
    return `${data.name} and ${data.email}`;
};

setNameAndEmail({ name: "foo", email: "foo@bar" });
