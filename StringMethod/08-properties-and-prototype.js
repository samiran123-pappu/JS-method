const text = "hello";

console.log("constructor === String:", text.constructor === String);
console.log("length:", text.length);
console.log("typeof String.prototype:", typeof String.prototype);

String.prototype.firstChar = function () {
    return this.charAt(0);
};

console.log("prototype method firstChar():", text.firstChar());
