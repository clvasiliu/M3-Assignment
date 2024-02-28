// ask user for input and parse the int
let iInNumber = parseInt(prompt("Enter a number between 1 to 100."));

// if input not between 1 to 100 alert the user and prompt to enter numbers again.
// parse int from user input
while (iInNumber < 1 || iInNumber > 100) {
    alert("Only numbers between 1 and 100 are accepted. Please try again");
    iInNumber = parseInt(prompt("Enter a number between 1 to 100."));
}

// switch case on the floor of the numbers divided by 10 ie:
// 1-9 == 0
// 10-19 == 1
// 20-29 == 2
// ...
// 60-69 == 6
// 70-79 == 7
// 80-89 == 8
// 90-99 == 9
// 100 == 10
switch(Math.floor(iInNumber/10)) {
    // we want case 10 to be the same as case 90 so we simply do not break and
    // let case 10 execute case 9.
    case 10:
    case 9:
        console.log("You recieved an A");
        break;
    case 8:
        console.log("You recieved a B");
        break;
    case 7:
        console.log("You recieved a C");
        break;
    case 6:
        console.log("You recieved a D");
        break;
    default:
        // the default case will be anything other than above specified so
        // it should be 1-59 in this case
        console.log("You recieved an F");
}
