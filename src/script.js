//mood objects
let happy = {
  entree: ["pizza", "steak", "cheeseburger"],
  dessert: ["cheesecake", "cookies", "fruit salad"],
  drinks: ["soda", "iced tea", "bloody mary"]
}

let exhausted = {
  entree: ["salad", "fast food", "ramen"],
  dessert: ["tiramisu", "donut", "strawberry cake"],
  drinks: ["water", "tea", "coffee"]
}

let sad = {
  entree: ["teriyaki chicken", "beef and brocolli", "spaghetti"],
  dessert: ["ice cream", "chocolate cake", "oreos"],
  drinks: ["beer", "wine", "tequila"]
}

//random function
function random() {
  return Math.floor(Math.random() * 3);
}

//reset function for each button click
function reset() {
  document.querySelector('#happy').style.display = "none";
  document.querySelector('#sad').style.display = "none";
  document.querySelector('#exhausted').style.display = "none";
  for (let i = 0; i < document.querySelectorAll('li').length; i++) {
    document.querySelectorAll('li')[i].innerText = "";
  }
}

//function for 'Sad' button click event listener
function sadMenu() {
  reset(); //reset the page after the button is clicked
  let sadMenu = []; //initialize an array to hold our answers
  sadMenu.push(sad.entree[random()]); //choose random entree from the entree array in the sad object
  sadMenu.push(sad.dessert[random()]); //choose random desser from the dessert array in the sad object
  sadMenu.push(sad.drinks[random()]); //choose random drink from the drink array in the sad object
  document.querySelector('#sad').style.display = "block"; //show the photo with an id of "sad"
  document.querySelector('.border').style.borderColor = "rgb(87, 194, 250)";
  
  //loop through each choice and append it to our HTML ul
  for (let i = 0; i < sadMenu.length; i++) {
    let listItem = document.createElement('li'); //create the list item
    listItem.innerText = sadMenu[i]; //Assign the innerText of the newly created list item to our newly created sadMenu array
    let referenceNode = document.querySelector('ul'); //create a reference for the li elements to append to
    referenceNode.appendChild(listItem); //append each list element to our ul
    listItem.style.color = "rgb(87, 194, 250)"; //make the color of the element the same as the button that was clicked
  }
}

//function for 'Happy' button click event listener
function happyMenu() {
  reset();
  let happyMenu = [];
  happyMenu.push(happy.entree[random()]);
  happyMenu.push(happy.dessert[random()]);
  happyMenu.push(happy.drinks[random()]);
  document.querySelector('#happy').style.display = "block";
  document.querySelector('.border').style.borderColor = "yellow";
  for (let i = 0; i < happyMenu.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = happyMenu[i];
    let referenceNode = document.querySelector('ul');
    referenceNode.appendChild(listItem);
    listItem.style.color = "yellow";
  }
}

//function for "Exhausted" event listener
function exhaustedMenu() {
  reset();
  let exhaustedMenu = [];
  document.querySelector('#exhausted').style.display = "block";
  document.querySelector('.border').style.borderColor = "rgb(102, 246, 210)";
  exhaustedMenu.push(exhausted.entree[random()]);
  exhaustedMenu.push(exhausted.dessert[random()]);
  exhaustedMenu.push(exhausted.drinks[random()]);
  for (let i = 0; i < exhaustedMenu.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = exhaustedMenu[i];
    let referenceNode = document.querySelector('ul');
    referenceNode.appendChild(listItem);
    listItem.style.color = "rgb(102, 246, 210)";
  }
}

//Event listeners for each button
document.querySelector('#exhausted-button').addEventListener('click', exhaustedMenu);
document.querySelector('#happy-button').addEventListener('click', happyMenu);
document.querySelector('#sad-button').addEventListener('click', sadMenu);
