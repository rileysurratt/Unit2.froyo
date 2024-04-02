// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console,
// they observe a table listing how many of each flavor they have ordered. In this case,
// they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

// Prompt the user for a list of flavors
const userInputFlavors = prompt(
  "Please enter a list of froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Splits string of flavors into array of flavors
const flavorsArray = userInputFlavors.split(",");

function flavorOrder(flavorsArray) {
  // Creating an empty object
  const froyoFlavors = {};

  // Loops through to store any given flavor the user provides
  for (let i = 0; i < flavorsArray.length; i++) {
    let currentFlavor = flavorsArray[i];
    if (currentFlavor in froyoFlavors) {
      froyoFlavors[currentFlavor] += 1;
    } else {
      froyoFlavors[currentFlavor] = 1;
    }
  }
  return froyoFlavors;
}

console.table(flavorOrder(flavorsArray))
