const number = 5;

// Conditionals
// Switch
if (number === 5) {
  /* 
    = assignment 
    == comparison (value)
    === comparison (values + data type)

    In VSC Alt + Shift + A comments selection
 */
  console.log('the value is 5');
} else if (number === 3) {
  console.log('the value is 3');
} else {
  console.log('I do not know this value :(');
}
// Ternary
// condition ? true : false
const message = number === 5 ? 'the number is 5' : 'I do not know this number';
console.log(message); // the number is 5

// Switch

const pokemon = 'Pikachu';

switch (pokemon) {
  case 'Pikachu':
    console.log('We restored your Pikachu to full health!');
    break;
  case 'Squirtle':
  case 'Magikarp':
    console.log('We restored your water pokemon to full health!');
    break;
  default:
    console.log('Sorry, we cannot heal your pokemon :(');
}

// Arrays (zero-based lists)

const pokemons = ['Pikachu', 'Squirtle', 'Charmander'];
pokemons.push();
console.log(pokemons);
console.log(pokemons[0]); // Pikachu
console.log(pokemons[2]); // Charmander
console.log(pokemons.reverse()); // ['Charmander', 'Squirtle', 'Pikachu']
// Higher order array methods: map, filter, reduce, find

// typeof returns primitive type
console.log(typeof number);
console.log(typeof pokemon);
console.log(typeof pokemons);

// Loops
// For
for (let pokemon = 0; pokemon < 5; pokemon++) {
  console.log(`I encountered ${pokemon} pokemon so far`);
}

// ForEach
pokemons.forEach(function (pokemon) {
  console.log(pokemon);
});
pokemons.forEach(pokemon => console.log(pokemon));

// While
let n = 0;

while (n <= 3) {
  console.log(n);
  n++;
}

// Do... while -> ensures the execution at least once

do {
  console.log(n);
  n++;
} while (n <= 3);

// Check for...of/for...in

/* console.log('b' + 'a' + +'a' + 'a'); // NaN */

// Runs 5 times, with values of step 0 through 4
// I encountered 0 pokemon so far
// I encountered 1 pokemon so far
// I encountered 2 pokemon so far
// ...

// Functions

function talk() {
  console.log('I have no mouth, and I must scream');
  console.log('I have no mouth, and I must scream');
  console.log('I have no mouth, and I must scream');
}

talk();

function sendMessage(message, recipient, sender) {
  // Concatanation
  /* console.log(recipient + ', you have a message by ' + sender + ': ' + message); */
  // Template literal / template string
  console.log(`${recipient} you have a message by ${sender}: ${message}`);
}

sendMessage('Hey there, how are you?', 'Mewtwo', 'Jorge');
sendMessage('Hey there, how are you?', 'Ruth', 'Gideon');

const square = number => number * number;

const fourSq = square(4);
console.log(fourSq);

var pikachu = 'pikachu';
let jigglypuff = 'jigglypuff';

console.log(pikachu); // pikachu
console.log(jigglypuff); // jigglypuff

if (true) {
  var pikachu = "I don't know who I am anymore :(";
  let jigglypuff = "I don't know who I am anymore :(";
}

console.log(pikachu); // I don't know who I am anymore :(
console.log(jigglypuff); // jigglypuff
