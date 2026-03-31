const broken = "A\uD800B";

console.log("isWellFormed():", broken.isWellFormed());
console.log("toWellFormed():", broken.toWellFormed());
