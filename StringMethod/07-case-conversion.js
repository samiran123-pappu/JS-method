const city = "istanbul";
const shout = "hello";
const stringObject = new String("Wrapped");

console.log("toLocaleLowerCase():", "HELLO".toLocaleLowerCase());
console.log("toLocaleUpperCase('tr-TR'):", city.toLocaleUpperCase("tr-TR"));
console.log("toLowerCase():", "JAVASCRIPT".toLowerCase());
console.log("toString():", stringObject.toString());
console.log("toUpperCase():", shout.toUpperCase());
console.log("valueOf():", stringObject.valueOf());
