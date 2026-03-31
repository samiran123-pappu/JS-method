const text = "JavaScript";
const emoji = "A🙂";

console.log("at(0):", text.at(0));
console.log("at(-1):", text.at(-1));

console.log("charAt(4):", text.charAt(4));
console.log("charCodeAt(1):", text.charCodeAt(1));

console.log("codePointAt(1) in 'A🙂':", emoji.codePointAt(1));
console.log("String.fromCharCode(72, 73):", String.fromCharCode(72, 73));
