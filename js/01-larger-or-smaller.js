// Get user input and extract int
const iNum1 = parseInt(prompt('Enter the first number: '));
const iNum2 = parseInt(prompt('Enter the second number: '));

// Compare ints, and return larger of the two.
// if equal prompt to enter different numbers, if invalid
// prompt invalid input, try again.
if (iNum1 > iNum2) {
    document.write(`The first number, ${iNum1}, is the larger inputted number`);
} else if (iNum1 < iNum2) {
    document.write(`The second number, ${iNum2}, is the larger inputted number`);
} else if (iNum1 === iNum2) {
    document.write('The inputted numbers are equal, Please choose two different numbers.');
} else {
    document.write('Invalid input, please try again.');
}
