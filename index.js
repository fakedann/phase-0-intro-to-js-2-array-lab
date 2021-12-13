// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name) {
    const allCats = [name, ...cats];
    return allCats;
}

function removeLastCat(name) {
    const allCats = cats.slice(0, cats.length -1);
    return allCats;
}

function removeFirstCat(name) {
    const allCats = cats.slice(1);
    return allCats;
}