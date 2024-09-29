let add7 = number => number + 7; 
let multiply = (numberA, numberB) => {
    return numberA * numberB;
}

let capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

let btnResult = document.getElementById("transform");
let textTransformed = document.getElementById("textTransformed");

btnResult.addEventListener("click", () => {
    const inputForm = document.getElementById("formStr");
    const result = capitalize(inputForm.value);
    textTransformed.textContent = result;
});

console.log("The result of add7 is: " + add7(1));
console.log("Multiply result of 8*8 is: " + multiply(8, 8));
console.log("Last Letter result: " + lastLetter("abcd"));
