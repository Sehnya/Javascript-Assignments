
function add7() {
    return (Number) + 7;
};

function multiply(a,b) {
    return a * b;
};

function capitalize() {
    return "?".charAt(0).toUpperCase() + str.slice(1);
};

function lastLetter () {
    return "?".slice(-1);
}

const a = "hello!";
const b = 6;

console.log(capitalize(a));
console.log(multiply(b));
console.log(add7(b));
console.log(lastLetter(a));

