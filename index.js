// document.getElementById("count").innerText = 0;

// let count = 0;

// console.log(count)

// 1. Create a variable, myAge, and set its value to your age
// let myAge = 22;
// console.log(myAge);

// 2. Log the myAge variable to the console
// console.log(myAge)

// console.log(count == myAge);

// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let count = 5;

// count = count + 1;

// console.log(count);

// let bonusPoints = 50;
// bonusPoints = 100;
// console.log(bonusPoints);

// bonusPoints = 25;
// console.log(bonusPoints);

// bonusPoints = 70;
// console.log(bonusPoints);

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapSum() {
//   console.log(lap1 + lap2 + lap3);
// }

// lapSum();

// let lapsCompleted = 0;

// function laps() {
//   lapsCompleted = lapsCompleted + 1;
//   console.log("laps : " + lapsCompleted);
// }

// laps();
// laps();
// laps();

// console.log(lapsCompleted);

// let username = "Miles";
// let message = "You have three new notifications";

// let messageToUser = username + ", " + message + "!";
// console.log(messageToUser);

// let name = "Miles";
// let greeting = "Hi, My name is";
// let myGreeting = greeting + " " + name;
// console.log(myGreeting);

let count = 0;
let countEl = document.getElementById("count");

let saveEl = document.getElementById("save-el");

function increment() {
  count = count + 1;
  console.log("Button clicked: " + count);
  countEl.innerText = count;
}

function save() {
  console.log("Saved count : " + count);
  let countStr = count + " - ";
  //innerText dont read spaces, use alternative textContent
  saveEl.textContent += countStr;
  count = 0;
  countEl.innerText = count;
}

let name = "Miles";
let greeting = "Welcome ";

let welcomeEl = document.getElementById("welcome-el");
welcomeEl.textContent = greeting + name;
