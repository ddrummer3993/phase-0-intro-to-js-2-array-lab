// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
]
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}
function appendCat(name) {
    const newAppendCat = [...cats, name];
    return newAppendCat;
}
function prependCat(name) {
    const newPrependCat = [name, ...cats];
    return newPrependCat;
}
function removeLastCat() {
    const newRemoveLastCat = cats.slice(0,2);
    return newRemoveLastCat;
}
function removeFirstCat() {
    const newRemoveFirstCat = cats.slice(1);
    return newRemoveFirstCat;
}

