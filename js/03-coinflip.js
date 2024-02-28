// Approach following instructions

// select a random number [0,1)
// round the random number ([0-0.4] = 0, [0.5-0.9] = 1)
const randomNum = Math.round(Math.random());

// get user input and force to lower case for comparison
let choice;
while (choice !== 'heads' && choice !== 'tails') {
    choice = prompt('Heads or Tails').toLowerCase();
}

if (randomNum === 0) {
    // case heads
    let outStr = `The flip was heads and you chose ${choice}...you `;
    if (choice == 'heads') {
        alert(outStr + `win!`);
    } else {
        alert(outStr + `lose!`);
    }
} else if (randomNum === 1) {
    // case tails
    let outStr = `The flip was tails and you chose ${choice}...you `;
    if (choice == 'tails') {
        alert(outStr + `win!`);
    } else {
        alert(outStr + `lose!`);
    }
}


// My personal approach for this problem
// // select a random number, being 0 or 1
// const randomNum = Math.round(Math.random());

// // based off the random number assign randomCoin to heads or tails
// const randomCoin = (randomNum === 1) ? 'heads' : 'tails';

// // get user input and force to lower case for comparison
// const choice = prompt('Heads or Tails').toLowerCase();

// let outString = `The flip was ${randomCoin} and you chose ${choice}...you `;
// if (choice !== 'heads' || choice !== 'tails') {
//     outString = 'Invalid input please try again.';
// } else if (choice === randomCoin) {
//     outString += `win!`;
// } else {
//     outString += `lose!`;
// }

// alert(outString);