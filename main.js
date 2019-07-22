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
  const inputNum = parseInt(userInput.value)+9000;
  /*
  TODO: Add 9000 to the user's number.
  
  A hint: if this isn't working, it _might_ be because of the JavaScript type of the data coming in.
  
  Use the pre-defined `printValue` function below to print out the result,
  giving it the value you want to print.
  
  Essentially, you can use `printValue` the same way you would `console.log`,
  only it will write to the DOM instead of to the console.
  */
  printValue(inputNum);
  /*
  Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
    
    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */
}

function nasafy(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

  /*
    TODO: Call the function `clearList`, which we have defined for you.
  */
  clearList();

  // TODO: Find the input box the user is typing in and put the DOM node in a variable.

  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.

  /*
    TODO: Print every value from the user's number down to (and including) the number 1. Then print "Blastoff!".
    
    Use the pre-defined `printValue` function below to print out each line,
    giving it the value you want to print.
  */

  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
  */
}

function crazify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

  /*
  TODO: Call the function `clearList`, which we have defined for you.
  */
  clearList();

  // TODO: Find the input box the user is typing in and put the DOM node in a variable.

  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.

  /*
    TODO: Loop through and capitalize every even-numbered character. That is, if the user's string is 7 characters long, the 2nd, 4th, and 6th characters should all be capitalized.
    
    Hint: you'll probably have to "build" a new string as you loop.
    
    Use the pre-defined `printValue` function below to print out result,
    giving it the value you want to print.
  */

  /*
    Stretch goal TODOS:
    * If you haven't already, make sure capitalized user inputs get crazified too. "BANANA" crazified should be "bAnAnA", not "BANANA"!

    * Only count the characters that are in the alphabet when you're considering what to capitalize. Without this adjustment, "hey you" comes out as "hEy yOu", with the space "capitalized" (whatever that means!). Make it result in "hEy YoU" instead!
  */

  /*
  Stretch goal TODO:
  Using the variable we saved above for the input box, clear its value.
  */
}

function reverse(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

  /*
    TODO: Call the function `clearList`, which we have defined for you.
  */

  // TODO: Find the input box the user is typing in and put the DOM node in a variable.

  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.

  /*
    TODO: Print out the string, but in reverse. Do _not_ print out each character from the string individually; this would be pretty weird behavior when someone wants to see the reversed string of what they typed in!
    
    Use the pre-defined `printValue` function below to print out the result,
    giving it the value you want to print.

    Guidelines: 
    * You will find solutions on the internet that involve using `split` to make the string into an array. This is _not_ the correct solution for this exercise! Besides being incredibly inefficient (although this is a matter of principle more than app speed), this solution would teach you nothing about how to iterate over strings--and probably nothing about iterating over arrays either, since we don't have the foundational knowledge of arrays yet.
    * To get a complete string, we'll have to build a new string entirely.
    * It would probably _not_ make sense to go through the user input string in regular, 0 to sring.length order.
      
  */

  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
  */
}

function luckify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

  /*
  TODO: Call the function `clearList`, which we have defined for you.
*/

  // TODO: Find the input box the user is typing in and put the DOM node in a variable.

  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.

  /*
    TODO: Print out 5 "lucky numbers" (random integers) from 1 to the number they typed in.

    Use the pre-defined `printValue` function below to print out each line,
    giving it the value you want to print.
  */

  /*
    Stretch Goal TODOS:

    * Make sure that you don't give them the same lucky number more than once. There are a few possible solutions to this, but don't use arrays! We'll get there soon. NOTE: the luckify stretch goals are particularly hard ones, feel free to come back after doing other stretch goals first.
    * If you're preventing them getting the same number, but they type in, say, a 3, your browser will enter an infinite loop, as you can't get 5 numbers from 1-3 without repeating a number. But you _could_ have it simply exit the loop earlier if the user entered a lower number than 5.
    * If you get a lucky number of 15, _some_ solutions to the above will prevent a 1 from coming afterwards, as it will consider the 1 digit in 15 as an instance of 1 having already occurred. (Feel free to test this with 19 as an input, and see if a number with a 1 digit is ever followed by a 1.) One solution to this involves the string method `padStart`... but feel free to find a different way!
  */

  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
  */
}

function titleify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

  /*
  TODO: Call the function `clearList`, which we have defined for you.
*/

  // TODO: Find the input box the user is typing in and put the DOM node in a variable.

  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.

  /*
    TODO: Print out the title case version of the string the user inputted.

    Use the pre-defined `printValue` function below to print out the result,
    giving it the value you want to print.

    What's title case? It's the case used for the title of a book or movie. If it's the first letter of a word, you use a capital letter. Otherwise, use lower case.

    True title case keeps lower case for any word that's an article or preposition, but we're _definitely_ not asking that of you!
  */

  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
  */
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
