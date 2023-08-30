// function countdownFromTen() {
//   for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }
// }

// countdownFromTen();




// Define a function to calculate age based on birth year
function getAge(year) {
    // Calculate the age by subtracting birth year from the current year (2023)
    return 2023 - year;
}

// Define a function to generate a greeting with name and age
function sayHi(name, year) {
    // Call the getAge function to calculate age based on the provided birth year
    let age = getAge(year);

    // Construct a greeting message using template literal
    // Include the provided name and calculated age in the message
    return `My name is ${name} and I am ${age} years old.`;
}

// Call the sayHi function with 'ahmed' as name and 2000 as birth year
let display = sayHi('ahmed', 2000);

// Print the generated greeting message to the console
console.log(display);

// Defining getAge Function:

// This function calculates a person's age based on their birth year.
// The provided year parameter represents the birth year.
// The return statement calculates the difference between the current year (2023) and the birth year, resulting in the age.
// Defining sayHi Function:

// This function generates a greeting message with a person's name and age.
// It takes two parameters: name (person's name) and year (birth year).
// The getAge function is called with the provided year to calculate the age.
// The template literal constructs a message that includes the provided name and calculated age.
// Calling sayHi Function:

// The sayHi function is called with 'ahmed' as the name and 2000 as the birth year.
// The calculated age is included in the greeting message.
// Printing the Greeting Message:

// The generated greeting message, stored in the display variable, is printed to the console using console.log.