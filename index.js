// Import stylesheets
import './style.css';

// Loops in JavaScript

//For Loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//While Loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//do while loop
let k = 10;
do {
  console.log(k);
  k--;
} while (k > 10);
//Though the condition is false from the beginning, the loop runs at least once.

//for..of loop
let letters = ['a', 'b', 'c', 'd', 'e'];
for (const letter of letters) {
  console.log(letter);
}

//forEach loop
letters.forEach((item) => console.log(item));

//generate odd numbers only:
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

//generate a series: 100, 95, 90, ...
for (let j = 100; j >= 50; j -= 5) {
  console.log(j);
}
