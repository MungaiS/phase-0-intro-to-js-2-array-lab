// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push('Ralph');
}


function destructivelyPrependCat() {
  cats.unshift('Bob');
}


function destructivelyRemoveLastCat() {
  cats.pop();
}


function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(Broom) {
  return [...cats, Broom];
}

function prependCat(Arnold) {
  return [Arnold, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}