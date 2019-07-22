// TODO: Find the biggify numbers button on our page.
const biggifyNumbersButton = document.querySelector(".big");
console.log(biggifyNumbersButton);
//When it's clicked, launch `biggify`.
biggifyNumbersButton.onclick = biggify;

// TODO: Find the biggify numbers button on our page.
const nasafyButton = document.querySelector(".blastoff");
nasafyButton.onclick = nasafy;

// TODO: Find the crazify string button on our page.
const crazifyStringButton = document.querySelector(".crazy");
crazifyStringButton.onclick = crazify;

// TODO: Find the reverse string button on our page.
const reverseStringButton = document.querySelector(".reverse");
reverseStringButton.onclick = reverse;

// TODO: Find the lucky numbers button on our page.
const luckyNumbersButton = document.querySelector(".lucky");
luckyNumbersButton.onclick = luckify;

// TODO: Find the lucky numbers button on our page.
const titleCaseButton = document.querySelector(".titlec");
titleCaseButton.onclick = titleify;

function biggify(event) {
  event.preventDefault();
  clearList();
  const userInput = document.querySelector("#user-input");
  const inputNum = parseInt(userInput.value) + 9000;
  userInput.value = "";

  printValue(inputNum);
}

function nasafy(event) {
  event.preventDefault();

  clearList();

  const userInput = document.querySelector("#user-input");
  const inputNum = parseInt(userInput.value);

  for (i = inputNum; i >= 0; i--) {
    printValue(i);
  }
  printValue("blast OFFFFFFFFF!!!!");
  userInput.value = "";
}

function crazify(event) {
  event.preventDefault();

  clearList();

  const userInput = document.querySelector("#user-input");
  const inStr = userInput.value;
  const crazyLength = inStr.length -1;
  let crazy = "";
  
  for (i = 0; i < crazyLength; i++) {
   
    if (i!==0 && i % 2 !== 0) {
      crazy += inStr[i].toUpperCase();
    } else if (inStr[i] === inStr[i].toUpperCase()) {
      crazy += inStr[i].toLowerCase();
    } else {
      crazy += inStr[i];
    }
  }
  userInput.value = "";

  printValue(crazy);
}

function reverse(event) {
  event.preventDefault();

  clearList();

  const userInput = document.querySelector("#user-input");
  const inStr = userInput.value;
  let reverse = "";

  for (let i = inStr.length - 1; i >= 0; i--) {
    reverse += inStr[i];
  }
  printValue(reverse);

  userInput.value = "";
}

function luckify(event) {
  event.preventDefault();

  clearList();

  const userInput = document.querySelector("#user-input");
  const inputNum = parseInt(userInput.value);

  for (let i = 0; i < 5; i++) {
    printValue(Math.floor(Math.random() * inputNum));
  }

  userInput.value = "";
}

function titleify(event) {
  event.preventDefault();

  const userInput = document.querySelector("#user-input");
  const inStr = userInput.value;
  let title = "";

  for (let i = 0; i < inStr.length; i++) {
    if(i===0){
      title += inStr[i].toUpperCase();
      continue;
    }
    if (inStr[i-1] === " ") {
      title += inStr[i].toUpperCase();
    }else{
      title += inStr[i];

    }
    
  }

  printValue(title);

  userInput.value = "";
}

// Prints the value given to the DOM.
// NO NEED TO TOUCH THIS SECTION!
function printValue(value) {
  // Create a list item.
  const listItem = document.createElement("li");
  // Put its value as its contents.
  listItem.innerText = value;

  // Find the unordered list we've made into a results console.
  const list = document.querySelector(".list");
  // Append our list item to it.
  list.appendChild(listItem);
}

// Clears the list from the DOM.
// NO NEED TO TOUCH THIS SECTION!
function clearList() {
  let current = document.querySelector(".list > li");
  while (current !== null) {
    current.remove();
    current = document.querySelector(".list > li");
  }
}
